import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type BooksResponse = {
  __typename?: 'BooksResponse';
  books: Array<Book>;
  hasNextPage: Scalars['Boolean'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Mutation = {
  __typename?: 'Mutation';
  removeBook: Scalars['Boolean'];
};


export type MutationRemoveBookArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  books: BooksResponse;
};


export type QueryBooksArgs = {
  cursor?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  searchQuery?: Maybe<Scalars['String']>;
};

export type BooksQueryVariables = Exact<{
  searchQuery?: Maybe<Scalars['String']>;
  cursor?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
}>;


export type BooksQuery = { __typename?: 'Query', books: { __typename?: 'BooksResponse', hasNextPage: boolean, books: Array<{ __typename?: 'Book', id: string, title?: Maybe<string>, author?: Maybe<string> }> } };

export type RemoveBookMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveBookMutation = { __typename?: 'Mutation', removeBook: boolean };


export const BooksDocument = gql`
    query Books($searchQuery: String, $cursor: String, $first: Int!) {
  books(searchQuery: $searchQuery, cursor: $cursor, first: $first) {
    books {
      id
      title
      author
    }
    hasNextPage
  }
}
    `;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *      searchQuery: // value for 'searchQuery'
 *      cursor: // value for 'cursor'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useBooksQuery(baseOptions: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
      }
export function useBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
        }
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = Apollo.QueryResult<BooksQuery, BooksQueryVariables>;
export const RemoveBookDocument = gql`
    mutation removeBook($id: String!) {
  removeBook(id: $id)
}
    `;
export type RemoveBookMutationFn = Apollo.MutationFunction<RemoveBookMutation, RemoveBookMutationVariables>;

/**
 * __useRemoveBookMutation__
 *
 * To run a mutation, you first call `useRemoveBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeBookMutation, { data, loading, error }] = useRemoveBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveBookMutation(baseOptions?: Apollo.MutationHookOptions<RemoveBookMutation, RemoveBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveBookMutation, RemoveBookMutationVariables>(RemoveBookDocument, options);
      }
export type RemoveBookMutationHookResult = ReturnType<typeof useRemoveBookMutation>;
export type RemoveBookMutationResult = Apollo.MutationResult<RemoveBookMutation>;
export type RemoveBookMutationOptions = Apollo.BaseMutationOptions<RemoveBookMutation, RemoveBookMutationVariables>;