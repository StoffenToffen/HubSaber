"use client";

import Slider from "@/components/Slider/Slider";
import Image from "next/image";

import arrowIcon from "@/public/arrow.svg";
import clockIcon from "@/public/clock.svg";
import cover from "@/public/cover.png";
import descendingIcon from "@/public/descending.svg";
import likeIcon from "@/public/like.svg";
import metronomeIcon from "@/public/metronome.svg";
import npsIcon from "@/public/notes-per-second.svg";
import searchIcon from "@/public/search.svg";

import styles from "./page.module.css";

const Page = () => {
  return (
    <div className={`container ${styles.mapsRow}`}>
      <section>
        <h1 className="heading">Maps</h1>

        <form action="" className={styles.form}>
          <div className={styles.search}>
            <input
              type="search"
              placeholder="Search for a map"
              className={styles.searchInput}
            />

            <button type="submit" className={styles.searchSubmit}>
              <Image
                src={searchIcon}
                alt="Search"
                className={styles.searchSubmitIcon}
              />
            </button>
          </div>

          <div className={styles.formContainer}>
            <button type="button" className={styles.filter}>
              <span>Filters:</span>

              <Image src={arrowIcon} alt="Open filters" width={20} />
            </button>

            <div className={styles.sort}>
              <select
                name=""
                id=""
                style={{
                  backgroundImage: `url(${arrowIcon.src})`,
                }}
                className={styles.sortInput}
              >
                <option value="Latest">Latest</option>
              </select>

              <button type="button" className={styles.sortBtn}>
                <Image
                  src={descendingIcon}
                  alt="descending"
                  className={styles.sortBtnIcon}
                />
              </button>
            </div>

            <div className={styles.dates}>
              <input
                type="text"
                placeholder="Start date"
                onFocus={(e) => {
                  e.target.type = "date";
                  e.target.showPicker();
                }}
                onBlur={(e) => (e.target.type = "text")}
                className={styles.date}
              />
              <span>-</span>
              <input
                type="text"
                placeholder="End date"
                onFocus={(e) => {
                  e.target.type = "date";
                  e.target.showPicker();
                }}
                onBlur={(e) => (e.target.type = "text")}
                className={styles.date}
              />
            </div>

            <Slider min={0} max={160} />
          </div>
        </form>
      </section>

      <section className={styles.maps}>
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className={styles.map}>
            <Image src={cover} alt="map name" width={100} />

            <div className={styles.mapInfo}>
              <h2 className={`heading ${styles.mapTitle}`}>
                Chime - Soda World
              </h2>

              <div>
                <span className={styles.mapAuthor}>
                  By <strong>SteffenT </strong>
                </span>
                <span className={styles.mapPublished}>2h ago</span>
              </div>

              <div className={styles.mapStats}>
                <span className={styles.mapStat}>
                  <Image src={npsIcon} alt="Notes per second" width={14} />
                  7.2
                </span>
                <span className={styles.mapStat}>
                  <Image src={clockIcon} alt="Duration" width={14} />
                  3:26
                </span>
                <span className={styles.mapStat}>
                  <Image
                    src={metronomeIcon}
                    alt="Beats per minute"
                    width={14}
                  />
                  176
                </span>
              </div>

              <div className={styles.mapDifficulties}>
                <span className={styles.mapDifficulty}>Expert</span>
                <span className={styles.mapDifficulty}>Expert+</span>
              </div>
            </div>

            <div className={styles.mapRatings}>
              <div className={styles.mapRating}>
                <Image src={likeIcon} alt="Likes" width={14} />
                <span>5</span>
              </div>

              <div className={styles.mapRating}>
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
        ))}
      </section>
    </div>
  );
};

export default Page;
