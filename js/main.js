function charger()
{
   //AJAX
   //1 : on doit instancier l'objet de la claSSE
   //XMLHttpRequest
   let req=new XMLHttpRequest();
   let tb=document.getElementById("tb");
   //2 configuration
  
   //3
   req.onreadystatechange=function()
   {
       if(req.readyState==4 && req.status==200)
       {
          // alert("requete reussi"+req.responseText);
          let data=JSON.parse(req.responseText);
          for (let index = 0; index < data.length; index++) {
             let tr=document.createElement("tr");
             let td1=document.createElement("td");
             let td2=document.createElement("td");
             let td3=document.createElement("td");
             let td4=document.createElement("td");
             tr.appendChild(td1);
             tr.appendChild(td2);
             tr.appendChild(td3);
             tr.appendChild(td4);
             td1.innerHTML=data[index].userId;
             td2.innerHTML=data[index].id;
             td3.innerHTML=data[index].title;
             td4.innerHTML=data[index].body;
             tb.appendChild(tr)
          }
       }
       else if(req.readyState==4 )
       {
        alert("probleme");
       }
   }
   req.open("GET","https://jsonplaceholder.typicode.com/posts");
   req.send();
}