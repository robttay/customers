//
//
// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

var dataDisplay = document.querySelector(".customers");
var createH1 = document.createElement("h1");
createH1.innerHTML = "INTERNAL COMPANY DIRECTORY";
dataDisplay.appendChild(createH1);

(function() {
  ("use strict");
  fetch("https://randomuser.me/api/?results=12&nat=us")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var customers = data.results;
      for (var i = 0; i < customers.length; i++) {
        createCustomers(customers[i]);
      }
    });
})();

function createCustomers(custInfo) {
  var createSpan = document.createElement("span");

  createSpan.innerHTML =
    "<img src='" +
    custInfo.picture.large +
    "'>" +
    "<p class='upper' id='bold'>" +
    custInfo.name.first +
    " " +
    custInfo.name.last +
    "</p>" +
    "<hr>" +
    "<p class='upper'>" +
    custInfo.email +
    "</p><p id='address'>" +
    custInfo.location.street +
    "<br>" +
    custInfo.location.city +
    ", " +
    custInfo.location.state +
    " " +
    custInfo.location.postcode +
    "<br></p>" +
    custInfo.phone +
    "<br><p><i>" +
    custInfo.id.value +
    "</i></p>";

  dataDisplay.appendChild(createSpan);
}
