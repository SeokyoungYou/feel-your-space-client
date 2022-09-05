import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T;
// export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ContentDetails = {
  __typename: "ContentDetails";
  duration: Maybe<Scalars["String"]>;
};

export type Id = {
  __typename: "Id";
  videoId: Maybe<Scalars["ID"]>;
};

export type Query = {
  __typename: "Query";
  searchVideos: Maybe<Array<Maybe<Video>>>;
};

export type Snippet = {
  __typename: "Snippet";
  description: Maybe<Scalars["String"]>;
  thumbnails: Maybe<Thumnails>;
  title: Maybe<Scalars["String"]>;
  channel: Maybe<Channel>;
};

export type Statistics = {
  __typename: "Statistics";
  likeCount: Maybe<Scalars["String"]>;
  viewCount: Maybe<Scalars["String"]>;
};
export type Channel = {
  __typename: "Channel";
  title: Maybe<Scalars["String"]>;
  thumbnails: Maybe<Thumnails>;
};

export type Thumnail = {
  __typename: "Thumnail";
  height: Maybe<Scalars["Int"]>;
  url: Maybe<Scalars["String"]>;
  width: Maybe<Scalars["Int"]>;
};

export type Thumnails = {
  __typename: "Thumnails";
  default: Maybe<Thumnail>;
  high: Maybe<Thumnail>;
  medium: Maybe<Thumnail>;
};

export type Video = {
  __typename: "Video";
  id: Maybe<Id>;
  infos: Maybe<VideoInfos>;
  snippet: Maybe<Snippet>;
  url: Maybe<Scalars["String"]>;
};

export type VideoInfos = {
  __typename: "VideoInfos";
  contentDetails: Maybe<ContentDetails>;
  statistics: Maybe<Statistics>;
};

export type GetVideoInfosQueryVariables = Exact<{ [key: string]: never }>;

export type GetVideoInfosQuery = {
  __typename?: "Query";
  searchVideos?: Array<{
    __typename?: "Video";
    url?: string | null;
    infos?: {
      __typename?: "VideoInfos";
      contentDetails?: {
        __typename?: "ContentDetails";
        duration?: string | null;
      } | null;
      statistics?: {
        __typename?: "Statistics";
        viewCount?: string | null;
        likeCount?: string | null;
      } | null;
    } | null;
    id?: { __typename?: "Id"; videoId?: string | null } | null;
    snippet?: {
      __typename?: "Snippet";
      channelId?: string | null;
      channelThumbnail?: string | null;
      title?: string | null;
      description?: string | null;
      thumbnails?: {
        __typename?: "Thumnails";
        default?: {
          __typename?: "Thumnail";
          url?: string | null;
          width?: number | null;
          height?: number | null;
        } | null;
        medium?: {
          __typename?: "Thumnail";
          url?: string | null;
          width?: number | null;
          height?: number | null;
        } | null;
        high?: {
          __typename?: "Thumnail";
          url?: string | null;
          width?: number | null;
          height?: number | null;
        } | null;
      } | null;
    } | null;
  } | null> | null;
};

export const GetVideoInfosDocument = gql`
  query GetVideoInfos {
    searchVideos {
      infos {
        contentDetails {
          duration
        }
        statistics {
          viewCount
          likeCount
        }
      }
      url
      id {
        videoId
      }
      snippet {
        channelId
        channelThumbnail
        title
        description
        thumbnails {
          default {
            url
            width
            height
          }
          medium {
            url
            width
            height
          }
          high {
            url
            width
            height
          }
        }
      }
    }
  }
`;

/**
 * __useGetVideoInfosQuery__
 *
 * To run a query within a React component, call `useGetVideoInfosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVideoInfosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVideoInfosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVideoInfosQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetVideoInfosQuery,
    GetVideoInfosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetVideoInfosQuery, GetVideoInfosQueryVariables>(
    GetVideoInfosDocument,
    options
  );
}
export function useGetVideoInfosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetVideoInfosQuery,
    GetVideoInfosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetVideoInfosQuery, GetVideoInfosQueryVariables>(
    GetVideoInfosDocument,
    options
  );
}
export type GetVideoInfosQueryHookResult = ReturnType<
  typeof useGetVideoInfosQuery
>;
export type GetVideoInfosLazyQueryHookResult = ReturnType<
  typeof useGetVideoInfosLazyQuery
>;
export type GetVideoInfosQueryResult = Apollo.QueryResult<
  GetVideoInfosQuery,
  GetVideoInfosQueryVariables
>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
