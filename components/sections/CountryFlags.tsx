'use client';

import { useEffect, useState } from 'react';

export function CountryFlags() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Top 30 countries by population
  const countries = [
    { code: 'IN', name: 'India', flag: '🇮🇳' },
    { code: 'CN', name: 'China', flag: '🇨🇳' },
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'ID', name: 'Indonesia', flag: '🇮🇩' },
    { code: 'PK', name: 'Pakistan', flag: '🇵🇰' },
    { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
    { code: 'BD', name: 'Bangladesh', flag: '🇧🇩' },
    { code: 'RU', name: 'Russia', flag: '🇷🇺' },
    { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
    { code: 'JP', name: 'Japan', flag: '🇯🇵' },
    { code: 'PH', name: 'Philippines', flag: '🇵🇭' },
    { code: 'ET', name: 'Ethiopia', flag: '🇪🇹' },
    { code: 'EG', name: 'Egypt', flag: '🇪🇬' },
    { code: 'VN', name: 'Vietnam', flag: '🇻🇳' },
    { code: 'IR', name: 'Iran', flag: '🇮🇷' },
    { code: 'TR', name: 'Turkey', flag: '🇹🇷' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪' },
    { code: 'TH', name: 'Thailand', flag: '🇹🇭' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'FR', name: 'France', flag: '🇫🇷' },
    { code: 'IT', name: 'Italy', flag: '🇮🇹' },
    { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
    { code: 'TZ', name: 'Tanzania', flag: '🇹🇿' },
    { code: 'KE', name: 'Kenya', flag: '🇰🇪' },
    { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
    { code: 'ES', name: 'Spain', flag: '🇪🇸' },
    { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
    { code: 'UG', name: 'Uganda', flag: '🇺🇬' },
    { code: 'UA', name: 'Ukraine', flag: '🇺🇦' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % countries.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-navy mb-12">
          Global Coverage
        </h2>
        <div className="space-y-6">
          {/* Row 1: Countries 1-10 */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {countries.slice(0, 10).map((country, index) => (
              <div
                key={country.code}
                className={`flex flex-col items-center transition-all duration-500 ${
                  index === currentIndex
                    ? 'scale-125 transform'
                    : 'scale-100 opacity-70'
                }`}
              >
                <div className="text-5xl sm:text-6xl mb-2 animate-bounce-slow">
                  {country.flag}
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 text-center">{country.name}</p>
              </div>
            ))}
          </div>
          {/* Row 2: Countries 11-20 */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {countries.slice(10, 20).map((country, index) => (
              <div
                key={country.code}
                className={`flex flex-col items-center transition-all duration-500 ${
                  (index + 10) === currentIndex
                    ? 'scale-125 transform'
                    : 'scale-100 opacity-70'
                }`}
              >
                <div className="text-5xl sm:text-6xl mb-2 animate-bounce-slow">
                  {country.flag}
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 text-center">{country.name}</p>
              </div>
            ))}
          </div>
          {/* Row 3: Countries 21-30 */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {countries.slice(20, 30).map((country, index) => (
              <div
                key={country.code}
                className={`flex flex-col items-center transition-all duration-500 ${
                  (index + 20) === currentIndex
                    ? 'scale-125 transform'
                    : 'scale-100 opacity-70'
                }`}
              >
                <div className="text-5xl sm:text-6xl mb-2 animate-bounce-slow">
                  {country.flag}
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 text-center">{country.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

