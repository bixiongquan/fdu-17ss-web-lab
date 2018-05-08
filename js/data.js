const countries = [
    { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },
    { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },
    { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },
    { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }
];
let one = document.getElementsByTagName("div")[0];
let add = function(i){
    let o1 = document.createElement("div");
    one.appendChild(o1);
    o1.className = "item";
    let two = document.createElement("h2");
    o1.appendChild(two);
    let two1 = document.createTextNode(countries[i].name);
    two.appendChild(two1);
    let three = document.createElement("p");
    o1.appendChild(three);
    let three1 = document.createTextNode(countries[i].continent);
    three.appendChild(three1);
    let four = document.createElement("div");
    four.setAttribute("class", "inner-box");
    o1.appendChild(four);
    let five = document.createElement("h3");
    four.appendChild(five);
    five.innerHTML = "Cities";
    let six = document.createElement("ul");
    four.appendChild(six);
    let s1 = document.createElement("li");
    s1.innerHTML = countries[i].cities[0];
    six.appendChild(s1);
    let s2 = document.createElement("li");
    s2.innerHTML = countries[i].cities[1];
    six.appendChild(s2);
    let s3 = document.createElement("li");
    s3.innerHTML = countries[i].cities[2];
    six.appendChild(s3);
    let seven = document.createElement("div");
    four.setAttribute("class", "inner-box");
    o1.appendChild(seven);
    let eight = document.createElement("h3");
    seven.appendChild(eight);
    eight.innerHTML = "Popular Photos";
    let nine = document.createElement("p");
    seven.appendChild(nine);
    for(let j = 0; j<countries[i].photos.length; j++){
        let n1 = document.createElement("img");
        n1.className = "photo";
        n1.src = "images/" + countries[i].photos[j];
        nine.appendChild(n1);
    }
    let ten = document.createElement("button");
    ten.innerHTML = "visit";
    o1.appendChild(ten);
};
add(0);
add(1);
add(2);
add(3);

