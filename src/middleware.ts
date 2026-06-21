import { defineMiddleware } from 'astro:middleware';
import { getActionContext } from 'astro:actions';

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.isPrerendered) return next();

  const { action, setActionResult, serializeActionResult } = getActionContext(context);

  const payload = context.cookies.get('ACTION_PAYLOAD');
  if (payload) {
    const { actionName, actionResult } = payload.json();
    setActionResult(actionName, actionResult);
    context.cookies.delete('ACTION_PAYLOAD', { path: '/' });
    return next();
  }

  if (action?.calledFrom === 'form') {
    const actionResult = await action.handler();

    context.cookies.set(
      'ACTION_PAYLOAD',
      {
        actionName: action.name,
        actionResult: serializeActionResult(actionResult),
      },
      { path: '/', httpOnly: true, sameSite: 'lax', maxAge: 60 },
    );

    if (actionResult.error) {
      const referer = context.request.headers.get('Referer');
      if (!referer) {
        throw new Error('Internal: Referer unexpectedly missing from Action POST request.');
      }
      return context.redirect(referer);
    }

    return context.redirect(context.originPathname);
  }

  return next();
});
