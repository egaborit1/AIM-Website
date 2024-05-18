document.addEventListener("DOMContentLoaded", function() {
    const text1 = "Dominican University Colorstack Computer Society";
    const text2 = "DUCCS";
    const typingSpeed = 70; // Typing speed in milliseconds
    let i = 0;
    const titleElement = document.getElementById("title");
    titleElement.innerHTML = "";

    function typeWriter1() {
        if (i < text1.length) {
            titleElement.innerHTML += text1.charAt(i);
            i++;
            setTimeout(typeWriter1, typingSpeed);
        } else {
            setTimeout(deleteWriter, 1000); // Delay before starting delete animation
        }
    }

    function deleteWriter() {
        const originalText = titleElement.innerHTML;
        let deleteSpeed = 50; // Speed of deleting characters in milliseconds

        function deleteAnimation() {
            if (titleElement.innerHTML.length > 0) {
                titleElement.innerHTML = originalText.substring(0, titleElement.innerHTML.length - 1);
                setTimeout(deleteAnimation, deleteSpeed);
            } else {
                i = 0; // Reset index for typing DUCCS
                setTimeout(typeWriter2, 500); // Delay before typing DUCCS
            }
        }

        deleteAnimation();
    }

    function typeWriter2() {
        if (i < text2.length) {
            titleElement.innerHTML += text2.charAt(i);
            i++;
            setTimeout(typeWriter2, typingSpeed);
        }
    }

    // Start typing animation on page load
    typeWriter1();
});


document.getElementById("apply").addEventListener("click", function() {
    // Replace the URL below with your Microsoft Forms URL
    window.location.href = "https://forms.office.com/r/fKaZSN5Eyt";
  });


  document.addEventListener('DOMContentLoaded', function(){
    const title = document.getElementById('heading');

    setTimeout(() => {
        title.classList.add('active');

    }, 100);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const heading = document.getElementById('heading');
    const clubSummary = document.getElementById('clubSummary');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Check if heading is in viewport on page load
    if (isInViewport(heading)) {
        clubSummary.classList.add('active'); // Trigger animation
    }

    // Check again on scroll
    window.addEventListener('scroll', function() {
        if (isInViewport(heading)) {
            clubSummary.classList.add('active'); // Trigger animation
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Using Intersection Observer API for scroll reveal animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});

