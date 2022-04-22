import React, { useCallback, useState } from "react";
import { SearchContainer } from "../../src/components/search-container/search-container.component";
import { WeatherContainer } from "../../src/components/weather-container/weather-container.component";
import { useGetTempInfo } from "../../src/hooks/useGetTempInfo";
import { MainContainer } from "../../src/shared/main-container/main-container.component";

const Weather = React.memo(() => {
  const { getTempInfoByName, data, loading, error } = useGetTempInfo();
  const [firstRender, setFirstRender] = useState<boolean>(false);

  const searchHandler = useCallback((value: string) => {
    getTempInfoByName(value);
    setFirstRender(true);
  }, [getTempInfoByName]);

  return (
    <MainContainer>
      <>
        <SearchContainer search={searchHandler} />
        <WeatherContainer
          data={data}
          loading={loading}
          error={error}
          isRendered={firstRender}
        />
      </>
    </MainContainer>
  );
});

Weather.displayName = "Weather";

export default Weather;
