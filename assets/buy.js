$(document).ready(function() {
    // function to access euro/usd api
    $("#euroUSDBtn").on("click", function() {

        // currency to convert variables
        var currency1 = "eur";
        var currency2 = "usd";
        // amount user would like to convert, set to 1 as default to show rate
        var amount = "1"
        // convert from currency1 to currency
        // using api: https://rapidapi.com/natkapral/api/currency-converter5
        var queryURL = 	"https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=" + currency1 +"&to=" + currency2 + "&amount=" + amount;
        
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
            console.log(response);
        });
    });
});


$("#btcUSDBtn").on("click", function() {

    // currency to convert variables
    var currency1 = "btc";
    var currency2 = "usd";
    // amount user would like to convert, set to 1 as default to show rate
    var amount = "1"
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
    });
});
});
