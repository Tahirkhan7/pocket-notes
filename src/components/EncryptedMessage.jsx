import { FaLock } from 'react-icons/fa';

export default function EncryptedMessage() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-2 text-gray-500">
      <FaLock />
      <span>end-to-end encrypted</span>
    </div>
  );
}
