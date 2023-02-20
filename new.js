function popOut() {
    alert("You made the right choice child.  May the Pah Wraihts guide you.\n\n 1 2 1 2");
    replace();
} 

function mouseOver() {
    document.getElementById("no").remove;
}

let noButton = document.getElementById("no");

function remove() {
    noButton.remove();
}

function replace() {
    let wrapper = document.getElementById("wrapper");
    wrapper.append(noButton);
}

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function() {
    modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', function() {
    modal.classList.remove("open-modal");
});

