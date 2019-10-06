// business logic

function CustomerInfo(first, last, number, email) {
  this.firstName = first;
  this.lastName = last;
  this.phoneNumber = number;
  this.email = email;
}

CustomerInfo.prototype.fullInfo = function() {
  return (
    this.firstName +
    " " +
    this.lastName +
    " " +
    this.phoneNumber +
    " " +
    this.email
  );
};

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

    $("input#first-name").val("");
    $("input#last-name").val("");
    $("input#phone-number").val("");
    $("input#email").val("");

    location.href="#customer"
  });
});
