import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Slider.module.css";

const Slider2 = ({ min, max }: { min: number; max: number }) => {
  const [minValue, setMinVal] = useState(min);
  const [maxValue, setMaxVal] = useState(max);

  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round((value / max) * 100),
    [max],
  );

  useEffect(() => {
    if (range.current) {
      const minPercent = getPercent(minValue);
      const maxPercent = getPercent(maxValue);

      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minValue, maxValue, getPercent]);

  useEffect(() => {
    if (range.current) {
      const minPercent = getPercent(minValue);
      const maxPercent = getPercent(maxValue);

      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minValue, maxValue, getPercent]);

  return (
    <fieldset className={styles.sliderWrapper}>
      <div className={styles.slider}>
        <div className={styles.sliderTrack} />

        <div ref={range} className={styles.sliderRange} />

        <div className={styles.sliderValues}>
          <span className={styles.sliderValuesMin}>{minValue / 10}</span>
          <legend>Notes/s</legend>
          <span className={styles.sliderValuesMax}>{maxValue / 10}</span>
        </div>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={minValue}
        name="min-nps"
        aria-label="min notes per second"
        onChange={(e) => {
          setMinVal(Math.min(+e.target.value, maxValue - 1));
        }}
        className={`${styles.thumb} ${minValue > max - 10 ? styles.thumbPriority : ""}`}
      />

      <input
        type="range"
        min={min}
        max={max}
        value={maxValue}
        name="max-nps"
        aria-label="max notes per second"
        onChange={(e) => {
          setMaxVal(Math.max(+e.target.value, minValue + 1));
        }}
        className={styles.thumb}
      />
    </fieldset>
  );
};

export default Slider2;
