class ErrorHandler {
  static errorHandling() {
    console.log("error js");
    alert("An error occurred. Please try again later.");
  }
}

export class ErrorExtendedHandler extends ErrorHandler {
  static alertError() {
    console.log("An error from extended");
    alert("An error from extended");
  }

  errorHandling() {
    super.errorHandling();
  }

  //not so smart class
}
