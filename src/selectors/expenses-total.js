export default (expenses)=>{
    const amountsArray = expenses.map((expense)=>{
        return expense.amount;
    });
    return amountsArray.reduce((sum, amount)=>{
        return sum + amount;
    }, 0);
};