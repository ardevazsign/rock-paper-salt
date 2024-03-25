// document.querySelector("#fruits li:last-child").Style.color = "yellow";

let fruitsById = document.getElementById("fruits");
let fruitsByQuery = document.querySelector("#fruits");

console.log(fruitsById);
console.log(fruitsByQuery);


let containerEx2 = document.getElementById("containerEx2");
const  completeName = ["Manuel", "Owen", "Camacho", "Saavedra", "Junior"];
const ul =document.createElement("ul");

for(const name of completeName) {
    const li = document.createElement("li");
    li.innerText = name;
    ul.appendChild(li);
}

containerEx2.append(ul);



const colors = [
    {
        label:"red",
        color: "#ff0000",
    },
    {
        label:"green",
        color: "#00ff00",
    },
    {
        label:"blue",
        color: "#0000ff",
    },
    {
        label: "yellow",
        color: "#ffff00",
    } ,   
];

colors.forEach(({label, color}) => {
    const btnEl = document.createElement("button");
    btnEl.innerText = label;
    btnEl.style.backgroundColor = color;
    btnEl.style.margin = "10px";
    btnEl.style.border = "none";
    btnEl.style.padding = "10px";
    containerEx3.appendChild(btnEl);
});


