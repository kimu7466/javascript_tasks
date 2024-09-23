function fetchProduct(link){
    fetch(link)
    .then(Response=>{
        if (!Response.ok){
            throw new Error("network response was not ok")           
        }
        return Response.json();
    })
    .then(data=> {
        console.log("response :", data)
    })
    .catch(error=>{
        console.error("there was a problem with fetch operation : ", error);
    })
    .finally(()=>{
        console.log("Fetch operation Completed");        
    })

}

// fetchProduct("https://fakestoreapi.com/products/1")
fetchProduct('https://jsonplaceholder.typicode.com/todos')