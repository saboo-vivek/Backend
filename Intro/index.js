const http = require("http");

const routes=require('./routes');

const server = http.createServer(routes);

// Listen on port 4000
const PORT = 4000;
server.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
