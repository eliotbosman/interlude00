const gallery = document.querySelector('.gallery');
let scrollPos = 0;

gallery.addEventListener('scroll', () => {
    scrollPos = gallery.scrollLeft;
  });

  function updateGallery() {
    gallery.style.transform = `translateX(-${scrollPos}px)`;
    requestAnimationFrame(updateGallery);
  }
  
  updateGallery();

  function pro() {
    var p = document.getElementsByClassName('project')[0];
    var h = document.getElementsByClassName('home')[0];
    var o = document.getElementsByClassName('overlay')[0];
    var f = document.getElementsByClassName('feature')[0];
    p.style.display = "grid"; p.style.animation = "fade-in 0.8s ease";
    h.style.display = "none"; o.style.visibility = "hidden"; f.style.display = "none";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
  }

  function home() {
    var p = document.getElementsByClassName('project')[0];
    var h = document.getElementsByClassName('home')[0];
    var f = document.getElementsByClassName('feature')[0];
    var o = document.getElementsByClassName('overlay')[0];
    p.style.display = "none"; h.style.animation = "fade-in 0.8s ease";
    h.style.display = "grid";  f.style.display = "grid"; o.style.visibility = "visible"; o.style.background = "white";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      }

function changeImage() {
        // Define an array of image URLs
        var images = [
            'img/InterludeSession—1.jpg',
            'img/InterludeSession—2.jpg',
            'img/InterludeSession—3.jpg',
            'img/InterludeSession—4.jpg',
            ];
      
        // Get a random number between 0 and the length of the images array
        var randomIndex = Math.floor(Math.random() * images.length);
      
        // Get the div element to change the image in
        var imageDiv = document.getElementsByClassName('hpg-img')[0];
      
        // Set the image source to the randomly selected image URL
        imageDiv.innerHTML = '<img src="' + images[randomIndex] + '" />';
        imageDiv.style.animation = 'fade-in ease 0.8s';
      }