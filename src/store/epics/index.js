import { combineEpics } from 'redux-observable';
import { uploadBrandPhotoEpic } from './brandEpics';

export default combineEpics(uploadBrandPhotoEpic);
