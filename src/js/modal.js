// src/js/modal.js

(function() {
    let currentImageIndex = 0;
    let galleryImages = [];
    let modal, modalImage, captionText, closeBtn, prevBtn, nextBtn;

    // Initialize Modal Elements
    function initializeModalElements() {
        modal = document.getElementById('modal');
        modalImage = document.getElementById('modal-image');
        captionText = document.getElementById('caption');
        closeBtn = document.querySelector('.close');
        prevBtn = document.querySelector('.prev');
        nextBtn = document.querySelector('.next');
    }

    // Open Modal with Specified Image
    function openModal(index) {
        currentImageIndex = index;
        const img = galleryImages[currentImageIndex];
        modal.style.display = "block";
        modalImage.src = img.src;
        captionText.textContent = img.alt;
    }

    // Close Modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Show Next Image
    function showNext() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        const img = galleryImages[currentImageIndex];
        modalImage.src = img.src;
        captionText.textContent = img.alt;
    }

    // Show Previous Image
    function showPrev() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        const img = galleryImages[currentImageIndex];
        modalImage.src = img.src;
        captionText.textContent = img.alt;
    }

    // Attach Event Listeners to Gallery Images
    function attachGalleryEventListeners() {
        galleryImages = document.querySelectorAll('.gallery-image');
        galleryImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                openModal(index);
            });
        });
    }

    // Attach Event Listeners to Modal Controls
    function attachModalEventListeners() {
        if (closeBtn && prevBtn && nextBtn) {
            closeBtn.addEventListener('click', closeModal);
            nextBtn.addEventListener('click', showNext);
            prevBtn.addEventListener('click', showPrev);
        }

        // Close modal when clicking outside the image
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(event) {
            if (modal.style.display === "block") {
                if (event.key === 'ArrowRight') {
                    showNext();
                } else if (event.key === 'ArrowLeft') {
                    showPrev();
                } else if (event.key === 'Escape') {
                    closeModal();
                }
            }
        });
    }

    // Initialize Modal Functionality
    function initModal() {
        initializeModalElements();
        attachGalleryEventListeners();
        attachModalEventListeners();
    }

    // Expose initModal to be called externally
    window.initModal = initModal;
})();