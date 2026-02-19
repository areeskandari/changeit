'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SuccessPage() {
  const t = useTranslations('sendSupport');
  const tc = useTranslations('common');
  const locale = useLocale();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // You can verify the payment here by calling your API
    if (sessionId) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-2">
              Payment Successful!
            </h1>
            <p className="text-gray-600 text-lg">
              Your payment has been processed successfully.
            </p>
          </div>

          {sessionId && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Session ID:</span> {sessionId}
              </p>
            </div>
          )}

          <div className="space-y-4">
            <p className="text-gray-600">
              Your family support transfer is being processed. You will receive a confirmation email shortly.
            </p>
            <p className="text-sm text-gray-500">
              Settlement time: 3–12 hours after confirmation of incoming funds.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/send-support`}>
              <Button>
                Send Another Transfer
              </Button>
            </Link>
            <Link href={`/${locale}`}>
              <Button variant="outline">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


