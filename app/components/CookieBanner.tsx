'use client';

import { getLocalStorage, setLocalStorage } from '../../utils/handleCookies';
import React, { useEffect, useState } from 'react';

const CookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);
    setCookieConsent(storedCookieConsent);
  }, []);

  useEffect(() => {
    if (cookieConsent === true)
      return setLocalStorage('cookie_consent', cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`fixed w-full px-6 py-3 mb-3 bg-black dark:bg-white text-white dark:text-black rounded items-center justify-between bottom-0 left-0 right-0 shadow banner md:w-1/2 m-auto ${
        cookieConsent !== null ? 'hidden' : 'flex'
      }`}>
      <p className="pr-2">
        Den här sidan sparar inte några personuppgifter. Tryck OK för att
        acceptera.
      </p>
      <button
        tabIndex={1}
        className="btn-primary bg-white dark:bg-black text-black dark:text-white border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring focus:ring-grey"
        onClick={() => setCookieConsent(true)}>
        OK
      </button>
    </div>
  );
};

export default CookieBanner;
