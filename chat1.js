
$(document).ready(function () {
    const welcomeImage = new Image();
    welcomeImage.src = 'https://up6.cc/2025/01/173628778204351.jpg';
    welcomeImage.onload = function () {
        const chatContainer = document.querySelector('#d2');
        if (chatContainer && !welcomeShown) {
            const observer = new MutationObserver(() => {
                if (!welcomeShown && $('#d2').length) {
                    welcomeShown = true;
                    $('body').append(`
                        <div id="welcome-message">
                            <button class="close-btn">×</button>
                            ☀️ أهلاً وسهلاً بكم زوارنا وأعضائنا الأعزاء ☀️ <br>
                            نتمنى لكم أوقاتًا سعيدة ومليئة بالنجاح والتوفيق ❤️ <br>
                            ✨ مرحبًا بكم في شاتكم، المكان الذي يجمعكم ✨
                        </div>
                    `);                                   
                    launchBlueRain();
                    launchMoonRain();

                    $('#welcome-message .close-btn').on('click', closeMessage);
                    setTimeout(closeMessage, 8000);
                    observer.disconnect();
                }
            });
            observer.observe(chatContainer, { childList: true, subtree: true });
        }
    };
});

$(`<center><div id="sultan13"> <a id="ahmed21" style="width: 85px;padding: 1px;border-radius: 0px 0px 0px 15px!important;height: 22px;" class="btn minix btn-primary" target="_blank" href="/rules.html">القوانين</a> <a id="ahmed21" style="width: 85px;padding: 1px;height: 22px;" class="btn minix btn-primary" target="_blank" href="FAQ.html">الاسئلة</a> <a id="ahmed21" style="width: 85px;padding: 1px;height: 22px;" class="btn minix btn-primary" target="_blank" href="/subs.html">الاشتراكات<a> <a id="ahmed21" style=" border-radius: 0px 0px 15px 0px!important;width: 85px;padding: 1px;height: 22px;" class="btn minix btn-primary" target="_blank" href="/contact.html">اتصل بنا </a> `).insertBefore('.nav.nav-tabs'); $(`<style> ul.nav.nav-tabs.fl li a { text-align: center; padding: 0px 0!important; border: 0 solid #4c4b4b; color:#2E576E; border-radius: 25px; background: #fff; } ul.nav.nav-tabs.fl li { width: 33.3%; margin-left: 0; border-radius: 50px; margin-bottom: 5px!important; } div#l2 input#pass1, div#l2 input#u2, div#l3 input#pass2, div#l3 input#u3 { padding: 0px 0px!important; border-radius: 25px!important; border: 1px solid #e1e0e0; text-align: center; box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 1px 2px rgb(107 32 49); border: 1px solid white; height: 27px!important; border: 1px solid #dedede!important; text-align: center; width: 49%!important; padding: 0!important; float: right; margin: 2px 3px 2px 0; } div#l2 button { border-radius: 24px!important; height: 27px; padding: 0px 5px; width: 98%; margin-left: 4px; box-shadow: inset 0 0px 0 rgb(255 255 255), 0 2px 0px rgb(252 199 209); border-color: #FFFFFF!important; }.nav-tabs{ background-color: #bfbfbfa6!important; border-radius: 24px!important; margin-top: 2px!important; float: right; padding: 3px 1px; border-top: 3px solid; border-color: #2E576E; height: 30px!important; } #u1 { padding: 0px 0px!important; margin-left: -6px; border-radius: 25px!important; border: 1px solid #e1e0e0; text-align: center; box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 1px 2px rgb(107 32 49); border: 1px solid white; height: 27px!important; width: 100%!important; margin-top: 1px!important; } div#l1 input#u1, div#l3 button,div#l1 button { border-radius: 24px!important; height: 27px; padding: 0px 5px; width: 98%; margin-left: 4px; box-shadow: inset 0 0px 0 rgb(255 255 255), 0 2px 0px rgb(252 199 209); border-color: #FFFFFF!important; } #tlogins .fa.fa-eye { position: relative; margin: -30px 17px 2px 0px!important; color: #fff!important; }</style>`).insertBefore("body")

