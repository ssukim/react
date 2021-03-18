import axios, {AxiosError} from 'axios';
import {createReducer, createAsyncAction} from 'typesafe-actions';
import {GithubState, GithubAction} from './types';
// import {GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_ERROR} from './actions';
// import { GithubProfile } from '../../api/github';

export async function getUserProfile(username:string) {
    // Generic을 통해 응답 데이터의 타입을 설정
    const response = await axios.get<GithubProfile>(
        `https://api.github.com/users/${username}`
    );
    return response.data; // 데이터 값을 바로 반환
}

interface GithubProfile {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: null;
    email: null;
    hireable: null;
    bio: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
  }

const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR
)<string, GithubProfile, AxiosError>();

const initialState: GithubState = {
    userProfile: {
        loading: false,
        error: null,
        data: null
    }
};

const github = createReducer<GithubState, GithubAction>(initialState, {
    [GET_USER_PROFILE]: state => ({
        ...state,
        userProfile: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
        ...state,
        userProfile: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_USER_PROFILE_ERROR]: (state, action) => ({
        ...state,
        userProfile: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
})

export default github;
