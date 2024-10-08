import { WebSocketServer } from 'ws';
// @ts-ignore
import data from './data2.json' assert { type: "json" };
;
const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });
    ws.send(JSON.stringify(data));
});
