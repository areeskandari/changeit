'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';

export default function SendSupportPage() {
  const t = useTranslations('sendSupport');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Amount & Currency
    amount: '',
    currency: 'USD',
    
    // Destination Info
    destinationCountry: '',
    destinationCurrency: 'USD',
    accountNumber: '',
    accountHolderName: '',
    mobileNumber: '',
    bankName: '',
    swiftCode: '',
    additionalNotes: '',
    
    // Sender Info
    senderName: '',
    senderEmail: '',
    senderPhone: '',
    
    // Payment Method
    paymentMethod: '', // 'stripe' or 'paypal'
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const currencies = ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY', 'CHF', 'AED', 'SAR', 'IRR'];
  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France',
    'United Arab Emirates', 'Saudi Arabia', 'Iran', 'Turkey', 'India', 'Pakistan',
    'Bangladesh', 'Philippines', 'Mexico', 'Brazil', 'Other'
  ];

  const calculateFee = () => {
    const amount = parseFloat(formData.amount) || 0;
    if (amount <= 10000) return amount * 0.10;
    if (amount <= 50000) return amount * 0.07;
    return amount * 0.05;
  };

  const totalAmount = () => {
    const amount = parseFloat(formData.amount) || 0;
    return amount + calculateFee();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.amount || !formData.currency) {
        alert(t('validation.amountRequired'));
        return;
      }
    }
    if (step === 2) {
      if (!formData.destinationCountry || !formData.accountNumber || !formData.mobileNumber) {
        alert(t('validation.destinationRequired'));
        return;
      }
    }
    setStep(step + 1);
  };

  const handlePayment = async () => {
    if (!formData.paymentMethod) {
      alert(t('validation.paymentMethodRequired'));
      return;
    }

    setIsProcessing(true);

    if (formData.paymentMethod === 'stripe') {
      // Stripe Checkout integration
      try {
        // In a real app, you'd create a payment intent on your backend
        // For now, we'll redirect to Stripe Checkout
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: totalAmount(),
            currency: formData.currency,
            formData,
          }),
        });

        if (response.ok) {
          const { url } = await response.json();
          window.location.href = url;
        } else {
          // Fallback: Use Stripe test mode
          alert(t('stripe.redirecting'));
          // In production, this would redirect to actual Stripe Checkout
          setTimeout(() => {
            alert(t('stripe.testMode'));
            setIsProcessing(false);
          }, 1000);
        }
      } catch (error) {
        alert(t('stripe.error'));
        setIsProcessing(false);
      }
    } else if (formData.paymentMethod === 'paypal') {
      // PayPal integration
      alert(t('paypal.redirecting'));
      // In production, this would integrate with PayPal SDK
      setTimeout(() => {
        alert(t('paypal.testMode'));
        setIsProcessing(false);
      }, 1000);
    }
  };

  return (
    <>
      <Script src="https://js.stripe.com/v3/" strategy="lazyOnload" />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-2">{t('title')}</h1>
            <p className="text-gray-600 mb-8">{t('subtitle')}</p>

            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= s
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {s}
                  </div>
                  {s < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step > s ? 'bg-green-600' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Amount & Currency */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold text-navy">{t('step1.title')}</h2>
                
                <div>
                  <Label className="mb-2 block">
                    {t('step1.amount')} *
                  </Label>
                  <div className="flex gap-4">
                    <Input
                      type="number"
                      step="0.01"
                      min={1}
                      value={formData.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      placeholder="0.00"
                      required
                    />
                    <Select
                      value={formData.currency}
                      onChange={(e) => handleInputChange('currency', e.target.value)}
                      className="w-32"
                    >
                      {currencies.map((curr) => (
                        <option key={curr} value={curr}>{curr}</option>
                      ))}
                    </Select>
                  </div>
                </div>

                {formData.amount && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">{t('step1.transferAmount')}:</span>
                      <span className="font-semibold">{formData.amount} {formData.currency}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">{t('step1.fee')}:</span>
                      <span className="font-semibold">{calculateFee().toFixed(2)} {formData.currency}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-green-200">
                      <span className="text-navy font-semibold">{t('step1.total')}:</span>
                      <span className="text-green-600 font-bold text-lg">{totalAmount().toFixed(2)} {formData.currency}</span>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handleNext}
                  className="w-full"
                >
                  {t('next')}
                </Button>
              </div>
            )}

            {/* Step 2: Destination Information */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold text-navy">{t('step2.title')}</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="mb-2 block">
                      {t('step2.destinationCountry')} *
                    </Label>
                    <Select
                      value={formData.destinationCountry}
                      onChange={(e) => handleInputChange('destinationCountry', e.target.value)}
                      required
                    >
                      <option value="">{t('step2.selectCountry')}</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </Select>
                  </div>

                  <div>
                    <Label className="mb-2 block">
                      {t('step2.destinationCurrency')}
                    </Label>
                    <Select
                      value={formData.destinationCurrency}
                      onChange={(e) => handleInputChange('destinationCurrency', e.target.value)}
                    >
                      {currencies.map((curr) => (
                        <option key={curr} value={curr}>{curr}</option>
                      ))}
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block">
                    {t('step2.accountNumber')} *
                  </Label>
                  <Input
                    type="text"
                    value={formData.accountNumber}
                    onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                    placeholder={t('step2.accountNumberPlaceholder')}
                    required
                  />
                </div>

                <div>
                  <Label className="mb-2 block">
                    {t('step2.accountHolderName')} *
                  </Label>
                  <Input
                    type="text"
                    value={formData.accountHolderName}
                    onChange={(e) => handleInputChange('accountHolderName', e.target.value)}
                    placeholder={t('step2.accountHolderNamePlaceholder')}
                    required
                  />
                </div>

                <div>
                  <Label className="mb-2 block">
                    {t('step2.mobileNumber')} *
                  </Label>
                  <Input
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                    placeholder={t('step2.mobileNumberPlaceholder')}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="mb-2 block">
                      {t('step2.bankName')}
                    </Label>
                    <Input
                      type="text"
                      value={formData.bankName}
                      onChange={(e) => handleInputChange('bankName', e.target.value)}
                      placeholder={t('step2.bankNamePlaceholder')}
                    />
                  </div>

                  <div>
                    <Label className="mb-2 block">
                      {t('step2.swiftCode')}
                    </Label>
                    <Input
                      type="text"
                      value={formData.swiftCode}
                      onChange={(e) => handleInputChange('swiftCode', e.target.value)}
                      placeholder={t('step2.swiftCodePlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block">
                    {t('step2.additionalNotes')}
                  </Label>
                  <Textarea
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                    rows={4}
                    placeholder={t('step2.additionalNotesPlaceholder')}
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => setStep(step - 1)}
                    variant="outline"
                    className="flex-1"
                  >
                    {t('back')}
                  </Button>
                  <Button
                    onClick={handleNext}
                    className="flex-1"
                  >
                    {t('next')}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Sender Information */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold text-navy">{t('step3.title')}</h2>

                <div>
                  <Label className="mb-2 block">
                    {t('step3.senderName')} *
                  </Label>
                  <Input
                    type="text"
                    value={formData.senderName}
                    onChange={(e) => handleInputChange('senderName', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label className="mb-2 block">
                    {t('step3.senderEmail')} *
                  </Label>
                  <Input
                    type="email"
                    value={formData.senderEmail}
                    onChange={(e) => handleInputChange('senderEmail', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label className="mb-2 block">
                    {t('step3.senderPhone')} *
                  </Label>
                  <Input
                    type="tel"
                    value={formData.senderPhone}
                    onChange={(e) => handleInputChange('senderPhone', e.target.value)}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => setStep(step - 1)}
                    variant="outline"
                    className="flex-1"
                  >
                    {t('back')}
                  </Button>
                  <Button
                    onClick={handleNext}
                    className="flex-1"
                  >
                    {t('next')}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Payment Method */}
            {step === 4 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold text-navy">{t('step4.title')}</h2>

                {/* Summary */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-navy mb-4">{t('step4.summary')}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('step4.amount')}:</span>
                      <span className="font-semibold">{formData.amount} {formData.currency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('step4.fee')}:</span>
                      <span className="font-semibold">{calculateFee().toFixed(2)} {formData.currency}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-200">
                      <span className="text-navy font-semibold">{t('step4.total')}:</span>
                      <span className="text-green-600 font-bold">{totalAmount().toFixed(2)} {formData.currency}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-4">
                  <button
                    onClick={() => handleInputChange('paymentMethod', 'stripe')}
                    className={`w-full p-6 border-2 rounded-lg text-left transition-all ${
                      formData.paymentMethod === 'stripe'
                        ? 'border-green-600 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">S</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy">{t('step4.stripe')}</h3>
                          <p className="text-sm text-gray-600">{t('step4.stripeDescription')}</p>
                        </div>
                      </div>
                      {formData.paymentMethod === 'stripe' && (
                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </button>

                  <button
                    onClick={() => handleInputChange('paymentMethod', 'paypal')}
                    className={`w-full p-6 border-2 rounded-lg text-left transition-all ${
                      formData.paymentMethod === 'paypal'
                        ? 'border-green-600 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">P</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy">{t('step4.paypal')}</h3>
                          <p className="text-sm text-gray-600">{t('step4.paypalDescription')}</p>
                        </div>
                      </div>
                      {formData.paymentMethod === 'paypal' && (
                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </button>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => setStep(step - 1)}
                    variant="outline"
                    className="flex-1"
                  >
                    {t('back')}
                  </Button>
                  <Button
                    onClick={handlePayment}
                    disabled={isProcessing || !formData.paymentMethod}
                    className="flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? t('processing') : t('step4.proceedToPayment')}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

