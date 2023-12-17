// Get the basket element
const basket = document.getElementById("basket");

// Get the contents element
const contents = document.getElementById("contents");

// Get the empty message element
const emptyMessage = document.getElementById("emptyMessage");

// Create an array of items
const items = ["item1.png", "item2.png"];

// Add an event listener for the click event on the basket
basket.addEventListener("click", () => {
  // If the basket is empty, show the empty message
  if (contents.childElementCount === 0) {
    emptyMessage.classList.remove("hidden");
    return;
  }

  // Get a random item from the array
  const randomItem = items[Math.floor(Math.random() * items.length)];

  // Create a new image element
  const itemImage = document.createElement("img");

  // Set the source of the image element to the random item
  itemImage.src = randomItem;

  // Add the image element to the contents
  contents.appendChild(itemImage);

  // Hide the empty message
  emptyMessage.classList.add("hidden");

  // Apply the "pop-in" animation to the new item
  setTimeout(() => {
    itemImage.classList.add("pop-in");
  }, 0);
});

// Add an event listener for the click event on the images in the contents
contents.addEventListener("click", (event) => {
  // If the target of the event is an image, remove it from the contents
  if (event.target.tagName === "IMG") {
    event.target.remove();
  }
});