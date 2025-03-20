import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always required
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 border-t border-gray-800 p-4 z-50 backdrop-blur-lg">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Cookie Preferences</h3>
            <p className="text-gray-400 mb-4">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="rounded border-gray-700 bg-gray-800"
                />
                <label className="text-sm">
                  Necessary (Required)
                </label>
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev,
                    analytics: e.target.checked
                  }))}
                  className="rounded border-gray-700 bg-gray-800"
                />
                <label className="text-sm">
                  Analytics
                </label>
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev,
                    marketing: e.target.checked
                  }))}
                  className="rounded border-gray-700 bg-gray-800"
                />
                <label className="text-sm">
                  Marketing
                </label>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={handleAcceptAll}
                className="bg-gradient-to-r from-[#FF6A00] to-[#f9d342] text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Accept All
              </button>
              <button
                onClick={handleSavePreferences}
                className="border border-[#FF6A00] px-6 py-2 rounded-lg font-semibold hover:bg-[#FF6A00]/10 transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
          
          <button
            onClick={() => setShowBanner(false)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="mt-4 text-sm text-gray-400">
          <a href="/privacy-policy" className="underline hover:text-white">Privacy Policy</a>
          {' '}&bull;{' '}
          <a href="/terms" className="underline hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;