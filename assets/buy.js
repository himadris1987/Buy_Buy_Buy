$(document).ready(function() {

    // Global functions to store the responses'
    // The rate for conversion of currencies
    var rate = 0;
    // The conversiion rate * amount of currency 
    var rateAmount = 0;
    // Unused delta of currency over 24 hours
    var daychange;

    // Checks for Currency Converter available currencies to populate input
    function updateSelector() {
        
        // Settings for GET currency list found in documentation
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://currency-converter5.p.rapidapi.com/currency/list?format=json",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
                "x-rapidapi-key": "2baeb4eca6mshb648eeb18d253bdp1392e1jsnf42824529a45"
            }
        }
        // In currencies found in response, append for every value and its key (reversed due to response)
        $.ajax(settings).done(function (response) {
            var $dropdown = $("#inputCur");
            $.each(response.currencies, function(key, value) {
                $dropdown.append($("<option />").val(key).text(value))
            });
        });

        // In currencies found in response, append for every value and its key (reversed due to response)
        $.ajax(settings).done(function (response) {
            console.log(response);
            var $dropdown = $("#inputCur2");
            $.each(response.currencies, function(key, value) {
                $dropdown.append($("<option />").val(key).text(value))
            });
        });
    };

    // Call to updateSelector()
    updateSelector();

    // Function on click of "Exchange !" to use InputCur1, InputCur2 and curAmount as queryURL conditions
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

        // Sets respones' rate and rate_for_amount to rate and rateAmount respectively
        function updatePage(currencyData) {
            console.log(currencyData);
            // Didn't know how to pass local variables over...
            var currencyUsed = Object.values(currencyData.rates)[0];
            console.log(currencyUsed);
            var rate = currencyUsed.rate;
            var rateAmount = currencyUsed.rate_for_amount;
            
            console.log(rate);
            console.log(rateAmount);


        };
    });



    $("#exchangeCry").on("click", function() {

        var currency1 = $("#inputCurCry").children("option:selected").val();
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
            var currencyUsed = Object.values(cryptoData)[0]
            console.log(currencyUsed)
            rate = Object.values(currencyUsed)[0]
            rateAmount = rate*amount;
            console.log(rate);
            console.log(rateAmount);
            daychange = Object.values(currencyUsed)[1]
            console.log(daychange)

        }
    });


});
