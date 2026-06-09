const fs = require('fs');
const path = 'src/ENKCRegistration.jsx';
const c = fs.readFileSync(path, 'utf8');
const newFirst = "import { useState, useEffect } from \"react\";";
if (c.startsWith(newFirst)) {
  console.log('Already new!');
} else {
  console.log('Old file - need update');
}