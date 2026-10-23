import Skeleton from "../Skeleton/Skeleton";
import styles from "./MapsForm.module.css";

const MapsFormSkeleton = () => {
  return (
    <div className={styles.form}>
      <div className={styles.sort}>
        <Skeleton width={"100%"} height={40} />
      </div>

      <div className={styles.formContainer}>
        <Skeleton width={"100%"} height={40} />

        <div className={styles.sort}>
          <Skeleton width={"100%"} height={40} />
        </div>

        <div className={styles.sort}>
          <Skeleton width={"100%"} height={40} />
        </div>

        <Skeleton width={"100%"} height={40} />
      </div>
    </div>
  );
};

export default MapsFormSkeleton;
