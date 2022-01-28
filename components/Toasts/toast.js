let body = document.getElementsByTagName("body")[0];
let centerToastButton = document.getElementById("toast-center-button");
let leftToastButton = document.getElementById("toast-left-button");
let rightToastButton = document.getElementById("toast-right-button");
let centerToast = document.getElementById("toast-center");
let leftToast = document.getElementById("toast-left");
let rightToast = document.getElementById("toast-right");

// Function to show toast
function showToast(toast) {
  toast.setAttribute("style", "display: flex");
  setTimeout(() => {
    hideToast(toast);
  }, 4000);
}

// Function to hide toast
function hideToast(toast) {
  toast.setAttribute("style", "display: none");
}

// Listener for center button
centerToastButton.addEventListener("click", () => {
  showToast(centerToast);
});

// Listener for left button
leftToastButton.addEventListener("click", () => {
  showToast(leftToast);
});

// Listener for right button
rightToastButton.addEventListener("click", () => {
  showToast(rightToast);
});
