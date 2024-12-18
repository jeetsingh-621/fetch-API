const API1 = "https://dummyjson.com/posts"
const API2 = "https://dummyjson.com/products"
const API3="https://dummyjson.com/todos"
const promise1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(async()=>{
            const response = await fetch(API1);
            const data = await response.json();
            // console.log(data);
            displaydata(data.posts,"posts")
            resolve(data);
        },1000);

    })
}
// promise1();

const promise2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(async()=>{
            const response = await fetch(API2);
            const data = await response.json();
            // console.log(data);
            displaydata(data.products, 'products')
            
            resolve(data);

        },2000);

    })
}

// promise2();
const promise3 = ()=>{
   return new Promise((resolve,reject)=>{
    setTimeout(async()=>{
        const response = await fetch(API3);
        const data = await response.json();
        // console.log(data);
        displaydata(data.todos, 'todos')
        resolve(data);
    },3000)
   })
}

// promise3()
function displaydata(data,title){
const container = document.getElementById('tableContainer');
const table = document.createElement('table');
const thead= document.createElement("thead");

thead.innerHTML=`
<tr>
<th>${title} data</th>

</tr>
`;

table.appendChild(thead);

const tbody= document.createElement('tbody');
data.forEach((item)=>{
    const row = document.createElement("tr");
    row.innerHTML=`<td>${JSON.stringify(item)} </td>`
    tbody.appendChild(row);
});
table.appendChild(tbody);

container.appendChild(table);
};

document.getElementById('fetchDataButton').addEventListener("click",()=>{
    promise1()
    .then(()=>promise2())
    .then(()=>promise3())
    .catch((error)=>console.error('error fetching data',error))
})