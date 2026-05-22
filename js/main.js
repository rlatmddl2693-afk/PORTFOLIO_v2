// //btn버튼을 클릭하면 해당 섹션으로 부드럽게 이동
// $('.btn1,.arrow').click(function(){
//     $('html').animate({scrollTop:0},700);
// });
// $('.btn2').click(function(){
//     $('html').animate({scrollTop:800},700);
// });
// $('.btn3').click(function(){
//     $('html').animate({scrollTop:1320},700);
// });
// $('.btn4').click(function(){
//     $('html').animate({scrollTop:1900},700);
// });
// $('.btn9').click(function(){
//     $('html').animate({scrollTop:2720},700);
// });

$(document).ready(function(){
    var $tab = $('.ham_list');
    var $menus = $tab.find('a');
    // var $conts = $('.ham_list');

    //스크롤되면서 이동
    $menus.on('click', function(e){
        e.preventDefault();
        var $this = $(this);
        var $target = $($this.attr("href"));

        $('html, body').animate({
            scrollTop: $target.offset().top - 100
        }, 400);
    });

});



//햄버거 버튼 클릭시 해당 섹션으로 감
$('.ham_list li').click(function(){
    $('.ham_list').fadeOut(200);
    $(".hamburger").removeClass('open');
});

//스크롤시 원형 작동 & 돌아가는 원형 만들기
var chart = $('.chart');
var chartOST = chart.offset().top - 500;
var excuted = false;


$(window).scroll(function(){
    var currentSCT = $(this).scrollTop();
    if(currentSCT >= chartOST){
        if(excuted == false){
            animateChart()
                excuted = true;
        }
    }
});

function animateChart(){
    chart.each(function(){
                    var item = $(this);
                    var title = item.find('h2');
                    var targetNum = title.attr('data-num');
                    var circle = item.find('circle');
        
                    $({rate:0}).animate({rate:targetNum},
                        {
                        duration:1500,
                        progress:function(){
                            var now = this.rate;
                            var amount = 630 - (630*now/100);
                            console.log(now);
                            title.text(Math.floor(now));
                            circle.css({strokeDashoffset:amount})
                        }   
                    });
                }); //chart each
}
//phone 누르면 모달팝업창 띄우기
$('.phone').click(function(){
    $('#phone_modal').fadeIn(200);
});
$('.pc').click(function(){
    $('#phone_modal').fadeOut(200);
});
//썸네일을 클릭하면 팝업창 띄우기
var thumbBtn = $('.thumb > li');

thumbBtn.click(function(){
    $('#modal').fadeIn(500);
    var nn = $(this).index();

    $('.big').hide();
    $('.big').eq(nn).show();
});
    
$('.btn_close').click(function(){
    $('#modal').fadeOut(200);
});
//isotope 플러그인을 이용한 필터링 
var $btn = $('.port_menu li a')
$btn.click(function(){
    $btn.removeClass('active');
    $(this).addClass('active');
});
$('.thumb').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});

$('.all').click(function(e){
    e.preventDefault();
    $('.thumb').isotope({ filter:'.all'});
});
$('.pc').click(function(e){
    e.preventDefault();
    $('.thumb').isotope({ filter:'.pc'});
});
$('.res').click(function(e){
    e.preventDefault();
    $('.thumb').isotope({ filter:'.res'});
});

//햄버거 버튼
$(".hamburger").click(function(){
    $(".ham_list").slideToggle(300);
    $(".hamburger").toggleClass('open');
});
//wow js
new WOW().init();