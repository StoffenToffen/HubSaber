import arrowIcon from "@/public/arrow.svg";
import compassIcon from "@/public/compass.svg";
import externalLinkIcon from "@/public/external-link.svg";
import logo from "@/public/logo.svg";
import searchIcon from "@/public/search.svg";
import trophyIcon from "@/public/trophy.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={`container ${styles.homeRow}`}>
      <section className={styles.homeRow}>
        <Image src={logo} alt="HubSaber" width={40} />

        <h1 className={styles.homeTitle}>
          This is <strong className="heading text--red">HubSaber</strong>
        </h1>

        <p className={styles.homeTxt}>
          The collective hub for all of Beat Saber's custom maps
        </p>
      </section>

      <hr className={styles.divider} />

      <section>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <Image src={compassIcon} alt="" width={24} />
              Explore
            </h2>

            <p className={styles.cardTxt}>
              Explore maps from your favorite creators and artists
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <Image src={searchIcon} alt="" width={24} />
              Search
            </h2>

            <p className={styles.cardTxt}>
              Use powerful filters to find the exact map you are looking for
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <Image src={trophyIcon} alt="" width={24} />
              Scores
            </h2>

            <p className={styles.cardTxt}>
              View the scores of you and your friends, or your favorite player
            </p>
          </div>
        </div>

        <Link href="/maps" className={styles.cardsLink}>
          Take me there{" "}
          <Image
            src={arrowIcon}
            alt="arrow"
            width={20}
            className={styles.cardsLinkArrow}
          />
        </Link>
      </section>

      <hr className={styles.divider} />

      <section className={styles.homeLearn}>
        <span className={styles.homeTxt}>Learn to make your own maps:</span>

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
