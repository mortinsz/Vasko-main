"use strict"

const iconMenu = document.querySelector('.burger_menu');
const menuBody = document.querySelector('.burger');
const cancelBtn = document.querySelector('.cancel');
if(iconMenu){
    iconMenu.addEventListener("click", function(){
        document.body.classList.add('lock');
        iconMenu.classList.add('active');
        menuBody.classList.add('active');

    });
    cancelBtn.addEventListener("click", function(){
        document.body.classList.remove('lock');
        iconMenu.classList.remove('active');
        menuBody.classList.remove('active');
    })
}

// const menuLink = document.querySelectorAll('.menu_link');
// if(menuLink.length > 0){
//     menuLink.forEach(menuLink => {
//         menuLink.addEventListener("click", onMenuLinckClick)
//     })

//     function onMenuLinckClick(e){

//         if(iconMenu.classList.contains('active')){
//             document.body.classList.remove('lock');
//             iconMenu.classList.remove('active');
//             menuBody.classList.remove('active');
//         }
//     }
// };
// const searchBtn = document.querySelector('.js-header-search'),
//       burger = document.querySelector('.js-burger'),
//       mobileMenu = document.querySelector('.js-mobile-menu');

 

// searchBtn.addEventListener('click', (e) => {        
//     if(!e.target.closest('.js-search-form')) {
//         searchBtn.classList.toggle('is-active'); 
//         setTimeout( () => {
//             document.getElementById('search').focus();
//         }, 200)
//     }
// });
// document.addEventListener('click', (e) => {
//     if(!e.target.closest('.js-header-search')) {
//         searchBtn.classList.remove('is-active');
//     }
// });

// burger.addEventListener('click', (e) => {
//     burger.classList.toggle('is-active');
//     mobileMenu.classList.toggle('is-active');
// });

// let numbers__btn = document.querySelector('.numbers__btn');
// let hiddenNum = document.querySelector('.hiddenNum');
// let numbers = document.querySelector('.numbers');


// numbers__btn.addEventListener('click', function(){
//     hiddenNum.classList.toggle('invisible');
//     numbers.classList.toggle('.activeNums')
// })


const numberNav = document.querySelector('.js--namber');
const hiddenNumbers = document.querySelector('.contacts__links');
const arrowNumbers = document.querySelector('.contacts__arrow');

numberNav.addEventListener("click", function(){

    hiddenNumbers.classList.toggle('js--hidden');

    if (!(hiddenNumbers.classList.contains('js--hidden'))) {
        arrowNumbers.classList.add('flip');
     }else{
        arrowNumbers.classList.remove('flip');
     }
     
    }
);
    


// User dropdown
    const userBtn = document.querySelector('.user__btn');
    const userDropdown = document.querySelector('.user__dropdown');
    const logBody = document.querySelector('.js--logBody');
    const loginChooseBtn = document.querySelectorAll('.js--logInChoose');
    const loginChooseContent = document.querySelectorAll('.js--chooseContent');
    const logInBlock = document.querySelector('.js--logIn');
    const loginInner = document.querySelector('.js--loginInner');
    const forgotPassword = document.querySelector('.js--forgotPassword');

  

      userBtn.addEventListener('click', function(){
        logInBlock.classList.add('active');
        body.classList.add('lock');

      });
      logInBlock.addEventListener('click', function(e){
        if (!e.target.closest(".js--loginInner")) {
            logInBlock.classList.remove('active');
            body.classList.remove('lock');
        }
      });














    
    
    // userBtn.addEventListener('click', function () {
    //   body.classList.add('lock');
    //   logInBlock.classList.add('active');
      
    //   if (!(loginInner.addEventListener('click', function(){
    //     console.log('lkllkl')
    //   }))) {
        
    //     function toggleUserHidden() {
    //       logInBlock.classList.toggle('js--hidden');
    //     }
        
    //     function addUserHidden() {
    //       logInBlock.classList.add('js--hidden');
    //     }
    //     target === userBtn ? toggleUserHidden() : target !== logInBlock ? addUserHidden() : false;
    //     // body.classList.toggle('lock');
    //     // logInBlock.classList.toggle('active');
    //   });
