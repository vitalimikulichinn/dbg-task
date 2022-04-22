import { SETTINGS_CONFIG } from "../../constants";
import { Checkbox } from "../shared/checkbox/checkbox.component";
import { InfoRow } from "../shared/info-row/info-row.component";
import styles from "../../../styles/Person.module.scss";

interface IPersonInfo {
  label: string;
  data?: string;
  icon: () => JSX.Element;
}

export const tab = (activeTab: string, config: IPersonInfo[]) => {
  switch (activeTab) {
    case "Information": {
      return config.map(({ label, data, icon }) => (
        <InfoRow
          key={label}
          label={label}
          text={data}
          className={styles.fullInfoRow}
          icon={icon}
        />
      ));
    }
    case "Settings": {
      return SETTINGS_CONFIG().map((item, index) => (
        <div className={styles.checkboxContainer} key={`name${index}`}>
          <Checkbox label={item} name={`name${index}`} />
        </div>
      ));
    }
    default:
      null;
  }
};

export const dobFormat = (dob?: string) => {
  if (dob) {
    const dateSplitted = dob.toString().split(".");
    let date = new Date(dob);
    if (dateSplitted.length > 2) {
      const newDate = new Date();
      newDate.setFullYear(
        Number(dateSplitted[2]),
        Number(dateSplitted[1]) - 1,
        Number(dateSplitted[0])
      );
      date = newDate;
    }
    const day = date.getDate().toString();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dayFormatted = day.toString().length > 1 ? day : `0${day}`;
    const monthFormatted = month.toString().length > 1 ? month : `0${month}`;
    const yearFormatted = year.toString().length > 1 ? year : `0${year}`;

    return `${dayFormatted}.${monthFormatted}.${yearFormatted}`;
  }
  return "";
};
