import Post from './classpost.js';
console.log("asdasdads")
const postBox = document.getElementById('post-box');

function creatpost(post) {
    const articleserv = document.createElement("article");
    const imgserv = document.createElement("img");
    const h3serv = document.createElement("h2");
    const posserv = document.createElement("p");

    articleserv.setAttribute("class", "articleserv");
    imgserv.setAttribute("class", "imgserv");
    h3serv.setAttribute("class", "h3serv");
    posserv.setAttribute("class", "posserv");
    imgserv.src = post.getSrc();
    h3serv.innerHTML = post.getTitle();
    posserv.innerHTML = post.getDesc();
    articleserv.append(imgserv, h3serv, posserv);
    return articleserv;
}

console.log("asddddddddddddddddddasdasdasda")
const post = new Post("./asserts/1.jpg", "Sunglasses", "WE ARE SUNGLASS.LA, IT'S NICE TO MEET YOU.");
postBox.append(creatpost(post))



