const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve an HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
