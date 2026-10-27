import { fetchData } from "@/app/featches";
import type { MapType } from "@/app/types";
import Difficulties from "@/components/Difficulties/Difficulties";
import clockIcon from "@/public/clock.svg";
import likeIcon from "@/public/like.svg";
import metronomeIcon from "@/public/metronome.svg";
import Image from "next/image";
import styles from "./page.module.css";

const Page = async ({ params }: { params: Promise<{ mapId: string }> }) => {
  const { mapId } = await params;

  const map = await fetchData<MapType>("maps/id", mapId);

  if (typeof map === "string") {
    return (
      <div className={`container ${styles.errorMsg}`}>
        <span>Something went wrong</span>
        <span>Make sure the map id is correct or try again later</span>
      </div>
    );
  }

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

  const getRequirements = () => {
    const diffs = map.versions[map.versions.length - 1].diffs;
    const reqs = new Set<string>();

    for (const diff of diffs) {
      if (diff.chroma) reqs.add("Chroma");
      if (diff.cinema) reqs.add("Cinema");
      if (diff.me) reqs.add("Mapping Extension");
      if (diff.ne) reqs.add("Noodle Extension");
      if (diff.vivify) reqs.add("Vivify");
    }

    return reqs;
  };

  const mappers = [map.uploader.name];
  if (map.collaborators) {
    map.collaborators.map((collaborator) => mappers.push(collaborator.name));
  }

  return (
    <div className={`container ${styles.mapRow}`}>
      <section className={styles.mapInfo}>
        <div className={styles.mapInfoTop}>
          <Image
            src={map.versions[0].coverURL}
            alt={map.name}
            width={100}
            height={100}
          />

          <div>
            <h1 className={styles.mapTitle}>{map.name}</h1>

            <div className={styles.mapAuthor}>
              By{" "}
              <strong title={mappers.join(", ")}>{mappers.join(", ")}</strong>
            </div>

            <div title={map.uploaded} className={styles.mapPublished}>
              {calculateTimeSince(map.uploaded)}
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
                {formatSec(map.metadata.duration)}
              </span>

              <span className={styles.mapStat}>
                <Image
                  src={metronomeIcon}
                  alt="Beats per minute"
                  width={14}
                  title="Beats per minute"
                />
                {map.metadata.bpm}
              </span>
            </div>

            <div className={styles.mapStats}>
              <div className={styles.mapStat}>
                <Image src={likeIcon} alt="Likes" width={14} />
                <span>{map.stats.upvotes}</span>
              </div>

              <div className={styles.mapStat}>
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

          <div className={styles.mapTagGroups}>
            <div className={styles.mapTagGroup}>
              <h3 className={styles.mapTagsTitle}>Tags:</h3>

              <ul className={styles.mapTags}>
                {map.tags
                  ? map.tags.map((tag) => (
                      <li key={tag} className={styles.mapTag}>
                        {tag.slice(0, 1).toUpperCase() + tag.slice(1)}
                      </li>
                    ))
                  : ""}
              </ul>
            </div>

            <div className={styles.mapTagGroup}>
              <h3 className={styles.mapTagsTitle}>Status:</h3>

              <ul className={styles.mapTags}>
                {map.ranked && <li className={styles.mapTag}>Ranked SS</li>}
                {map.blRanked && <li className={styles.mapTag}>Ranked BL</li>}
                {map.curatedAt && <li className={styles.mapTag}>Curated</li>}
                {map.uploader.verifiedMapper && (
                  <li className={styles.mapTag}>Verified</li>
                )}
              </ul>
            </div>

            <div className={styles.mapTagGroup}>
              <h3 className={styles.mapTagsTitle}>Mods:</h3>

              <ul className={styles.mapTags}>
                {Array.from(getRequirements()).map((req) => (
                  <li key={req} className={styles.mapTag}>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className={styles.mapDescription}>{map.description}</p>
        </div>
      </section>

      <Difficulties map={map} />
    </div>
  );
};

export default Page;
