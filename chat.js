// تعريف المتغيرات الأساسية لمنع انهيار السكربت
let welcomeShown = false;

// دوال وهمية لمنع الأخطاء في حال لم تكن معرفة بملف آخر
if (typeof launchBlueRain !== 'function') { function launchBlueRain() { console.log('Blue rain launched'); } }
if (typeof launchMoonRain !== 'function') { function launchMoonRain() { console.log('Moon rain launched'); } }
if (typeof closeMessage !== 'function') { 
    function closeMessage() { 
        $('#welcome-message').fadeOut(500, function() { $(this).remove(); }); 
    } 
}

$(document).ready(function () {

    // 1. إضافة أزرار القائمة باللون الأزرق النيلي المعدل
    $(`<div id="sultan13" class="th-custom-buttons-grid">
        <a class="th-grid-btn btn-laws" target="_blank" href="rules.html">
            <i class="fa fa-ban"></i> <span>القوانين</span>
        </a>
        <a class="th-grid-btn btn-avatars" target="_blank" href="FAQ.html">
            <i class="fa fa-image"></i> <span>الاسئلة</span>
        </a>
        <a class="th-grid-btn btn-subs" target="_blank" href="subs.html">
            <i class="fa fa-diamond"></i> <span>الاشتراكات</span>
        </a>
        <a class="th-grid-btn btn-prizes" target="_blank" href="contact.html">
            <i class="fa fa-star"></i> <span>اتصل بنا</span>
        </a>
    </div>`).insertBefore('.nav.nav-tabs');

    // 2. إضافة تصميم الأزرار النيلية
    $(`<style>
    .th-custom-buttons-grid {
        display: flex;
        justify-content: space-between;
        gap: 6px;
        padding: 6px 4px;
        width: 100%;
        box-sizing: border-box;
        background: transparent;
    }
    .th-grid-btn {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 52px !important;
        border-radius: 8px !important;
        color: #ffffff !important;
        text-decoration: none !important;
        box-shadow: 0 2px 4px rgba(0,0,0,0.15) !important;
        transition: transform 0.1s ease, filter 0.2s ease;
        padding: 4px 0 !important;
    }
    .th-grid-btn .fa {
        font-family: 'FontAwesome' !important;
        font-size: 16px !important;
        margin-bottom: 2px !important;
        display: block !important;
    }
    .th-grid-btn span {
        font-size: 11.5px !important;
        font-weight: bold !important;
        display: block;
    }
    .th-grid-btn:hover {
        filter: brightness(1.1);
        transform: translateY(-1px);
    }
    .th-grid-btn:active {
        transform: translateY(1px);
    }
    .btn-laws { background: #39536E !important; border: 1px solid #486585 !important; }
    .btn-avatars { background: #4a6685 !important; border: 1px solid #5b7c9f !important; }
    .btn-subs { background: #5c799c !important; border: 1px solid #7191b8 !important; }
    .btn-prizes { background: #6e8cb3 !important; border: 1px solid #84a5cf !important; }
    </style>`).insertBefore("body");

    // 3. مراقب حاوية الشات ورسالة الترحيب
    const welcomeImage = new Image();
    welcomeImage.src = 'https://up6.cc/2025/01/173628778204351.jpg';
    welcomeImage.onload = function () {
        const chatContainer = document.querySelector('#d2');
        if (chatContainer && !welcomeShown) {
            const observer = new MutationObserver(() => {
                if (!welcomeShown && $('#d2').length) {
                    welcomeShown = true;
                    $('body').append(`
                    <div id="welcome-message" style="position:fixed; bottom:20px; right:20px; background:#fff; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.2); z-index:9999; text-align:center;">
                    <button class="close-btn" style="position:absolute; top:2px; left:5px; background:none; border:none; font-size:16px; cursor:pointer;">×</button>
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

// 4. التنسيقات العامة للتبويبات وحقول تسجيل الدخول
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
    border-radius: 25px!important;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 1px 2px rgb(107 32 49);
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

// 5. تنسيقات الملف الشخصي والمظهر العام
$("body").append(`
<style>
#upro .light.fl.pro.break {
    background-color: #000 !important;
    background-image: linear-gradient(225deg, #e5e8f7 0%, #fff 29%, #fafafc 67%, #e5e8f7 100%);
}
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
#chats .mini.u-msg.dots { color: #000 !important; }
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

$('.nonot').remove();

// 6. إضافة مشغل الصوت المفقود وإغلاقه بشكل سليم
$("body").append(`
<style>
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
}
</style>
`);
