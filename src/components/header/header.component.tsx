import React from "react";
import styles from "../../../styles/Header.module.scss";
import { NavItem } from "./nav-item.component";
import { PersonIcon } from "../../icons/personIcon";
import { WeatherIcon } from "../../icons/weatherIcon";
import { useRouter } from "next/router";
import { PERSON_ROUTE, WEATHER_ROUTE } from "../../constants";

export const Header = React.memo(() => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <NavItem
        href={PERSON_ROUTE}
        text="Person"
        icon={PersonIcon}
        active={router.pathname === PERSON_ROUTE}
      />
      <NavItem
        href={WEATHER_ROUTE}
        text="Weather"
        icon={WeatherIcon}
        active={router.pathname === WEATHER_ROUTE}
      />
    </header>
  );
});

Header.displayName = "Header";
