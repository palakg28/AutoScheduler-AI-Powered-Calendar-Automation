const fs = require('fs');

const text = fs.readFileSync(0, 'utf8').trim();
const rfc = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:\d{2})$/;

if (!text) {
  console.error('Provide an RFC3339 string on stdin.');
  process.exit(1);
}

const ok = rfc.test(text) && !Number.isNaN(Date.parse(text));
console.log(ok ? 'RFC3339 ✅' : 'Invalid ❌');
