document.addEventListener("DOMContentLoaded", function() {
    const text1 = "Advanced Idea Minds";
    const text2 = "A.I.M";
    const typingSpeed = 100;
    const deleteSpeed = 100;
    let i = 0;
    const titleElement = document.getElementById("title");
    titleElement.innerHTML = "";

    function typeWriter1() {
        if (i < text1.length) {
            titleElement.innerHTML += text1.charAt(i);
            i++;
            setTimeout(typeWriter1, typingSpeed);
        } else {
            setTimeout(deleteWriter1, 4000); 
        }
    }

    function deleteWriter1() {
        const originalText = titleElement.innerHTML;

        function deleteAnimation1() {
            if (titleElement.innerHTML.length > 0) {
                titleElement.innerHTML = originalText.substring(0, titleElement.innerHTML.length - 1);
                setTimeout(deleteAnimation1, deleteSpeed);
            } else {
                i = 0; 
                setTimeout(typeWriter2, 4000); 
            }
        }

        deleteAnimation1();
    }

    function typeWriter2() {
        if (i < text2.length) {
            titleElement.innerHTML += text2.charAt(i);
            i++;
            setTimeout(typeWriter2, typingSpeed);
        }else{
            setTimeout(deleteWriter2, 4000);

        }
    }
    function deleteWriter2() {
        const originalText = titleElement.innerHTML;

        function deleteAnimation2() {
            if (titleElement.innerHTML.length > 0) {
                titleElement.innerHTML = originalText.substring(0, titleElement.innerHTML.length - 1);
                setTimeout(deleteAnimation2, deleteSpeed);
            } else {
                i = 0; 
                setTimeout(typeWriter1, 4000); 
            }
        }

        deleteAnimation2();
    }

    typeWriter1();
});


document.getElementById("apply").addEventListener("click", function() {
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
document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.getElementById("navigation");
    // Add the class to trigger the animation
    setTimeout(() => {
        navigation.classList.add("show-nav");
    }, 100); // Adjust the delay as needed
});

document.addEventListener("DOMContentLoaded", () => {
    const socialImages = document.querySelectorAll(".social img");

    socialImages.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add("fade-in-blur");
        }, index * 500); // Adjust the delay (500ms) as needed
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const socialImages = document.querySelectorAll(".social img");
    const sponsorImages = document.querySelectorAll(".sponsor-images img");

    socialImages.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add("fade-in-blur");
        }, index * 500); 
    });

    sponsorImages.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add("fade-in-blur");
        }, (index + socialImages.length) * 600); 
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("aboutButton").onclick = function() {
        window.location.href = 'src/about.html';
    };
    document.getElementById("projectsButton").onclick = function() {
        window.location.href = 'src/fyi.html';
    };
    document.getElementById("joinButton").onclick = function() {
        window.location.href = 'src/join.html';
    };
});




