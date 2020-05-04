'use strict'

let money = +prompt('Ваш бюджет на месяц', '0');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appDate ={
    budget : money,
    timeData : time,
    expenses : {},
    optionalsExpenses : {},
    income : [],
    savings : false
}

let expenseItem = prompt('Введите обязательную стать расходов в этом месяце', '');
let expenseData = prompt('Во сколько обойдется?', '');

appDate.expenses = {
[expenseItem] : expenseData
}
alert(appDate.budget/30)
console.log(appDate)