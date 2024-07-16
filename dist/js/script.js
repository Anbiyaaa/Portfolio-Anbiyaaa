// navbar fixed

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }
    else {
        header.classList.remove('navbar-fixed');
    }

};


// hamberger 

const hamberger = document.querySelector('#hamberger');
const navMenu = document.querySelector('#nav-menu');

hamberger.addEventListener('click', function() {
    hamberger.classList.toggle('hamberger-active');
    navMenu.classList.toggle('hidden');
});

//bg video
const video = document.querySelector('.video-background');
video.playbackRate = 0.75; // Adjust the playback rate here (e.g., 0.75 for half speed)

$(document).on('scroll', function () {
    // initialization of aos
    AOS.init({
      duration: 650,
      once: true
    });
  });


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch('YOUR_SERVER_ENDPOINT', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response data
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
});
