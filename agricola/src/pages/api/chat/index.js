export default async function handler(req, res) {
    if (req.method === 'POST') {
        const message = req.body;
        if (res && res.socket && res.socket.server && res.socket.server.io) {
            res.socket.server.io.emit('message', message);
        }
        res.status(201).json(message);
    }
}
