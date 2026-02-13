# Stripe Integration Setup

This document explains how to set up Stripe payment integration for the Send Support page.

## Prerequisites

1. A Stripe account (sign up at https://stripe.com)
2. Stripe API keys (available in Stripe Dashboard)

## Installation

Install Stripe packages:

```bash
npm install stripe @stripe/stripe-js
```

## Environment Variables

Add these to your `.env.local` file:

```
STRIPE_SECRET_KEY=sk_test_... (from Stripe Dashboard)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_... (from Stripe Dashboard)
NEXT_PUBLIC_BASE_URL=http://localhost:3000 (or your production URL)
```

## Implementation

The API route at `app/api/create-checkout-session/route.ts` contains commented code showing how to integrate Stripe Checkout.

Uncomment and configure the Stripe code in that file to enable real payments.

## Test Mode

Currently, the application shows a test mode message. Once Stripe is configured, it will redirect to actual Stripe Checkout.

## PayPal Integration

For PayPal integration, you would need to:

1. Install PayPal SDK: `npm install @paypal/checkout-server-sdk`
2. Create a PayPal API route similar to the Stripe one
3. Update the payment handler in `app/[locale]/send-support/page.tsx`

## Security Notes

- Never expose your Stripe secret key in client-side code
- Always validate payment amounts on the server side
- Use webhooks to confirm payment completion
- Store transaction data securely

