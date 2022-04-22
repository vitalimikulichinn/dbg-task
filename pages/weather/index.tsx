import React from "react";
import { SearchContainer } from "../../src/components/search-container/search-container.component";
import { MainContainer } from "../../src/components/shared/main-container/main-container.component";
import { WeatherContainer } from "../../src/components/weather-container/weather-container.component";
import { useGetTempInfo } from "../../src/hooks/useGetTempInfo";

const Weather = React.memo(() => {
  const { getTempInfoByName, data, loading, error } = useGetTempInfo();

  return (
    <MainContainer>
      <>
        <SearchContainer search={getTempInfoByName} />
        <WeatherContainer data={data} loading={loading} error={error} />
      </>
    </MainContainer>
  );
});

Weather.displayName = "Weather";

export default Weather;
