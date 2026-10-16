import type { MapType } from "@/app/types";
import clockIcon from "@/public/clock.svg";
import likeIcon from "@/public/like.svg";
import metronomeIcon from "@/public/metronome.svg";
import npsIcon from "@/public/notes-per-second.svg";
import Image from "next/image";
import styles from "./MapCard.module.css";

const MapCard = ({ map }: { map: MapType }) => {
  const calculateTimeSince = (dateTime: string): string => {
    const createTime = new Date(dateTime).getTime();
    const currentTime = Date.now();

    const timeDifferenceMs = currentTime - createTime;

    const minutes = Math.floor(timeDifferenceMs / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return `${years}y ago`;
    else if (months > 0) return `${months}m ago`;
    else if (days > 0) return `${days}d ago`;
    else if (hours > 0) return `${hours}h ago`;
    return "just now";
  };

  const formatSec = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const seconds = String(sec % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const formatDiff = (diff: string) => {
    if (diff === "ExpertPlus") return "Expert+";
    else return diff;
  };

  const newestVersion = map.versions[map.versions.length - 1];

  return (
    <div className={styles.map}>
      <Image
        src={map.versions[0].coverURL}
        alt={map.name}
        height={100}
        width={100}
      />

      <div className={styles.mapInfo}>
        <h2 className={`heading ${styles.mapTitle}`}>{map.name}</h2>

        <div>
          <span className={styles.mapAuthor}>
            By <strong>{map.uploader.name} </strong>
          </span>
          <span className={styles.mapPublished}>
            {calculateTimeSince(newestVersion.createdAt)}
          </span>
        </div>

        <div className={styles.mapStats}>
          <span className={styles.mapStat}>
            <Image src={npsIcon} alt="Notes per second" width={14} />
            {newestVersion.diffs[newestVersion.diffs.length - 1].nps.toFixed(1)}
          </span>
          <span className={styles.mapStat}>
            <Image src={clockIcon} alt="Duration" width={14} />
            {formatSec(map.metadata.duration)}
          </span>
          <span className={styles.mapStat}>
            <Image src={metronomeIcon} alt="Beats per minute" width={14} />
            {Math.floor(map.metadata.bpm)}
          </span>
        </div>

        <div className={styles.mapDifficulties}>
          {newestVersion.diffs.map((diff) => (
            <span
              key={`${diff.characteristic} ${diff.difficulty}`}
              className={styles.mapDifficulty}
            >
              {formatDiff(diff.difficulty)}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.mapRatings}>
        <div className={styles.mapRating}>
          <Image src={likeIcon} alt="Likes" width={14} />
          <span>{map.stats.upvotes}</span>
        </div>

        <div className={styles.mapRating}>
          <Image
            src={likeIcon}
            alt="Dislikes"
            width={14}
            className={styles.dislike}
          />
          <span>{map.stats.downvotes}</span>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
