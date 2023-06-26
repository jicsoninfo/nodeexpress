module.exports = function(router){
    router.get('/home', (req, res) => {
        res.send('Hello world, This is home router through index');
    });
    
}