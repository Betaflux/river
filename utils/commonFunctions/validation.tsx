const handleValidation = (value: any, type: string) => {
  let regex;
  let error;
  if (type === "email") {
    regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    error = regex.test(value) ? "" : "Invalid Email.";
  }
  if (type === "name") {
    regex = /^[a-zA-Z ]{2,40}$/;
    error = regex.test(value) ? "" : "Invalid Name.";
  }
  if (type === "phone") {
    regex = /^[0-9]+$/;
    error = regex.test(value) ? "" : "Invalid Phone Number.";
  }
  if (type === "age") {
    error =
      value <= 99 && value >= 1 && value.length !== 0 ? "" : "Invalid age.";
  }
  if (type === "state") {
    error =
      value.length > 0 ? "" : "This field is required. Enter valid state name.";
  }
  if (type === "pincode") {
    regex = /^[0-9]{6}$/;
    error =
      regex.test(value) && value.length === 6
        ? ""
        : "This field is required. Enter Valid Pincode.";
  }
  return error;
};
export default handleValidation;
