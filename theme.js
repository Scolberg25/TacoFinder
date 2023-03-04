// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('appColorScheme'); 
let systemDarkMode = false;

const darkModeToggle = document.getElementById('dark-mode-toggle')

const enableDarkMode = () => { 
    document.body.classList.add('darkmode');
    localStorage.setItem('appColorScheme', 'dark');
}

const disableDarkMode = () => {  
    document.body.classList.remove('darkmode'); 
    localStorage.setItem('appColorScheme', 'light');
}

if (darkMode === 'dark') {
    darkModeToggle.checked = true;
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('appColorScheme');   
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {  
        disableDarkMode(); 
    }
});