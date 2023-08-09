const themeswitch = document.getElementById("theme-switch");

let theme = CookieManager.get("theme") ? CookieManager.get("theme") : true;

function setThemeClass() {
    if(theme == 1) {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
        themeswitch.setAttribute('name', 'sun');
    } else {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
        themeswitch.setAttribute('name', 'moon');
    }
}

themeswitch.addEventListener('click', () => {
    if (theme == 1 || theme == '1') {
        theme = 0;
    } else {
        theme = 1;
    }
    CookieManager.set("theme", theme);
    setThemeClass();
});

setThemeClass();