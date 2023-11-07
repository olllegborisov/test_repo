import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

"use strict"
// (ширина окна слайдера 816 px)
// 2525 окно слайдера, 264 элемент слайдера,
// 264*9=2376
// 2525-2376= 149 ширина всех отступов
// всего 8 отступов 149\8 = 18.625
// прокручиваем 3 блока и три отступа 18.625*3=55.875
// 264*3+55.875 = 847.875

// итого необходимо прокрутить 3 слайдера и три отступа


//burger

let burger = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger__menu');

burger.addEventListener('click', (event) => {
  burgerMenu.classList.toggle('_active');
});


// Слайдер с чаем



let offsetTea = 0;
let sizeTeaScrolling = 847.875;
let scrollingTeaNextMin = 1695.75; // 1978.375 1695.75

const sliderteaLine = document.querySelector('.slider-tea');
document.querySelector('.slider-tea-next').addEventListener('click', function () {
  offsetTea = offsetTea + sizeTeaScrolling; // 565.25 847.875
  if (offsetTea > scrollingTeaNextMin) { 
    offsetTea = offsetTea - sizeTeaScrolling;


    const mediaQuery920px = window.matchMedia('(max-width: 920px)');
    function handleTabletChange920(e) {
      if (e.matches) {
        scrollingTeaNextMin = 1978.38;
      }
    };
    mediaQuery920px.addListener(handleTabletChange920);
    handleTabletChange920(mediaQuery920px);

    
    const mediaQuery630px = window.matchMedia('(max-width: 630px)');
    function handleTabletChange630(e) {
      if (e.matches) {
        scrollingTeaNextMin = 2261.01;
      }
    };
    mediaQuery630px.addListener(handleTabletChange630);
    handleTabletChange630(mediaQuery630px);

  }
  sliderteaLine.style.left = -offsetTea + 'px';
});

document.querySelector('.slider-tea-prev').addEventListener('click', function () {
  offsetTea = offsetTea - sizeTeaScrolling;
  if (offsetTea < 0) {
    offsetTea = offsetTea + sizeTeaScrolling;
  }
  sliderteaLine.style.left = -offsetTea + 'px';
});

// Сначала фоллбек для старых IE
sliderteaLine.onfocusin = function () {
  // Сбрасываем скролл
  _this.scrollLeft = 0;
  // И еще раз с нулевым таймаутом, потому что в вебките скролл
  // выставляется позже события. Первый ресет оставляем, чтобы
  // в других браузерах не дергалось.
  setTimeout(function () {
    _this.scrollLeft = 0;
  }, 0);

  // Переключаем на слайд, к которому привязано событие
  changeActiveSlide(i);
};
// Используем привязанную к `onfocusin` функцию уже
// в нормальном `addEventListener`
if (sliderteaLine.addEventListener) {
  // `true` включает капчуринг
  sliderteaLine.addEventListener('focus', sliderteaLine.onfocusin, true);
}

// добавляем серые кнопки в начале и конце слайдера. А так же убираем при отлипании слайдера
//Выключенные кнопки для слайдера с чаем
let buttonDisableTeaPrev = document.querySelector('.button-tea-prev-disable');
let buttonTeaPrev = document.querySelector('.button-tea-prev');
let buttonDisableTeaNext = document.querySelector('.button-tea-next-disable');
let buttonTeaNext = document.querySelector('.button-tea-next');
let buttonTeaDisable = 847.875;
let buttonTeaEnable = 1695.75;
if (offsetTea === 0) {
  buttonDisableTeaPrev.classList.add('_off');
  buttonTeaPrev.classList.add('_off');
}
document.querySelector('.slider-tea-prev').addEventListener('click', function () {
  if (offsetTea === 0 ) {
  buttonDisableTeaPrev.classList.add('_off');
  buttonTeaPrev.classList.add('_off');
}


  const mediaQuery920px = window.matchMedia('(max-width: 920px)');
  function handleTabletChange920px(e) {
    if (e.matches) {
      buttonTeaEnable = 1978.38;
    }
  };
  mediaQuery920px.addListener(handleTabletChange920px);
  handleTabletChange920px(mediaQuery920px);


  const mediaQuery630px = window.matchMedia('(max-width: 630px)');
  function handleTabletChange630px(e) {
    if (e.matches) {
      buttonTeaEnable = 2261;
    }
  };
  mediaQuery630px.addListener(handleTabletChange630px);
  handleTabletChange630px(mediaQuery630px);


  if (offsetTea < buttonTeaEnable ) {
  buttonDisableTeaNext.classList.remove('_off');
  buttonTeaNext.classList.remove('_off');
}
});
document.querySelector('.slider-tea-next').addEventListener('click', function () {
  if (offsetTea > 0 ) {
    buttonDisableTeaPrev.classList.remove('_off');
    buttonTeaPrev.classList.remove('_off');
  }
  if (offsetTea > buttonTeaDisable ) {
    buttonDisableTeaNext.classList.add('_off');
    buttonTeaNext.classList.add('_off');
  }


  const mediaQuery920px = window.matchMedia('(max-width: 920px)');
  function handleTabletChange920(e) {
    if (e.matches) {
      buttonTeaDisable = 1696.75;
    }
  };
  mediaQuery920px.addListener(handleTabletChange920);
  handleTabletChange920(mediaQuery920px);


  const mediaQuery630px = window.matchMedia('(max-width: 630px)');
  function handleTabletChange630(e) {
    if (e.matches) {
      buttonTeaDisable = 1978.38;
    }
  };
  mediaQuery630px.addListener(handleTabletChange630);
  handleTabletChange630(mediaQuery630px);


});
function offsetTeaValue() {
      console.log(offsetTea);
    }
    buttonTeaNext.addEventListener('click', offsetTeaValue);


    
