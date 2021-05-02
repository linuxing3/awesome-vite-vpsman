import { SubscriptionClient } from 'onegraph-subscription-client';
import OneGraphAuth from 'onegraph-auth';
import {
  useQuery,
  subscriptionExchange,
  defaultExchanges,
  Client,
  UseQueryResponse
} from 'urql';

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

export interface GithubNode {
  id?: number;
  name?: string;
  url?: string;
  updatedAt?: string;
}
export interface GithubRepository {
  gitHub: {
    user: {
      repositories: {
        edges: [
          {
            node: GithubNode;
          }
        ];
      };
    };
  };
}

type GitHubNodes = GithubNode[];

export interface GithubUser {
  gitHub: {
    user: GithubUserInfo;
  };
}

type GithubUserInfo = {
  avatarUrl?: string;
  login?: string;
  name?: string;
  email?: string;
  bio?: string;
  websiteUrl?: string;
  status?: {
    id?: number;
  };
};

export const GITHUB_USER_QUERY = `
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
`;

export const GITHUB_REPOSITORY_QUERY = `
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

/**
 * FIXED: profile允许用户链接Github账户启动鉴权, 这里不用重复鉴权
 * @param username string Github username
 * @returns void
 */
export const getRespositories = (username: string): UseQueryResponse<GitHubNodes> => {
  const [
    { data, fetching, error, stale },
    reexecuteQuery
  ] = useQuery<GithubRepository>({
    query: GITHUB_REPOSITORY_QUERY,
    variables: {
      username
    }
  });

  if (data !== undefined) {
    let list: GitHubNodes = [];
    data.gitHub.user.repositories.edges.forEach((item: { node: GithubNode}) => {
      list.push(item.node || {});
    });
    return [{ data: list, fetching, error, stale }, reexecuteQuery];
  }
  return [{ data: [], fetching, error, stale }, reexecuteQuery];
};

/**
 * FIXED: 路由进入到profile后，允许用户链接Github账户，启动鉴权
 * @param username string Github username
 * @returns void
 */
export const getUserInfo = (
  username: string
): UseQueryResponse<GithubUserInfo> => {
  const [
    { data, fetching, error, stale },
    reexecuteQuery
  ] = useQuery<GithubUser>({
    query: GITHUB_USER_QUERY,
    variables: {
      username
    }
  });
  if (data !== undefined && data.gitHub && data.gitHub.user) {
    const {
      gitHub: { user }
    } = data;
    localStorage.setItem('avatarUrl', user.avatarUrl || '');
    localStorage.setItem('loginName', user.login || '');
    return [{ data: data.gitHub.user, fetching, error, stale }, reexecuteQuery];
  }
  return [{ data: {}, fetching, error, stale }, reexecuteQuery];
};
