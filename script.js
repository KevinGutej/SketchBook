document.addEventListener('DOMContentLoaded', () => {
    const sketchCanvas = document.getElementById('sketchCanvas');
    const sketchContext = sketchCanvas.getContext('2d');
    const colorSelector = document.getElementById('colorSelector');
    const brushSizeSelector = document.getElementById('brushSizeSelector');
    const clearButton = document.getElementById('clearButton');

    let isDrawing = false;
    let selectedColor = '#000000';
    let selectedBrushSize = 5;

    sketchCanvas.width = window.innerWidth * 0.8;
    sketchCanvas.height = window.innerHeight * 0.6;

    sketchCanvas.addEventListener('mousedown', beginDrawing);
    sketchCanvas.addEventListener('mouseup', endDrawing);
    sketchCanvas.addEventListener('mousemove', drawOnCanvas);

    colorSelector.addEventListener('input', updateColor);
    brushSizeSelector.addEventListener('input', updateBrushSize);
    clearButton.addEventListener('click', clearSketchCanvas);

    function beginDrawing(event) {
        isDrawing = true;
        drawOnCanvas(event);
    }

    function endDrawing() {
        isDrawing = false;
        sketchContext.beginPath();
    }

    function drawOnCanvas(event) {
        if (!isDrawing) return;

        sketchContext.lineWidth = selectedBrushSize;
        sketchContext.lineCap = 'round';
        sketchContext.strokeStyle = selectedColor;

        sketchContext.lineTo(event.clientX - sketchCanvas.offsetLeft, event.clientY - sketchCanvas.offsetTop);
        sketchContext.stroke();
        sketchContext.beginPath();
        sketchContext.moveTo(event.clientX - sketchCanvas.offsetLeft, event.clientY - sketchCanvas.offsetTop);
    }

    function updateColor(event) {
        selectedColor = event.target.value;
    }

    function updateBrushSize(event) {
        selectedBrushSize = event.target.value;
    }

    function clearSketchCanvas() {
        sketchContext.clearRect(0, 0, sketchCanvas.width, sketchCanvas.height);
    }
});
