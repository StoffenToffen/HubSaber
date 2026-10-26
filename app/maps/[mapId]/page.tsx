import Difficulties from "@/components/Difficulties/Difficulties";
import clockIcon from "@/public/clock.svg";
import likeIcon from "@/public/like.svg";
import metronomeIcon from "@/public/metronome.svg";
import noteIcon from "@/public/note.svg";
import Image from "next/image";
import styles from "./page.module.css";

const Page = () => {
  return (
    <div className={`container ${styles.mapRow}`}>
      <section className={styles.mapInfo}>
        <div className={styles.mapInfoTop}>
          <Image src={noteIcon} alt="song cover" width={100} />

          <div>
            <h1 className={styles.mapTitle}>Chime - Soda World</h1>

            <div className={styles.mapAuthor}>
              By <strong title={"SteffenT"}>SteffenT</strong>
            </div>
            <div title={"2h ago"} className={styles.mapPublished}>
              2h ago
            </div>
          </div>
        </div>

        <div>
          <div className={styles.mapStatsWrapper}>
            <div className={styles.mapStats}>
              <span className={styles.mapStat}>
                <Image
                  src={clockIcon}
                  alt="Duration"
                  width={14}
                  title="Duration"
                />
                3:26
              </span>

              <span className={styles.mapStat}>
                <Image
                  src={metronomeIcon}
                  alt="Beats per minute"
                  width={14}
                  title="Beats per minute"
                />
                176
              </span>
            </div>

            <div className={styles.mapStats}>
              <div className={styles.mapStat}>
                <Image src={likeIcon} alt="Likes" width={14} />
                <span>5</span>
              </div>

              <div className={styles.mapStat}>
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

          <ul className={styles.mapTags}>
            <li title="Playstyle" className={styles.mapTag}>
              Tech
            </li>
            <li title="Playstyle" className={styles.mapTag}>
              Balanced
            </li>
            <li title="Genre" className={styles.mapTag}>
              Dubstep
            </li>
            <li title="Map status" className={styles.mapTag}>
              Curated
            </li>
            <li title="Requires" className={styles.mapTag}>
              Chroma
            </li>
          </ul>

          <p className={styles.mapDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            aspernatur nisi aut accusamus enim error quaerat, facere quas et
            reprehenderit.
          </p>
        </div>
      </section>

      <Difficulties />
    </div>
  );
};

export default Page;
