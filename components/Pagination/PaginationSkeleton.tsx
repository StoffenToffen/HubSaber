import Skeleton from "../Skeleton/Skeleton";
import styles from "./Pagination.module.css";

const PaginationSkeleton = () => {
  return (
    <div className={styles.pagination}>
      <div className={styles.paginationLeft}>
        <Skeleton width={40} height={40} />

        <Skeleton width={40} height={40} />
      </div>

      <span className={styles.paginationNumber}>
        <Skeleton width={60} height={20} />
      </span>

      <div className={styles.paginationRight}>
        <Skeleton width={40} height={40} />
        <Skeleton width={40} height={40} />
      </div>
    </div>
  );
};

export default PaginationSkeleton;
