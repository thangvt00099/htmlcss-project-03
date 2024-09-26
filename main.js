// append, prepend - phương thức dùng thêm 1 hoặc nhiều phần tử con vào phần tử cha

// create Element
const newImg = document.createElement("img");
console.log(newImg);

// Kiểm tra toàn bộ thuộc tính và phương thức của element
console.dir(newImg);

// setAttribute
newImg.setAttribute("src", "./assets/img/most_slide_2.jpg");

// Thêm vào cuối body - append
document.body.append(newImg);
newImg.style.width = "100%";

const newText = document.createElement("p");
newText.textContent = "Xin chào, em đang học JS";
document.body.append(newText);

const p = document.querySelector(".hero__desc");
p.append("Sông cầu nước chảy lơ thơ, có đôi trai gái ngồi hơ quần đùi");

// Thêm nhiều phần tử
let elm1 = document.createElement("p");
elm1.textContent = "Đây là đoạn văn mới thêm";

let elm2 = document.createElement("span")
elm2.textContent = "Đây là thẻ span";

let container = document.querySelector(".hero__heading");
container.append(elm1, elm2);

// Prepend - thêm vào đầu
container.prepend("Hi !");