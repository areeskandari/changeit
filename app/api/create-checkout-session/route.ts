import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Helper function to calculate fee (2.5%)
function calculateFee(amount: string): number {
  const numAmount = parseFloat(amount) || 0;
  return numAmount * 0.025;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, currency, formData } = body;

    // Validate the request
    if (!amount || !currency) {
      return NextResponse.json(
        { error: 'Amount and currency are required' },
        { status: 400 }
      );
    }

    // Check if Stripe secret key is configured
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      return NextResponse.json(
        { 
          error: 'Stripe API key not configured',
          message: 'Please set STRIPE_SECRET_KEY in your environment variables. Get your API keys from https://dashboard.stripe.com/apikeys'
        },
        { status: 500 }
      );
    }

    // Initialize Stripe
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2024-11-20.acacia',
    });

    // Get base URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const locale = formData.locale || 'en';

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: 'Family Support Transfer',
              description: `Transfer to ${formData.destinationCountry || 'destination'}`,
            },
            unit_amount: Math.round(amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/${locale}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/${locale}/send-support`,
      metadata: {
        // Store form data in metadata
        senderName: formData.senderName || '',
        senderEmail: formData.senderEmail || '',
        senderPhone: formData.senderPhone || '',
        destinationCountry: formData.destinationCountry || '',
        destinationCurrency: formData.destinationCurrency || '',
        accountNumber: formData.accountNumber || '',
        accountHolderName: formData.accountHolderName || '',
        mobileNumber: formData.mobileNumber || '',
        bankName: formData.bankName || '',
        swiftCode: formData.swiftCode || '',
        paymentType: formData.paymentType || 'oneTime',
        transferAmount: formData.amount || '',
        fee: calculateFee(formData.amount || '0').toString(),
      },
      customer_email: formData.senderEmail || undefined,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { 
        error: 'Failed to create checkout session',
        message: error.message || 'An unexpected error occurred'
      },
      { status: 500 }
    );
  }
}

