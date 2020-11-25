const dragSprite = document.getElementById("mars-sprite");

dragSprite.onmousedown = function (event) {
  // (1) prepare to moving: make absolute and on top by z-index
  dragSprite.style.position = "absolute";
  dragSprite.style.zIndex = 1000;

  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(dragSprite);

  // centers the dragSprite at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    dragSprite.style.left = pageX - dragSprite.offsetWidth / 2 + "px";
    dragSprite.style.top = pageY - dragSprite.offsetHeight / 2 + "px";
  }

  // move our absolutely positioned dragSprite under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the dragSprite on mousemove
  document.addEventListener("mousemove", onMouseMove);

  // (3) drop the dragSprite, remove unneeded handlers
  dragSprite.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    dragSprite.onmouseup = null;
  };
};

dragSprite.ondragstart = function () {
  return false;
};
