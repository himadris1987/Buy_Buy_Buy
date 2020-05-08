// function to access euro/usd api
$("#euroUSDBtn").on("click", function() {

    // currency to convert variables
    var currency1 = "EUR"
    var currency2 = "USD"
    // convert from currency1 to currency2
    var queryURL = "https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from=" + currency1 + "&to=" + currency2 ,
    
    // passed to $.ajax to recieve response
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": queryURL,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
            "x-rapidapi-key": "2baeb4eca6mshb648eeb18d253bdp1392e1jsnf42824529a45"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});