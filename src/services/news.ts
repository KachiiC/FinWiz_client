import { removeNulls } from 'helpers/object.helpers';

export const newsServices = () => {
  return fetch('http://127.0.0.1:8000/news')
    .then((res) => res.json())
    .then((res) => removeNulls(res));
};