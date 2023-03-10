const panels = document.querySelectorAll('.panel')

function panelOpen(){
    console.log('Helo')
    this.classList.toggle('open')
}

function panelActiv(e){
    console.log(e.propertyName)
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('.open-active')
    }
} 

panels.forEach(panel => panel.addEventListener('click', panelOpen))
panels.forEach(panel => panel.addEventListener('transitionend', panelActiv))
