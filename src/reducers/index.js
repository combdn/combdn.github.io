import { combineReducers } from 'redux';
import galleryReducer from '../features/gallery/gallerySlice';

export default combineReducers({
  gallery: galleryReducer
});
