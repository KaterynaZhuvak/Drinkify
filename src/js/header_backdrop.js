/// open\close favorite-list
const favoriteSwitch = document.querySelector(".js-header-menu-link");
const favoriteIcon = document.querySelector(".js-header-menu-link-icon");
const favoriteList = document.querySelector(".js-favorite-menu-list");
let currentRotation = 0;

favoriteSwitch.addEventListener("click", onClickFavorite);

function onClickFavorite() {
  let displayStyle = favoriteList.style.display;
  currentRotation += 180;
  favoriteIcon.style.transform = `rotate(${currentRotation}deg)`;

if (displayStyle === "none" || displayStyle === "") {
    displayStyle = "flex";
  } else {
    displayStyle = "none";
  }
  favoriteList.style.display = displayStyle;
}

/// toggle theme
window.addEventListener("load", windowLoad);

function windowLoad() {
  const bodyBlock = document.body;
  const saveUserTheme = localStorage.getItem('user-theme');
  let userTheme;
  if (window.matchMedia) {
    userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    !saveUserTheme ? changeTheme() : null;
  });

  const themeButton = document.querySelector('.themetoggle2');
  const resetButton = document.querySelector('.themetoggle_reset2');
  if (themeButton) {
    themeButton.addEventListener("click", function (e) {
      resetButton.classList.add('active');
      changeTheme(true);
    });
  }
  if (resetButton) {
    resetButton.addEventListener("click", function (e) {
      resetButton.classList.remove('active');
      console.dir(resetButton)
      localStorage.setItem('user-theme', '');
    });
  }

  function setThemeClass() {
    if (saveUserTheme) {

      bodyBlock.classList.add(saveUserTheme)
      resetButton.classList.add('active');
    } else {
      bodyBlock.classList.add(userTheme);
    }
  }
  setThemeClass();

  function changeTheme(saveTheme = false) {
    let currentTheme = bodyBlock.classList.contains('light') ? 'light' : 'dark';
    let newTheme;

    if (currentTheme === 'light') {
      newTheme = 'dark';
    } else if (currentTheme === 'dark') {
      newTheme = 'light';
    }
    bodyBlock.classList.remove(currentTheme);
    bodyBlock.classList.add(newTheme);
    saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
  }
}