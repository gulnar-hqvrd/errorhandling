
fetch("https://northwind.vercel.app/api/categories")
  .then(response => {

    // throw Error(`HTTP error! Status : ${response.status}`)
    
    if(!response.ok){
       throw Error(`HTTP error! Status : ${response.status}`)
    } 
return response.json()
   })
  .then(data => { console.log('Fetch data :' , data)})
  .catch(error => { console.log("Fetch data :" , error.message)})
  .finally(() => { 
    console.log("Fecth data done");
  });


  