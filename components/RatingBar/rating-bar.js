let ratingStar1 = document.getElementById("rating-star-1");
let ratingStar2 = document.getElementById("rating-star-2");
let ratingStar3 = document.getElementById("rating-star-3");
let ratingStar4 = document.getElementById("rating-star-4");
let ratingStar5 = document.getElementById("rating-star-5");
let ratingStarInfo = document.getElementById("rating-star-info");
let resetRatingButton = document.getElementById("reset-rating-button");
let starArray = [
  ratingStar1,
  ratingStar2,
  ratingStar3,
  ratingStar4,
  ratingStar5,
];

// 1 Star Rating
ratingStar1.addEventListener("click", () => {
  colorStars(1);
  ratingStarInfo.innerHTML = "1 Stars";
});

// 2 Star Rating
ratingStar2.addEventListener("click", () => {
  colorStars(2);
  ratingStarInfo.innerHTML = "2 Stars";
});

// 3 Star Rating
ratingStar3.addEventListener("click", () => {
  colorStars(3);
  ratingStarInfo.innerHTML = "3 Stars";
});

// 4 Star Rating
ratingStar4.addEventListener("click", () => {
  colorStars(4);
  ratingStarInfo.innerHTML = "4 Stars";
});

// 5 Star Rating
ratingStar5.addEventListener("click", () => {
  colorStars(5);
  ratingStarInfo.innerHTML = "5 Stars";
});

// Here we are resetting the rating bar
resetRatingButton.addEventListener("click", () => {
  colorStars(0);
  ratingStarInfo.innerHTML = "0 Star";
});

function colorStars(index) {
  let iterator = 0;

  // This would color the stars
  for (iterator = 0; iterator < index; iterator++) {
    starArray[iterator].setAttribute("style", "color: var(--dark-yellow)");
  }

  // This would remove the color from stars
  while (iterator != 5) {
    console.log(iterator);
    starArray[iterator].setAttribute("style", "color: gray");
    iterator++;
  }
}
