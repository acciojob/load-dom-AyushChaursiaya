//your JS code here. If required.
 function writeSuccessMessage() {
    const successMessage = document.createElement("p");
    successMessage.textContent = "DOM load success";
    document.body.appendChild(successMessage);
  }

  // Call the function when DOM is loaded
  writeSuccessMessage();