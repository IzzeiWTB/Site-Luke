window.addEventListener('resize', function() {
    adjustLayout();
});

function adjustLayout() {
    var screenWidth = window.innerWidth;
    var buttons = document.querySelectorAll('.buttons button');

    if (screenWidth <= 768) { 
        buttons.forEach(function(button) {
            button.style.display = 'block';
        });
    } else {
        buttons.forEach(function(button) {
            button.style.display = 'inline-block';
        });
    }
}

adjustLayout();
