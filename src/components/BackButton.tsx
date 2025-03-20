// components/BackButton.tsx
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Sempre redireciona para a página inicial (App.tsx)
    navigate('/');
  };

  return (
    <button
      onClick={handleBackClick}
      className="absolute top-8 left-8 p-3 bg-black text-white rounded-full shadow-lg hover:bg-[#FF6A00] transition-all duration-1000 ease-out"
    >
      <ArrowLeft className="w-6 h-6" />
    </button>
  );
};

export default BackButton;
