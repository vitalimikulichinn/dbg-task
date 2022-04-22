import Link from "next/link";
import React from "react";
import styles from "../../../styles/NavItem.module.scss";
import { ACTIVE_TAB_COLOR, DEFAULT_TAB_COLOR } from "../../constants";
import { IconProps } from "../../icons/personIcon";

interface NavItemProps {
  text: string;
  href: string;
  icon: React.FC<IconProps>;
  active: boolean;
}

export const NavItem: React.FC<NavItemProps> = React.memo(
  ({ text, icon: Icon, href, active }) => {
    return (
      <Link href={href}>
        <a
          className={`${styles.navItem} ${active ? styles.navItem_active : ""}`}
        >
          {Icon && (
            <div className={styles.iconContainer}>
              <Icon color={active ? ACTIVE_TAB_COLOR : DEFAULT_TAB_COLOR} />
            </div>
          )}
          <div>{text}</div>
        </a>
      </Link>
    );
  }
);

NavItem.displayName = "NavItem";
