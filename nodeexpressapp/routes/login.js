
// module.exports = function(router){
//     router.get('/login', (req, res) =>{
//         res.send('This is login router');
//     });
// }

module.exports = function(router){
    
    router.get('/login', (req, res) =>{
        res.send('This is login router through index.......');
    });


    router.get('/logintwo', (req, res) =>{
        res.send('.......This is login router two through index.......');
    });

}
