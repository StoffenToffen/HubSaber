import clockIcon from "@/public/clock.svg";
import cover from "@/public/cover.png";
import likeIcon from "@/public/like.svg";
import metronomeIcon from "@/public/metronome.svg";
import npsIcon from "@/public/notes-per-second.svg";
import Image from "next/image";
import styles from "./MapCard.module.css";

const MapCard = () => {
  return (
    <div className={styles.map}>
      <Image src={cover} alt="map name" width={100} />

      <div className={styles.mapInfo}>
        <h2 className={`heading ${styles.mapTitle}`}>Chime - Soda World</h2>

        <div>
          <span className={styles.mapAuthor}>
            By <strong>SteffenT </strong>
          </span>
          <span className={styles.mapPublished}>2h ago</span>
        </div>

        <div className={styles.mapStats}>
          <span className={styles.mapStat}>
            <Image src={npsIcon} alt="Notes per second" width={14} />
            7.2
          </span>
          <span className={styles.mapStat}>
            <Image src={clockIcon} alt="Duration" width={14} />
            3:26
          </span>
          <span className={styles.mapStat}>
            <Image src={metronomeIcon} alt="Beats per minute" width={14} />
            176
          </span>
        </div>

        <div className={styles.mapDifficulties}>
          <span className={styles.mapDifficulty}>Expert</span>
          <span className={styles.mapDifficulty}>Expert+</span>
        </div>
      </div>

      <div className={styles.mapRatings}>
        <div className={styles.mapRating}>
          <Image src={likeIcon} alt="Likes" width={14} />
          <span>5</span>
        </div>

        <div className={styles.mapRating}>
          <Image
            src={likeIcon}
            alt="Dislikes"
            width={14}
            className={styles.dislike}
          />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
