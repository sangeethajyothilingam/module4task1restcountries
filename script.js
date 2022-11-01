var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
container.append(row);


var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>foo(data1));

function foo(data1){
    for(var i=0;i<data1.length;i++){
        if(data1[i].latlng!=undefined){
        row.innerHTML+=`<div class="col-md-4">
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
         
         <div class="card-body" >
         <div style="background-color: black" ><h5 class="card-title">Name: ${data1[i].name}</h5></div>
         <img src="${data1[i].flag}" class="card-img-top" alt="...">
         <h5 class="card-title">Capital: ${data1[i].capital}</h5>
         <h5 class="card-title">Region: ${data1[i].region}</h5>
         <h5 class="card-title">Countrycode: ${data1[i].alpha2Code}</h5>
         <button type="button"class="btn btn-primary" onclick="opendata(${data1[i].latlng[0]},${data1[i].latlng[1]})" >Click for Weather</button>
        
         </div>
        </div>
          </div>`;
        }
          document.body.append(container);
            
    }
}
async function opendata(lat,lon){
    
          
        let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9d07e8d66a7c9c78d47685619746207`);
        let res1= await res.json();
        alert(` Temp:${res1.main.temp}`);
        
           

} 
            
            
           
          
     
    

