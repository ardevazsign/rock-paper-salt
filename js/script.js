

const h1Element = document.querySelector("h1");

h1Element.style.color ="aqua";

const btn = document.querySelector("button");

btn.style.backgroundColor = "aqua";
btn.style.border = "none";
btn.style.padding ="10px 20px";
 
// ============================

let addProvince = document.getElementById("addProvince");

let provinces = document.getElementById("provinces");


addProvince.onclick = () => {
    let li = document.createElement("li");
    li.innerText = "saskatchewan";
    li.classList.add("province");
    provinces.appendChild(li);
};

let container = document.getElementById("container");
const provences2 = ["Ontario","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador", "Nova Scotia","Alberta", "Prince Edward Island", "Quebec", "Saskatchewan"];
const ul = document.createElement("ul");

for(const provence2 of provences2) {
    const li = document.createElement("li");
    li.innerText = provence2;
    ul.appendChild(li);

}

container.append(ul);

// let newContainer = document.getElementById("newContainer");
// const territories = ["Northwest Territories","Nunavut", "Yukon"];
// const div = document.createElement("div");

// for ( const territory of territories ) {
//     const li = document.createElement("li");
//     li.innerText = territory;
   
//     lu.appendFirstChild(li);

//     const ul = document.createElement("ul");
//     ul.innerText = territories;
//     div.appendChild(ul);

   
// }

// newContainer.append(div);

