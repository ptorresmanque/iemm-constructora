import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { sendContactEmail } from '../lib/mailer';

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().trim().min(2, 'Name is too short').max(120),
      email: z.string().trim().email('Invalid email'),
      message: z.string().trim().min(10, 'Message is too short').max(5000),
    }),
    handler: async ({ name, email, message }) => {
      const result = await sendContactEmail({ name, email, message });
      if (!result.delivered) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'mailer_failed',
        });
      }
      return { ok: true as const };
    },
  }),
};
