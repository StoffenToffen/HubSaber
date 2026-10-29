import threeSixtyDegree from "@/public/diffIcons/360-degree.svg";
import ninetyDegree from "@/public/diffIcons/90-degree.svg";
import lawless from "@/public/diffIcons/lawless.svg";
import legacy from "@/public/diffIcons/legacy.svg";
import lightShow from "@/public/diffIcons/light-show.svg";
import noArrows from "@/public/diffIcons/no-arrows.svg";
import oneSaber from "@/public/diffIcons/one-saber.svg";
import standard from "@/public/diffIcons/standard.svg";

export const calculateTimeSince = (dateTime: string): string => {
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

export const getDiffIcon = (diff: string) => {
  switch (diff) {
    case "Standard":
      return standard;
    case "OneSaber":
      return oneSaber;
    case "NoArrows":
      return noArrows;
    case "90Degree":
      return ninetyDegree;
    case "360Degree":
      return threeSixtyDegree;
    case "Lightshow":
      return lightShow;
    case "Lawless":
      return lawless;
    default:
      return legacy;
  }
};

export const formatDiff = (diff: string) => {
  if (diff === "ExpertPlus") return "Expert+";
  else return diff;
};

export const formatSec = (sec: number) => {
  const minutes = Math.floor(sec / 60);
  const seconds = String(sec % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
};
