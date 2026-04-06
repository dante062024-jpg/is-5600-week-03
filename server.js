const express = require('express');
const app = express();

// Middleware to read JSON
app.use(express.json());

// Basic routes
app.get('/', (req, res) => {
    res.json({ message: "Home Route" });
});

app.get('/about', (req, res) => {
    res.json({ message: "About Route" });
});

// Simple chat storage
let messages = [];

// POST message
app.post('/chat', (req, res) => {
    const msg = req.body.message;

    if (!msg) {
        return res.status(400).json({ error: "Message required" });
    }

    messages.push(msg);
    res.json({ status: "Message received" });
});

// GET all messages
app.get('/chat', (req, res) => {
    res.json(messages);
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});