$(`<style>
    ul.nav.nav-tabs.fl li a {
        text-align: center;
        padding: 0px 0!important;
        border: 0 solid #4c4b4b;
        color:#2E576E;
        border-radius: 25px;
        background: #fff;
    }
    
    ul.nav.nav-tabs.fl li {
        width: 33.3%;
        margin-left: 0;
        border-radius: 50px;
        margin-bottom: 5px!important;
    }
    
    div#l2 input#pass1, div#l2 input#u2, div#l3 input#pass2, div#l3 input#u3 {
        padding: 0px 0px!important;
        border-radius: 25px!important;
        border: 1px solid #e1e0e0;
        text-align: center;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 1px 2px rgb(107 32 49);
        border: 1px solid white;
        height: 27px!important;
        border: 1px solid #dedede!important;
        text-align: center;
        width: 49%!important;
        padding: 0!important;
        float: right;
        margin: 2px 3px 2px 0;
    }
    
    div#l2 button {
        border-radius: 24px!important;
        height: 27px;
        padding: 0px 5px;
        width: 98%;
        margin-left: 4px;
        box-shadow: inset 0 0px 0 rgb(255 255 255), 0 2px 0px rgb(252 199 209);
        border-color: #FFFFFF!important;
        margin-top: 4px !important;
    }
    
    .nav-tabs {
        background-color: #bfbfbfa6!important;
        border-radius: 24px!important;
        margin-top: 2px!important;
        float: right;
        padding: 3px 1px;
        border-top: 3px solid;
        border-color: #2E576E;
        height: 30px!important;
    }
    
    #u1 {
        padding: 0px 0px!important;
        margin-left: -6px;
        border-radius: 25px!important;
        border: 1px solid #e1e0e0;
        text-align: center;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 1px 2px rgb(107 32 49);
        border: 1px solid white;
        height: 27px!important;
        width: 100%!important;
        margin-top: 1px!important;
    }
    
    div#l1 input#u1, div#l3 button,div#l1 button {
        border-radius: 24px!important;
        height: 27px;
        padding: 0px 5px;
        width: 98%;
        margin-left: 4px;
        box-shadow: inset 0 0px 0 rgb(255 255 255), 0 2px 0px rgb(252 199 209);
        border-color: #FFFFFF!important;
        margin-top: 4px !important;
    }
    
    #tlogins .fa.fa-eye {
        position: relative;
        margin: -30px 17px 2px 0px!important;
        color: #fff!important;
    }
    </style>`).insertBefore('body');


$("body").append(`
    <style>
        #upro .light.fl.pro.break {
            background-color: #000 !important;
            background-image: linear-gradient(225deg, #e5e8f7 0%, #fff 29%, #fafafc 67%, #e5e8f7 100%);
        }
    </style>
`);

$("body").append(`
    <style>
        #sultan { color: #f00 !important; }

        #room .btn-primary,
        #d0 .label-primary,
        #settings .label-primary,
        #settings .btn-primary,
        .corner.border.label.label-primary,
        .modal-header.label-primary,
        .head.d-flex.nosel.bg.fl,
        .rsave.btn.btn-primary.fr,
        .fa.fa-send.sndpm.fl.btn.btn-primary,
        .fr.fa.fa-share-alt.sndfile.fl.btn.btn-primary,
        .fr.fa.fa-share-alt.sndfilebc.fl.btn.btn-primary,
        .bdel.corner.btn.minix.btn-primary.fa.fa-times,
        .fa.fa-send.sndbc.fl.btn.btn-primary,
        .btn.btn-primary.u-nickc.fr.fa.fa-save,
        .label.fl.label-primary,
        button.rsave.btn.btn-primary.fl,
        #users .nosel.ninr.fl.uzr.label.bg {
            border-radius: 0px 8px 0px 8px !important;
            border: 1px solid #000;
            background-image: url(https://up6.cc/2025/02/173912904532253.png);
            background-size: cover;
            color: #fff;
        }

        #room #mic {
            background-image: url(https://up6.cc/2025/02/173912904532253.png);
            background-size: cover;
            border-radius: 0px 6px 6px 6px !important;
        }
    </style>
`);


$('.nonot').remove()


$("body").append(`
    <style>
        #mic .mic {
            text-align: center;
            width: 56px;
            background-color: #ffffff;
            border: 2px solid #afbfc2 !important;
            border-radius: 30% 1% !important;
            margin: 1px !important;
            height: 47px !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-size: cover;
        }

        #chats .fitimg.u-pic {
            height: 52px !important;
            border: 1px solid;
            border-radius: 100px;
            box-shadow: 0 0 0px rgb(0, 0, 0), inset 0 0 4px rgb(0, 0, 0), 0 0 0 0px #707070;
            margin-left: -10px;
        }

        #chats img.ustat {
            width: 11px !important;
            height: 11px !important;
            border-radius: 50px;
            border: 1px solid #000;
            box-shadow: 0 0 3px rgb(0, 0, 0), inset 0 0 4px rgb(0, 0, 0);
            margin-left: 1px;
            margin-top: 1px;
        }



        #chats .mini.u-msg.dots {
            color: #000 !important;
        }

        #d2bc {
            background-color: #000 !important;
            background-image: url(https://up6.cc/2024/12/173368488936781.jpg);
            background-size: 100%;
        }

        #upro .modal-header.label-primary,
        #d0,
        .broadcasters,
        #rooms .label-primary,
        #users .nosel.ninr.fl.uzr.label.bg {
            border-radius: 0px 8px 0px 8px !important;
            border: 1px solid #000;
            background-image: url(https://up6.cc/2025/02/173912904532253.png);
            color: #fff;
        }

        #users img.co {
            border-radius: 0px 8px 0px 8px !important;
            transform: rotate(20deg);
            margin-top: 2px !important;
        }

        #dpnl {
            background-image: url(https://up6.cc/2025/02/173912904532253.png);
            background-size: 100% !important;
        }
    </style>
`);

