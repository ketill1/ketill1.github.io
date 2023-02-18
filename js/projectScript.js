// Get all the images with the class "image"
const images = document.querySelectorAll('.image');
// Get the enlarged image and its container
const enlargedImage = document.getElementById('enlarged-image');
const enlargedImageContainer = document.getElementById('enlarged-image-container');
// Loop through each image and add an event listener for when it's clicked
images.forEach(image => {
  image.addEventListener('click', () => {
    // Set the source of the enlarged image to the clicked image
    enlargedImage.src = image.src;
    // Show the enlarged image container
    enlargedImageContainer.style.display = 'block';
  });
});
// Add an event listener for when the enlarged image container is clicked
enlargedImageContainer.addEventListener('click', () => {
  // Hide the enlarged image container
  enlargedImageContainer.style.display = 'none';
});
