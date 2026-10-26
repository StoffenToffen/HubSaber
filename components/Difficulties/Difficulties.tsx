"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Difficulties.module.css";

import threeSixtyDegree from "@/public/diffIcons/360-degree.svg";
import ninetyDegree from "@/public/diffIcons/90-degree.svg";
import lawless from "@/public/diffIcons/lawless.svg";
import legacy from "@/public/diffIcons/legacy.svg";
import lightShow from "@/public/diffIcons/light-show.svg";
import noArrows from "@/public/diffIcons/no-arrows.svg";
import oneSaber from "@/public/diffIcons/one-saber.svg";
import standard from "@/public/diffIcons/standard.svg";

import arrowIcon from "@/public/arrow.svg";
import noteIcon from "@/public/note.svg";
import wallIcon from "@/public/wall.svg";
import bombIcon from "@/public/bomb.svg";
import lightIcon from "@/public/light.svg";
import njsIcon from "@/public/speedometer.svg";
import npsIcon from "@/public/notes-per-second.svg";

const Difficulties = () => {
  const [expanded, setExpanded] = useState(-1);

  const formatStat = (stat: number) => {
    if (stat > 999) return `${Math.floor(stat / 1000)}k`;
    if (stat % 1 !== 0) return stat.toFixed(1);
    else return stat;
  };

  const diffStats = [
    {
      name: "Notes",
      icon: noteIcon,
      value: 803,
    },
    {
      name: "Walls",
      icon: wallIcon,
      value: 24,
    },
    {
      name: "Bombs",
      icon: bombIcon,
      value: 16,
    },
    {
      name: "Lights",
      icon: lightIcon,
      value: 12849,
    },
    {
      name: "Note jump speed",
      icon: njsIcon,
      value: 19.51,
    },
    {
      name: "Notes per second",
      icon: npsIcon,
      value: 4.23,
    },
  ];

  return (
    <section className={styles.diffs}>
      {new Array(3).fill(0).map((_, i) => (
        <button
          type="button"
          key={i}
          aria-expanded={expanded === i}
          aria-controls={`panel${i}-content`}
          onClick={() => {
            setExpanded(expanded === i ? -1 : i);
          }}
          className={styles.diff}
        >
          <div className={styles.diffHead}>
            <h2 className={styles.diffTitle}>
              <Image src={standard} alt="standard" width={16} />
              Expert+
            </h2>

            <Image
              src={arrowIcon}
              alt="expand difficulty"
              width={20}
              className={`${styles.diffIcon} ${expanded === i ? styles.rotated : ""}`}
            />

            <div className={styles.diffStats}>
              {diffStats.map((stat) => (
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
                <tr className={styles.scoresRow}>
                  <td className={styles.scoresColumn}>1</td>
                  <td className={styles.scoresColumnPlayer}>SteffenT</td>
                  <td className={styles.scoresColumn}>442 222</td>
                  <td className={styles.scoresColumn}>96.29%</td>
                  <td className={styles.scoresColumn}>303.23</td>
                </tr>
                <tr className={`${styles.scoresRow} ${styles.scoresRowOdd}`}>
                  <td className={styles.scoresColumn}>2</td>
                  <td className={styles.scoresColumnPlayer}>Alex</td>
                  <td className={styles.scoresColumn}>442 222</td>
                  <td className={styles.scoresColumn}>96.29%</td>
                  <td className={styles.scoresColumn}>303.23</td>
                </tr>
                <tr className={styles.scoresRow}>
                  <td className={styles.scoresColumn}>3</td>
                  <td className={styles.scoresColumnPlayer}>Morten</td>
                  <td className={styles.scoresColumn}>442 222</td>
                  <td className={styles.scoresColumn}>96.29%</td>
                  <td className={styles.scoresColumn}>303.23</td>
                </tr>
                <tr className={`${styles.scoresRow} ${styles.scoresRowOdd}`}>
                  <td className={styles.scoresColumn}>4</td>
                  <td className={styles.scoresColumnPlayer}>Stine</td>
                  <td className={styles.scoresColumn}>442 222</td>
                  <td className={styles.scoresColumn}>96.29%</td>
                  <td className={styles.scoresColumn}>303.23</td>
                </tr>
              </tbody>
            </table>
          </div>
        </button>
      ))}
    </section>
  );
};

export default Difficulties;
