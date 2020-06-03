import {
  GET_PROFILE,
  GET_ALL_PROFILES,
  PROFILE_ERROR
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: []
}

export default function(state = initialState, action) {
  const { type,payload } = action;

  switch (type) {
    case GET_PROFILE:
    return{
      ...state,
      profile: payload,
      loading: false
    }
    break;

    case GET_ALL_PROFILES:
    return{
      ...state,
      profiles: payload,
      loading: false
    }
    break;

    case PROFILE_ERROR:
    return{
      ...state,
      error: payload,
      loading: false
    }
    break;
    default:
      return state;

  }
}
