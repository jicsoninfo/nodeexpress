module.exports = function(router){
    router.get('/logout', (req, res) => {
        res.send('This is logout router through index file.......');
    });
    
}