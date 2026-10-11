$(`<center>
</div>`).insertBefore('div#tlogins #sultan13');

$("<style>\n\
@keyframes rgb-border {\n\
    0% { border-color: #ff0000; }\n\
    33% { border-color: #00ff00; }\n\
    66% { border-color: #170B08; }\n\
    100% { border-color: #ff0000; }\n\
}\n\
ul.nav.nav-tabs.fl li a {\n\
    text-align: center;\n\
    padding: 10px 0!important; /* تم تصغير المسافة الرأسية */\n\
    border: 0 solid #ffffff;\n\
    color: #170B08;\n\
    border-radius: 25px;\n\
    background: #ffffff;\n\
    font-size: 12px!important; /* تم تصغير الخط ليتناسب مع الصندوق */\n\
    font-weight: bold;\n\
}\n\
ul.nav.nav-tabs.fl li {\n\
    width: 33.3%;\n\
    margin-left: 0;\n\
    border-radius: 50px;\n\
    margin-bottom: 5px!important;\n\
}\n\
.nav-tabs {\n\
    background-color: #ffffff!important;\n\
    border-radius: 24px!important;\n\
    margin-top: 2px!important;\n\
    padding: 3px 1px;\n\
    border-top: 3px solid;\n\
    animation: rgb-border 3s linear infinite;\n\
    border-color: #ffffff91;\n\
    height: 48px!important; /* تقليل الارتفاع الكلي للصندوق */\n\
}\n\
div#l2 input#pass1,\n\
div#l2 input#u2,\n\
div#l3 input#pass2,\n\
div#l3 input#u3 {\n\
    display: inline-block;\n\
    vertical-align: top;\n\
    padding: 0px!important;\n\
    border-radius: 25px!important;\n\
    border: 1px solid #dedede!important;\n\
    text-align: center;\n\
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 1px 2px rgb(107 32 49);\n\
    height: 27px!important;\n\
    width: 49%!important;\n\
    float: right;\n\
    margin: 2px 3px 2px 0;\n\
}\n\
#u2 + br,\n\
#u3 + br {\n\
    display: none;\n\
}\n\
div#l2 button,\n\
div#l3 button,\n\
div#l1 button {\n\
    border-radius: 24px!important;\n\
    height: 27px;\n\
    padding: 0px 5px;\n\
    width: 98%;\n\
    margin-left: 4px;\n\
    box-shadow: inset 0 0px 0 rgb(255 255 255), 0 2px 0px rgb(252 199 209);\n\
    border: 2px solid #FFFFFF!important;\n\
    animation: rgb-border 3s linear infinite;\n\
    margin-top: 4px !important;\n\
}\n\
#u1 {\n\
    padding: 0px 0px!important;\n\
    margin-left: -6px;\n\
    border-radius: 25px!important;\n\
    border: 1px solid #e1e0e0;\n\
    text-align: center;\n\
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 1px 2px rgb(107 32 49);\n\
    border: 1px solid white;\n\
    height: 27px!important;\n\
    width: 100%!important;\n\
    margin-top: 1px!important;\n\
}\n\
#tlogins .fa.fa-eye {\n\
    position: relative;\n\
    margin: -30px 17px 2px 0px!important;\n\
    color: #fff!important;\n\
}\n\
</style>").insertBefore('body');

