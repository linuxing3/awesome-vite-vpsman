import { SubscriptionClient } from 'onegraph-subscription-client';
import {
  useQuery,
  subscriptionExchange,
  defaultExchanges,
  Client,
  UseQueryResponse
} from 'urql';

import OneGraphAuth from 'onegraph-auth';

export const APP_ID = '1ca00a62-5731-4983-b56f-ed185c3bdb27';

export const auth = new OneGraphAuth({
  appId: APP_ID
});

export const subscriptionClient = new SubscriptionClient(auth.appId, {
  oneGraphAuth: auth
});

export const urqlClient = new Client({
  url: `https://serve.onegraph.com/graphql?app_id=${APP_ID}`,
  fetchOptions: () => ({ headers: auth.authHeaders() }),
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription(operation) {
        return subscriptionClient.request(operation);
      }
    })
  ]
});

const GITHUB_USER_QUERY = `
  # Consider giving this query a unique, descriptive
  # name in your application as a best practice
  query UnnamedQuery {
    gitHub {
      user(login: "linuxing3") {
        avatarUrl
        login
        name
        email
        bio
        websiteUrl
        status {
          id
        }
      }
    }
  }
`

const GITHUB_REPOSITORY_QUERY = `
  # Consider giving this query a unique, descriptive
  # name in your application as a best practice
  query GithubRepositoryQuery ($username: String!) {
    gitHub {
      user(login: $username) {
        avatarUrl
        repositories(
          first: 10
          orderBy: {field: CREATED_AT, direction: DESC}
          isFork: false
        ) {
          edges {
            node {
              id
              name
              url
              updatedAt
            }
          }
        }
      }
    }
  }
`;

export const getRespositories = (username: string): UseQueryResponse<any> => {
  const [{ data, fetching, error, stale }, reexecuteQuery] = useQuery({
    query: GITHUB_REPOSITORY_QUERY,
    variables: {
      username
    }
  });
  let list: any = [];

  if (data) {
    data.gitHub.user.repositories.edges.forEach((item: any) => {
      list.push(item.node);
    });
  }
  return [{ data: list, fetching, error, stale }, reexecuteQuery];
};

export const getUserInfo = (username: string): UseQueryResponse<any>  => {
  const [{ data, fetching, error, stale }, reexecuteQuery] = useQuery({
    query: GITHUB_USER_QUERY,
    variables: {
      username
    }
  });
  if (data) {
    localStorage.setItem('avatarUrl', data.gitHub.user.avatarUrl);
    localStorage.setItem('loginName', data.gitHub.user.login);
    return [{ data: data.gitHub.user, fetching, error, stale }, reexecuteQuery];
  }
  return [{ data: {}, fetching, error, stale }, reexecuteQuery];
};
