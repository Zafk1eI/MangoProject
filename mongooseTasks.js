var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')
var Mango = mongoose.model('Mango', { name: String })
var mangoes = new Mango({ name: 'Манго Кат Чу' })
mangoes.save().then(() => {
    console.log('saved');
})
.catch((err) => {
console.error(err);
});