
//const QueryCountry = document.getElementById("inputQ").value;
//const QueryCountry = window.prompt(document.getElementById("inputQ").value);
//console.log(QueryCountry);

 
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

//on-keypress
$('.search-input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        DataFetchCovid();  
    }
    event.stopPropagation();
});




function DataFetchCovid() {
    
    const QueryCountry = document.getElementById("inputQ").value;

    var QueryAPIready = QueryCountry[0].toUpperCase() + QueryCountry.slice(1).toLowerCase();
    
    var a = QueryAPIready;
    
    console.log(a);
    
    var amer = "Us";
    
    if(a == amer)
        {
            a = "US";
            var changeCountry = document.getElementById("couName");
            let url ='https://pomber.github.io/covid19/timeseries.json'
        changeCountry.innerHTML = a;
            fetch(url)
        .then(res => res.json())
        .then(data => {
            // string.match(/^abc$/)
            const toFind = data[a];
            const lengthOfTheArray = toFind.length - 1;
            const Trecovered = toFind[lengthOfTheArray].recovered;
            const Tdea = toFind[lengthOfTheArray].deaths;
            const Tconfirmed = toFind[lengthOfTheArray].confirmed;

            //passing the data
             totalCountryCases.innerHTML = Tconfirmed;
             totalCountryDea.innerHTML = Tdea;
             totalCountryRecovered.innerHTML =Trecovered;



            // console.log(Trecovered);
            // console.log(Tdea);
            // console.log(Tconfirmed);
        })
        .catch((err) =>{
        alert("Yo enter a valid country");
    })
        }
    else{
        var changeCountry = document.getElementById("couName");
        changeCountry.innerHTML = a;
        let url ='https://pomber.github.io/covid19/timeseries.json'
        fetch(url)
        .then(res => res.json())
        .then(data => {


            // const toFind = data.match.regex;
            const toFind = data[a];
            const lengthOfTheArray = toFind.length - 1;
            const Trecovered = toFind[lengthOfTheArray].recovered;
            const Tdea = toFind[lengthOfTheArray].deaths;
            const Tconfirmed = toFind[lengthOfTheArray].confirmed;

            //passing the data
             totalCountryCases.innerHTML = Tconfirmed;
             totalCountryDea.innerHTML = Tdea;
             totalCountryRecovered.innerHTML =Trecovered;



            // console.log(Trecovered);
            // console.log(Tdea);
            // console.log(Tconfirmed);
        })
        .catch((err) =>{
             totalCountryCases.innerHTML = '';
             totalCountryDea.innerHTML = '';
             totalCountryRecovered.innerHTML ='';
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid country name! or data not present!',
                heightAuto : true,
                width: 300,
                padding: '.5rem',
                background: '#fff',
            })
    })
    }
}

 function worldData() {
    fetch("https://covid19.mathdro.id/api")
        .then(res => res.json())
        .then(global => {
            const Tcases = global.confirmed.value;
            const Tdea = global.deaths.value;
            const Trecovered = global.recovered.value;

            console.log(Tcases);
            console.log(Tdea);
            console.log(Trecovered);


            //passing the data to html
        totalCases.innerHTML = Tcases;
        totalDea.innerHTML = Tdea;
        totalRecovered.innerHTML = Trecovered;


        })
        .catch(err => console.log(err))
}

worldData();

