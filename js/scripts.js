// business logic

function CustomerInfo(first, last, number, email) {
  this.firstName = first;
  this.lastName = last;
  this.phoneNumber = number;
  this.email = email;
}

function AddressInfo(first, last, number, email) {
  this.firstName = first;
  this.lastName = last;
  this.phoneNumber = number;
  this.email = email;
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
  $("#customRadioInline1").on("click", function(){
    if($(this).is(":checked")){
    prompt("Please enter your address (Number, Street, City)");
  }
})
});
