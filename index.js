document.getElementById('hamburgerMenuIcon').addEventListener('click', () => {
    document.getElementById('expandedMenu').classList.toggle('visible')
})

document.querySelectorAll('.hamburgerListItem').forEach((hamburgerMenuItem) => {
    hamburgerMenuItem.addEventListener('click', () => {
    document.getElementById('expandedMenu').classList.toggle('visible')
    })
})

$("#lukeHeadshot").velocity("fadeIn", { duration: 1500 })


// Still need to remove expanded menu when screen width is over X pixels (i.e. hamburger menu icon dissappears)