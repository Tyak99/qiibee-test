import { ajax } from 'rxjs/ajax';
import {
  filter, mergeMap, map,
} from 'rxjs/operators';
import { cloudinaryApi } from '../../config/config';
import { brandActions } from '../reducers/brandReducer';

const uploadBrandPhotoEpic = (action$) => action$.pipe(
  filter(brandActions.uploadBrandPhoto.match),
  mergeMap((action) => ajax({
    url: cloudinaryApi,
    method: 'POST',
    body: action.payload.formData,
  }).pipe(
    map((response) => brandActions.uploadBrandPhotoSuccessful({
      imageData: response.response,
      brandId: action.payload.brandId,
    })),
  )),
);

export { uploadBrandPhotoEpic };
