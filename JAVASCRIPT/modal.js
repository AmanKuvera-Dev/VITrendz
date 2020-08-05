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
    modal.href = "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fwww.vitconnex.com%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=1615070795-9m0rkdaa01jggipf5qsrt9k63kk0k2qt.apps.googleusercontent.com&flowName=GeneralOAuthFlow"
    
    }

question.onclick = ()=>{
        bod.innerHTML="This is for Question Bank"
        modTitle.innerHTML = "Question Bank"
    modal.href = "https://www.vitrendz.tech/adPost/resources"
    }
resell.onclick = ()=>
    {
        bod.innerHTML="Thinking of what to do with old books, lab coats, etc.? U have landed at correct place. <br> We cover all your wishes of buying or selling your items among your college mates only .Yes u have read it right you don't even have to step out of the campus. <br>VITRENDZ brings you an exclusive section &#39;BUY AND SELL&#39; for you. So ,what are you waiting for post your ad today or look up for the first item which u wanna buy !!"
        modTitle.innerHTML = "Buy and Resell"
    modal.href = "https://www.vitrendz.tech/adPost/category/all"
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
        modTitle.innerHTML = "Hostel Predictor"
    modal.href = "https://www.vitrendz.tech/hostels"
    }
cab.onclick = ()=>
    {
        bod.innerHTML="Tired of paying 250 rupees to the auto annas? You have come to the right place!<br><br>Enter your source, destination, date of travel and language of preference to find a list of people you can potentially share a cab with. Yes, it's that simple!!! Don't forget to leave your contact details in, so that people can find you as well. So, what are you waiting for?! Avail yourselves of this amazing facility presented to you by VITRENDZ!"
        modTitle.innerHTML = "Share A Cab"
    modal.href = "https://www.vitrendz.tech/share"
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