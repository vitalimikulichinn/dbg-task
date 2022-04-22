import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC'
}

export type City = {
  __typename?: 'City';
  coord?: Maybe<Coordinates>;
  country?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  weather?: Maybe<Weather>;
};

export type Clouds = {
  __typename?: 'Clouds';
  all?: Maybe<Scalars['Int']>;
  humidity?: Maybe<Scalars['Int']>;
  visibility?: Maybe<Scalars['Int']>;
};

export type ConfigInput = {
  lang?: InputMaybe<Language>;
  units?: InputMaybe<Unit>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
};

export enum Language {
  af = 'af',
  al = 'al',
  ar = 'ar',
  az = 'az',
  bg = 'bg',
  ca = 'ca',
  cz = 'cz',
  da = 'da',
  de = 'de',
  el = 'el',
  en = 'en',
  es = 'es',
  eu = 'eu',
  fa = 'fa',
  fi = 'fi',
  fr = 'fr',
  gl = 'gl',
  he = 'he',
  hi = 'hi',
  hr = 'hr',
  hu = 'hu',
  id = 'id',
  it = 'it',
  ja = 'ja',
  kr = 'kr',
  la = 'la',
  lt = 'lt',
  mk = 'mk',
  nl = 'nl',
  no = 'no',
  pl = 'pl',
  pt = 'pt',
  pt_br = 'pt_br',
  ro = 'ro',
  ru = 'ru',
  se = 'se',
  sk = 'sk',
  sl = 'sl',
  sp = 'sp',
  sr = 'sr',
  sv = 'sv',
  th = 'th',
  tr = 'tr',
  ua = 'ua',
  uk = 'uk',
  vi = 'vi',
  zh_cn = 'zh_cn',
  zh_tw = 'zh_tw',
  zu = 'zu'
}

export type Query = {
  __typename?: 'Query';
  getCityById?: Maybe<Array<Maybe<City>>>;
  getCityByName?: Maybe<City>;
};


export type QuerygetCityByIdArgs = {
  config?: InputMaybe<ConfigInput>;
  id?: InputMaybe<Array<Scalars['String']>>;
};


export type QuerygetCityByNameArgs = {
  config?: InputMaybe<ConfigInput>;
  country?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Summary = {
  __typename?: 'Summary';
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Temperature = {
  __typename?: 'Temperature';
  actual?: Maybe<Scalars['Float']>;
  feelsLike?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};

export enum Unit {
  imperial = 'imperial',
  kelvin = 'kelvin',
  metric = 'metric'
}

export type Weather = {
  __typename?: 'Weather';
  clouds?: Maybe<Clouds>;
  summary?: Maybe<Summary>;
  temperature?: Maybe<Temperature>;
  timestamp?: Maybe<Scalars['Int']>;
  wind?: Maybe<Wind>;
};

export type Wind = {
  __typename?: 'Wind';
  deg?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Float']>;
};

export type GetTempInfoQueryVariables = Exact<{
  name: Scalars['String'];
  config?: InputMaybe<ConfigInput>;
}>;


export type GetTempInfoQuery = { __typename?: 'Query', getCityByName?: { __typename?: 'City', id?: string | null, name?: string | null, country?: string | null, weather?: { __typename?: 'Weather', temperature?: { __typename?: 'Temperature', actual?: number | null, feelsLike?: number | null } | null } | null } | null };


export const GetTempInfoDocument = gql`
    query GetTempInfo($name: String!, $config: ConfigInput) {
  getCityByName(name: $name, config: $config) {
    id
    name
    country
    weather {
      temperature {
        actual
        feelsLike
      }
    }
  }
}
    `;

/**
 * __useGetTempInfoQuery__
 *
 * To run a query within a React component, call `useGetTempInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTempInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTempInfoQuery({
 *   variables: {
 *      name: // value for 'name'
 *      config: // value for 'config'
 *   },
 * });
 */
export function useGetTempInfoQuery(baseOptions: Apollo.QueryHookOptions<GetTempInfoQuery, GetTempInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTempInfoQuery, GetTempInfoQueryVariables>(GetTempInfoDocument, options);
      }
export function useGetTempInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTempInfoQuery, GetTempInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTempInfoQuery, GetTempInfoQueryVariables>(GetTempInfoDocument, options);
        }
export type GetTempInfoQueryHookResult = ReturnType<typeof useGetTempInfoQuery>;
export type GetTempInfoLazyQueryHookResult = ReturnType<typeof useGetTempInfoLazyQuery>;
export type GetTempInfoQueryResult = Apollo.QueryResult<GetTempInfoQuery, GetTempInfoQueryVariables>;