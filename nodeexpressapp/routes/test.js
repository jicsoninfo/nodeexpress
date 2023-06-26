module.exports = function(router){
    router.get('/ab?cd', (req, res)=>{
        res.send('ab?cd');
    });

    router.get('/ab+cd', (req, res)=>{
        res.send('ab+cd');
    });

    router.get('/ab*cd', (req, res)=>{
        res.send('ab*cd');
    });

    router.get('/ab(cd)?e', (req, res)=>{
        res.send('ab(cd)?e');
    });

    router.get('/a/', (req, res)=>{
        res.send('/a/');
    });

    router.get('/.*fly$/', (req, res)=>{
        res.send('/.*fly$');
    });

    router.get('/users/:userId/books/:bookId', (req, res)=>{
        res.send(req.params);
    });

    router.get('/flights/:from-:to', (req, res) => {
        res.send(req.params);
    });

    router.get('/flightstwo/:from.:to', (req, res) => {
        res.send(req.params);
    });

    router.get('/flightsthree/:flightId(\d+)', (req, res) => {
        res.send(req.params);
    });
}