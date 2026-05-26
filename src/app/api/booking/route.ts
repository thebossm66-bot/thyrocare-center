import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface BookingRequest {
  name: string;
  phone: string;
  test: string;
  message?: string;
  collectionType?: 'clinic' | 'home';
  address?: string;
  preferredDate?: string;
  preferredTime?: string;
}

const TEST_LABELS: Record<string, string> = {
  'full-body': 'Full Body Checkup',
  'thyroid': 'Thyroid Profile',
  'blood-test': 'Routine Blood Test',
  'diabetes': 'Diabetes Screening',
  'vitamin': 'Vitamin Testing',
  'lipid': 'Lipid Profile & Liver Function',
  'senior': 'Senior Citizen Package',
  'women': 'Women Wellness Package',
  'men': 'Men Wellness Package',
  'other': 'Other / Not Sure',
};

function createTransporter() {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

function generateOwnerEmail(data: BookingRequest): string {
  const testLabel = TEST_LABELS[data.test] || data.test;
  const isHomeCollection = data.collectionType === 'home';

  return `
    <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #0891b2, #0e7490); padding: 32px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">🏥 New Booking Request</h1>
        <p style="color: #cffafe; margin: 8px 0 0; font-size: 14px;">Thyrocare Aarogyam Centre Siddipet</p>
      </div>
      <div style="padding: 32px;">
        <div style="background: white; border-radius: 12px; padding: 24px; margin-bottom: 16px; border-left: 4px solid #0891b2;">
          <h2 style="color: #0e7490; margin: 0 0 16px; font-size: 18px;">👤 Patient Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 140px;">Full Name</td><td style="padding: 8px 0; font-weight: 600; color: #1e293b;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Phone</td><td style="padding: 8px 0; font-weight: 600; color: #1e293b;"><a href="tel:${data.phone}" style="color: #0891b2; text-decoration: none;">${data.phone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Test / Package</td><td style="padding: 8px 0; font-weight: 600; color: #1e293b;">${testLabel}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Collection Type</td><td style="padding: 8px 0; font-weight: 600; color: #1e293b;">${isHomeCollection ? '🏠 Home Collection' : '🏥 Visit Clinic'}</td></tr>
            ${isHomeCollection && data.address ? `<tr><td style="padding: 8px 0; color: #64748b;">Address</td><td style="padding: 8px 0; font-weight: 600; color: #1e293b;">${data.address}</td></tr>` : ''}
            ${data.preferredDate ? `<tr><td style="padding: 8px 0; color: #64748b;">Preferred Date</td><td style="padding: 8px 0; font-weight: 600; color: #1e293b;">${data.preferredDate}</td></tr>` : ''}
            ${data.preferredTime ? `<tr><td style="padding: 8px 0; color: #64748b;">Preferred Time</td><td style="padding: 8px 0; font-weight: 600; color: #1e293b;">${data.preferredTime}</td></tr>` : ''}
          </table>
        </div>
        ${data.message ? `
        <div style="background: white; border-radius: 12px; padding: 24px; border-left: 4px solid #f59e0b;">
          <h3 style="color: #d97706; margin: 0 0 8px; font-size: 16px;">💬 Message</h3>
          <p style="color: #475569; margin: 0; line-height: 1.6;">${data.message}</p>
        </div>
        ` : ''}
        <div style="margin-top: 24px; text-align: center;">
          <a href="https://wa.me/91${data.phone.replace(/\D/g, '').replace(/^91/, '')}?text=${encodeURIComponent(`Hi ${data.name}, thank you for booking with Thyrocare Aarogyam Centre Siddipet! We have received your request for ${testLabel}. We will contact you shortly to confirm your appointment.`)}" 
             style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
            📱 Reply on WhatsApp
          </a>
        </div>
      </div>
      <div style="background: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8;">
        Thyrocare Aarogyam Centre Siddipet • H No 8, 2-67/1/A, Shivaji Nagar, Siddipet
      </div>
    </div>
  `;
}



export async function POST(request: NextRequest) {
  try {
    const body: BookingRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.phone || !body.test) {
      return NextResponse.json(
        { success: false, error: 'Name, phone number, and test type are required.' },
        { status: 400 }
      );
    }

    // Validate phone number (Indian format)
    const phoneClean = body.phone.replace(/\D/g, '');
    if (phoneClean.length < 10 || phoneClean.length > 12) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid phone number.' },
        { status: 400 }
      );
    }

    // If email credentials are configured, send emails
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = createTransporter();
      const ownerEmail = process.env.OWNER_EMAIL || process.env.EMAIL_USER;

      // Send notification to clinic owner
      await transporter.sendMail({
        from: `"Thyrocare Aarogyam Centre" <${process.env.EMAIL_USER}>`,
        to: ownerEmail,
        subject: `🏥 New Booking: ${body.name} - ${TEST_LABELS[body.test] || body.test}`,
        html: generateOwnerEmail(body),
      });

      // Send confirmation to patient (if email provided — future enhancement)
      // For now, confirmation is handled via WhatsApp
    }

    // Log booking for debugging (visible in Vercel logs)
    console.log('[BOOKING]', {
      timestamp: new Date().toISOString(),
      name: body.name,
      phone: body.phone,
      test: body.test,
      collectionType: body.collectionType || 'clinic',
    });

    return NextResponse.json({
      success: true,
      message: 'Your booking request has been submitted successfully! We will contact you shortly.',
    });
  } catch (error) {
    console.error('[BOOKING_ERROR]', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
