setTimeout(function() {
    $('#base div').fadeOut(450);

    setTimeout(function() {
        $('#loving').fadeOut(450);

        setTimeout(function() {
            $('.loading').fadeOut(450);
        }, 500);
    }, 300);
}, 2000);

// $('.loading, #loving, #base div').fadeOut(150);

scrollTo('#main');

var topPos = Math.floor($('.heart').offset().top);
var leftPos = Math.floor($('.heart').offset().left);

function appendHeart() {
    let container = document.querySelector(".heart-container");

    let heart = `
        <div class="heart1" style="top:${topPos+4}px; left:${leftPos+4}px; z-index: 100;">
          <svg id="color" enable-background="new 0 0 34 34" height="512" viewBox="0 0 34 34" width="512" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="MyGradient">
                <stop class="lg1" offset="10%" stop-color="#FE3F5E" />
                <stop class="lg2" offset="90%" stop-color="#DB2349" />
              </linearGradient>
            </defs>
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
          </svg>
        </div>
    `;
  
    container.insertAdjacentHTML("beforeend", heart);
}

function startHeart() {
    for (let i = 0; i < 10; i++) {
        appendHeart();
    }
}

$('#check').on('change', function() {
    if ( $(this).prop('checked') ) {
        $('.i-like-you__svg').addClass('transition_color_pink');

        topPos = Math.floor($('.heart').offset().top);
        leftPos = Math.floor($('.heart').offset().left);

        $('body').on('mousemove', function(e) {
            gsap.to(".heart1", {
                x: e.clientX-(leftPos+28),
                y: e.clientY-(topPos+24),
                stagger: 0.2
            });
        });
    
        startHeart();

        ilyTimer = setTimeout(function() {
            scrollTo('#i_like_you');
            
            g = 0;
            h = 0;
            myLoop();
        }, 6000);
    } else {
        clearTimeout(ilyTimer);
        $('.i-like-you__svg').removeClass('transition_color_pink');
        $('body').off('mousemove');
        $('.heart1').fadeOut(450);
        setTimeout(function() { $('.heart1').remove() }, 450);
    }
});

$('.valentine__up').on('click', function() {
    scrollTo('#main');
});

var phrases = [
    "<span style=\"color: #FE3F5E;\">???</span> Me pelqen ti <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Gustatzen zait <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> ???????????????? ???? <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> svi??a?? mi se <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Rwy'n hoffi chi <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Kedvellek <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> G??stasme <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Ik vind je leuk <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> ?????? ?????????????? <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Jeg kan lide dig <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> ?????? ?????????? ?????? <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Is maith liom th?? <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> M??r l??kar vi?? ??ig <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Me gustas <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Mi piaci <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> M'agrades tu <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Tu man pat??c <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Tu man patinki <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> ???? ???? ?????????????? <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Tog????obni <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Ich mag dich <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Jeg liker deg <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Lubi?? ci?? <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Gosto de voc?? <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> ??mi placi <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> ???????????? ???? ???? <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> M??m ??a r??d <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> V??e?? si mi <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Pid??n sinusta <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Je t'aime bien <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Svi??a?? mi se <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> M??m t?? r??d <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Jag gillar dig <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Sa meeldid mulle <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Ek hou van jou <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Ngiyakuthanda <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> I mas???r??? m <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Mo f???ran r??? <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Kea u rata <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Waan ku jecelahay <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Nakupenda <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> ???? ???????? ???????????????????? <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Ina son ku <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> ???? ?????? ???????????????????? <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Umandisangalatsa <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Mi ??atas vin <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> Mwen renmen ou <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> I like you <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> EGO amo te <span style=\"color: #FE3F5E;\">???</span>",
    "<span style=\"color: #FE3F5E;\">???</span> ??????-?????? ?????? ???????????????? <span style=\"color: #FE3F5E;\">???</span>"
];

myWords = [
    "????!!",
    "??????????????????????????????!!!!!",
    "????????????????????!!",
    "???? ???? ???? ???? ???? !!!",
    "<span style=\"color: #FE3F5E;\">???</span>"
];

function scrollTo(href) {
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,
        easing: "swing"
    });
}

var g = 0;
function myWordsLoop() {
    setTimeout(function() {
        $('.i-like-you__text').html(myWords[g]);
        g++;

        if (g < myWords.length) {
            myWordsLoop();
        } else {
            $('.i-like-you__anim').removeClass('i-like-you__anim_hide');
            setTimeout(function() {
                $('.i-like-you__anim').addClass('i-like-you__anim_hide');
                scrollTo('#valentine');

                setTimeout(function() {
                    $('.envelope').addClass('envelope-scale');
                    
                    setTimeout(function() {
                        $('.envelope').removeClass('envelope-scale');
                        setTimeout(function() { $('body').css({'overflow-y': 'auto'}); }, 1000);
                    }, 1000);
                }, 800);
            }, 4000);
        }
    }, 1600);
}

var h = 0;
function myLoop() {
    setTimeout(function() {
        $('.i-like-you__text').html(phrases[h]);
        h++;
        
        if (h < 50) {
            myLoop();
        } else {
            myWordsLoop();
        }
    }, 10+(h*10));
}

$('.envelope').on('mouseover', function(e) {
    $('.envelope__top').removeClass('envelope__top_close');
    $('.paper').removeClass('paper_close');
});

$('.envelope').on('mouseleave', function(e) {
    $('.envelope__top').addClass('envelope__top_close');
    $('.paper').addClass('paper_close');
});

// $('.valentine').on('mouseover', function(e) {
//     $('.heart-container .heart1 svg').css({'fill': '#FFFFFF'});
// });

// $('.valentine').on('mouseleave', function(e) {
//     $('.heart-container .heart1 svg').css({'fill': '#FE3F5E'});
// });