//   }
// })
// body.classList.remove('lock');
// logInBlock.classList.remove('active');
// document.addEventListener('click', e => {
  //     const target = e.target;
        ;
const body = document.querySelector('body'); 
const cardDropdown = document.querySelector('.cart__dropdown'); 
const btnCard = document.querySelector('.cart__btn'); 
const namebtnCard = document.querySelector('.cart__name');
const svgbtnCard = document.querySelector('.cart__btn-icon');
const valuebtnCard = document.querySelector('.cart__value');

document.addEventListener('click', e => {
    const target = e.target;
    
    
    target === btnCard ? toggleCardHidden() : target !== cardDropdown ? addCardHidden() : false;
  });


function toggleCardHidden(){
    cardDropdown.classList.toggle('js--hidden');
}
function addCardHidden(){
    cardDropdown.classList.add('js--hidden');
};
const swiper = new Swiper('.carousel', {
    loop: true,
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1,
    // autoplay:{
    //     delay: 4000,
    // }
    
});
;
const swiper_moreProd = new Swiper('.carousel_products', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 20,
    
});
;
;
;
;
const accardions = document.querySelectorAll('.js-accordion');
const ac_img = document.querySelectorAll('.accordion-img');

for(let item of accardions){
    console.log(item);
    item.addEventListener('click', function () {
        this.classList.toggle('active');                       
    })
};
;
const swiper_products = new Swiper('.carousel_moreProd', {
    // loop: true,
    navigation: {
      nextEl: '.moreProd-button-next',
      prevEl: '.moreProd-button-prev',
    },
    slidesPerView: 5,
    spaceBetween: 20,
    
});
;
const swiper_lastwatch = new Swiper('.carousel_lastwatch', {
    loop: true,
    navigation: {
      nextEl: '.lastwatch-button-next',
      prevEl: '.lastwatch-button-prev',
    },
    slidesPerView: 5,
    spaceBetween: 20,
    
});
;
// const chooseProd = document.querySelectorAll('.js--chooseProd');
const btnChoosen = document.querySelectorAll('.js--chooseBtnsProd')
const chooseContent = document.querySelectorAll('.js--choosenCont');
// const characteristicContent = document.querySelectorAll('.js--characteristic');
 

    for(let el of btnChoosen){
        el.addEventListener('click', function () {
            if (!(this.classList.contains('active'))) {
                for(let itm of btnChoosen){
                    itm.classList.remove('active');
                    this.classList.add('active');
                }
                
                for(let item of chooseContent){
                        item.classList.toggle('hidden');
                        item.classList.toggle('active');
                    }
                
            }
        })
    }
 
    // for(let item of chooseContent){
    //     item.addEventListener('click', function () {
    //         if (condition) {
                
    //         }
    //     })
    // }

    ;
const swiper_accessories = new Swiper('.carousel_accessories', {
    // loop: true,
    navigation: {
      nextEl: '.accessories-button-next',
      prevEl: '.accessories-button-prev',
    },
    slidesPerView: 5,
    spaceBetween: 20,
    
});
;
// logIn
// const logIn = document.querySelector('.js--logIn');
// const wrap = document.querySelector('.wrapper');


//     if(logIn.classList.contains('active')) {
//         wrap.classList.add('opacity')
//         console.log('true');
//     }else{
//         wrap.classList.remove('opacity')
//         console.log('false');

//     }



for(let elem of loginChooseBtn){
    elem.addEventListener('click', function () {
        if (!(this.classList.contains('active'))) {
            for(let itm of loginChooseBtn){
                itm.classList.remove('active');
                this.classList.add('active');
            }
            for(let elems of loginChooseContent){
                elems.classList.toggle('hidden');
                elems.classList.toggle('active');
            }
        }
        forgotPassword.classList.toggle('hidden');

    })
};
;
;

