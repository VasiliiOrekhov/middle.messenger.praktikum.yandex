import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'dist')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile('./dist/index.html', { root: __dirname });
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