$(
    `<style>
        #audio-container {
            position: absolute;
            bottom: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.1);
            padding: 15px;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        .play-btn {
            background-size: 200% 200%;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
            animation: glowing 3s infinite;
        }

        .play-btn:hover {
            transform: scale(1.1);
        }

        @keyframes glowing {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    </style>`
).prependTo('body');




$('.play-btn').on('click', function () {
    let audio = $('#custom-audio')[0];
    if (audio.paused) {
        audio.play();
        $(this).text('⏸️ إيقاف التسجيل ⏸️');
    } else {
        audio.pause();
        $(this).text('🎵 تشغيل التسجيل 🎵');
    }
});

$('style').last().append(`
    #welcome-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
        width: 350px;
        padding: 20px;
        border-radius: 15px;
        text-align: center;
        font-size: 20px;
        line-height: 1.5;
        color: #000;
        text-shadow: 2px 2px 4px black;
        box-shadow: 0px 0px 20px rgba(13, 50, 116, 0.8);
        font-family: 'Tajawal', sans-serif;
        animation: fadeIn 1s forwards;
        opacity: 0;
background-image:url("https://i.ibb.co/HLp4rhPW/d3.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    @keyframes fadeIn {
        0% { opacity: 0; transform: translate(-50%, -60%); }
        100% { opacity: 1; transform: translate(-50%, -50%); }
    }

    @keyframes fadeOut {
        0% { opacity: 1; transform: translate(-50%, -50%); }
        100% { opacity: 0; transform: translate(-50%, -60%); }
    }

    #welcome-message .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        background: var(--bt-primary);
        color: white;
        font-size: 16px;
        font-weight: bold;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        transition: background 0.3s ease, color 0.3s ease;
    }

    #welcome-message .close-btn:hover {
        background: var(--bt-primary);
    }

    .blue-drop, .falling-moon {
        position: fixed;
        pointer-events: none;
        animation: fall linear infinite;
    }

    .blue-drop {
        width: 15px; 
        height: 15px;
        background: #0d3274;
        border-radius: 50%;
        opacity: 0.8;
        z-index: 9999;
    }

    .falling-moon {
        font-size: 24px; 
        text-align: center;
        line-height: 20px;
        opacity: 0.9;
        z-index: 9999;
    }

    @keyframes fall {
        0% { transform: translateY(-100px) scale(1) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) scale(0.5) rotate(360deg); opacity: 0; }
    }
        #TH_PM_EMPTY{
 display:none!important;   
}


`);


    let welcomeShown = false;


    
    function launchBlueRain() {
        for (let i = 0; i < 60; i++) {
            setTimeout(() => {
                let drop = $('<div class="blue-drop"></div>');
                $('body').append(drop);
                drop.css({
                    left: Math.random() * 100 + 'vw',
                    top: '-100px',
                    animationDuration: Math.random() * 2 + 3 + 's',
                });
                setTimeout(() => drop.remove(), 5000);
            }, i * 80);
        }
    }
    
    function launchMoonRain() {
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                let size = Math.random() * 10 + 20;
                let moon = $('<div class="falling-moon">🎊</div>');
                $('body').append(moon);
                moon.css({
                    left: Math.random() * 100 + 'vw',
                    top: '-100px',
                    fontSize: size + 'px',
                    animationDuration: Math.random() * 2 + 4 + 's',
                });
                setTimeout(() => moon.remove(), 6000);
            }, i * 150);
        }
    }
    
    function closeMessage() {
        $('#welcome-message').css({ animation: 'fadeOut 0.5s forwards' });
        $('.blue-drop, .falling-moon').fadeOut(500);
        setTimeout(() => {
            $('#welcome-message, .blue-drop, .falling-moon').remove();
        }, 500);
    }
