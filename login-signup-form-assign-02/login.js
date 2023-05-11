function getUserCredentials() {
  let email = document.getElementById("exampleInputEmail1").value;
  let password = document.getElementById("exampleInputPassword1").value;
  let checkBox = document.getElementById("exampleCheck1");
  let checkBoxValue;
  if (checkBox.checked) {
    checkBoxValue = "checked";
  } else {
    checkBoxValue = "unChecked";
  }
  //document.getElementById("loginButton").disabled;
  console.log("Details: " + email + " : " + password);
  console.log("CheckBox is: " + checkBoxValue);
}
