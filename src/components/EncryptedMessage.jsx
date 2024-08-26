import { FaLock } from "react-icons/fa";
import styles from "./EncryptedMessage.module.css";

export default function EncryptedMessage() {
  return (
    <div className={styles.encryptedMessageContainer}>
      <FaLock />
      <span className={styles.encryptedMessageText}>end-to-end encrypted</span>
    </div>
  );
}
