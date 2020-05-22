const server = require('./api/server.js');

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`*** API is running on port http://localhost:${PORT}/ ***`);
});