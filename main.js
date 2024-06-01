document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawArea');
    const context = canvas.getContext('2d');
    const colorInput = document.getElementById('colorInput');
    const sizeInput = document.getElementById('sizeInput');
    const clearButton = document.getElementById('clearBtn');

    let isDrawing = false;

    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.6;

    const startDrawing = (e) => {
        isDrawing = true;
        draw(e);
    };

    const stopDrawing = () => {
        isDrawing = false;
        context.beginPath();
    };

    const draw = (e) => {
        if (!isDrawing) return;
        
        context.lineWidth = sizeInput.value;
        context.lineCap = 'round';
        context.strokeStyle = colorInput.value;

        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);

    clearButton.addEventListener('click', () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });
});