$("body").append("\n    <style>\n        #upro .light.fl.pro.break {\n            background-color: #000 !important;\n            background-image: linear-gradient(225deg, #e5e8f7 0%, #fff 29%, #fafafc 67%, #e5e8f7 100%);\n        }\n    </style>\n");
$("body").append("\n    <style>\n        #sultan { color: #f00 !important; }\n\n        #room .btn-primary,\n        #d0 .label-primary,\n        #settings .label-primary,\n        #settings .btn-primary,\n        .corner.border.label.label-primary,\n        .modal-header.label-primary,\n        .head.d-flex.nosel.bg.fl,\n        .rsave.btn.btn-primary.fr,\n        .fa.fa-send.sndpm.fl.btn.btn-primary,\n        .fr.fa.fa-share-alt.sndfile.fl.btn.btn-primary,\n        .fr.fa.fa-share-alt.sndfilebc.fl.btn.btn-primary,\n        .bdel.corner.btn.minix.btn-primary.fa.fa-times,\n        .fa.fa-send.sndbc.fl.btn.btn-primary,\n        .btn.btn-primary.u-nickc.fr.fa.fa-save,\n        .label.fl.label-primary,\n        button.rsave.btn.btn-primary.fl,\n        #users .nosel.ninr.fl.uzr.label.bg {\n            border-radius: 0px 8px 0px 8px !important;\n            border: 1px solid #000;\n            background-image: url(data:image/jpeg;base64,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);\n            background-size: cover;\n            color: #fff;\n        }\n\n        #room #mic {\n            background-image: url(https://share.google/81JYwgmzOLGaWoRMr);\n            background-size: cover;\n            border-radius: 0px 6px 6px 6px !important;\n        }\n    </style>\n");
$(".nonot").remove();
$("body").append("\n    <style>\n        #mic .mic {\n            text-align: center;\n            width: 56px;\n            background-color: #ffffff;\n            border: 2px solid #afbfc2 !important;\n            animation: rgb-border 3s linear infinite;\n            border-radius: 30% 1% !important;\n            margin: 1px !important;\n            height: 47px !important;\n            background-position: center !important;\n            background-repeat: no-repeat !important;\n            background-size: cover;\n        }\n\n        #chats .fitimg.u-pic {\n            height: 52px !important;\n            border: 1px solid;\n            border-radius: 100px;\n            box-shadow: 0 0 0px rgb(0, 0, 0), inset 0 0 4px rgb(0, 0, 0), 0 0 0 0px #707070;\n            margin-left: -10px;\n        }\n\n        #chats img.ustat {\n            width: 11px !important;\n            height: 11px !important;\n            border-radius: 50px;\n            border: 1px solid #000;\n            box-shadow: 0 0 3px rgb(0, 0, 0), inset 0 0 4px rgb(0, 0, 0);\n            margin-left: 1px;\n            margin-top: 1px;\n        }\n\n        #chats .d-flex.fl {\n            background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_Agdnr5d86ryPlggv97L8smKclFfJxnnt_HgACY7vA&s=10);\n            background-size: cover;\n        }\n\n        #chats .mini.u-msg.dots {\n            color: #000 !important;\n        }\n\n        #d2bc {\n            background-color: #000 !important;\n            background-image: url();\n            background-size: 100%;\n        }\n\n        #upro .modal-header.label-primary,\n        #d0,\n        .broadcasters,\n        #rooms .label-primary,\n        #users .nosel.ninr.fl.uzr.label.bg {\n            border-radius: 0px 8px 0px 8px !important;\n            border: 1px solid #000;\n            background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_Agdnr5d86ryPlggv97L8smKclFfJxnnt_HgACY7vA&s=10);\n            color: #fff;\n        }\n\n        #users img.co {\n            border-radius: 0px 8px 0px 8px !important;\n            transform: rotate(20deg);\n            margin-top: 2px !important;\n        }\n\n        #dpnl {\n            background-image: url(https://share.google/81JYwgmzOLGaWoRMr);\n            background-size: 100% !important;\n        }\n    </style>\n");

$(`
<center>
  <div style="
    width:99.5%;
    background-color:#000000;
    color:#ffffff;
    border-radius:5px;
    border-bottom: 2px solid;
    border-top: 2px solid;
    animation: rgb-border 3s linear infinite;
    padding-bottom:2px;
  ">
    <span style="
      background-color:#ffffff;
      border-radius:15px;
      font-family:'jazeera', FontAwesome;
      padding:2px 10px;
      margin:7px 10px;
      display:inline-block;
      color:#000;
    ">
      - ¦¦ - Dark Smile حياكم في شات وجه القمر للجوال بادارة - ¦¦ -
    </span>
  </div>
</center>
`).insertBefore('#d2');

$(` <center>   انت مبدع برُقيٌك وليس بعدد نقاطك فكن منافسا شريفا   <div width="99%" id="asim7"><font style="background-color: #ffffff;border-radius: 15px 15px 15px 15px;font-family: 'jazeera',FontAwesome;padding: 2px 10px 2px 10px;margin: 7px 10px 7px 10px;"        @ابدع في رقي وخلق @   </font></div><center>`).insertBefore('div#d2bc');
$(document.getElementById('tbox').placeholder = 'مَا يَلْفِظُ مِنْ قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ');
$("#l1>button,#l2>button").click(function(){alert( ' انت ستدخل شات وجه القمر للجوال وانت موافق على قانون شات وجه القمر للجوال عليك اتباع القوانين لتجنب الحظر ')})


$(`<div><marquee direction="right" width="100%" id="des0" onmouseover="this.stop()" onmouseout="this.start()" scrolldelay="0" scrollamount="4">  
 Dark Smile شات وجه القمر للجوال يرحب بكم اهلا وسهلا فيكم مع إدارة موقع Dark Smile     <class="des2"></marquee></div>`).insertBefore('.lonline.light.break');
