 document.addEventListener("DOMContentLoaded", function() {
    // Search button functionality
    const searchButton = document.querySelector(".search-container button");
    const searchInput = document.getElementById("search");

    searchButton.addEventListener("click", function() {
        alert("Searching for: " + searchInput.value);
    });

    // Shop Now button functionality
    const shopNowButton = document.querySelector(".cta button");

    shopNowButton.addEventListener("click", function() {
        alert("Redirecting to shop page...");
        // Redirect to the shop page
        window.location.href = "#products";
    });

    // Image click functionality
    const images = document.querySelectorAll("#item, #img2");

    images.forEach(image => {
        image.addEventListener("click", function() {
            alert("You clicked on: " + image.alt);
        });
    });

    // Food item links click functionality
    const foodLinks = document.querySelectorAll(".leftbox a");

    foodLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Redirecting to purchase page for: " + link.parentElement.parentElement.querySelector("h2").textContent);
            // Redirect to the actual link
            window.location.href = link.href;
        });
    });
});
 
