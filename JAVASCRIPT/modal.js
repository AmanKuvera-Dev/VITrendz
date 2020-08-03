const openModalButtons = document.querySelectorAll('[data-modal-target]')

const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

const faculty = document.getElementById('facultyOpen')
const question = document.getElementById('qbOpen')
const resell = document.getElementById('resellOpen')
const lab = document.getElementById('labOpen')
const qb2 = document.getElementById('qb2Open')
const cab = document.getElementById('cabOpen')
const bod = document.getElementById('modBody')
const modTitle = document.getElementById('modTitle')
const modBtn = document.getElementById('modLink')

faculty.onclick = ()=>
    {
        bod.innerHTML="This is for Faculty"
        modTitle.innerHTML = "Faculty Rating"
    
    }

question.onclick = ()=>{
        bod.innerHTML="This is for Question Bank"
        modTitle.innerHTML = "Question Bank"
    }
resell.onclick = ()=>
    {
        bod.innerHTML="This is for Buy and Resell"
        modTitle.innerHTML = "Buy and Resell"
    }
lab.onclick = ()=>
    {
        bod.innerHTML="This is for Lab"
        modTitle.innerHTML = "Lab Records"
    modBtn.href = "https://www.vitrendz.tech/lab"
    }
qb2.onclick = ()=>
    {
        bod.innerHTML="This is for extra question bank"
        modTitle.innerHTML = "Question Bank"
    }
cab.onclick = ()=>
    {
        bod.innerHTML="This is for Cab"
        modTitle.innerHTML = "Share A Cab"
    }


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}