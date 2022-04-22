import styles from "../../../styles/Weather.module.scss";
import { CloudIcon } from "../../icons/cloudIcon";
import { SnowflakeIcon } from "../../icons/snowflakeIcon";
import { SunIcon } from "../../icons/sunIcon";

export const weatherBackground = (temperature: number) => {
  let style = styles.coldPhone;
  if (temperature >= -10 && temperature < 20) {
    style = styles.normalPhone;
  }
  if (temperature >= 20) {
    style = styles.hotPhone;
  }
  return style;
};

export const weatherIcon = (temperature: number) => {
  let style = <SnowflakeIcon />;
  if (temperature >= -10 && temperature < 20) {
    style = <CloudIcon />;
  }
  if (temperature >= 20) {
    style = <SunIcon />;
  }
  return style;
};
