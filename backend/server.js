require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// ─── Middleware ───────────────────────────────────
app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:4173',
    process.env.FRONTEND_URL,
  ].filter(Boolean),
  methods: ['GET', 'POST'],
}));

// ─── Nodemailer Transport ─────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,   // riteshks211@gmail.com
    pass: process.env.EMAIL_PASS,   // Gmail App Password
  },
});

// ─── Health check ─────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio backend is running 🚀' });
});

// ─── Contact Form Endpoint ────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  // Email to Ritesh
  const toRitesh = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: 'riteshks211@gmail.com',
    replyTo: email,
    subject: `📬 Portfolio Contact: ${subject || 'New Message'} — from ${name}`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #080810; color: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid rgba(79,142,247,0.3);">
        <div style="padding: 32px 32px 16px; background: linear-gradient(135deg, rgba(79,142,247,0.15), rgba(168,85,247,0.1));">
          <h1 style="margin: 0; font-size: 22px; font-weight: 700; background: linear-gradient(135deg, #4F8EF7, #A855F7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            New Portfolio Message
          </h1>
          <p style="margin: 6px 0 0; color: #94a3b8; font-size: 13px;">Someone reached out via your portfolio</p>
        </div>

        <div style="padding: 24px 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; width: 100px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">From</td>
              <td style="padding: 10px 0; color: #f8fafc; font-size: 15px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #4F8EF7; text-decoration: none; font-size: 14px;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Subject</td>
              <td style="padding: 10px 0; color: #f8fafc; font-size: 14px;">${subject || 'No subject'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 20px; background: rgba(255,255,255,0.04); border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
            <p style="margin: 0 0 8px; color: #94a3b8; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <p style="margin: 0; color: #e2e8f0; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.08);">
            <a href="mailto:${email}?subject=Re: ${subject || 'Your message'}"
               style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #4F8EF7, #A855F7); color: white; text-decoration: none; border-radius: 10px; font-size: 14px; font-weight: 600;">
              Reply to ${name} →
            </a>
          </div>
        </div>

        <div style="padding: 16px 32px; background: rgba(0,0,0,0.3); text-align: center;">
          <p style="margin: 0; color: #475569; font-size: 12px;">Sent from riteshpal.dev portfolio</p>
        </div>
      </div>
    `,
  };

  // Auto-reply to sender
  const toSender = {
    from: `"Ritesh Pal" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Got your message, ${name}! 👋`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #080810; color: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid rgba(79,142,247,0.3);">
        <div style="padding: 32px 32px 16px; background: linear-gradient(135deg, rgba(79,142,247,0.15), rgba(168,85,247,0.1));">
          <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #f8fafc;">Hey ${name}! 👋</h1>
          <p style="margin: 6px 0 0; color: #94a3b8; font-size: 13px;">Thanks for reaching out via my portfolio</p>
        </div>
        <div style="padding: 24px 32px;">
          <p style="color: #cbd5e1; font-size: 15px; line-height: 1.7; margin: 0 0 16px;">
            I've received your message and will get back to you as soon as I can — usually within 24 hours.
          </p>
          <div style="padding: 16px; background: rgba(255,255,255,0.04); border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 24px;">
            <p style="margin: 0 0 8px; color: #94a3b8; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Your Message</p>
            <p style="margin: 0; color: #94a3b8; font-size: 13px; white-space: pre-wrap; font-style: italic;">"${message}"</p>
          </div>
          <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6; margin: 0;">
            In the meantime, check out my projects on
            <a href="https://github.com/riteshpal2005" style="color: #4F8EF7; text-decoration: none;">GitHub</a>
            or connect on
            <a href="https://www.linkedin.com/in/riteshpal2005/" style="color: #A855F7; text-decoration: none;">LinkedIn</a>.
          </p>
        </div>
        <div style="padding: 16px 32px; background: rgba(0,0,0,0.3); text-align: center;">
          <p style="margin: 0; color: #475569; font-size: 12px;">— Ritesh Pal | Aspiring React Native Developer</p>
        </div>
      </div>
    `,
  };

  try {
    await Promise.all([
      transporter.sendMail(toRitesh),
      transporter.sendMail(toSender),
    ]);

    console.log(`✅ Contact email from ${name} <${email}>`);
    res.json({ success: true, message: 'Email sent successfully.' });
  } catch (err) {
    console.error('❌ Email error:', err);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

// ─── Start ────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Portfolio backend running on http://localhost:${PORT}`);
  console.log(`📬 Contact API: http://localhost:${PORT}/api/contact`);
  console.log(`❤️  Health:    http://localhost:${PORT}/api/health\n`);
});
