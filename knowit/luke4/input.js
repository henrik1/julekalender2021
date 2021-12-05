import { pipe } from 'ramda';
import fetch from 'node-fetch';

const response = await fetch('https://julekalender-backend.knowit.no/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBOdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--31fa0c541c69eeb9063ccfc56e686f4768662004/input.txt?disposition=inline');

const data = (await response.text()).trim().split('')

export default data;
