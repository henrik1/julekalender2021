import fetch from 'node-fetch';

const response = await fetch('https://julekalender-backend.knowit.no/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBak1DIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d6d3984e0f603df1771ef6b699e6e86d6ee577a7/tree.txt?disposition=inline');

const data = (await response.text()).trim()

export default data;
