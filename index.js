
const orangeBox = document.querySelector('.orangeBox');
const blueBoxes = document.getElementsByClassName('blueBox');

// Event listeners for draggable element orangeBox
orangeBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});

orangeBox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'orangeBox';
});

for (blueBox of blueBoxes) {
    blueBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered');
    });

    blueBox.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');

    })

    blueBox.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered');
        e.target.className = 'blueBox'
    })

    blueBox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(orangeBox);
    })
}