const orangeBox = document.querySelector('.orangeBox');
const blueBoxes = document.getElementsByClassName('blueBox');


//event listener for dragabble element
orangeBox.addEventListener('dragstart', (e) => {
    e.target.classList.add('hold');
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0)
})

orangeBox.addEventListener('dragEnd', () => {

})

for (bluebox of blueBoxes) {
    bluebox.addEventListener('dragover', () => { })
    bluebox.addEventListener('dragenter', () => { })
    bluebox.addEventListener('dragleave', () => { })
    bluebox.addEventListener('drop', () => { })
}