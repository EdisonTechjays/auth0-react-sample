const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { join } = require("path");

const app = express();

const port = process.env.SERVER_PORT || 3000;

console.log('port', port);

app.use(morgan("dev"));

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// Explicitly serve static files from the build directory
app.use('/static', express.static(join(__dirname, 'build/static')));
app.use(express.static(join(__dirname, "build")));

// Add logging for static file requests
app.use((req, res, next) => {
  console.log(`Requesting: ${req.path}`);
  next();
});

app.get('*', (req, res) => {
  console.log(`Fallback route for: ${req.path}`);
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
