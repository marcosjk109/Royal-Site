document.querySelector(".hamburguer").addEventListener("click", ()=>
      document.querySelector(".container").classList.toggle("show-menu")
);

$(function(){

      function atualizar_informacoes() {
        $("#quadro-name").text( $(".slick-center").data("name") );
        var quadroPrice = parseFloat($(".slick-center").data("price")).toLocaleString("pt-BR", {style:"currency", currency: "BRL", minimumFractionDigits: 2});
        $("#quadro-price").text( quadroPrice );
      }
    
      $(".quadro-slide").on('init', function(){
        atualizar_informacoes();
      });
    
      $(".quadro-slide").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: $("#arrow-prev"),
        nextArrow: $("#arrow-next"),
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    
      $(".quadro-slide").on('afterChange', function(){
        atualizar_informacoes();
      });
    
    })
    
    