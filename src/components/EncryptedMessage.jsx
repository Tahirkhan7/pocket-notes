import { FaLock } from "react-icons/fa";

export default function EncryptedMessage() {
  return (
     <div className="absolute bottom-4 left-1/2 transform translate-x-1/2 flex items-center justify-center space-x-2 text-zinc-800">
      <FaLock />
      <span className="font-roboto">end-to-end encrypted</span>
    </div>
  );
}