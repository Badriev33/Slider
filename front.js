fetch('bec.php')// запрос на бек для получения данных
  .then((response) => {
    return response.json();
  })
  .then((data) => {
<<<<<<< HEAD
    const a = (data) //получаем данные с сервера и нарезаем ссылки слайсами, под каждый слайд
=======
    const a = (data) //получаем данные с сервера и нарезаем ссылки слайсами
>>>>>>> 63c6f24314b6b4b275b117ac9575a83acbd0d887
    const img = a.slice(0, 56)
    const imgtwo = a.slice(58, 126)
    const imgthree = a.slice(128, 198)

    document.getElementById("user-avatar").src = img;
    document.getElementById("usertwo-avatar").src = imgtwo;
    document.getElementById("userthree-avatar").src = imgthree;

  });

const prev = document.getElementById('btn-prev')
      next = document.getElementById('btn-next')
      slides = document.querySelectorAll('.slide')
      dots = document.querySelectorAll('.dot')

<<<<<<< HEAD
index = 0 //создаем переменную для отсчета слайдов
=======
index = 0
>>>>>>> 63c6f24314b6b4b275b117ac9575a83acbd0d887

const activeSlide = n => { //функция для активации слайдов
  console.log(n)
 for(slide of slides) {
   slide.classList.remove('active')
 }
slides[n].classList.add('active')
}

const activeDot = n => {//функция для активации точек
  for(dot of dots) {
    dot.classList.remove('active')
  }
 dots[n].classList.add('active')
 }



const nextSlide = () => {//функция для кнопки next которая включает в себя функции активации для слайдов и точек
  if(index ==slides.length - 1) {
    index = 0
    activeSlide(index)
    activeDot(index)
  } else {
    index++
    activeSlide(index)
    activeDot(index)
  }
}

<<<<<<< HEAD
const prevSlide = () => {//функция для кнопки prev которая включает в себя функции активации для слайдов и точек
  if(index == 0) {
    index =slides.length - 1
    activeSlide(index)
    activeDot(index)
  } else {
    index--
    activeSlide(index)
    activeDot(index)
  }
}
next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)
=======

  
next.addEventListener('click', nextSlide)

>>>>>>> 63c6f24314b6b4b275b117ac9575a83acbd0d887
