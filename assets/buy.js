$(document).ready(function() {

    var rate;
    var rateAmount;
    var daychange;
    
    // function to access euro/usd api
    $("#exchangeCur").on("click", function() {

        var currency1 = $("#inputCur").children("option:selected").val();
        var currency2 = $("#inputCur2").children("option:selected").val();
        var amount = $("#curAmount").val();

        // using api: https://rapidapi.com/natkapral/api/currency-converter5
        var queryURL = 	"https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=" + currency1 + "&to=" + currency2 + "&amount=" + amount;
        
        // passed to $.ajax to recieve response
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": queryURL,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
                "x-rapidapi-key": "2baeb4eca6mshb648eeb18d253bdp1392e1jsnf42824529a45"
            }
        };
        
        $.ajax(settings).done(function (response) {
        }).then(updatePage);

        function updatePage(currencyData) {
            console.log(currencyData);
            rate = currencyData.rates.USD.rate;
            rateAmount = currencyData.rates.USD.rate_for_amount;
            console.log(rate);
            console.log(rateAmount);


        }
    });



    $("#exchangeCry").on("click", function() {

        var currency1 = $("#inputCur").children("option:selected").val();
        var currency2 = $("#inputCur2").children("option:selected").val();
        var amount = $("#curAmount").val();

        // var amount = $("amount").val().trim();
        // Boolean to view last 24 hours
        var history = "true"
        // convert from currency1 to currency
        // using api: https://rapidapi.com/natkapral/api/currency-converter5
        var queryURL = "https://coingecko.p.rapidapi.com/simple/price?include_24hr_change=" + history +"&ids=" + currency1 + "&vs_currencies=" + currency2;
        
        // passed to $.ajax to recieve response
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": queryURL,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coingecko.p.rapidapi.com",
                "x-rapidapi-key": "2baeb4eca6mshb648eeb18d253bdp1392e1jsnf42824529a45"
            }
        };
        
        $.ajax(settings).done(function (response) {
            console.log(response);
        }).then(updatePage);

        function updatePage(cryptoData) {
            console.log(cryptoData);
            rate = cryptoData.bitcoin.usd;
            rateAmount = rate*amount;
            daychange = cryptoData.bitcoin.usd_24h_change;

        }
    });


});
