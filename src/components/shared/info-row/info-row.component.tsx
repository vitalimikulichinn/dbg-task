import React from "react";
import styles from "../../../../styles/Person.module.scss";

interface InfoRowProps {
  label: string;
  text?: string;
  icon?: React.FC;
  activeText?: boolean;
  className?: string;
}

export const InfoRow: React.FC<InfoRowProps> = React.memo(
  ({ label, text, icon: Icon, activeText, className }) => {
    return (
      <div className={`${styles.infoRow} ${className ? className : ""}`}>
        {Icon ? (
          <div>
            <Icon />
          </div>
        ) : null}
        <p>
          <span>{label}:</span>{" "}
          <span className={activeText ? styles.activeText : ""}>{text}</span>
        </p>
      </div>
    );
  }
);

InfoRow.displayName = "InfoRow";
