import nodemailer from 'nodemailer';

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

interface MailerConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  to: string;
}

function getConfig(): MailerConfig | null {
  const host = import.meta.env.SMTP_HOST;
  const port = import.meta.env.SMTP_PORT;
  const user = import.meta.env.SMTP_USER;
  const pass = import.meta.env.SMTP_PASS;
  const to = import.meta.env.CONTACT_TO;

  if (!host || !port || !user || !pass || !to) {
    return null;
  }

  return {
    host,
    port: Number(port),
    user,
    pass,
    to,
  };
}

export async function sendContactEmail(payload: ContactPayload): Promise<{ delivered: boolean; reason?: string }> {
  const config = getConfig();

  if (!config) {
    console.warn('[mailer] SMTP env vars missing — logging message only.');
    console.log('[mailer] contact form submission:', payload);
    return { delivered: true, reason: 'logged-only' };
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: { user: config.user, pass: config.pass },
  });

  const subject = `Nuevo contacto web — ${payload.name}`;
  const text = [
    `Nombre: ${payload.name}`,
    `Correo: ${payload.email}`,
    '',
    'Mensaje:',
    payload.message,
  ].join('\n');

  const html = `
    <h2>Nuevo mensaje desde el sitio web</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Correo:</strong> ${escapeHtml(payload.email)}</p>
    <hr />
    <p style="white-space: pre-wrap">${escapeHtml(payload.message)}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"IEMM Web" <${config.user}>`,
      to: config.to,
      replyTo: payload.email,
      subject,
      text,
      html,
    });
    return { delivered: true };
  } catch (err) {
    const reason = err instanceof Error ? err.message : 'unknown error';
    console.error('[mailer] send failed:', reason);
    return { delivered: false, reason };
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
