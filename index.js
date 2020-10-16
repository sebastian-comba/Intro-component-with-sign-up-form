
var checkField = fieldName => {
  if($("." + fieldName).val().length === 0){                                     //checks the value of the input text
    return false;
  }else{
    return true;
  }
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;   //valdiates the email
  return regex.test(email);                                                      // this function is from StackOverflow
}

$(".btn").click(function(){                                                     //add and remove the class of empty field or wrong email
                                                                                //to the inputs
  if( ! checkField("first-name")){
    $(".first-name").addClass("empty-field");
    $(".first-form").addClass("warning");
    $(".first-input").addClass("warning-padd");
    $(".first-error").removeClass("hidden-error");
  }else{
    $(".first-name").removeClass("empty-field");
    $(".first-form").removeClass("warning");
    $(".first-input").removeClass("warning-padd");
    $(".first-error").addClass("hidden-error");
  }

  if( ! checkField("last-name")){
    $(".last-name").addClass("empty-field");
    $(".last-form").addClass("warning");
    $(".last-input").addClass("warning-padd");
    $(".last-error").removeClass("hidden-error");
  }else{
    $(".last-name").removeClass("empty-field");
    $(".last-form").removeClass("warning");
    $(".last-input").removeClass("warning-padd");
    $(".last-error").addClass("hidden-error");
  }

  if( ! checkField("email") ){
    $(".email-wrong").removeClass("warning");
    $(".email").addClass("empty-field");
    $(".email-form").addClass("warning");
    $(".email-input").addClass("warning-padd");
    $(".email-error").removeClass("hidden-error");
  }else if(! isEmail( $(".email").val()) ){
    $(".email-form").removeClass("warning");
    $(".email-input").addClass("warning-padd");
    $(".email").addClass("empty-field");
    $(".email-wrong").addClass("warning");
    $(".email-error").removeClass("hidden-error");
  }else{
    $(".email").removeClass("empty-field");
    $(".email-form").removeClass("warning");
    $(".email-input").removeClass("warning-padd");
    $(".email-wrong").removeClass("warning");
    $(".email-error").addClass("hidden-error");
  }

  if( ! checkField("pass")){
    $(".pass").addClass("empty-field");
    $(".pass-form").addClass("warning");
    $(".pass-input").addClass("warning-padd");
    $(".pass-error").removeClass("hidden-error");
  }else{
    $(".pass").removeClass("empty-field");
    $(".pass-form").removeClass("warning");
    $(".pass-input").removeClass("warning-padd");
    $(".pass-error").addClass("hidden-error");
  }
});
