function loadjson(file,callback){
var xhr =  new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
if(xhr.readyState===4 && xhr.status===200){
callback(xhr.responseText);
}

};
xhr.send(null);
}

loadjson("data.json",function(text)
{
var data=JSON.parse(text);
console.log(data);
basics(data.details);

})
var ch=document.querySelector(".child1");
function basics(det){
var img=document.createElement("img");
img.src="Koala.jpg";
img.alt="smiley";
ch.appendChild(img);
 
  var s=document.createElement("h2");
   s.textContent=det.name;
    ch.appendChild(s);

    var email = document.createElement("a");
    email.href="mailto:rupadevimandhapati@gmail.com";
    email.textContent="rupadevimandhapati@gmail.com"
   ch.appendChild(email);
}

 function loadjson(file){
 return new Promise((resolve,reject)=>{
 return fetch(file).then(response=>{
 if(response.ok){
        resolve(response.json());
 }else{
 reject(new Error('error'));
 }
 })
 })
 }
 var newfile=loadjson("data.json");
 newfile.then(data=>{
 console.log(data);
 })
 var ch2=document.querySelector(".right");
function careerinfo(infodata){
var h1=document.createElement("h2");
h1.textContent="career objective";
ch2.appendChild(h1);
var h1=document.createElement("hr");
ch2.appendChild(hr);

var h2=document.createElement("h2");
h2.textContent=infodata.info;
ch2.appendChild(h2);
}  
function educationdetails(edu){
  var tabel1=document.createElement("tabel1");
  table1.border="1";
  ch2.appendChild(tabel1);
  tabledata="";
  for(i=0;i<edu[i].length;i++)
  {
    tabledata+="<tr><td>"+edu[i].institute+"</td></tr>"+"<tr><td>"+edu[i].degree+"</td></tr>"+ "<tr><td>"+edu[i].year_of_passing+"</td></tr>"+"<tr><td>"+edu[i].score+"</td></tr>"
  }
  tabel1..innerHTML=tabledata;
}
