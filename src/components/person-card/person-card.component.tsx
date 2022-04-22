import React from "react";
import styles from "../../../styles/Person.module.scss";
import { EditIcon } from "../../icons/editIcon";
import { Button } from "../../shared/button/button.component";
import { InfoRow } from "../../shared/info-row/info-row.component";

interface PersonCardProps {
  login: string;
  name: string;
  modalOpen: () => void;
}

export const PersonCard: React.FC<PersonCardProps> = React.memo(({ login, name, modalOpen }) => {
  return (
    <div className={styles.personCard}>
      <div className={styles.header}>
        Profile
        <Button icon={() => <EditIcon />} onClick={modalOpen} />
      </div>
      <div className={styles.personInfo}>
        <p>{name}</p>
        <InfoRow text={login} label="Login" />
        <InfoRow text="Change password" label="Password" activeText />
      </div>
    </div>
  );
});

PersonCard.displayName = "PersonCard";
