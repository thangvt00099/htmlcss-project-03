// Truy cập Parent, Child, Siblings
let elm = document.querySelector(".hero__content");

// Truy cập vào phần tử Parent - duy nhất
console.log(elm.parentElement);
// elm.parentElement.style.backgroundColor = "red";

// Truy cập phần tử Child - trả về HTMLCollection
console.log(elm.children)

// Truy cập Siblings (anh em) kế tiếp
console.log(elm.children[1].nextElementSibling);

// Truy cập Siblings (anh em) trước nó
console.log(elm.children[1].previousElementSibling);