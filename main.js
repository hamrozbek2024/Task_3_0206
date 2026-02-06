const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
let idx = 0;

const n = Number(input[idx++]);
const a = [];
for (let i = 0; i < n; i++) {
  a.push(Number(input[idx++]));
}

const len = Array(n).fill(1); // LIS uzunligi
const cnt = Array(n).fill(1); // LIS lar soni

let maxLen = 1;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (a[j] < a[i]) {
      if (len[j] + 1 > len[i]) {
        len[i] = len[j] + 1;
        cnt[i] = cnt[j];
      } else if (len[j] + 1 === len[i]) {
        cnt[i] += cnt[j];
      }
    }
  }
  if (len[i] > maxLen) {
    maxLen = len[i];
  }
}

let total = 0;
for (let i = 0; i < n; i++) {
  if (len[i] === maxLen) {
    total += cnt[i];
  }
}

console.log(maxLen + " " + total);
