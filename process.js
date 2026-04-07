const fs = require('fs');
const path = require('path');

const input = path.join(__dirname, 'nms-dashboard-v2.jsx');
let content = fs.readFileSync(input, 'utf8');

// Replace import line
content = content.replace(
  'import { useState, useCallback, useEffect } from "react";',
  'const { useState, useCallback, useEffect } = React;'
);

// Remove export default from function definition
content = content.replace('export default function Dashboard()', 'function Dashboard()');

// Add window.Dashboard assignment after the function closing brace
// Find the last closing brace of the function (simplistic: append after the whole file)
// Since we know the function is the last thing in file, we can just append.
// But better to insert before the end of file.
content += '\n\nwindow.Dashboard = Dashboard;';

// Write to a new file
const output = path.join(__dirname, 'dashboard-compiled.jsx');
fs.writeFileSync(output, content);
console.log('Compiled to', output);