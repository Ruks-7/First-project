function change(event){
  event.preventDefault();
  let input=document.querySelector("#entry");
  let city=document.querySelector("h1");
  city.innerHTML=input.value;

let apiKey= "2a73b3dbc21aoe20a5dfta3e447dfa66";
let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${input.value}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayInfo);
}

let searchButton=document.querySelector("#search-input");
searchButton.addEventListener("submit", change);
 
let now=new Date();
let day=now.getDay();
let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
day=days[now.getDay()];

let hour=now.getHours();
let minutes=now.getMinutes().toString().padStart(2, "0"); 

let details=document.querySelector("#details");
details.innerHTML=`${day}, ${hour}:${minutes}`;


function displayInfo(response){
  console.log(response);
  let weather= document.querySelector(".temp");
  let degree=Math.round(response.data.temperature.current);
  weather.innerHTML=degree;
 
}


