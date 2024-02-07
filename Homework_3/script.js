"use strict";

function addReview() {
  const productName = document.getElementById("product-name").value;
  const reviewText = document.getElementById("review-text").value;

  if (productName && reviewText) {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || {};
    if (!reviews[productName]) {
      reviews[productName] = [];
    }
    reviews[productName].push(reviewText);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    showProductList();
    document.getElementById("product-name").value = "";
    document.getElementById("review-text").value = "";
  }
}

function showProductList() {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || {};
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  for (let product in reviews) {
    const li = document.createElement("li");
    li.textContent = product;
    li.onclick = () => showReviews(product);
    productList.appendChild(li);
  }
}

function showReviews(product) {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || {};
  const reviewList = document.getElementById("reviews");
  reviewList.innerHTML = "";
  reviews[product].forEach((review) => {
    const p = document.createElement("p");
    p.textContent = review;
    const button = document.createElement("button");
    button.textContent = "Удалить";
    button.onclick = () => deleteReview(product, review);
    reviewList.appendChild(p);
    reviewList.appendChild(button);
  });
}

function deleteReview(product, review) {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || {};
  reviews[product] = reviews[product].filter((item) => item !== review);
  localStorage.setItem("reviews", JSON.stringify(reviews));
  showReviews(product);
}

showProductList();
