import styles from "./Skeleton.module.css";

interface SkeletonProps {
  width: number | string;
  height: number | string;
  borderRadius?: number;
}

const Skeleton = ({ width, height, borderRadius }: SkeletonProps) => {
  return (
    <div
      className={styles.skeleton}
      aria-hidden
      style={{
        width,
        height,
        borderRadius,
      }}
    ></div>
  );
};

export default Skeleton;
