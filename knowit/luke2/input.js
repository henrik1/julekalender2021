import { pipe } from 'ramda';
import fetch from 'node-fetch';

const response = await fetch('https://julekalender-backend.knowit.no/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBOUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7bb23c39ab7eb5b367e3b0841b86e0667756397f/cities.csv?disposition=inline');

const parsePoint =
  pipe(
    str => str.split(',').slice(-1)[0],
    str => str.slice(str.indexOf('(') + 1, str.indexOf(')')),
    str => str.split(' '),
    loc => [parseFloat(loc[0]), parseFloat(loc[1])]
  );

const points = (await response.text()).trim().split('\n').slice(1).map(parsePoint);

export default points;
