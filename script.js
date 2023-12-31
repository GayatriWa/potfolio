var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sideMenu = document.getElementById("sidemenu");
function openmenu(){
    sideMenu.style.right = "0";
}
function closemenu(){
    sideMenu.style.right = "-200px";
}
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwvDqwJvvIhqmcPFlUwfdJfP_QIxMl20sF44jMdZbgpvAqYQhMEw2aimYlBNoTr4rRA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      }
        )
      .catch(error => console.error('Error!', error.message))
  })

  var tl = gsap.timeline();
  tl
    .from(".logo h2",{
      y:-80,
      opacity:0,
      duration:0.5,
      stagger:0.3
  })
    .from("#sidemenu a",{
      y:-80,
      opacity:0,
      duration:0.5,
      ease: "power2.inOut",
      stagger:0.3
  })
    .from(".header-text h2, .header-text h1, .header-text p",{
        x:-200,
        opacity:0,
        duration:0.5,
        stagger:0.5
    })
  //   .from(".about-col-1 img",{
  //     scale:0.5,
  //     opacity:0,
  //     duration:0.5,
  //     scrollTrigger:{
  //       trigger:".about-col-1 img",
  //       scroller:"body",
  //       markers:true,
  //       start:"top 10%"
  //     }
  // })
