function User () {
 return (
    <div>
        <h2>Users : </h2>
    </div>
 )

}

export default User;


/*
* 1.Suspense fallback
*2. create a promise function to load data 
/





/*
*1. data source || JSON 
*JSON.stringify() => 
*JSON.parse()
* 
* .json
* 
* 
* 
* 
*/

// callback

//  fetch('https://jsonplaceholder.typicode.com/users')
//  .then(res => res.json())
//  .then(data =>{console.log(data)})



//  // async await
// async  function loadData(){


//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     return data;
    
//  }


//  const loadData2 = async () => {
    

//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//      const data = await res.json();
//     return data;
//  }