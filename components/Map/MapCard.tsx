import type { MapType } from "@/app/types";
import clockIcon from "@/public/clock.svg";
import likeIcon from "@/public/like.svg";
import metronomeIcon from "@/public/metronome.svg";
import npsIcon from "@/public/notes-per-second.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./MapCard.module.css";

import {
  calculateTimeSince,
  formatDiff,
  formatSec,
  getDiffIcon,
} from "@/app/globalFunctions";

const MapCard = ({ map }: { map: MapType }) => {
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
  const mappers = [map.uploader.name];
  if (map.collaborators) {
    map.collaborators.map((collaborator) => mappers.push(collaborator.name));
  }

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
          <h2 title={map.name} className={`heading ${styles.mapTitle}`}>
            {map.name.split(/\s+/).map((word, i) => (
              <span className={styles.mapTitleWord} key={`${i}${word}`}>
                {word}{" "}
              </span>
            ))}
          </h2>
        </Link>

        <div className={styles.mapAuthorWrapper}>
          <span className={styles.mapAuthor}>
            By <strong title={mappers.join(", ")}>{mappers.join(", ")}</strong>
          </span>
          <span title={map.uploaded} className={styles.mapPublished}>
            {calculateTimeSince(map.uploaded)}
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
