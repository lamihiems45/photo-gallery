// Get modal element and other elements
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");
const closeButton = document.getElementsByClassName("close")[0];

// Add click event listeners to all images
const images = document.querySelectorAll(".photo img");
images.forEach(img => {
    img.onclick = function () {
        modal.style.display = "block";
        modalImage.src = this.src; // Set the modal image to the clicked image's src
        modalText.textContent = this.alt; // Set the modal text to the alt text of the clicked image
    };
});

// Close the modal when the user clicks on the close button
closeButton.onclick = function () {
    modal.style.display = "none";
};

// Close the modal if the user clicks outside of the image
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
