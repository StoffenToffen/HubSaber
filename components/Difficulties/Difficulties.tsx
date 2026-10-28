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

interface DifficultiesProps {
  map: MapType;
  ssLeaderboards: Promise<(string | ssLeaderboardType)[]>;
}

const Difficulties = ({ map, ssLeaderboards }: DifficultiesProps) => {
  const [expanded, setExpanded] = useState(0);

  const leaderboards = use(ssLeaderboards);

  if (leaderboards.some((item) => typeof item === "string")) {
    return (
      <div className={`container ${styles.errorMsg}`}>
        <span>Failed to get scores</span>
        <span>Please try again later</span>
      </div>
    );
  }

  const validLeaderboards = leaderboards.filter(
    (item) => typeof item !== "string",
  );

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
    <section className={styles.diffs}>
      {map.versions[map.versions.length - 1].diffs.map((diff, i) => (
        <button
          type="button"
          key={`${diff.characteristic} ${diff.difficulty}`}
          aria-expanded={expanded === i}
          aria-controls={`panel${i}-content`}
          onClick={() => {
            setExpanded(expanded === i ? -1 : i);
          }}
          className={styles.diff}
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

          <div
            className={`${styles.diffContentWrapper} ${expanded === i ? styles.expanded : ""}`}
            id={`panel${i}-content`}
          >
            <table cellSpacing={0} className={styles.diffContent}>
              <thead>
                <tr className={styles.scoresRow}>
                  <th scope="col">#</th>
                  <th scope="col">Player</th>
                  <th scope="col">Score</th>
                  <th scope="col">Acc</th>
                  <th scope="col">PP</th>
                </tr>
              </thead>
              <tbody>
                {validLeaderboards[i]
                  ? validLeaderboards[i].data.map((score, i) => (
                      <tr
                        key={score.id}
                        className={`${styles.scoresRow} ${i % 2 === 1 ? styles.scoresRowOdd : ""}`}
                      >
                        <td className={styles.scoresColumn}>{i + 1}</td>
                        <td className={styles.scoresColumnPlayer}>
                          {score.player.name}
                        </td>
                        <td className={styles.scoresColumn}>
                          {score.modifiedScore}
                        </td>
                        <td className={styles.scoresColumn}>
                          {(score.accuracy * 100).toFixed(2)}%
                        </td>
                        <td className={styles.scoresColumn}>
                          {score.pp.toFixed(2)}
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
        </button>
      ))}
    </section>
  );
};

export default Difficulties;
