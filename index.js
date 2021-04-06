document.querySelector(".submit-button").addEventListener("click", function(event) {
  //Create new object for the address entered by the user
  let newAddress = {
    name: document.querySelector(".name-input").value,
    address: document.querySelector(".address-input").value,
    phone: document.querySelector(".phone-input").value,
    email: document.querySelector(".email-input").value
  }
  //Clearning the form
  document.querySelector(".name-input").value = "";
  document.querySelector(".address-input").value = "";
  document.querySelector(".phone-input").value = "";
  document.querySelector(".email-input").value = "";

  addAddressToTheTable(newAddress);
});

function addAddressToTheTable(newAddress) {
  var tableElement = document.querySelector("#addressTable");
  //TR element
  var newTRElement = document.createElement("TR");

  //Four TD element
  var nameTDElement = document.createElement("TD");
  nameTDElement.innerHTML = newAddress.name;
  var addressTDElement = document.createElement("TD");
  addressTDElement.innerHTML = newAddress.address;
  var phoneTDElement = document.createElement("TD");
  phoneTDElement.innerHTML = newAddress.phone;
  var emailTDElement = document.createElement("TD");
  emailTDElement.innerHTML = newAddress.email;

  //Prepare TR
  newTRElement.appendChild(nameTDElement);
  newTRElement.appendChild(addressTDElement);
  newTRElement.appendChild(phoneTDElement);
  newTRElement.appendChild(emailTDElement);

  tableElement.appendChild(newTRElement);
}
