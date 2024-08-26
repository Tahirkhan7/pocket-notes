import mainImg from "../assets/main.png";
import EncryptedMessage from "./EncryptedMessage";
import styles from "./MainContent.module.css";

export default function MainContent() {
  return (
    <div className={styles.mainContentContainer}>
      <div className={styles.content}>
        <img src={mainImg} alt="illustration" className={styles.image} />
        <h2 className={styles.heading}>Pocket Notes</h2>
        <p className={styles.description}>
          Send and receive messages without keeping your phone online.
          <br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
        <EncryptedMessage />
      </div>
    </div>
  );
}
