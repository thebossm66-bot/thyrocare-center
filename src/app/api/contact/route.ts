import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactRequest {
  name: string;
  email?: string;
  phone: string;
  subject?: string;
  message: string;
}

function createTransporter() {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

function generateContactEmail(data: ContactRequest): string {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 32px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">💬 New Contact Message</h1>
        <p style="color: #e0e7ff; margin: 8px 0 0; font-size: 14px;">Thyrocare Aarogyam Centre Siddipet</p>
      </div>
      <div style="padding: 32px;">
        <div style="background: white; border-radius: 12px; padding: 24px; margin-bottom: 16px; border-left: 4px solid #6366f1;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600; color: #1e293b;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Phone</td><td style="padding: 8px 0; font-weight: 600; color: #1e293b;"><a href="tel:${data.phone}" style="color: #6366f1;">${data.phone}</a></td></tr>
            ${data.email ? `<tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0; font-weight: 600; color: #1e293b;">${data.email}</td></tr>` : ''}
            ${data.subject ? `<tr><td style="padding: 8px 0; color: #64748b;">Subject</td><td style="padding: 8px 0; font-weight: 600; color: #1e293b;">${data.subject}</td></tr>` : ''}
          </table>
        </div>
        <div style="background: white; border-radius: 12px; padding: 24px; border-left: 4px solid #f59e0b;">
          <h3 style="color: #d97706; margin: 0 0 8px; font-size: 16px;">Message</h3>
          <p style="color: #475569; margin: 0; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
        </div>
      </div>
      <div style="background: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8;">
        Thyrocare Aarogyam Centre Siddipet
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequest = await request.json();

    if (!body.name || !body.phone || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Name, phone, and message are required.' },
        { status: 400 }
      );
    }

    const phoneClean = body.phone.replace(/\D/g, '');
    if (phoneClean.length < 10 || phoneClean.length > 12) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid phone number.' },
        { status: 400 }
      );
    }

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = createTransporter();
      const ownerEmail = process.env.OWNER_EMAIL || process.env.EMAIL_USER;

      await transporter.sendMail({
        from: `"Thyrocare Website" <${process.env.EMAIL_USER}>`,
        to: ownerEmail,
        subject: `💬 Contact: ${body.name} - ${body.subject || 'General Enquiry'}`,
        html: generateContactEmail(body),
      });
    }

    console.log('[CONTACT]', {
      timestamp: new Date().toISOString(),
      name: body.name,
      phone: body.phone,
      subject: body.subject || 'General',
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    });
  } catch (error) {
    console.error('[CONTACT_ERROR]', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
