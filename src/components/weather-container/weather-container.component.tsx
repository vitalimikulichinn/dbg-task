import { ApolloError } from "@apollo/client";
import React from "react";
import styles from "../../../styles/Weather.module.scss";
import { ITempInfo } from "../../hooks/useGetTempInfo";
import { Loader } from "../loader/loader.component";
import { weatherBackground, weatherIcon } from "./weather-container.helper";

interface WeatherContainerProps {
  data?: ITempInfo | null;
  loading: boolean;
  error?: ApolloError;
  isRendered: boolean;
}

export const WeatherContainer: React.FC<WeatherContainerProps> = React.memo(
  ({ data, loading, error, isRendered }) => {
    const date = new Date();
    const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
      type: "region",
    });

    return (
      <div className={styles.weatherWrapper}>
        <div
          className={`${styles.weatherContainer} ${
            error || (isRendered && !loading && !data) ? styles.error : ""
          } ${
            data?.weather?.temperature?.actual
              ? weatherBackground(data?.weather?.temperature?.actual)
              : ""
          }`}
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              {data && (
                <>
                  <p className={styles.location}>
                    {regionNamesInEnglish.of(data.country as string)},{" "}
                    {data?.name}
                  </p>
                  <p className={styles.date}>
                    {date.toDateString().toUpperCase()}
                  </p>
                  <div className={styles.iconContainer}>
                    {data?.weather?.temperature?.actual
                      ? weatherIcon(data?.weather?.temperature?.actual)
                      : null}
                  </div>
                  <p className={styles.temperature}>
                    {Math.round(data?.weather?.temperature?.actual as number)}°C
                  </p>
                  <p className={styles.current}>current temperature</p>
                  <p className={styles.feelsTemperature}>
                    Feels like{" "}
                    <span>
                      {Math.round(
                        data?.weather?.temperature?.feelsLike as number
                      )}
                      °C
                    </span>
                  </p>
                </>
              )}
              {!data && isRendered && (
                <>
                  <p className={styles.temperature}>Not found</p>
                  <p className={styles.current}>Type another city</p>
                </>
              )}
              {error && (
                <>
                  <p className={styles.temperature}>Error</p>
                  <p className={styles.current}>{error.message}</p>
                </>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
);

WeatherContainer.displayName = "WeatherContainer";
