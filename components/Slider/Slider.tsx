import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Slider.module.css";

interface SliderProps {
  min: number;
  max: number;
  params: Record<string, string>;
}

const Slider = ({ min, max, params }: SliderProps) => {
  const [minValue, setMinValue] = useState(+params.minNPS * 10 || min);
  const [maxValue, setMaxValue] = useState(+params.maxNPS * 10 || max);

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

  useEffect(() => {
    setMinValue(+params.minNPS * 10 || min);
    setMaxValue(+params.maxNPS * 10 || max);
  }, [params.minNPS, params.maxNPS, min, max]);

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
          setMinValue(Math.min(+e.target.value, maxValue - 1));
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
          setMaxValue(Math.max(+e.target.value, minValue + 1));
        }}
        className={styles.thumb}
      />
    </fieldset>
  );
};

export default Slider;
