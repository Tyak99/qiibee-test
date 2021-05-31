import { ajax } from 'rxjs/ajax';
import {
  delay, mapTo, filter, mergeMap, map,
} from 'rxjs/operators';
import { brandActions } from '../reducers/brandReducer';

const uploadBrandPhotoEpic = (action$) => action$.pipe(
  filter(brandActions.uploadBrandPhoto.match),
  mergeMap((action) => ajax({
    url: 'https://api.cloudinary.com/v1_1/buymezobo/upload',
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
