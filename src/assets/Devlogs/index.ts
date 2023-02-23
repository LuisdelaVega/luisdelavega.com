import DEVLOG_0 from "./Devlog_0";

const devlogs: {
  [key: string]: string;
} = {
  DEVLOG_0,
};

const getDevlogTitles = (): string[] => Object.keys(devlogs);
const getDevlogContent = (key: string): string => devlogs[key];

export { getDevlogTitles, getDevlogContent };
