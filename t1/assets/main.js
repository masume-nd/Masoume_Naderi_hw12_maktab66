let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let submitBtn = document.getElementById("submit");
let close = document.getElementsByClassName("close")[0];
let modal = document.getElementById("myModal");
let fname_error = document.getElementById("fname-text-err");
let lname_error = document.getElementById("lname-text-err");

function printMessage(event) {
  event.preventDefault();
  if (firstName.value.length < 3) {
    firstName.parentNode.classList = "danger-border";
    fname_error.style.display = "block";
  }
  if (lastName.value.length < 3) {
    lastName.parentNode.classList = "danger-border";
    lname_error.style.display = "block";
  } else {
    modal.style.display = "block";
    firstName.parentNode.style.border = "none";
    lastName.parentNode.style.border = "none";
    fname_error.style.display = "none";
    lname_error.style.display = "none";
    timedRefresh(8000);
  }
}
function timedRefresh(timeoutPeriod) {
  setTimeout("location.reload(true);", timeoutPeriod);
}
function Close() {
  modal.style.display = "none";
}
document.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
