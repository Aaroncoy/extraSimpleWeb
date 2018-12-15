var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

//we are going to pick a button that is inside the .plan tag
var selectPlanButtons = document.querySelectorAll('.prices button');

var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        modal.style.display = 'block';
        backdrop.style.display = 'block';

    });

}

backdrop.addEventListener("click", function(){
    mobileNav.style.display = "none"; 
    this.closeModal();
});
modalNoButton.addEventListener("click", closeModal);

function closeModal() {
    backdrop.style.display = "none";
    modal.style.display = "none";
}

toggleButton.addEventListener('click', function () {
    mobileNav.style.display = "block";
})
