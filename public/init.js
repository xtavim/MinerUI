const server = require('server');
const { get } = server.router;
const { render } = server.reply;

server([
  get('/', ctx => render('index.html'))
]);