import type { MapType } from "@/app/types";
import clockIcon from "@/public/clock.svg";
import likeIcon from "@/public/like.svg";
import metronomeIcon from "@/public/metronome.svg";
import npsIcon from "@/public/notes-per-second.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./MapCard.module.css";

import threeSixtyDegree from "@/public/diffIcons/360-degree.svg";
import ninetyDegree from "@/public/diffIcons/90-degree.svg";
import lawless from "@/public/diffIcons/lawless.svg";
import legacy from "@/public/diffIcons/legacy.svg";
import lightShow from "@/public/diffIcons/light-show.svg";
import noArrows from "@/public/diffIcons/no-arrows.svg";
import oneSaber from "@/public/diffIcons/one-saber.svg";
import standard from "@/public/diffIcons/standard.svg";

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

  const getDiffIcon = (diff: string) => {
    switch (diff) {
      case "Standard":
        return standard;
      case "OneSaber":
        return oneSaber;
      case "NoArrows":
        return noArrows;
      case "90Degree":
        return ninetyDegree;
      case "360Degree":
        return threeSixtyDegree;
      case "Lightshow":
        return lightShow;
      case "Lawless":
        return lawless;
      default:
        return legacy;
    }
  };

  const getBGColor = (map: MapType) => {
    if (map.ranked || map.blRanked) return "rgb(92, 83, 5)";
    else if (map.curatedAt) return "rgb(5, 92, 5)";
    else if (map.uploader.verifiedMapper) return "rgb(92, 5, 85)";
    else return "var(--color-bg)";
  };

  const getMapStatus = (map: MapType) => {
    if (map.ranked) return "Ranked Score Saber";
    else if (map.blRanked) return "Ranked Beat Leader";
    else if (map.curatedAt) return "Curated";
    else if (map.uploader.verifiedMapper) return "Verified";
    else return "";
  };

  const newestVersion = map.versions[map.versions.length - 1];

  return (
    <div
      title={getMapStatus(map)}
      className={styles.map}
      style={{
        background: `linear-gradient(90deg, ${getBGColor(map)}, var(--color-bg) 30%)`,
      }}
    >
      <Image
        src={map.versions[0].coverURL}
        alt={map.name}
        height={100}
        width={100}
      />

      <div className={styles.mapInfo}>
        <Link href={`/maps/${map.id}`}>
          <h2 className={`heading ${styles.mapTitle}`}>{map.name}</h2>
        </Link>

        <div>
          <span className={styles.mapAuthor}>
            By <strong>{map.uploader.name} </strong>
          </span>
          <span title={newestVersion.createdAt} className={styles.mapPublished}>
            {calculateTimeSince(newestVersion.createdAt)}
          </span>
        </div>

        <div className={styles.mapStats}>
          <span className={styles.mapStat}>
            <Image
              src={npsIcon}
              alt="Notes per second"
              width={14}
              title="Notes per second"
            />
            {newestVersion.diffs[newestVersion.diffs.length - 1].nps.toFixed(1)}
          </span>
          <span className={styles.mapStat}>
            <Image src={clockIcon} alt="Duration" width={14} title="Duration" />
            {formatSec(map.metadata.duration)}
          </span>
          <span className={styles.mapStat}>
            <Image
              src={metronomeIcon}
              alt="Beats per minute"
              width={14}
              title="Beats per minute"
            />
            {Math.floor(map.metadata.bpm)}
          </span>
        </div>

        <ul className={styles.mapDifficulties}>
          {newestVersion.diffs.map((diff) => (
            <li
              key={`${diff.characteristic} ${diff.difficulty}`}
              className={styles.mapDifficulty}
            >
              <Image
                src={getDiffIcon(diff.characteristic)}
                alt={diff.characteristic}
                width={14}
                title={diff.characteristic}
              />

              <span>{formatDiff(diff.difficulty)}</span>
            </li>
          ))}
        </ul>
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
