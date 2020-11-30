let isDragging = false;

const dragSprite = document.getElementById("mars-sprite");
const distanceMoved = {
  x: 0,
  y: 0,
};

const dragStart = {
  x: 0,
  y: 0,
};

const translateStart = {
  x: 0,
  y: 0,
};

function startDragging(event) {
  isDragging = true;
  dragStart.x = event.clientX;
  dragStart.y = event.clientY;
  translateStart.x = distanceMoved.x;
  translateStart.y = distanceMoved.y;
}

dragSprite.addEventListener("mousedown", startDragging);

function moveSprite(event) {
  if (isDragging === true) {
    event.preventDefault();
    distanceMoved.x = translateStart.x + event.clientX - dragStart.x;
    distanceMoved.y = translateStart.y + event.clientY - dragStart.y;

    dragSprite.style.transform = `translate(${distanceMoved.x}px, ${distanceMoved.y}px)`;
  }
}

dragSprite.addEventListener("mousemove", moveSprite);

function stopDragging() {
  isDragging = false;
}

dragSprite.addEventListener("mouseup", stopDragging);
