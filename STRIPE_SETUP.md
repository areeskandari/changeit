# Stripe Integration Setup

This document explains how to set up Stripe payment integration for the Send Support page.

## ✅ Stripe is Fully Implemented!

The Stripe integration is now fully functional. You just need to add your API keys.

## Prerequisites

1. A Stripe account (sign up at https://stripe.com)
2. Stripe API keys (available in Stripe Dashboard at https://dashboard.stripe.com/apikeys)

## Installation

The Stripe package is already added to `package.json`. Install dependencies:

```bash
npm install
```

## Environment Variables Setup

### Step 1: Create `.env.local` file

Create a `.env.local` file in the root of your project (if it doesn't exist).

### Step 2: Add Your Stripe API Keys

Add these environment variables to your `.env.local` file:

```env
# Stripe Secret Key (starts with sk_test_ for test mode, sk_live_ for production)
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

# Stripe Publishable Key (starts with pk_test_ for test mode, pk_live_ for production)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here

# Base URL for your application
# For local development:
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# For production, use your actual domain:
# NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

### Step 3: Get Your API Keys

1. Go to https://dashboard.stripe.com/apikeys
2. Make sure you're in **Test mode** (toggle in the top right)
3. Copy your **Secret key** (starts with `sk_test_`)
4. Copy your **Publishable key** (starts with `pk_test_`)
5. Paste them into your `.env.local` file

### Step 4: Restart Your Development Server

After adding the environment variables, restart your Next.js development server:

```bash
npm run dev
```

## How It Works

1. **User fills out the form** on the Send Support page
2. **User selects Stripe** as payment method
3. **User clicks "Proceed to Payment"**
4. **System creates a Stripe Checkout Session** via `/api/create-checkout-session`
5. **User is redirected to Stripe Checkout** to complete payment
6. **After payment**, user is redirected to `/success` page

## Test Mode vs Production

### Test Mode (Recommended for Development)
- Use test keys: `sk_test_...` and `pk_test_...`
- Use test card numbers from: https://stripe.com/docs/testing
- No real charges are made

### Production Mode
- Switch to live keys: `sk_live_...` and `pk_live_...`
- Update `NEXT_PUBLIC_BASE_URL` to your production domain
- Real charges will be processed

## Test Card Numbers

Use these test card numbers in Stripe test mode:

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Requires Authentication**: `4000 0025 0000 3155`

Use any future expiry date, any CVC, and any ZIP code.

## PayPal Status

PayPal integration is currently showing "Coming Soon" status. Users can only use Stripe for payments at this time.

## Security Notes

- ✅ Stripe secret key is only used server-side (never exposed to client)
- ✅ Payment amounts are validated on the server
- ✅ All form data is stored in Stripe metadata securely
- ⚠️ Never commit `.env.local` to git (it's already in `.gitignore`)
- ⚠️ Use webhooks in production to confirm payment completion (not yet implemented)

## Troubleshooting

### "Stripe API key not configured" error
- Make sure `.env.local` exists in the project root
- Verify `STRIPE_SECRET_KEY` is set correctly
- Restart your development server after adding environment variables

### Payment not redirecting
- Check browser console for errors
- Verify `NEXT_PUBLIC_BASE_URL` is set correctly
- Make sure you're using valid test API keys

## Next Steps

1. ✅ Stripe integration is complete
2. 🔄 Add webhook handling for payment confirmation (optional)
3. 🔄 Add email notifications after successful payment (optional)
4. 🔄 Implement PayPal integration when ready

