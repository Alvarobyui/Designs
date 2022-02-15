function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("HAMBURGERbTN").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;


