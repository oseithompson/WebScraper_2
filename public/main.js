// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modelBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Scrape button to load articles
modalBtn.addEventListener('click', displayArticles);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
    // console.log(123);
    modal.style.display = 'block';
}

// Display Articles
function displayArticles() {
    // console.log(123);
    articles.style.display = 'block';
    notes.style.display = 'block';
}

//Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

//Function to close modal from outside
function outsideClick(e) {
    if(e.target == modal){
        modal.style.display = 'none';
    }
}