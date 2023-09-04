(() => {
    let expandsMenu = document.getElementsByClassName("expand-menu")
    let aside = document.querySelector(".aside")
    let mostrarMenuAberto = document.getElementsByClassName("mostrarMenuAberto")
    for(let expandMenu of expandsMenu){
        expandMenu.onclick = () => {
            let width = window.screen.width

            if(width <= 768 && aside.style.width != "25%" && aside.style.width != "50%" && aside.style.width != "100%"){
                if(width <= 360){
                    aside.style.width = "100%"
                }
                else if(width <= 576){
                    aside.style.width = "50%"
                }
                else if (width <= 768){
                    aside.style.width = "25%"
                }
                for(let open of mostrarMenuAberto){
                    open.classList.remove("d-none")
                }
            }
            else if(width <= 768 && aside.style.width == "25%" ||  aside.style.width == "50%" ||  aside.style.width == "100%"){
                aside.style.width = "50px"
                for(let open of mostrarMenuAberto){
                    open.classList.add("d-none")
                }
            }
            
        }
    }
})()

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}