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
        
        // Get all gallery images in order
        galleryImages = Array.from(document.querySelectorAll('.gallery-image'));
    }

    // Open Modal with Specified Image
    function openModal(index) {
        currentImageIndex = index;
        updateModalImage();
        modal.style.display = "block";
    }

    // Close Modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Show Next Image
    function showNext() {
        if (currentImageIndex < galleryImages.length - 1) {
            currentImageIndex++;
            updateModalImage();
        }
    }

    // Show Previous Image
    function showPrev() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateModalImage();
        }
    }

    // Update Modal Image and Caption
    function updateModalImage() {
        const img = galleryImages[currentImageIndex];
        modalImage.src = img.src;
        captionText.textContent = img.alt;
        
        // Update navigation buttons visibility
        prevBtn.style.display = currentImageIndex === 0 ? 'none' : 'block';
        nextBtn.style.display = currentImageIndex === galleryImages.length - 1 ? 'none' : 'block';
    }

    // Attach Event Listeners to Gallery Images
    function attachGalleryEventListeners() {
        galleryImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                openModal(index);
            });
        });
    }

    // Attach Event Listeners to Modal Controls
    function attachModalEventListeners() {
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', showNext);
        }
        if (prevBtn) {
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
                switch(event.key) {
                    case "ArrowRight":
                        showNext();
                        break;
                    case "ArrowLeft":
                        showPrev();
                        break;
                    case "Escape":
                        closeModal();
                        break;
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