import { combineReducers} from 'redux';
import HairReducer from './HairReducer';
import NoseReducer from './NoseReducer';
import EyesReducer from './EyesReducer';
import MouthReducer from './MouthReducer';
import CheeksReducer from './CheeksReducer';

export default combineReducers({
   hair: HairReducer,
   nose: NoseReducer,
   eyes: EyesReducer,
   mouth: MouthReducer,
   cheeks: CheeksReducer
});