twemoji.size = '16x16';
let emojis = document.querySelectorAll('emoji');

emojis.forEach(emoji => {
  twemoji.size = '16x16';
  if (emoji.className && emoji.className.length > 0) twemoji.size = emoji.className;
  twemoji.parse(emoji);
});

let allImgs = document.querySelectorAll("img");
allImgs.forEach(img => {
  if (img.alt && img.alt.length > 0) {} else {
    img.alt = "An image."
  }
})