import { pipe } from 'ramda';

export default pipe(
  data => data.trim(),
  data => data.split('\n'),
  data => data.map(row => row.split(' -> ')),
  data => data.map(([xy1, xy2]) => ([
    xy1.trim().split(',').map(t => parseInt(t, 10)),
    xy2.trim().split(',').map(t => parseInt(t, 10)),
  ])),
);
