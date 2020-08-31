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
const socModBtn = document.getElementById('modLinkSoc')

const socTitle = document.getElementById('socTitle')
const inst = document.getElementById('socI')
const face = document.getElementById('socF')
const lIN = document.getElementById('socL')
const tele = document.getElementById('socT')
const you = document.getElementById('socY')
const what = document.getElementById('socW')
const socBody = document.getElementById('socBody')

const conTitle = document.getElementById('conTitle')
const conBody = document.getElementById('conBody')
const sponsor = document.getElementById('Sponsorship')
const onlyCont =document.getElementById('onlyContact')





document.getElementById('mainFaculty').href = "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fwww.vitconnex.com%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=1615070795-9m0rkdaa01jggipf5qsrt9k63kk0k2qt.apps.googleusercontent.com&flowName=GeneralOAuthFlow"

document.getElementById('mainQuestion').href= "https://www.vitrendz.tech/adPost/resources"

document.getElementById('mainResell').href= "https://www.vitrendz.tech/adPost/category/all"

document.getElementById('mainLab').href= "https://www.vitrendz.tech/lab"

document.getElementById('mainCab').href= "https://www.vitrendz.tech/share"

document.getElementById('mainHostel').href= "https://www.vitrendz.tech/hostels"

faculty.onclick = ()=>
    {
        bod.innerHTML="VIT is home to tens of thousands of students and thousands of faculty members who teach a whole wide range of courses, and it’s an absolute mayhem when it’s time for the finger-crossing and luck-dependent FFCS which lets you choose your courses and their respective faculty members. The hardest fear of students is ending in an important course with a dreaded unprofessional faculty member. How do you know who the best teacher could really be? VITrendz has your answer. We bring you the various reviews and ratings of various faculty members of the university written and posted by older students of those faculties, to get you the right teacher for your course. Make use of this facility to make your semester go better."
    
        modTitle.innerHTML = "Faculty Rating"
    modBtn.href = "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fwww.vitconnex.com%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=1615070795-9m0rkdaa01jggipf5qsrt9k63kk0k2qt.apps.googleusercontent.com&flowName=GeneralOAuthFlow"
    
    }

question.onclick = ()=>{
        bod.innerHTML="Every student of VIT has fears. The most common fear among all the students of every branch in VIT is exam phobia. As the name suggests, fear of exams. CATs and FAT form the integral scoring weight of almost all courses availed by any student.Prepare some strategies to score well in your tests.Check out the difficulty level of the questions asked previously. VITRENDZ heard your prayers. To boost up your preparations we bring you the exquisite and much needed previous question papers of CATS and FAT for more than 200 different courses. Just enter you course details on the VITRENDZ web page and there you go your key to crack your exams. Let your fears drive away with a boost of confidence from the previous year question papers. GOOD LUCK!"
        modTitle.innerHTML = "Question Bank"
    modBtn.href = "https://www.vitrendz.tech/adPost/resources"
    }

resell.onclick = ()=>
    {
        bod.innerHTML="Thinking of what to do with old books, lab coats, etc.? U have landed at correct place. <br> We cover all your wishes of buying or selling your items among your college mates only .Yes u have read it right you don't even have to step out of the campus. <br>VITRENDZ brings you an exclusive section &#39;BUY AND SELL&#39; for you. So ,what are you waiting for post your ad today or look up for the first item which u wanna buy !!"
        modTitle.innerHTML = "Buy and Resell"
    modBtn.href = "https://www.vitrendz.tech/adPost/category/all"
    }
lab.onclick = ()=>
    {
        bod.innerHTML="Annoyed with loads of assignments one week before CATs? <br><br> Vitrendz is at your rescue.<br><br>Enter your subject, slot and faculty names to get reference lab assignments. Yes, it's that easy, just click, click and click. Lab assignments are just 3 clicks away. Don't hesitate to inform us if you have any queries or don't find the attachment you need. So, what are you waiting for??!!! Avail yourselves of this spectacular opportunity, verify and clarify all and any doubts you have. Avoid mistakes, increase accuracy and get higher grades within less time !"
        modTitle.innerHTML = "Lab Records"
    modBtn.href = "https://www.vitrendz.tech/lab"
    }
qb2.onclick = ()=>
    {
        bod.innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos repellat aut in harum fuga aliquam placeat saepe quasi magni, iste eum adipisci nobis? Iusto dicta et, reprehenderit quam earum fugiat harum tempora cupiditate, voluptatum quaerat culpa ducimus, sapiente facere. Doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos repellat aut in harum fuga aliquam placeat saepe quasi magni, iste eum adipisci nobis? Iusto dicta et, reprehenderit quam earum fugiat harum tempora cupiditate, voluptatum quaerat culpa ducimus, sapiente facere. Doloribus!"
        modTitle.innerHTML = "Hostel Predictor"
    modBtn.href = "https://www.vitrendz.tech/hostels"
    }
