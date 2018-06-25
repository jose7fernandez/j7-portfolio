var window = window;
window.onload = function () {
    //Scroll Reveal
    //
    //
    window.sr = ScrollReveal();
    sr.reveal('.logo', {
        duration: 2000
        , origin: 'right'
        , distance: '200px'
    });
    sr.reveal('.nav', {
        duration: 2000
        , origin: 'left'
        , distance: '100px'
    });
    sr.reveal('.jf', {
        duration: 2000
        , origin: 'top'
        , distance: '300px'
    });
    sr.reveal('.fdev', {
        duration: 2000
        , origin: 'top'
        , distance: '500px'
    });
    sr.reveal('#homefooter', {
        duration: 2500
    });
    sr.reveal('.selected-projects', {
        duration: 2000
        , origin: 'top'
        , distance: '300px'
    });
    sr.reveal('.tba', {
        duration: 2000
        , origin: 'top'
        , distance: '500px'
    });
    sr.reveal('.box1', {
        duration: 2500
        , origin: 'left'
        , distance: '400px'
        , mobile: false
    });
    sr.reveal('.box2', {
        duration: 2500
        , origin: 'right'
        , distance: '400px'
        , mobile: false
    });
    sr.reveal('.box3', {
        duration: 2000
        , origin: 'left'
        , distance: '400px'
        , viewFactor: 0.1
        , mobile: false
    });
    sr.reveal('.box4', {
        duration: 2000
        , origin: 'right'
        , distance: '400px'
        , viewFactor: 0.1
        , mobile: false
    });
    sr.reveal('.box5', {
        duration: 2000
        , origin: 'left'
        , distance: '400px'
        , viewFactor: 0.1
        , mobile: false
    });
    sr.reveal('.box6', {
        duration: 2000
        , origin: 'right'
        , distance: '400px'
        , viewFactor: 0.1
        , mobile: false
    });
    sr.reveal('.box7', {
        duration: 2000
        , origin: 'bottom'
        , distance: '400px'
        , viewFactor: 0.1
        , mobile: false
    });
    sr.reveal('.contactme', {
        duration: 2000
        , origin: 'right'
        , distance: '300px'
    });
    //Scroll Reveal END
    // Get modal 1 element
    let modal = document.getElementById('simpleModal');
    // Get open modal button
    let modalButton = document.getElementById('modalButton');
    // Get close button
    let closeBtn = document.getElementsByClassName('closeBtn')[0];
    // Listen for open click
    modalButton.addEventListener('mouseover', openModal);
    // Listen for close click
    closeBtn.addEventListener('click', closeModal);
    // Listen for outside click
    window.addEventListener('click', outsideClick);
    // Function to open modal
    function openModal() {
        modal.style.display = 'block';
    }
    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
    }
    // Function to close modal if outside click
    function outsideClick(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    }
    // END modal 1 element
    //
    // Get modal 2 element
    let modal2 = document.getElementById('simpleModal2');
    // Get open modal button
    let modalButton2 = document.getElementById('modalButton2');
    // Get close button
    let closeBtn2 = document.getElementsByClassName('closeBtn2')[0];
    // Listen for open click
    modalButton2.addEventListener('mouseover', openModal2);
    // Listen for close click
    closeBtn2.addEventListener('click', closeModal2);
    // Listen for outside click
    window.addEventListener('click', outsideClick2);
    // Function to open modal
    function openModal2() {
        modal2.style.display = 'block';
    }
    // Function to close modal
    function closeModal2() {
        modal2.style.display = 'none';
    }
    // Function to close modal if outside click
    function outsideClick2(e) {
        if (e.target == modal2) {
            modal2.style.display = 'none';
        }
    }
    // END modal 2 element
    //
    // Get modal 3 element
    let modal3 = document.getElementById('simpleModal3');
    // Get open modal button
    let modalButton3 = document.getElementById('modalButton3');
    // Get close button
    let closeBtn3 = document.getElementsByClassName('closeBtn3')[0];
    // Listen for open click
    modalButton3.addEventListener('mouseover', openModal3);
    // Listen for close click
    closeBtn3.addEventListener('click', closeModal3);
    // Listen for outside click
    window.addEventListener('click', outsideClick3);
    // Function to open modal
    function openModal3() {
        modal3.style.display = 'block';
    }
    // Function to close modal
    function closeModal3() {
        modal3.style.display = 'none';
    }
    // Function to close modal if outside click
    function outsideClick3(e) {
        if (e.target == modal3) {
            modal3.style.display = 'none';
        }
    }
    // END modal 3 element
    //
    // Get modal 4 element
    let modal4 = document.getElementById('simpleModal4');
    // Get open modal button
    let modalButton4 = document.getElementById('modalButton4');
    // Get close button
    let closeBtn4 = document.getElementsByClassName('closeBtn4')[0];
    // Listen for open click
    modalButton4.addEventListener('mouseover', openModal4);
    // Listen for close click
    closeBtn4.addEventListener('click', closeModal4);
    // Listen for outside click
    window.addEventListener('click', outsideClick4);
    // Function to open modal
    function openModal4() {
        modal4.style.display = 'block';
    }
    // Function to close modal
    function closeModal4() {
        modal4.style.display = 'none';
    }
    // Function to close modal if outside click
    function outsideClick4(e) {
        if (e.target == modal4) {
            modal4.style.display = 'none';
        }
    }
    // END modal 4 element
    //
    // Get modal 5 element
    let modal5 = document.getElementById('simpleModal5');
    // Get open modal button
    let modalButton5 = document.getElementById('modalButton5');
    // Get close button
    let closeBtn5 = document.getElementsByClassName('closeBtn5')[0];
    // Listen for open click
    modalButton5.addEventListener('mouseover', openModal5);
    // Listen for close click
    closeBtn5.addEventListener('click', closeModal5);
    // Listen for outside click
    window.addEventListener('click', outsideClick5);
    // Function to open modal
    function openModal5() {
        modal5.style.display = 'block';
    }
    // Function to close modal
    function closeModal5() {
        modal5.style.display = 'none';
    }
    // Function to close modal if outside click
    function outsideClick5(e) {
        if (e.target == modal5) {
            modal5.style.display = 'none';
        }
    }
    // END modal 5 element
    //
    // Get modal 6 element
    let modal6 = document.getElementById('simpleModal6');
    // Get open modal button
    let modalButton6 = document.getElementById('modalButton6');
    // Get close button
    let closeBtn6 = document.getElementsByClassName('closeBtn6')[0];
    // Listen for open click
    modalButton6.addEventListener('mouseover', openModal6);
    // Listen for close click
    closeBtn6.addEventListener('click', closeModal6);
    // Listen for outside click
    window.addEventListener('click', outsideClick6);
    // Function to open modal
    function openModal6() {
        modal6.style.display = 'block';
    }
    // Function to close modal
    function closeModal6() {
        modal6.style.display = 'none';
    }
    // Function to close modal if outside click
    function outsideClick6(e) {
        if (e.target == modal6) {
            modal6.style.display = 'none';
        }
    }
    // END modal 6 element
    //
    // Get modal 7 element
    let modal7 = document.getElementById('simpleModal7');
    // Get open modal button
    let modalButton7 = document.getElementById('modalButton7');
    // Get close button
    let closeBtn7 = document.getElementsByClassName('closeBtn7')[0];
    // Listen for open click
    modalButton7.addEventListener('mouseover', openModal7);
    // Listen for close click
    closeBtn7.addEventListener('click', closeModal7);
    // Listen for outside click
    window.addEventListener('click', outsideClick7);
    // Function to open modal
    function openModal7() {
        modal7.style.display = 'block';
    }
    // Function to close modal
    function closeModal7() {
        modal7.style.display = 'none';
    }
    // Function to close modal if outside click
    function outsideClick7(e) {
        if (e.target == modal7) {
            modal7.style.display = 'none';
        }
    }
    // END modal 7 element
    //
    //
}