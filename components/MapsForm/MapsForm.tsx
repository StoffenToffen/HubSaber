"use client";

import arrowIcon from "@/public/arrow.svg";
import ascendingIcon from "@/public/ascending.svg";
import descendingIcon from "@/public/descending.svg";
import searchIcon from "@/public/search.svg";
import Form from "next/form";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import styles from "./MapsForm.module.css";

const MapsForm = ({ params }: { params: Record<string, string> }) => {
  const [searchValue, setSearchValue] = useState(params.q || "");
  const [sortValue, setSortValue] = useState(params.order || "Relevance");
  const [isAscending, setIsAscending] = useState(
    Boolean(params.ascending) || false,
  );
  const [startDate, setStartDate] = useState(params.from || "");
  const [endDate, setEndDate] = useState(params.to || "");

  const router = useRouter();
  const pathName = usePathname();

  const sliderMin = 0;
  const sliderMax = 160;

  const handleSubmit = (formData: FormData) => {
    const params = new URLSearchParams();

    const q = encodeURIComponent((formData.get("search") as string).trim());
    const order = formData.get("sort") as string;
    const from = formData.get("start-date") as string;
    const to = formData.get("end-date") as string;
    const minNPS = formData.get("min-nps") as string;
    const maxNPS = formData.get("max-nps") as string;

    if (q) params.set("q", q);
    if (order !== "Relevance") params.set("order", order);
    if (isAscending) params.set("ascending", String(isAscending));
    if (from) params.set("from", from);
    if (to) params.set("to", to);
    if (+minNPS > sliderMin) params.set("minNPS", String(+minNPS / 10));
    if (+maxNPS < sliderMax) params.set("maxNPS", String(+maxNPS / 10));

    router.push(params ? `${pathName}?${String(params)}` : pathName);
  };

  useEffect(() => {
    setSearchValue(params.q || "");
    setSortValue(params.order || "Relevance");
    setIsAscending(Boolean(params.ascending) || false);
    setStartDate(params.from || "");
    setEndDate(params.to || "");
  }, [params]);

  return (
    <Form action={handleSubmit} className={styles.form}>
      <div className={styles.search}>
        <input
          type="search"
          placeholder="Search for a map"
          name="search"
          aria-label="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
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
        <div className={styles.sort}>
          <select
            name="sort"
            value={sortValue}
            onChange={(e) => setSortValue(e.target.value)}
            style={{
              backgroundImage: `url(${arrowIcon.src})`,
            }}
            className={styles.sortInput}
          >
            <option value="Latest">Latest</option>
            <option value="Relevance">Relevance</option>
            <option value="Rating">Rating</option>
            <option value="Curated">Curated</option>
            <option value="Random">Random</option>
            <option value="Duration">Duration</option>
          </select>

          <button
            type="button"
            onClick={() => setIsAscending(!isAscending)}
            className={styles.sortBtn}
          >
            {isAscending ? (
              <Image
                src={ascendingIcon}
                alt="ascending"
                className={styles.sortBtnIcon}
              />
            ) : (
              <Image
                src={descendingIcon}
                alt="descending"
                className={styles.sortBtnIcon}
              />
            )}
          </button>
        </div>

        <div className={styles.dates}>
          <input
            type="text"
            placeholder="Start date"
            name="start-date"
            aria-label="Start date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            onFocus={(e) => {
              e.target.type = "date";
              e.target.showPicker();
            }}
            onBlur={(e) => (e.target.type = "text")}
            className={styles.date}
          />
          <span aria-hidden>-</span>
          <input
            type="text"
            placeholder="End date"
            name="end-date"
            aria-label="End date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            onFocus={(e) => {
              e.target.type = "date";
              e.target.showPicker();
            }}
            onBlur={(e) => (e.target.type = "text")}
            className={styles.date}
          />
        </div>

        <Slider min={sliderMin} max={sliderMax} params={params} />
      </div>
    </Form>
  );
};

export default MapsForm;