// Адаптив слайдера с чаем
const mediaQuery = window.matchMedia('(max-width: 920px)');
function handleTabletChange(e) {
  if (e.matches) {
    sizeTeaScrolling = 282.625;
    // buttonTeaNextMax = 1695.75;
    scrollingTeaNextMin = 1978.375;
    //1413.125
    // function offsetTeaValue() {
    //   console.log(offsetTea);
    // }
    // buttonTeaNext.addEventListener('click', offsetTeaValue);
  }
};
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);




// Слайдер с чайной посудой

let offsetTeaware = 0;
let sizeTeawareScrolling = 847.875;
let scrollingTeawareNextMin = 847.875;

const sliderteawareLine = document.querySelector('.slider-teaware');
document.querySelector('.slider-teaware-next').addEventListener('click', function () {
  offsetTeaware = offsetTeaware + sizeTeawareScrolling;
  if (offsetTeaware > scrollingTeawareNextMin) { //847.875
    offsetTeaware = offsetTeaware - sizeTeawareScrolling;

    const mediaQuery920px = window.matchMedia('(max-width: 920px)');
    function handleTabletChange920(e) {
      if (e.matches) {
        scrollingTeawareNextMin = 1413.125;
      }
    };
    mediaQuery920px.addListener(handleTabletChange920);
    handleTabletChange920(mediaQuery920px);

  }
  sliderteawareLine.style.left = -offsetTeaware + 'px';
});

document.querySelector('.slider-teaware-prev').addEventListener('click', function () {
  offsetTeaware = offsetTeaware - sizeTeawareScrolling;
  if (offsetTeaware < 0) {
    offsetTeaware = offsetTeaware + sizeTeawareScrolling;
  }
  sliderteawareLine.style.left = -offsetTeaware + 'px';
});


//добавление серой кнопки
// document.querySelector('.slider-tea-prev').addEventListener('click', function () {
//   let buttonDisable = document.querySelector('.button-tea-prev-gray');
//   if (offset === 0) {
//     buttonDisable.classList.add('disable');
//   }
// });

//Выключенные кнопки для слайдера с чайной посудой
let buttonDisableTeawarePrev = document.querySelector('.button-teaware-prev-disable');
let buttonTeawarePrev = document.querySelector('.button-teaware-prev');
let buttonDisableTeawareNext = document.querySelector('.button-teaware-next-disable');
let buttonTeawareNext = document.querySelector('.button-teaware-next');
let buttonTeawareDisable = 847;
let buttonTeawareEnable = 0;

if (offsetTeaware === 0) {
  buttonDisableTeawarePrev.classList.add('_off');
  buttonTeawarePrev.classList.add('_off');
}
document.querySelector('.slider-teaware-prev').addEventListener('click', function () {
  if (offsetTeaware === 0) {
    buttonDisableTeawarePrev.classList.add('_off');
    buttonTeawarePrev.classList.add('_off');
  }
  if (offsetTeaware < 1695.75) {
    buttonDisableTeawareNext.classList.remove('_off');
    buttonTeawareNext.classList.remove('_off');
  }
});
document.querySelector('.slider-teaware-next').addEventListener('click', function () {
  if (offsetTeaware > 0) {
    buttonDisableTeawarePrev.classList.remove('_off');
    buttonTeawarePrev.classList.remove('_off');
  }


  if (offsetTeaware > buttonTeawareDisable) {
    buttonDisableTeawareNext.classList.add('_off');
    buttonTeawareNext.classList.add('_off');
  }

  const mediaQueryTeaware920px = window.matchMedia('(max-width: 920px)');
  function handleTabletChangeTeaware920px(e) {
    if (e.matches) {
      buttonTeawareDisable = 847.875;
    }
  };
  mediaQueryTeaware920px.addListener(handleTabletChangeTeaware920px);
  handleTabletChangeTeaware920px(mediaQueryTeaware920px);

  const mediaQueryTeaware630px = window.matchMedia('(max-width: 630px)');
  function handleTabletChangeTeaware630px(e) {
    if (e.matches) {
      buttonTeawareDisable = 1130.5;
    }
  };
  mediaQueryTeaware630px.addListener(handleTabletChangeTeaware630px);
  handleTabletChangeTeaware630px(mediaQueryTeaware630px);

});


const mediaQueryTeaware920px = window.matchMedia('(max-width: 920px)');
function handleTabletChangeTeaware920px(e) {
  if (e.matches) {
    sizeTeawareScrolling = 282.625;
    scrollingTeawareNextMin = 1130.5;
  }
};
mediaQueryTeaware920px.addListener(handleTabletChangeTeaware920px);
handleTabletChangeTeaware920px(mediaQueryTeaware920px);


const mediaQueryTeaware630px = window.matchMedia('(max-width: 630px)');
function handleTabletChangeTeaware630px(e) {
  if (e.matches) {
    sizeTeawareScrolling = 282.625;
    scrollingTeawareNextMin = 1413.125;
  }
};
mediaQueryTeaware.addListener(handleTabletChangeTeaware630px);
handleTabletChangeTeaware630px(mediaQueryTeaware630px);



