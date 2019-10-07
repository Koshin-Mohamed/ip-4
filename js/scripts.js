// business logic

function CustomerInfo(first, last, phone, email) {
  this.firstName = first;
  this.lastName = last;
  this.phoneNumber = phone;
  this.email = email;
}

function Address(number, street, city) {
  this.houseNumber = number;
  this.streetName = street;
  this.city = city;
}

// user interface logic

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#first-name").val();
    var inputtedLastName = $("input#last-name").val();
    var inputtedPhoneNumber = $("input#phone-number").val();
    var inputtedEmail = $("input#email").val();

    var newCustomer = new CustomerInfo(
      inputtedFirstName,
      inputtedLastName,
      inputtedPhoneNumber,
      inputtedEmail
    );

    $("#show-customer").show();
    $(".first-name").text(newCustomer.firstName);
    $(".last-name").text(newCustomer.lastName);
    $(".phone-number").text(newCustomer.phoneNumber);
    $(".email").text(newCustomer.email);

    location.href = "#customer";
  });
  $("#customRadioInline1").on("click", function() {
    if ($(this).is(":checked")) {
      alert(
        "Delivery charges will be 150 kshs. Please enter your location details below"
      );
    }
    $("#address").show();
  });
});
