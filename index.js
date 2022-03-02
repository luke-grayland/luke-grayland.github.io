document.getElementById('hamburgerMenuIcon').addEventListener('click', () => {
    document.getElementById('expandedMenu').classList.toggle('visible')
})

document.querySelectorAll('.hamburgerListItem').forEach((hamburgerMenuItem) => {
    hamburgerMenuItem.addEventListener('click', () => {
    document.getElementById('expandedMenu').classList.toggle('visible')
    })
})

window.addEventListener('resize', (e) => {
    if (window.innerWidth > 1170) {
        document.getElementById('expandedMenu').classList.remove('visible')
    }
})