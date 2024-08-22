import mainImg from '../assets/main.png';
import EncryptedMessage from './EncryptedMessage';

export default function MainContent() {
  return (
    <div className="hidden md:flex flex-1 bg-blue-100 p-8">
      <div className="text-center">
        <img
          src={mainImg}
          alt="illustration"
          className="mx-auto mb-8"
        />
        <h2 className="text-3xl font-roboto font-bold">Pocket Notes</h2>
        <p className="break-words text-gray-600 mt-4">
        Send and receive messages without keeping your phone online.<br/>
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      <EncryptedMessage />
      </div>
    </div>
  );
}
