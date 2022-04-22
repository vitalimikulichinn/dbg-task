import { Unit, useGetTempInfoLazyQuery } from "../../data-access/graphql";

export interface ITempInfo {
  country?: string | null;
  id?: string | null;
  name?: string | null;
  weather?: {
    temperature?: {
      actual?: number | null;
      feelsLike?: number | null;
    } | null;
  } | null;
}

export const useGetTempInfo = () => {
  const [getTempInfo, { data: rawData, error, refetch, loading }] =
    useGetTempInfoLazyQuery();
  const data = rawData?.getCityByName;

  const getTempInfoByName = (name: string) => {
    getTempInfo({
      variables: {
        name,
        config: {
          units: Unit.metric,
        },
      },
    });
  };

  return { getTempInfoByName, data, loading, error, refetch };
};
