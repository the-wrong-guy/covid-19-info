//const QueryCountry = document.getElementById("inputQ").value;
//const QueryCountry = window.prompt(document.getElementById("inputQ").value);
//console.log(QueryCountry);
const amerika = "US";
 
//Global Data
var totalCases = document.querySelector('.ispan-1');
var totalDea = document.querySelector('.ispan-2');
var totalRecovered = document.querySelector('.ispan-3');

//Country Data
var totalCountryCases = document.querySelector('.Cspan-1');
var totalCountryDea = document.querySelector('.Cspan-2');
var totalCountryRecovered = document.querySelector('.Cspan-3');


//insta-redirect
$(".fa-instagram").click(function(){
    window.location.href ="https://www.instagram.com/_______the_wrong_guy__________/";
});


$('.search-input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        DataFetchCovid();  
    }
    event.stopPropagation();
});




function DataFetchCovid() {
    
    const QueryCountry = document.getElementById("inputQ").value;
    
    const QueryAPIready = QueryCountry[0].toUpperCase() + QueryCountry.slice(1).toLowerCase();
    fetch("https://pomber.github.io/covid19/timeseries.json")
        .then(res => res.json())
        .then(data => {
            const toFind = data[QueryAPIready];
            const lengthOfTheArray = toFind.length - 1;
            const Trecovered = toFind[lengthOfTheArray].recovered;
            const Tdea = toFind[lengthOfTheArray].deaths;
            const Tconfirmed = toFind[lengthOfTheArray].confirmed;

            //passing the data
             totalCountryCases.innerHTML = Tconfirmed;
             totalCountryDea.innerHTML = Tdea;
             totalCountryRecovered.innerHTML =Trecovered;



            console.log(Trecovered);
            console.log(Tdea);
            console.log(Tconfirmed);
        })
        .catch((err) => console.log(err))
}

function worldData() {
    fetch("https://corona.lmao.ninja/all")
        .then(res => res.json())
        .then(global => {
            var Tcases = global.cases;
            var Tdea = global.deaths;
            var Trecovered = global.recovered;

            //passing the data to html
        totalCases.innerHTML = Tcases;
        totalDea.innerHTML = Tdea;
        totalRecovered.innerHTML = Trecovered;

            console.log(Tcases);
            console.log(Tdea);
            console.log(Trecovered);

        })
        .catch(err => console.log(err))
}

worldData();
