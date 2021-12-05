import assert from 'assert';
import { findIndex } from 'ramda';
import fetch from 'node-fetch';

const ordliste = [
  "en", "to", "tre", "fire", "fem", "seks", "sju", "åtte", "ni", "ti", "elleve",
  "tolv", "tretten", "fjorten", "femten", "seksten", "sytten", "atten", "nitten",
  "tjue", "tretti", "førti", "femti"
].reverse();
const tall = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50].reverse();

const sum = (str) => {
  let tail = str, acc = 0;
  while(tail.length > 0) {
    const idx = findIndex(ord => tail.match(ord)?.index === 0, ordliste);
    acc += tall[idx];
    tail = tail.slice(ordliste[idx].length);
  }
  return acc;
}

const response = await fetch('https://julekalender-backend.knowit.no/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBNdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0af4f790dec929a13e3615fdac11667323ea1597/tall.txt?disposition=inline');

console.log('Svar', sum((await response.text()).trim()));
