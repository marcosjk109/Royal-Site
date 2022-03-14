document.querySelector(".hamburguer").addEventListener("click", ()=>
      document.querySelector(".container").classList.toggle("show-menu")
);

$(function(){
      $(".quadro-slide").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true
      });
})