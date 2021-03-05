const mongoose = require('mongoose')
const IncomeItem = require('../models/incomeItem.model')
const ExpenseItem= require('../models/expenseItem.model')
// const MONGODB_URI = 

mongoose
  .connect('mongodb://localhost/proyecto-final-dia-cero',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })

  const income= [
    {
        incomeOwner: "Roberto",
        incomeAmount: 2000,
        incomeSource: "Sueldo",
        incomeDate: 2020-03-01
  },
  {
    incomeOwner: "Pedro",
    incomeAmount: 3500,
    incomeSource: "Comisiones",
    incomeDate: 2020-03-04
}

]

IncomeItem.create(income)
.then(incomeItemsCreated => {
    console.log(`Created ${incomeItemsCreated.length} income items`)
    mongoose.connection.close()
}).catch(err => console.log(`An error ocurred: ${err}`))

