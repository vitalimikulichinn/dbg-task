import React, { useMemo, useState } from "react";
import styles from "../../../styles/Person.module.scss";
import { TABS_CONFIG } from "../../constants";
import { AgeIcon } from "../../icons/ageIcon";
import { DobIcon } from "../../icons/dobIcon";
import { EmailIcon } from "../../icons/emailIcon";
import { GenderIcon } from "../../icons/genderIcon";
import { NameIcon } from "../../icons/nameIcon";
import { dobFormat, tab } from "./person-info.helper";
import { TabBar } from "./tab-bar.component";

interface PersonInfoProps {
  gender?: string;
  name?: string;
  email?: string;
  dob?: string;
  age?: number;
}

export const PersonInfo: React.FC<PersonInfoProps> = React.memo(
  ({ gender, name, email, dob, age }) => {
    const [activeTab, setActiveTab] = useState<string>(TABS_CONFIG[0]);

    const PERSON_INFO_CONFIG = useMemo(
      () => [
        {
          label: "Gender",
          data: gender,
          icon: GenderIcon,
        },
        {
          label: "Name",
          data: name,
          icon: NameIcon,
        },
        {
          label: "E-mail",
          data: email,
          icon: EmailIcon,
        },
        {
          label: "Date of Birth",
          data: dobFormat(dob),
          icon: DobIcon,
        },
        {
          label: "Age",
          data: `${age}`,
          icon: AgeIcon,
        },
      ],
      [age, dob, email, gender, name]
    );

    return (
      <div className={styles.personFullInfoContainer}>
        <TabBar
          config={TABS_CONFIG}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div>{tab(activeTab, PERSON_INFO_CONFIG)}</div>
      </div>
    );
  }
);

PersonInfo.displayName = "PersonInfo";
