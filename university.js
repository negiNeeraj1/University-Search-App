let university='http://universities.hipolabs.com/search?name=';


let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    let colArr= await getColleges(country);
    showColleges(colArr);
})

function showColleges(colArr){
    let ul=document.querySelector("#colleges");
    ul.innerText="";
    for(let col of colArr){
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        ul.appendChild(li);
    }

}
async function getColleges(country){
    try{
        let res=await axios.get(university+country);
       return res.data;
    }
    catch(e){
        console.log("NO university found",e);
    }
}