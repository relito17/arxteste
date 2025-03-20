import { CheckCircle, Loader } from 'lucide-react';

// Define the SuccessMessageProps interface with the 'isLoading' prop
interface SuccessMessageProps {
  isLoading?: boolean; // Make this optional
}

// Functional component for SuccessMessage
const SuccessMessage = ({ isLoading }: SuccessMessageProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-navy-900/80 backdrop-blur-sm z-50">
      <div className="bg-orange-900 border border-orange-500/20 rounded-xl p-8 max-w-md mx-4 animate-fade-in">
        <div className="flex flex-col items-center text-center space-y-4">
          <CheckCircle className="w-16 h-16 text-orange-500 animate-success" />
          <h3 className="text-2xl font-semibold text-white">Thank You!</h3>
          <p className="text-gray-300">
            Your consultation request has been received. We'll send you an email shortly with the next steps.
          </p>
          
          {/* Display the loading spinner if 'isLoading' is true */}
          {isLoading && (
            <div className="mt-4">
              <Loader className="animate-spin text-white w-8 h-8" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
