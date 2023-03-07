function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.1,
    'QUARTER': 0.25,
    'ONE': 1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100
  };

  let change = cash - price;
  let totalCash = cid.reduce((acc, curr) => acc + curr[1], 0);
  let result = {
    status: '',
    change: []
  };

  if (totalCash < change) {
    result.status = 'INSUFFICIENT_FUNDS';
    return result;
  } else if (totalCash === change) {
    result.status = 'CLOSED';
    result.change = cid;
    return result;
  } else {
    result.status = 'OPEN';
    for (let i = cid.length - 1; i >= 0; i--) {
      let currencyName = cid[i][0];
      let currencyTotal = cid[i][1];
      let currencyValue = currencyValues[currencyName];
      let currencyAmount = (currencyTotal / currencyValue).toFixed(2);
      let currencyToReturn = 0;

      while (change >= currencyValue && currencyAmount > 0) {
        change -= currencyValue;
        change = Math.round(change * 100) / 100;
        currencyAmount--;
        currencyToReturn++;
      }

      if (currencyToReturn > 0) {
        result.change.push([currencyName, currencyToReturn * currencyValue]);
      }
    }

    if (change > 0) {
      result.status = 'INSUFFICIENT_FUNDS';
      result.change = [];
      return result;
    }

    return result;
  }
}