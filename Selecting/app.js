const allImages = document.getElementsByTagName("img");

for (let img of allImages) {
  img.src =
    "https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg";
}

const squareImages = document.getElementsByClassName("square");

for (let img of squareImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

/*
//This will print out each href for all a's that fall within p (paragraphs)
// const links = document.querySelectorAll("p a");

// for (let link of links) {
//     console.log(link.href)
// }
*/

//This gives us the first p element.
// document.squerySelector('p');

/* Selecting by a element selector */
document.querySelector("a[title='Java']");
