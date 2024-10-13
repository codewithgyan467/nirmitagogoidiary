// notes.js

let currentPage = 1; // Start from cover which is page 1
const flipbook = $("#flipbook");
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageIndicator = document.getElementById('pageIndicator');

// Initialize Turn.js
flipbook.turn({
    width: 400,
    height: 600,
    autoCenter: true,
    duration: 1000, // Flip duration in ms
    acceleration: true,
    gradients: true,
    elevation: 50,
    when: {
        turning: function(event, page, view) {
            updatePageIndicator(page);
        },
        turned: function(event, page, view) {
            updatePageIndicator(page);
        }
    }
});

// Function to update the page indicator
function updatePageIndicator(page) {
    const totalFlipPages = flipbook.turn("pages");
    if (page === 1) {
        pageIndicator.textContent = 'Cover';
    } else if (page === totalFlipPages) {
        pageIndicator.textContent = 'Back Cover';
    } else {
        pageIndicator.textContent = `Page ${page - 1}`;
    }

    // Disable/Enable buttons based on current page
    prevBtn.disabled = page <= 1;
    nextBtn.disabled = page >= totalFlipPages;
}

// Initial page indicator
updatePageIndicator(1);

// Button controls
$('#nextBtn').click(function(){
    flipbook.turn("next");
});

$('#prevBtn').click(function(){
    flipbook.turn("previous");
});
