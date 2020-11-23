
const modal = document.getElementById("flotante")
const MODAL_CLASS = "flotante-open"
const BTN = "share-clicked"
const showModal = btn =>{    
    btn.classList.contains(BTN)
    ? btn.classList.remove(BTN)
    : btn.classList.add(BTN)

    modal.classList.contains(MODAL_CLASS)
    ? modal.classList.remove(MODAL_CLASS)
  : modal.classList.add(MODAL_CLASS)  
}

