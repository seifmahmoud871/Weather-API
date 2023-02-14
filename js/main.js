let days=['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday']

var months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

var dataarr=[];

let search=document.getElementById('search');

search.addEventListener("input",function(e){
    getdata(e.target.value)
})

// function that get data from API

function getdata(e='cairo'){
    let xml=new XMLHttpRequest();
    // if(e==undefined){
    //     xml.open('GET',`https://api.weatherapi.com/v1/forecast.json?key=0fae6a2f5ced406bae2185616221010&q=cairo&days=3`);
    // }
    // else{
        xml.open('GET',`https://api.weatherapi.com/v1/forecast.json?key=0fae6a2f5ced406bae2185616221010&q=${e}&days=3`);
    // }
    xml.send();
    xml.addEventListener('readystatechange',function(){
        if(xml.readyState==4&&xml.status==200){
            
            dataarr=JSON.parse(xml.response);
            
            display(dataarr);
        }
    })
}

getdata();
// ---------------------------------------------------



// set date function 

function setdate(){
    let date=new Date();
    date=date.toDateString();
    var datearr=date.split(" ");
    var day1,day2,day3;

    for(let i=0;i<days.length;i++){
        if(days[i].includes(datearr[0])){
            day1=days[i];
            day2=days[(i+1)%7];
            day3=days[(i+2)%7];

        }
    }

    for(let i=0;i<months.length;i++){
        if(months[i].includes(datearr[1])){
            document.getElementById('day-month').innerHTML=`${datearr[2]} ${months[i]}`;
        }
    }

    document.getElementById('currentday').innerHTML=day1;
    document.getElementById('day-2').innerHTML=day2;
    document.getElementById('day-3').innerHTML=day3;

}
// -----------------------------------------------------

// set weather data of current day

function setCurrentDateData(arr){
    document.getElementById('country').innerHTML=arr.location.name;
    document.getElementById('deg1').innerHTML=arr.current.temp_c;
    document.getElementById('current-icon').innerHTML=`<img src="https://${arr.current.condition.icon}" alt="" width="90">`;
    document.getElementById('condition-txt-1').innerHTML=arr.current.condition.text;
    document.getElementById('deg1').innerHTML=arr.current.temp_c;
}

// -----------------------------------------------------

// set weather data of day 2

function setDate2Data(arr){
    document.getElementById('icon-2').innerHTML=`<img src="https://${arr.forecast.forecastday[1].day.condition.icon}" alt="" width="50">`;
    document.getElementById('deg2-1').innerHTML=arr.forecast.forecastday[1].day.maxtemp_c;
    document.getElementById('deg2-2').innerHTML=arr.forecast.forecastday[1].day.mintemp_c;
    document.getElementById('condition-txt-2').innerHTML=arr.forecast.forecastday[1].day.condition.text;

}
// -----------------------------------------------------

// set weather data of day 3

function setDate3Data(arr){
    document.getElementById('icon-3').innerHTML=`<img src="https://${arr.forecast.forecastday[2].day.condition.icon}" alt="" width="50">`;
    document.getElementById('deg3-1').innerHTML=arr.forecast.forecastday[2].day.maxtemp_c;
    document.getElementById('deg3-2').innerHTML=arr.forecast.forecastday[2].day.mintemp_c;
    document.getElementById('condition-txt-3').innerHTML=arr.forecast.forecastday[2].day.condition.text;

}
// -----------------------------------------------------

// display function

function display(arr){

    setdate();
    setCurrentDateData(arr);
    setDate2Data(arr);
    setDate3Data(arr);


};


// -----------------------------------------------------





































// let days=['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday']

// var months= ["January","February","March","April","May","June","July",
//             "August","September","October","November","December"];

// var dataarr=[];

// let search=document.getElementById('search');

// search.addEventListener("input",function(e){
//     getdata(e.target.value)
    
// })

// function getdata(e){
//     let xml=new XMLHttpRequest();
//     if(e==undefined){
//         xml.open('GET',`https://api.weatherapi.com/v1/forecast.json?key=0fae6a2f5ced406bae2185616221010&q=cairo&days=3`);
//     }
//     else{
//         xml.open('GET',`https://api.weatherapi.com/v1/forecast.json?key=0fae6a2f5ced406bae2185616221010&q=${e}&days=3`);
//     }
//     xml.send();
//     xml.addEventListener('readystatechange',function(){
//         if(xml.readyState==4&&xml.status==200){
            
//             dataarr=JSON.parse(xml.response);
            
//             display(dataarr);
//         }
//     })
// }
// getdata();

// function display(arr){
//     let date=new Date();

    
//     date=date.toDateString();

//     var datearr=date.split(" ")
    

//     var day1;
//     var day2;
//     var day3;
    
//     for(let i=0;i<days.length;i++){
//         if(days[i].includes(datearr[0])){
//             day1=days[i];
//             console.log(days[i]);
//             day2=days[(i+1)%7];
//             day3=days[(i+2)%7];

//         }
//     }
//     for(let i=0;i<months.length;i++){
//         if(months[i].includes(datearr[1])){
//             document.getElementById('day-month').innerHTML=`${datearr[2]} ${months[i]}`;
//         }
//     }

//     document.getElementById('currentday').innerHTML=day1;
//     document.getElementById('day-2').innerHTML=day2;
//     document.getElementById('day-3').innerHTML=day3;
//     console.log(date.split(" "));
    
//     document.getElementById('country').innerHTML=arr.location.name;
//     document.getElementById('deg1').innerHTML=arr.current.temp_c;
//     document.getElementById('current-icon').innerHTML=`<img src="https://${arr.current.condition.icon}" alt="" width="90">`;
//     document.getElementById('condition-txt-1').innerHTML=arr.current.condition.text;
//     document.getElementById('deg1').innerHTML=arr.current.temp_c;



//     document.getElementById('icon-2').innerHTML=`<img src="https://${arr.forecast.forecastday[1].day.condition.icon}" alt="" width="50">`;
//     document.getElementById('deg2-1').innerHTML=arr.forecast.forecastday[1].day.maxtemp_c;
//     document.getElementById('deg2-2').innerHTML=arr.forecast.forecastday[1].day.mintemp_c;
//     document.getElementById('condition-txt-2').innerHTML=arr.forecast.forecastday[1].day.condition.text;


//     document.getElementById('icon-3').innerHTML=`<img src="https://${arr.forecast.forecastday[2].day.condition.icon}" alt="" width="50">`;
//     document.getElementById('deg3-1').innerHTML=arr.forecast.forecastday[2].day.maxtemp_c;
//     document.getElementById('deg3-2').innerHTML=arr.forecast.forecastday[2].day.mintemp_c;
//     document.getElementById('condition-txt-3').innerHTML=arr.forecast.forecastday[2].day.condition.text;

// };


