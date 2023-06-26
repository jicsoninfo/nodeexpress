

module.exports = function(router){
    router.get('/profile', (req, res)=>{
        res.send('This is profile router through index');
    });

    router.get('/profile/upddate', (req, res)=>{
        res.send('This is profile update router through index');
    });
}