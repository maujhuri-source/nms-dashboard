const fs = require('fs');
const path = require('path');

const compiled = path.join(__dirname, 'dashboard-compiled.jsx');
const jsxContent = fs.readFileSync(compiled, 'utf8');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NMS Mission Control</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.2/babel.min.js"></script>
</head>
<body style="margin:0;padding:0">
  <div id="root"></div>
  <script type="text/babel">
${jsxContent}
    // Render the Dashboard component
    ReactDOM.createRoot(document.getElementById('root')).render(<Dashboard/>);
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'index.html'), html);
console.log('Generated index.html');