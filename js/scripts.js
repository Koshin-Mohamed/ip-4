// business logic

function CustomerInfo(first, last, phone, email) {
  this.firstName = first;
  this.lastName = last;
  this.phoneNumber = phone;
  this.email = email;
}

function Address(number, street, county, city) {
  this.houseNumber = number;
  this.streetName = street;
  this.county = county;
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

    var inputtedHouseNumber = $("input#house-number").val();
    var inputtedStreetName = $("input#street-name").val();
    var inputtedCounty = $("input#county").val();
    var inputtedCity = $("input#city").val();

    var newAddress = new Address(
      inputtedHouseNumber,
      inputtedStreetName,
      inputtedCounty,
      inputtedCity
    );

    $("#show-address").show();
    $(".house-number").text(newAddress.houseNumber);
    $(".street-name").text(newAddress.streetName);
    $(".county").text(newAddress.county);
    $(".city").text(newAddress.city);

    $('#order').on('change', function(){
      update_total();
    });
    function update_total(){
      var tot = 0;
      var price = 0;
      $('#order input[type=radio]:checked').each(function(){
        price = $(this).data('price');
        if(price > 0){
          tot += price;
        }
      });
      $('#order select').each(function(){
        price = $("option:selected", this).data('price');
        if(price > 0){
          tot += price;
        }
      });
      $('#order input[type=checkbox]:checked').each(function(){
        price = $(this).data('price');
        if(price > 0){
          tot += price;
        }
      });
      $('.total').html(tot);
      $("#show-total").show();
    }
    update_total();
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
