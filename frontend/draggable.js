const dragSprite = document.getElementById("mars-sprite");

dragSprite.onmousedown = function (event) {
  dragSprite.style.position = "absolute";
  dragSprite.style.zIndex = 1000;

  document.body.append(dragSprite);

  function moveAt(pageX, pageY) {
    dragSprite.style.left = pageX - dragSprite.offsetWidth / 2 + "px";
    dragSprite.style.top = pageY - dragSprite.offsetHeight / 2 + "px";
  }

  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  dragSprite.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    dragSprite.onmouseup = null;
  };
};

dragSprite.ondragstart = function () {
  return false;
};
