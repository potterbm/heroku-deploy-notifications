const bodyParser = require('koa-bodyparser');
const github     = require('./github');
const Koa        = require('koa');
const slack      = require('./slack');

var PORT = process.env.PORT || 9000;

const app = new Koa();

app.use(bodyParser());

app.use(github);
app.use(slack);

app.listen(PORT);
