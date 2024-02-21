//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  // Function to write "DOM load success" to the body
  function writeSuccessMessage() {
    const successMessage = document.createElement("p");
    successMessage.textContent = "DOM load success";
    document.body.appendChild(successMessage);
  }
	if (document.body.children.length === 0) {
    // Write success message if body is empty
    writeSuccessMessage();
  } else {
    // If body is not empty, clear it and then write success message
    document.body.innerHTML = "";
    writeSuccessMessage();
  }
});