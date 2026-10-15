"use client";

import arrowIcon from "@/public/arrow.svg";
import descendingIcon from "@/public/descending.svg";
import searchIcon from "@/public/search.svg";
import Image from "next/image";
import Slider from "../Slider/Slider";
import styles from "./MapsForm.module.css";

const MapsForm = () => {
  return (
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
  );
};

export default MapsForm;
