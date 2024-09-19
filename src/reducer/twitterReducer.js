import { CHANGE_AVATAR, CHANGE_NAME, CHANGE_STATS } from '../actions/twitterActions';

const initialState = {
  user: {
    name: 'Monster',
    avatar: 'https://gravatar.com/avatar/000?d=monsterid',
  },
  stats: {
    followers: 0,
    following: 0,
  },
};

export const twitterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AVATAR:
      return {
        ...state,
        user: {
          ...state.user,
          avatar: action.payload || state.user.avatar,
        },
      };

    case CHANGE_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload || state.user.name,
        },
      };

    case CHANGE_STATS:
      const { statsType, sum } = action.payload;
      return {
        ...state,
        stats: {
          ...state.stats,
          [statsType]: Math.max(0, state.stats[statsType] + sum),
        },
      };

    default:
      return state;
  }
};