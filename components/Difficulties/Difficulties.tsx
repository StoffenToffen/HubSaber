"use client";

import { formatDiff, getDiffIcon } from "@/app/globalFunctions";
import type { DiffType, MapType, ssLeaderboardType } from "@/app/types";
import Image from "next/image";
import { use, useState } from "react";
import styles from "./Difficulties.module.css";

import arrowIcon from "@/public/arrow.svg";
import bombIcon from "@/public/bomb.svg";
import lightIcon from "@/public/light.svg";
import noteIcon from "@/public/note.svg";
import npsIcon from "@/public/notes-per-second.svg";
import njsIcon from "@/public/speedometer.svg";
import wallIcon from "@/public/wall.svg";
import DifficultyScores from "../DifficultyScores/DifficultyScores";

interface DifficultiesProps {
  map: MapType;
  ssLeaderboards: Promise<string | (string | ssLeaderboardType | null)[]>;
}

const Difficulties = ({ map, ssLeaderboards }: DifficultiesProps) => {
  const [expanded, setExpanded] = useState(0);

  const leaderboards = use(ssLeaderboards);

  const formatStat = (stat: number) => {
    if (stat > 999) return `${(stat / 1000).toFixed(1)}k`;
    if (stat % 1 !== 0) return stat.toFixed(1);
    else return stat;
  };

  const getDiffStats = (diff: DiffType) => {
    return [
      {
        name: "Notes",
        icon: noteIcon,
        value: diff.notes,
      },
      {
        name: "Walls",
        icon: wallIcon,
        value: diff.obstacles,
      },
      {
        name: "Bombs",
        icon: bombIcon,
        value: diff.bombs,
      },
      {
        name: "Lights",
        icon: lightIcon,
        value: diff.events,
      },
      {
        name: "Note jump speed",
        icon: njsIcon,
        value: diff.njs,
      },
      {
        name: "Notes per second",
        icon: npsIcon,
        value: diff.nps,
      },
    ];
  };

  return (
    <>
      {map.versions[map.versions.length - 1].diffs.map((diff, i) => (
        <div
          key={`${diff.characteristic} ${diff.difficulty}`}
          className={styles.diff}
        >
          <button
            type="button"
            aria-expanded={expanded === i}
            aria-controls={`panel${i}-content`}
            onClick={() => {
              setExpanded(expanded === i ? -1 : i);
            }}
            className={styles.diffBtn}
          >
            <div className={styles.diffHead}>
              <h2 className={styles.diffTitle}>
                <Image
                  src={getDiffIcon(diff.characteristic)}
                  alt={diff.characteristic}
                  title={diff.characteristic}
                  width={16}
                />
                {formatDiff(diff.difficulty)}
              </h2>

              <Image
                src={arrowIcon}
                alt="expand difficulty"
                width={20}
                className={`${styles.diffIcon} ${expanded === i ? styles.rotated : ""}`}
              />

              <div className={styles.diffStats}>
                {getDiffStats(diff).map((stat) => (
                  <div
                    key={stat.name}
                    title={`${stat.name}: ${stat.value}`}
                    className={styles.diffStat}
                  >
                    <Image
                      src={stat.icon}
                      alt={stat.name}
                      width={14}
                      height={14}
                      className={styles.diffStatIcon}
                    />
                    <span>{formatStat(stat.value)}</span>
                  </div>
                ))}
              </div>
            </div>
          </button>

          <div
            className={`${styles.diffContentWrapper} ${expanded === i ? styles.expanded : ""}`}
            id={`panel${i}-content`}
          >
            <DifficultyScores
              leaderboard={
                typeof leaderboards === "string"
                  ? leaderboards
                  : leaderboards[i]
              }
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Difficulties;
