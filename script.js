function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}

/*
function convertCurrency(amount, input){
  if (input = "usd"){
    convertValue = amount * 23200.70;
  }
  if (input = "eur"){
    convertValue = amount * 25383.96;
  return convertValue;
}*/

async function getConvertedValue(conversion, amount){
  const api = `https://free.currencyconverterapi.com/api/v6/convert?q=${conversion}&compact=y&apiKey=15a224c5f34bb33b4e67`
  const json = await fetch (api);
  const result = await json.json();
  return result[conversion].val * amount; 
}

async function convertCurrency() {
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const amount = document.getElementsByTagName('input')[0].value;
  const convertedValue = await getConvertedValue(`${from}_${to}`,amount);

  document.getElementById('resultarea').innerHTML = formatCurrency(to, convertedValue);
}

/*
let finalConvertedAndFormattedValue = convertCurrency()
function convertToVnd() {
    let conversion = 23262;
    let vndAmount = // FILL_ME_IN
    document.write("50 USD is " + vndAmount + " VND");
    return 0;
  }
  function converter(){
   let amount = document.getElementById("amount").value;
   let input = document.getElementById("from").value;
   let result = convertCurrency(amount, input);
   document.getElementById("resultarea").innerHTML = result;
 }*/