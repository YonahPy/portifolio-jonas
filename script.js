const buttonGithub = document.querySelectorAll('.button-github');

buttonGithub.forEach(button => {
    button.addEventListener('click', () =>{
        const githubLink = button.dataset.githubLink;

        window.open(githubLink, '_blank');
    })
})

const buttonSee = document.querySelectorAll('.button-see');

buttonSee.forEach(button => {
    button.addEventListener('click', () => {
        const see = button.dataset.see;

        window.open(see, '_blank');
    })
})

const mobileMenu = document.querySelector('.mobile-menu');
const ul = document.querySelector('nav ul');
mobileMenu.addEventListener('click', function(){
    mobileMenu.classList.toggle('active');
    ul.classList.toggle('active');
    console.log(ul)
    
})