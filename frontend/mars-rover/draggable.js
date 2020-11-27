const dragSprite = document.getElementById("mars-sprite");

dragSprite.onmousedown = function (event) {
  //center the sprite at  x and y coordinates
  function moveAt(pageX, pageY) {
    dragSprite.style.left = pageX - dragSprite.offsetWidth / 2 + "px";
    dragSprite.style.top = pageY - dragSprite.offsetHeight / 2 + "px";
  }
  // move the absolutely position sprite under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the sprite on mousemove
  document.addEventListener("mousemove", onMouseMove);
  // drop the sprite and remove uneeded handlers
  dragSprite.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    dragSprite.onmouseup = null;
  };
};
//remove browser default support for drag and drop images
dragSprite.ondragstart = function () {
  return false;
};
