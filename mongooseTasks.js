// var mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/test')
// var schema = mongoose.Schema({ name: String })

// schema.methods.taste = function(){
//     console.log(this.get("name") + " вкусное")
//     }    

// var Mango = mongoose.model('Mango', schema)
// var mangoes = new Mango({ name: 'Манго Кат Чу' })

// mangoes.save().then(() => {
//     mangoes.taste();
//     console.log('saved');
// })
// .catch((err) => {
// console.error(err);
// });

var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')
var Mango = require("./models/mango").Mango
var mangoes = new Mango({
title: "Манго Император",
nick: "imperator"
})
console.log(mangoes)

mangoes.save()
.then((mango) => {
        console.log("Saved Mango with title:", mango.title);
})
.catch((err) => {
        console.error(err);
});
    
