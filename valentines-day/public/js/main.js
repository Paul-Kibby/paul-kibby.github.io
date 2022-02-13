setTimeout(function() {
    $('#base div').fadeOut(450);
}, 2000);

setTimeout(function() {
    $('#loving').fadeOut(450);
}, 2200);

setTimeout(function() {
    $('.loading').fadeOut(450);
}, 2800);

$('html, body').animate({
    scrollTop: $('#main').offset().top
}, {
    duration: 370,
    easing: "swing"
});

var topPos = Math.floor($('.heart').offset().top);
var leftPos = Math.floor($('.heart').offset().left);

function appendHeart() {
    let container = document.querySelector(".heart-container");

    let heart = `
        <div class="heart1" style="top:${topPos+4}px; left:${leftPos+4}px; z-index: 100;">
          <svg id="color" enable-background="new 0 0 34 34" height="512" viewBox="0 0 34 34" width="512" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="MyGradient">
                <stop offset="10%" stop-color="#e74c3c" />
                <stop offset="90%" stop-color="#FF3C30" />
              </linearGradient>
            </defs>
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
          </svg>
        </div>
    `;
  
    container.insertAdjacentHTML("beforeend", heart);
}

function startHeart() {
    for (let i = 0; i < 20; i++) {
        appendHeart();
    }
}

$('#check').on('change', function() {
    if ( $(this).prop('checked') ) {
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

        setTimeout(function() {
            let href = '#i_like_you';

            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, {
                duration: 370,   // по умолчанию «400» 
                easing: "swing" // по умолчанию «swing» 
            });
            
            h = 0;
            myLoop();
        }, 6000);
    } else {
        $('body').off('mousemove');
        $('.heart1').fadeOut(450);
        setTimeout(function() { $('.heart1').remove() }, 450);
    }
});

$('.valentine__up').on('click', function() {
    $('html, body').animate({
        scrollTop: $('#main').offset().top
    }, {
        duration: 370,   // по умолчанию «400» 
        easing: "swing" // по умолчанию «swing» 
    });

    setTimeout(function() {
        $('body').css({'overflow-y':'auto'});
    }, 500);
});

var phrases = [
    "Me pelqen ti",
    "Gustatzen zait",
    "Харесвам те",
    "sviđaš mi se",
    "Rwy'n hoffi chi",
    "Kedvellek",
    "Gústasme",
    "Ik vind je leuk",
    "μου αρέσεις",
    "Jeg kan lide dig",
    "איך גלייך דיר",
    "Is maith liom thú",
    "Mér líkar við þig",
    "Me gustas",
    "Mi piaci",
    "M'agrades tu",
    "Tu man patīc",
    "Tu man patinki",
    "Ми се допаѓаш",
    "Togħġobni",
    "Ich mag dich",
    "Jeg liker deg",
    "Lubię cię",
    "Gosto de você",
    "Îmi placi",
    "Свиђаш ми се",
    "Mám ťa rád",
    "Všeč si mi",
    "Pidän sinusta",
    "Je t'aime bien",
    "Sviđaš mi se",
    "Mám tě rád",
    "Jag gillar dig",
    "Sa meeldid mulle",
    "Ek hou van jou",
    "Ngiyakuthanda",
    "I masịrị m",
    "Mo fẹran rẹ",
    "Kea u rata",
    "Waan ku jecelahay",
    "Nakupenda",
    "Ти мені подобаєшся",
    "Ina son ku",
    "Ты мне падабаешся",
    "Umandisangalatsa",
    "Mi ŝatas vin",
    "Mwen renmen ou",
    "I like you",
    "EGO amo te",
    "Ты мне нравишься"
];

function text() {
    setTimeout(function() {
        $('.i-like-you__text').text('Ой!!');

        setTimeout(function() {
            $('.i-like-you__text').text('ААААААААААААААААА!!!!!');
            setTimeout(function() {
                let href = '#valentine';

                $('html, body').animate({
                    scrollTop: $(href).offset().top
                }, {
                    duration: 370,   // по умолчанию «400» 
                    easing: "swing" // по умолчанию «swing» 
                });
            }, 1500);
        }, 1500);
    }, 1500);
}

var h = 0;
function myLoop() {
    setTimeout(function() {
        $('.i-like-you__text').text(phrases[h]);
        h++;
        if (h < 50) {
            myLoop();
        } else {
            text();
        }
    }, 1+(h*10));
}



// $('.scrollto a').on('click', function() {

    

//     return false;
// });

// $(window).resize(function() {
//     topPos = Math.floor($('.heart').offset().top);
//     leftPos = Math.floor($('.heart').offset().left);
//     console.log(topPos+' '+leftPos);
// });


