import { FETCH_SUMMONER } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type){
    case FETCH_SUMMONER:
      return  action.payload.data
  }
  return state
}
