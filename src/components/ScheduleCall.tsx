import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Importando useLocation
import Cal, { getCalApi } from '@calcom/embed-react';
import BackButton from '../components/BackButton';

const ScheduleCall = () => {
  const location = useLocation(); // Obtendo a localização atual

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', {
        theme: 'light',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#d27400' },
          dark: { 'cal-brand': '#d27400' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  useEffect(() => {
    // Rolar para o topo da página sempre que a localização mudar
    window.scrollTo(0, 0);
  }, [location]); // Dependência de location para garantir que role quando a página mudar

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4" style={{ cursor: 'auto' }}>
      <style>
        {`
          * {
            cursor: auto !important;
          }
        `}
      </style>
      <BackButton />
      
      <div className="text-center max-w-2xl mb-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Schedule a <span className="gradient-text">Call</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Use our calendar below to book a time that works best for you. We’re
          excited to connect with you!
        </p>
      </div>
      {/* Calendar Embed */}
      <div className="w-full max-w-4xl">
        <Cal
          namespace="30min"
          calLink="arxautomate/30min"
          style={{
            width: '100%', // Makes the calendar responsive
            height: '600px', // Adjusted height for better visibility
          }}
          config={{
            layout: 'month_view',
            theme: 'light',
          }}
        />
      </div>
    </div>
  );
};

export default ScheduleCall;
