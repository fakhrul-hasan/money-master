document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalExpense =
    takeValue("food") + takeValue("rent") + takeValue("clothes");
  const balance = takeValue("income") - totalExpense;
  if (totalExpense > takeValue("income")) {
    alert("Cut your coat, according to your clothes");
  } else {
    setElementById("total-expense", totalExpense);
    setElementById("balance", balance);
  }
});

document.getElementById("save-btn").addEventListener("click", function () {
  const savingAmount = (takeValue("income") * takeValue("save")) / 100;
  const totalExpense = takeValue("food") + takeValue("rent") + takeValue("rent");
  const balance = takeValue("income") - totalExpense;
  const remainingBalance = balance - savingAmount;
  if (remainingBalance < 0) {
    alert("Insuficient balance");
  } else {
    setElementById("saving-amount", savingAmount);
    setElementById("remaining-balance", remainingBalance);
  }
});
