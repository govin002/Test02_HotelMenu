// Function to show video
function showVideo(videoId, popupId) {
    document.getElementById(popupId).style.display = 'block';
    document.getElementById(videoId).play();
}

// Attach event listeners to buttons
document.getElementById('btn-product1').addEventListener('click', function() {
    showVideo('productVideo1', 'videoPopup1');
});

document.getElementById('btn-product2').addEventListener('click', function() {
    showVideo('productVideo2', 'videoPopup2');
});

document.getElementById('btn-product3').addEventListener('click', function() {
    showVideo('productVideo3', 'videoPopup3');
});

document.getElementById('btn-product4').addEventListener('click', function() {
    showVideo('productVideo4', 'videoPopup4');
});

// Close button functionality
document.querySelectorAll('.videoPopup span').forEach(function(closeButton) {
    closeButton.onclick = function() {
        const popupId = this.closest('.videoPopup').id;
        document.getElementById(popupId).style.display = 'none';
    };
});