cab.onclick = ()=>
    {
        bod.innerHTML="Tired of paying 250 rupees to the auto annas? You have come to the right place!<br><br>Enter your source, destination, date of travel and language of preference to find a list of people you can potentially share a cab with. Yes, it's that simple!!! Don't forget to leave your contact details in, so that people can find you as well. So, what are you waiting for?! Avail yourselves of this amazing facility presented to you by VITRENDZ!"
        modTitle.innerHTML = "Share A Cab"
    modBtn.href = "https://www.vitrendz.tech/share"
    }

inst.onclick = () =>
{
    socBody.innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos repellat aut in harum fuga aliquam placeat saepe quasi magni, iste eum adipisci nobis? Iusto dicta et, reprehenderit quam earum fugiat harum tempora cupiditate, voluptatum quaerat culpa ducimus, sapiente facere. Doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos repellat aut in harum fuga aliquam placeat saepe quasi magni, iste eum adipisci nobis? Iusto dicta et, reprehenderit quam earum fugiat harum tempora cupiditate, voluptatum quaerat culpa ducimus, sapiente facere. Doloribus!"
    socTitle.innerHTML = "VITrendz Instagram"
    socModBtn.href = "https://www.instagram.com/vitrendz/?hl=en"
}

face.onclick = () =>
{
    socBody.innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos repellat aut in harum fuga aliquam placeat saepe quasi magni, iste eum adipisci nobis? Iusto dicta et, reprehenderit quam earum fugiat harum tempora cupiditate, voluptatum quaerat culpa ducimus, sapiente facere. Doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos repellat aut in harum fuga aliquam placeat saepe quasi magni, iste eum adipisci nobis? Iusto dicta et, reprehenderit quam earum fugiat harum tempora cupiditate, voluptatum quaerat culpa ducimus, sapiente facere. Doloribus!"
    socTitle.innerHTML = "VITrendz Facebook"
    socModBtn.href = "https://www.facebook.com/pages/category/Social-Club/VITrendz-110405110659537/"

}


lIN.onclick = () =>
{
    socBody.innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos repellat aut in harum fuga aliquam placeat saepe quasi magni, iste eum adipisci nobis? Iusto dicta et, reprehenderit quam earum fugiat harum tempora cupiditate, voluptatum quaerat culpa ducimus, sapiente facere. Doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos repellat aut in harum fuga aliquam placeat saepe quasi magni, iste eum adipisci nobis? Iusto dicta et, reprehenderit quam earum fugiat harum tempora cupiditate, voluptatum quaerat culpa ducimus, sapiente facere. Doloribus!"
    socTitle.innerHTML = "VITrendz LINKEDIN"
    socModBtn.href = "#"

}

tele.onclick = () =>
{
    socBody.innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos repellat aut in harum fuga aliquam placeat saepe quasi magni, iste eum adipisci nobis? Iusto dicta et, reprehenderit quam earum fugiat harum tempora cupiditate, voluptatum quaerat culpa ducimus, sapiente facere. Doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos repellat aut in harum fuga aliquam placeat saepe quasi magni, iste eum adipisci nobis? Iusto dicta et, reprehenderit quam earum fugiat harum tempora cupiditate, voluptatum quaerat culpa ducimus, sapiente facere. Doloribus!"
    socTitle.innerHTML = "VITrendz Telegram"
    socModBtn.href = "#"

}


you.onclick = () =>
{
    socBody.innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos repellat aut in harum fuga aliquam placeat saepe quasi magni, iste eum adipisci nobis? Iusto dicta et, reprehenderit quam earum fugiat harum tempora cupiditate, voluptatum quaerat culpa ducimus, sapiente facere. Doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos repellat aut in harum fuga aliquam placeat saepe quasi magni, iste eum adipisci nobis? Iusto dicta et, reprehenderit quam earum fugiat harum tempora cupiditate, voluptatum quaerat culpa ducimus, sapiente facere. Doloribus!"
    socTitle.innerHTML = "VITrendz Youtube"
    socModBtn.href = "https://www.youtube.com/channel/UCmAwtdi2YTCA_ifMlx0yIDA/"

}


what.onclick = () =>
{
    socBody.innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos repellat aut in harum fuga aliquam placeat saepe quasi magni, iste eum adipisci nobis? Iusto dicta et, reprehenderit quam earum fugiat harum tempora cupiditate, voluptatum quaerat culpa ducimus, sapiente facere. Doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos repellat aut in harum fuga aliquam placeat saepe quasi magni, iste eum adipisci nobis? Iusto dicta et, reprehenderit quam earum fugiat harum tempora cupiditate, voluptatum quaerat culpa ducimus, sapiente facere. Doloribus!"
    socTitle.innerHTML = "VITrendz WhatsApp"
    socModBtn.href = "https://t.ly/tQgn"

}

onlyCont.onclick = ()=>{
        conBody.innerHTML=" "
        conTitle.innerHTML = "Contact Us"
    }

sponsor.onclick = ()=>{
        conBody.innerHTML=""
        conTitle.innerHTML = "Sponsor Us"
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





