/* eslint-disable react/prop-types */
import styles from './TemplateCard.module.css';

const TemplateCard = ({ title, imageUrl, isFree }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {isFree && <span className={styles.freeTag}>free</span>}
      </div>
    </div>
  );
};

export default TemplateCard;

