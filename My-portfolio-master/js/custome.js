// ===== Header background while scrolling ==== 
$(function () {
    var header = $(".my-header");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            header.removeClass('my-header').addClass("black-back");
            header.addClass("transition");
        } else {
            header.removeClass("black-back ").addClass('my-header');
            header.addClass("transition");
        }
    });
});

// ===== Header Text ======
$(function () {
    var message = 'Hello, My name is Josipa! I am web developer.';
    var index = 0;

    function displayLetter() {
        if (index < message.length) {
            $('#home-heading').append(message[index++]);
        } else {
            clearInterval(repeat);
        }
    }
    var repeat = setInterval(displayLetter, 60);
});
// ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
});
$('#return-to-top').click(function () { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});

//======================Close menu on mobile device=========================

// ===== Firebase Text ======

var firebaseConfig = {
    apiKey: "AIzaSyB_0gwrtKKfRjzYB8L8iPO_JdST-NLzweA",
    authDomain: "contact-me-827a4.firebaseapp.com",
    databaseURL: "https://contact-me-827a4.firebaseio.com",
    projectId: "contact-me-827a4",
    storageBucket: "contact-me-827a4.appspot.com",
    messagingSenderId: "39266110747",
    appId: "1:39266110747:web:23210b89272046ce9717be"
  };

  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref("contactData");

  document.getElementById('contactForm').addEventListener('submit', submitForm);

  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
    
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }


