window.onscroll = () => {
    const nav = document.querySelector('.scroll');
    if (this.scrollY <= 20) 
          nav.id = '';
     else nav.id = 'navbarDark';
};