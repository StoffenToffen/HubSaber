import externalLinkIcon from "@/public/external-link.svg";
import logo from "@/public/logo.svg";
import Image from "next/image";
import styles from "./page.module.css";

const Page = () => {
  return (
    <div className={`container ${styles.aboutRow}`}>
      <section className={styles.header}>
        <h1 className="heading">
          About <span className="text--red">HubSaber</span>
        </h1>

        <Image src={logo} alt="HubSaber" width={40} />

        <p className={styles.headerTxt}>
          HubSaber is a platform for viewing all the different custom maps for
          Beat Saber made by the community
        </p>
      </section>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Who is it for?</h2>

        <p className={styles.cardHighlight}>
          Enjoying Beat Saber, but think there's not enough maps?
        </p>

        <p>
          Either you are looking for your favorite songs, how you compare
          against others, or how your own maps are doing;
        </p>

        <p className={styles.cardHighlightAlt}>
          <span className="text--red">HubSaber</span> lets you do it all.
        </p>
      </section>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Who made it?</h2>

        <p className={styles.cardHighlight}>
          HubSaber's design and functionality were all made by Steffen:{" "}
          <a
            href="https://github.com/StoffenToffen/HubSaber"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
          >
            Source Code
            <Image
              src={externalLinkIcon}
              alt="external link"
              width={10}
              className={styles.cardLinkIcon}
            />
          </a>
        </p>

        <p>
          HubSaber uses the{" "}
          <a
            href="https://api.beatsaver.com/docs/index.html#/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
          >
            BeatSaver API
            <Image
              src={externalLinkIcon}
              alt="external link"
              width={10}
              className={styles.cardLinkIcon}
            />
          </a>{" "}
          to get maps and the information about them, along with the different
          filters and sorting methods.
        </p>

        <p>
          The{" "}
          <a
            href="https://docs.scoresaber.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
          >
            ScoreSaber API
            <Image
              src={externalLinkIcon}
              alt="external link"
              width={10}
              className={styles.cardLinkIcon}
            />
          </a>{" "}
          is used to get all the leaderboards.
        </p>

        <p>The APIs were not made by and have no association with HubSaber.</p>
      </section>
    </div>
  );
};

export default Page;
