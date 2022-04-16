const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);


// check is the password was passed in as a command line param
if (process.argv.length < 3) {
    console.log('please provide the password as an argument: node mongo.js <password>')
    process.exit(1);
}

const password = process.argv[2]

const url = `mongodb+srv://memories:${password}@cluster0.lnhk5.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true})

// person schema: how person objects is stored in the db
const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 5) {
    const name = process.argv[3]
    const number = process.argv[4];
    const person = new Person({name, number})
    person
    .save()
    .then(person => {
        console.log(`added ${person.name} number ${person.number} to phonebook`)
        mongoose.connection.close()
        process.exit(1)
    })
} else  {
    Person.find({}).then(persons => {
        console.log("phonebook:")
        persons.forEach(person => {
            console.log(`${person.name} : ${person.number}`)
        })
        mongoose.connection.close()
        process.exit(1)
    })
}