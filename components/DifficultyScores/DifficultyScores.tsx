import type { ssLeaderboardType } from "@/app/types";
import { use } from "react";
import styles from "./DifficultyScores.module.css";

interface DifficultyScoresProps {
  ssLeaderboards: Promise<(string | ssLeaderboardType)[]>;
  index: number;
}

const DifficultyScores = ({ ssLeaderboards, index }: DifficultyScoresProps) => {
  const leaderboards = use(ssLeaderboards);

  if (leaderboards.some((item) => typeof item === "string")) {
    return (
      <div className={styles.errorMsg}>
        <span>Failed to get scores</span>
        <span>Please try again later</span>
      </div>
    );
  }

  const validLeaderboards = leaderboards.filter(
    (item) => typeof item !== "string",
  );

  return (
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
        {validLeaderboards[index]
          ? validLeaderboards[index].data.map((score, i) => (
              <tr
                key={score.id}
                className={`${styles.scoresRow} ${i % 2 === 1 ? styles.scoresRowOdd : ""}`}
              >
                <td className={styles.scoresColumn}>{i + 1}</td>
                <td className={styles.scoresColumnPlayer}>
                  {score.player.name}
                </td>
                <td className={styles.scoresColumn}>
                  {score.modifiedScore.toLocaleString()}
                </td>
                <td className={styles.scoresColumn}>
                  {(score.accuracy * 100).toFixed(2)}%
                </td>
                <td className={styles.scoresColumn}>{score.pp.toFixed(2)}</td>
              </tr>
            ))
          : ""}
      </tbody>
    </table>
  );
};

export default DifficultyScores;
