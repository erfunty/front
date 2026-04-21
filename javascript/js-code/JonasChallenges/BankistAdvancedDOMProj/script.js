'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo= document.querySelector('.btn--scroll-to')
const section1=document.querySelector('#section--1')
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn=>btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click',function(e){
  // console.log(btnScrollTo);
  // console.log(e.target);
  // console.log(e.target.getBoundingClientRect());
  // console.log(section1.getBoundingClientRect());
  // console.log(window.pageXOffset,window.pageYOffset)
  // console.log(section1.getBoundingClientRect().y);
  // // window.scrollTo(0,section1.getBoundingClientRect().y+window.pageYOffset)
  // window.scrollTo({left:0,
  //   top:section1.getBoundingClientRect().y+window.pageYOffset,
  //   behavior:'smooth'
  // })
  section1.scrollIntoView({behavior:'smooth'})
})

// document.querySelectorAll(".nav__link").forEach(
//   function(el){
//     el.addEventListener('click',function(e){
//       e.preventDefault();
//       document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior:'smooth'})
//     })

//   }
// )
document.querySelector('.nav__links').addEventListener('click',function(e){
  if(e.target.classList.contains("nav__link")){
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior:'smooth'})
  }

})

const tabscontainer=document.querySelector('.operations__tab-container')
const tabs=document.querySelectorAll('.operations__tab')
const tabsContent=document.querySelectorAll('.operations__content')

tabscontainer.addEventListener('click',function(e){
  const clicked=e.target.closest('.operations__tab')
  
  if(!clicked)return
  console.log(clicked);
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active')
  tabsContent.forEach(t => t.classList.remove("operations__content--active"))
  console.log(clicked.dataset.tab);
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})
const nav=document.querySelector('.nav')

const handleHover=function(e){
  
  if(e.target.classList.contains('nav__link')){
  const link=e.target
  const siblings=link.closest('.nav').querySelectorAll('.nav__link')
  const logo=link.closest('.nav').querySelector('img')
  

    siblings.forEach(n=>
      {if(n!==link)n.style.opacity=this});
    logo.style.opacity=this;


  }

}
nav.addEventListener('mouseover',handleHover.bind(0.5))
nav.addEventListener('mouseout',handleHover.bind(1))
const header = document.querySelector('.header');
const navHeight=nav.getBoundingClientRect().height

const observer=new IntersectionObserver(function(entries, observer) {
  const [entry] = entries;
  // entries.forEach(entry => {
  //   console.log(entry);
  // });
  // console.log(entries);
  if(!entry.isIntersecting)nav.classList.add('sticky')
    else nav.classList.remove('sticky')

},{root:null,threshold:0,rootMargin:`-${navHeight}px`,})
observer.observe(header)

const sectionObserver=new IntersectionObserver(function(entries,observer){
  entries.forEach(entry=>{
    // const [entry]=entries
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target)
  })
},{root:null,threshold:0.15,})

document.querySelectorAll('.section').forEach(s=>
{
  sectionObserver.observe(s)
  s.classList.add("section--hidden")
})


const imgTargets=document.querySelectorAll('img[data-src]')

const imgObserver=new IntersectionObserver(function(entries,observer){
  const [entry]=entries
  // console.log(entry);
  // console.log(entries);
  if(!entry.isIntersecting) return
  entry.target.src=entry.target.dataset.src
  entry.target.addEventListener('load',function(){
    this.classList.remove('lazy-img')
  })
  observer.unobserve(entry.target)


},{root:null,threshold:0,rootMargin:'200px'})
imgTargets.forEach(img=>{
  imgObserver.observe(img)
})

const slides=document.querySelectorAll('.slide')
const slider=document.querySelector('.slider')
const btnLeft=document.querySelector('.slider__btn--left')
const btnRight=document.querySelector('.slider__btn--right')


const goToSlide=function(slide){
  slides.forEach((s,i)=>{
  s.style.transform=`translateX(${(i-(slide))*100}%)`
  })
}
const activateDot=function(slide){
  document.querySelectorAll('.dots__dot').forEach(s=>s.classList.remove('dots__dot--active'))
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
}

const nextSlide=function(){
  currentSlide++
  if(currentSlide===slides.length){
    currentSlide=0
  }
  goToSlide(currentSlide)
  activateDot(currentSlide)
}

const prevSlide=function(){
  currentSlide--
  if(currentSlide===-1){
    currentSlide=slides.length-1
  }
  goToSlide(currentSlide)
  activateDot(currentSlide)
}

let currentSlide=0

btnRight.addEventListener('click',nextSlide)

btnLeft.addEventListener('click',prevSlide)

document.addEventListener('keydown',function(e){
  if(e.key==='ArrowRight'){
    nextSlide()
  }
  if(e.key==='ArrowLeft'){
    prevSlide()
  }

})
const dotContainer=document.querySelector('.dots')
const createDots=function(){
  slides.forEach(function(_,i){
     dotContainer.insertAdjacentHTML('beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`)
  })

}

dotContainer.addEventListener('click',function(e){
  if(e.target.classList.contains('dots__dot')){
    currentSlide=Number(e.target.dataset.slide)
    
    goToSlide(currentSlide)
    activateDot(currentSlide)
    
  }

})
const init=function(){
  goToSlide(0)
  createDots()
  activateDot(0)

}
init()
