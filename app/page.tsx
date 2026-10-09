import compassIcon from "@/public/compass.svg";
import externalLinkIcon from "@/public/external-link.svg";
import logo from "@/public/logo.svg";
import searchIcon from "@/public/search.svg";
import trophyIcon from "@/public/trophy.svg";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={`container ${styles.homeRow}`}>
      <section className={styles.homeRow}>
        <Image src={logo} alt="HubSaber" width={40} />

        <h1 className={styles.homeTitle}>
          This is <strong className="heading text--red">HubSaber</strong>
        </h1>

        <span>The collective hub for all of Beat Saber's custom maps</span>
      </section>

      <hr className={styles.divider} />

      <section className={styles.cards}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <Image src={compassIcon} alt="" width={24} />
            Explore
          </h2>

          <span className="text--grey">
            Explore maps from your favorite creators and artists
          </span>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <Image src={searchIcon} alt="" width={24} />
            Search
          </h2>

          <span className="text--grey">
            Use powerful filters to find the exact map you are looking for
          </span>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <Image src={trophyIcon} alt="" width={24} />
            Scores
          </h2>

          <span className="text--grey">
            View the scores of you and your friends, or your favorite player
          </span>
        </div>
      </section>

      <section className={styles.homeLearn}>
        <span>Learn to make your own maps:</span>

        <a
          href="https://bsmg.wiki/mapping/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.homeLink}
        >
          BSMG Wiki
          <Image src={externalLinkIcon} alt="external link" width={14} />
        </a>
      </section>
    </div>
  );
}
