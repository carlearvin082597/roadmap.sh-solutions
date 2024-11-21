document.addEventListener("DOMContentLoaded", () => {
    const cookieBox = document.querySelector(".wrapper");
    const buttons = document.querySelectorAll(".button");
  
    // Show cookie consent popup if no cookie is set
    if (!document.cookie.includes("cookieConsent")) {
      cookieBox.classList.add("show");
    }
  
    // Add event listeners to buttons
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        cookieBox.classList.remove("show");
  
        if (button.id === "acceptBtn") {
          // Set a cookie for 30 days
          document.cookie = "cookieConsent=true; max-age=" + 60 * 60 * 24 * 30;
        }
      });
    });
  });
  