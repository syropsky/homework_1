'use strict';

let money = prompt("Your budgen for 1 month?",""),
    time = prompt("Introduce date YYYY-MM-DD","2020-03-21"),
    que1 = prompt("Enter a required item this month", "scarves and hats"),
    que2 = +prompt("How much will it cost?", ""),
    que3 = prompt("Enter a required item this month", "helmets and masks"),
    que4 = +prompt("How much will it cost?", "");
    
    


var appData = {
    budget: money, 
    timeData: time,
    expenses: {requiredItem1:que1 , requiredItem1_cost:que2, requiredItem2:que3 , requiredItem2_cost:que4},
    optionalExpenses: {},
    income: [],
    saving: false
};

alert("your budget for 1 day is "+ parseFloat((appData.budget-(appData.expenses.requiredItem1_cost+appData.expenses.requiredItem2_cost))/30).toFixed(2) +" units.");