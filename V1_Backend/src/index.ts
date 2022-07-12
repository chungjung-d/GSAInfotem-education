import * as express from 'express' // 1
const app = express();
const cors = require('cors');

app.use(cors());
app.get('/', (req: express.Request, res: express.Response) => { // 2
    res.send('Hello World!');
});

app.get('/hello', (req: express.Request, res: express.Response) => { // 2

    const hello = {hello : "hello"}

    res.send(hello);
});
const port = 4000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});