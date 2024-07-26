document.getElementById('uploadBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
});

document.getElementById('imageInput').addEventListener('change', function() {
    if (this.files.length === 0) {
        alert('Please select an image to upload.');
        return;
    }

    // Process the image upload (you will need to handle this with your backend)
    alert('Image uploaded successfully!');
});

document.getElementById('resultsBtn').addEventListener('click', function() {
    window.location.href = 'results.html';  // Link to the results page
});
