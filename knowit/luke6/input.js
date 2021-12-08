import fetch from 'node-fetch';

const response = await fetch('https://julekalender-backend.knowit.no/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBallDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--20b29549a475416a15aa81ff11b00da4c4103e67/pakker.txt?disposition=inline');

const data = (await response.text()).trim().split('\n').map(r => r.trim()).map(p => p.split(',').map(n => parseInt(n, 10)));

export default data;
