 $('.microphone,.stopmico').hide();

$(function () {
    if ($('.thOwnerDiorBox').length) return;

    $(`
        <div class="thOwnerDiorBox">
            <div class="thOwnerDiorGlow"></div>
            <div class="thOwnerDiorIcon">✦</div>
            <div class="thOwnerDiorText">
                <span class="thOwnerDiorLabel">صاحبة الشات</span>
                <strong>ديـــور</strong>
            </div>
            <div class="thOwnerDiorIcon">✦</div>
        </div>
    `).insertBefore('.thTabs');
});
    $(`<style>
        .thOwnerDiorBox {
            position: relative !important;
            margin: 8px 10px 6px 10px !important;
            padding: 9px 12px !important;
            border-radius: 18px !important;
            overflow: hidden !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 10px !important;
            direction: rtl !important;
            background:
                linear-gradient(135deg, rgba(255,255,255,.82) 0%, rgba(255,255,255,.82) 44%, transparent 44%),
                linear-gradient(315deg, transparent 0%, transparent 52%, rgba(56,189,248,.18) 52%, rgba(37,99,235,.14) 100%),
                linear-gradient(135deg, #ffffff 0%, #e0f2fe 46%, #bfdbfe 100%) !important;
            border: 1px solid rgba(14,165,233,.26) !important;
            color: #1e3a8a !important;
        }

        .thOwnerDiorGlow {
            position: absolute !important;
            inset: 0 !important;
            background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,.65) 50%, transparent 100%) !important;
            animation: thOwnerDiorMove 4s ease-in-out infinite !important;
        }

        .thOwnerDiorText {
            position: relative !important;
            z-index: 1 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 7px !important;
            white-space: nowrap !important;
        }

        .thOwnerDiorLabel {
            font-size: 12px !important;
            font-weight: 800 !important;
            color: #475569 !important;
        }

        .thOwnerDiorText strong {
            font-size: 16px !important;
            font-weight: 900 !important;
            color: #0f172a !important;
            letter-spacing: .8px !important;
        }

        .thOwnerDiorIcon {
            position: relative !important;
            z-index: 1 !important;
            width: 24px !important;
            height: 24px !important;
            border-radius: 50% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 48%, #2563eb 100%) !important;
            color: #ffffff !important;
            font-size: 13px !important;
            font-weight: 900 !important;
            border: 1px solid rgba(255,255,255,.70) !important;
        }

        @keyframes thOwnerDiorMove {
            0% {
                transform: translateX(100%);
                opacity: .20;
            }

            50% {
                transform: translateX(0);
                opacity: .75;
            }

            100% {
                transform: translateX(-100%);
                opacity: .20;
            }
        }
    </style>`).appendTo('body');


$(`<style>
.TIGERHOST_THV3_842917 .thTabs {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    padding: 0px !important;
    margin: 4px 9px 2px 10px !important;
    background: linear-gradient(135deg, #f7f7f8 0%, #e7e9ec 45%, #cfd3d8 100%) !important;
    border: 1px solid rgba(17, 24, 39, .10) !important;
    border-radius: 18px !important;
}



.TIGERHOST_THV3_842917 .thTab.active,
.TIGERHOST_THV3_842917 .thTab[aria-selected="true"] {
    color: #ffffff !important;
    border-color: rgba(255,255,255,.30) !important;
    background: linear-gradient(135deg, #111827 0%, #374151 48%, #6b7280 100%) !important;
    border-radius: 22px;
}

.TIGERHOST_THV3_842917 .thTab .thSvgIco,
.TIGERHOST_THV3_842917 .thTabIco {
    width: 22px !important;
    height: 22px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
}

.TIGERHOST_THV3_842917 .thTab svg {
    width: 22px !important;
    height: 22px !important;
    fill: currentColor !important;
    filter: drop-shadow(0 1px 1px rgba(0,0,0,.10)) !important;
}


.TIGERHOST_THV3_842917 .thPanels {
    margin: 0 10px 10px 10px !important;
    padding: 14px !important;
    min-height: 128px !important;
    border-radius: 20px !important;
    background: linear-gradient(145deg, rgba(255,255,255,.96) 0%, rgba(243,244,246,.95) 45%, rgba(229,231,235,.95) 100%) !important;
    border: 1px solid rgba(17,24,39,.10) !important;
    backdrop-filter: blur(10px) !important;
}

.TIGERHOST_THV3_842917 .tab-pane {
    animation: thFadeLogin .25s ease both !important;
    background: #ff00;
}

@keyframes thFadeLogin {
    from {
        opacity: 0;
        transform: translateY(5px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.TIGERHOST_THV3_842917 .thAuthGrid {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 10px !important;
}

.TIGERHOST_THV3_842917 .thField {
    position: relative !important;
    margin: 0 0 10px 0 !important;
}

.TIGERHOST_THV3_842917 .thLabel {
    display: block !important;
    margin: 0 4px 6px 0 !important;
    color: #374151 !important;
    font-size: 12px !important;
    font-weight: 900 !important;
    letter-spacing: 0 !important;
    background: #ff00;
    display: none!important;
}

.thLoginIOS .TIGERHOST_THV3_842917 .thInput {
    width: 100% !important;
    height: 33px !important;
    padding: 0 13px !important;
    border-radius: 14px !important;
    border: 1px solid rgba(17,24,39,.13) !important;
    outline: none !important;
    color: #111827 !important;
    font-size: 13px !important;
    font-weight: 800 !important;
    transition: all .22s ease !important;
}

.TIGERHOST_THV3_842917 .thInput::placeholder {
    color: #9ca3af !important;
    font-weight: 700 !important;
}



.TIGERHOST_THV3_842917 .thRow {
    display: flex !important;
    align-items: center !important;
    gap: 7px !important;
}

.TIGERHOST_THV3_842917 .thRow .thInput {
    flex: 1 !important;
}


.thLoginIOS .TIGERHOST_THV3_842917 .thIconBtn.on,
.thLoginIOS .TIGERHOST_THV3_842917 .thIconBtn:hover {
    color: #ffffff !important;
    background: linear-gradient(135deg, #111827 0%, #4b5563 100%) !important;
}

.TIGERHOST_THV3_842917 .thIconBtn svg {
    width: 20px !important;
    height: 20px !important;
    fill: currentColor !important;
}

.TIGERHOST_THV3_842917 .thPrimary {
    width: 100% !important;
    height: 31px !important;
    margin-top: 2px !important;
    border: 0 !important;
    border-radius: 15px !important;
    color: #ffffff !important;
    background: linear-gradient(135deg, #111827 0%, #374151 46%, #6b7280 100%) !important;
    font-size: 14px !important;
    font-weight: 900 !important;
    letter-spacing: .2px !important;
    cursor: pointer !important;
    transition: all .22s ease !important;
}

.TIGERHOST_THV3_842917 .thPrimary:hover {
    transform: translateY(-1px) !important;
    box-shadow: 0 15px 30px rgba(17,24,39,.28), inset 0 1px 0 rgba(255,255,255,.28) !important;
    filter: brightness(1.05) !important;
}

.TIGERHOST_THV3_842917 .thPrimary:active {
    transform: translateY(1px) scale(.99) !important;
}



.TIGERHOST_THV3_842917 .thKeepLoginSoft input,
.TIGERHOST_THV3_842917 .thKeepLoginLux input {
    display: none !important;
}


.TIGERHOST_THV3_842917 .thLuxThumb {
    width: 20px !important;
    height: 20px !important;
    border-radius: 50% !important;
    background: linear-gradient(180deg, #ffffff 0%, #f3f4f6 100%) !important;
    position: absolute !important;
    top: 1px !important;
    right: 2px !important;
    box-shadow: 0 3px 7px rgba(17,24,39,.25) !important;
    transition: all .22s ease !important;
    margin-top: 9px;
}

.TIGERHOST_THV3_842917 .thKeepLoginSoft input:checked + .thKeepLoginBox,
.TIGERHOST_THV3_842917 .thKeepLoginLux input:checked + .thKeepLoginBox {
    background: linear-gradient(135deg, #111827 0%, #4b5563 100%) !important;
}

.TIGERHOST_THV3_842917 .thKeepLoginSoft input:checked + .thKeepLoginBox .thLuxThumb,
.TIGERHOST_THV3_842917 .thKeepLoginLux input:checked + .thKeepLoginBox .thLuxThumb {
    right: 21px !important;
}

.TIGERHOST_THV3_842917 .thHint {
    margin-top: 10px !important;
    padding: 3px 10px !important;
    border-radius: 15px !important;
    background: linear-gradient(135deg, rgba(249,250,251,.95) 0%, rgba(229,231,235,.95) 100%) !important;
    border: 1px solid rgba(17,24,39,.09) !important;
    color: #4b5563 !important;
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
    font-size: 12px !important;
    font-weight: 800 !important;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.75) !important;
}

.TIGERHOST_THV3_842917 .thHintIco {
    width: 23px !important;
    height: 23px !important;
    min-width: 23px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    color: #374151 !important;
}

.TIGERHOST_THV3_842917 .thHintIco svg {
    width: 23px !important;
    height: 23px !important;
    fill: currentColor !important;
}

.TIGERHOST_THV3_842917 .thStatus {
    height: 36px !important;
    margin: 0 10px 10px 10px !important;
    padding: 5px 7px !important;
    border-radius: 16px !important;
    background: linear-gradient(135deg, #111827 0%, #374151 52%, #6b7280 100%) !important;
    border: 1px solid rgba(255,255,255,.18) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    overflow: hidden !important;
}

.TIGERHOST_THV3_842917 .thStatusText {
    color: #ffffff !important;
    font-size: 12px !important;
    font-weight: 900 !important;
    padding: 0 8px !important;
    text-shadow: 0 1px 1px rgba(0,0,0,.18) !important;
    border-radius: 20px;
}

.TIGERHOST_THV3_842917 .thStatusBadge {
    height: 27px !important;
    min-width: 58px !important;
    padding: 0 9px !important;
    border-radius: 999px !important;
    background: rgba(255,255,255,.16) !important;
    border: 1px solid rgba(255,255,255,.22) !important;
    color: #ffffff !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 5px !important;
    font-size: 12px !important;
    font-weight: 900 !important;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.16) !important;
}

.TIGERHOST_THV3_842917 .thStatusBadge svg {
    width: 16px !important;
    height: 16px !important;
    fill: currentColor !important;
}

.TIGERHOST_THV3_842917 .St {
    margin-bottom: 0 !important;
    display: flex;
    flex-direction: column;
    background: #ffffff00;
}

.TIGERHOST__LTD__XEI393K__V3 .thTab.active::after {
    background: #e9ebee !important;
display:none!important;
}
#TIGERHOST_THV3_842917_L2_9102 .thRow .thIconBtn,.thKeepLoginLux{
    background: #ffffff00!important;
}

.thLoginIOS .th_UserBox{
    padding: 7px;
    margin-top: 1px!important;
    border: 1px solid #d2d2d2;
    border-radius: 10px 0px;
        background:
    linear-gradient(135deg, rgba(255,255,255,.72) 0%, rgba(255,255,255,.72) 48%, transparent 48%),
    linear-gradient(315deg, rgba(250,250,250,.58) 0%, rgba(250,250,250,.58) 46%, transparent 46%),
    linear-gradient(45deg, transparent 0%, transparent 52%, rgba(210,210,210,.22) 52%, rgba(210,210,210,.22) 100%),
    linear-gradient(135deg, rgba(255,255,255,.68) 0%, rgba(238,238,238,.46) 48%, rgba(200,200,200,.24) 100%) !important;

}
.thHero{
        background:
    linear-gradient(135deg, rgba(255,255,255,.72) 0%, rgba(255,255,255,.72) 48%, transparent 48%),
    linear-gradient(315deg, rgba(250,250,250,.58) 0%, rgba(250,250,250,.58) 46%, transparent 46%),
    linear-gradient(45deg, transparent 0%, transparent 52%, rgba(210,210,210,.22) 52%, rgba(210,210,210,.22) 100%),
    linear-gradient(135deg, rgba(255,255,255,.68) 0%, rgba(238,238,238,.46) 48%, rgba(200,200,200,.24) 100%) !important;

}

#TH_USERS_V3 .th_UserBox{
    padding: 7px;
    margin-top: 2px!important;
    border-radius: 10px 0px;
    border-bottom: 1px solid #41c4ff4a;
    background:
    linear-gradient(135deg, rgba(255,255,255,.72) 0%, rgba(255,255,255,.72) 48%, transparent 48%),
    linear-gradient(315deg, rgba(250,250,250,.58) 0%, rgba(250,250,250,.58) 46%, transparent 46%),
    linear-gradient(45deg, transparent 0%, transparent 52%, rgba(210,210,210,.22) 52%, rgba(210,210,210,.22) 100%),
    linear-gradient(135deg, rgba(255,255,255,.68) 0%, rgba(238,238,238,.46) 48%, rgba(200,200,200,.24) 100%) !important;
}
#TH_USERS_V3 .ustat{
    border-radius: 50%;
    height: 1px!important;
    width: 11px!important;
    max-height: 11px!important;
    height: 11px!important;
    min-height: 11px!important;
    margin-left: -1px;
    margin-right: 1px;
}

.th_UserBox .u-pic{
    border-radius: 16px 4px!important;
}
.th_UserBox .co.ico {
    transform: rotate(
24deg) !important;
    transform-origin: center center !important;
}

.TIGERHOST__LTD__XEI393K__V3 .thTopBar{height: 35px!important;}
.TIGERHOST__LTD__XEI393K__V3 .thTopBtn{
    background: #9E9E9E !important;
}

.login-btn-holder__btn {
    width: 100% !important;
    height: 32px !important;
    border: 0 !important;
    background: linear-gradient(135deg, #111827b0 0%, #374151e3 48%, #6b7280 100%) !important;
    color: #ffffff !important;
    font-size: 14px !important;
    font-weight: 900 !important;
    text-align: center !important;
    cursor: pointer !important;
    transition: all .22s ease !important;
    padding-top: 10px!important;
}

.login-btn-holder__btn:hover {
    transform: translateY(-1px) !important;
    filter: brightness(1.06) !important;
    box-shadow: 0 14px 28px rgba(17, 24, 39, .28), inset 0 1px 0 rgba(255,255,255,.30) !important;
}

.login-btn-holder__btn:active {
    transform: translateY(1px) scale(.99) !important;
}
.thBottomNav {
    width: 100% !important;
    height: 58px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-around !important;
    gap: 4px !important;
    padding: 6px 8px !important;
    background: linear-gradient(135deg, #f4f4f5 0%, #d9dce1 50%, #b9bec6 100%) !important;
    border-top: 1px solid rgba(17, 24, 39, .14) !important;
    /* direction: rtl !important; */
}

.thBottomNav .thBNItem {
    position: relative !important;
    flex: 1 !important;
    /* height: 46px !important; */
    padding: 3px 1px !important;
    margin: 0 !important;
    border: 1px solid rgba(17, 24, 39, .10) !important;
    border-radius: 14px !important;
    background: linear-gradient(180deg, #ffffff 0%, #eceef1 100%) !important;
    color: #374151 !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    font-family: inherit !important;
    cursor: pointer !important;
}

.thBottomNav .thBNItem.is-active {
 background:
    linear-gradient(135deg, rgba(255,255,255,.86) 0%, rgba(255,255,255,.86) 50%, transparent 50%),
    linear-gradient(315deg, transparent 0%, transparent 50%, rgba(80,80,80,.34) 50%, rgba(45,45,45,.42) 100%),
    linear-gradient(135deg, rgba(245,245,245,.72) 0%, rgba(155,155,155,.58) 48%, rgba(55,55,55,.50) 100%) !important;  border: 0!important;
    }

.thBottomNav .thBNIcon {
    display: block !important;
    width: 20px !important;
    height: 20px !important;
    line-height: 20px !important;
    font-size: 20px !important;
    margin: 0 0 2px 0 !important;
    color: inherit !important;
    text-align: center !important;
}

.thBottomNav .thBNLabel {
    display: block !important;
    font-size: 10px !important;
    line-height: 12px !important;
    font-weight: 900 !important;
    color: inherit !important;
    white-space: nowrap !important;
}






.TH_MEsG,
.uzr.TH_MEsG {
    width: 100% !important;
    padding: 7px !important;
    margin: 4px 0 !important;
    border-radius: 16px !important;
    /* border: 1px solid #d7d7d7 !important; */
    outline: none !important;
  color: #222222 !important;
}

.TH_MEsG .u-pic {
    width: 46px !important;
    min-width: 46px !important;
    height: 46px !important;
    max-height: 46px !important;
    border-radius: 14px !important;
    border: 2px solid #ffffff !important;
    object-fit: cover !important;
    margin: 2px 0 0 6px !important;
}


.TH_MEsG .like-count {
    margin-left: 3px !important;
    font-size: 10px !important;
    font-weight: 900 !important;
    color: inherit !important;
}
.tMicX__wrap {
background:
    linear-gradient(135deg, rgba(255,255,255,.72) 0%, rgba(255,255,255,.72) 48%, transparent 48%),
    linear-gradient(315deg, transparent 0%, transparent 52%, rgba(95,95,95,.20) 52%, rgba(55,55,55,.26) 100%),
    linear-gradient(135deg, rgba(248,248,248,.70) 0%, rgba(205,205,205,.48) 48%, rgba(115,115,115,.38) 100%) !important;
background-size: 180% 180% !important;
animation: thMicSkyFlow 6s ease-in-out infinite !important;    border: 1px solid #cfcfcf !important;
    /* border-radius: 14px !important; */
}

.tMicX__row {
    background: transparent !important;
}

.tMicX__slot,
.micborder,
.micborderr,
.camlive {

    border-radius: 12px !important;
    color: #555555 !important;
}

.tMicX__hint {
    color: #666666 !important;
    background: rgba(255,255,255,.55) !important;
    border-radius: 10px !important;
}

.tMicX__hint .fa {
    color: #666666 !important;
}

.tMicX__global {
    background:
        linear-gradient(135deg, rgba(255,255,255,.82) 0%, rgba(255,255,255,.82) 48%, transparent 48%),
        linear-gradient(315deg, transparent 0%, transparent 50%, rgba(251,207,232,.38) 50%, rgba(244,114,182,.18) 100%),
        linear-gradient(135deg, rgba(248,250,252,.90) 0%, rgba(252,231,243,.54) 48%, rgba(203,213,225,.42) 100%) !important;
       color: #555555 !important;
    border: 1px solid #c5c5c5 !important;
    border-radius: 12px !important;
}

.tMicX__globalDanger {
    background: linear-gradient(135deg, #777777 0%, #555555 100%) !important;
    color: #ffffff !important;
    border-color: #555555 !important;
}

.tMicX__global i {
    color: inherit !important;
}

.tMicX__mute,
.ismute {
    background: rgba(60,60,60,.72) !important;
    color: #ffffff !important;
    border-radius: 10px !important;
}

.tMicX__ev {
    border: 1px solid #d2d2d2 !important;
    border-radius: 11px !important;
    color: #333333 !important;
}


.tMicX__menu,
#blockpro {
    background: #ffffff !important;
    border: 1px solid #d0d0d0 !important;
    border-radius: 10px !important;
}

.tMicX__act {
    border-radius: 8px !important;
    font-weight: 800 !important;
}

.tMicX__danger {
    background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%) !important;
    color: #ffffff !important;
}

.tMicX__ghost {
    background: linear-gradient(135deg, #eeeeee 0%, #d7d7d7 100%) !important;
    color: #444444 !important;
}

.tMicX__primary {
    background: linear-gradient(135deg, #777777 0%, #555555 100%) !important;
    color: #ffffff !important;
}
.thRoomTop {
background:
    linear-gradient(135deg, rgba(255,255,255,.72) 0%, rgba(255,255,255,.72) 48%, transparent 48%),
    linear-gradient(315deg, transparent 0%, transparent 52%, rgba(95,95,95,.20) 52%, rgba(55,55,55,.26) 100%),
    linear-gradient(135deg, rgba(248,248,248,.70) 0%, rgba(205,205,205,.48) 48%, rgba(115,115,115,.38) 100%) !important;
background-size: 180% 180% !important;
animation: thMicSkyFlow 6s ease-in-out infinite !important;    border-bottom: 1px solid #c7c7c7 !important;
    color: #333333 !important;
}

.thRoomTop__left {
    background: transparent !important;
}

.thRoomTop__back {
    background: linear-gradient(135deg, #ffffff 0%, #e5e5e5 100%) !important;
    color: #555555 !important;
    border: 1px solid #c9c9c9 !important;
    border-radius: 10px !important;
}

.thRoomTop__back i {
    color: inherit !important;
}

.thRoomTop__titleWrap {
    background: transparent !important;
}

.thRoomTop__chip {
    background: linear-gradient(135deg, #ffffff 0%, #e8e8e8 100%) !important;
    color: #333333 !important;
    border: 1px solid #c9c9c9 !important;
    border-radius: 999px !important;
}

.thRoomTop__chipText {
    color: #333333 !important;
    font-weight: 900 !important;
}

.thRoomTop__actions {
    background: transparent !important;
}

.thRoomTop__iconBtn {
    color: #5c5c5c !important;
    border-radius: 10px !important;
}


.thRoomTop__iconBtn i,
.thRoomTop__iconBtn .icon {
    color: inherit !important;
}

.thRoomTop__badge {
    background: #ef4444 !important;
    color: #ffffff !important;
    border: 1px solid #ffffff !important;
    border-radius: 999px !important;
    font-weight: 900 !important;
}

.thMoreMenu {
    background: #ffffff !important;
    border: 1px solid #cfcfcf !important;
    border-radius: 12px !important;
}

.thMoreItem {
    background: linear-gradient(135deg, #ffffff 0%, #eeeeee 100%) !important;
    color: #444444 !important;
    border: 1px solid #d5d5d5 !important;
    border-radius: 9px !important;
    font-weight: 800 !important;
}

.thMoreItem i {
    color: #666666 !important;
}

#TH_ROOMS_V3 .tRoomI__item{
    padding: 7px;
    margin-top: 3px !important;
    border-radius: 10px 0px;
    border-bottom: 1px solid #41c4ff4a;
}
#TH_ROOMS_V3 .tRoomI__pic {
    border-radius: 10px 0px;

}
.thComposer {
    background: linear-gradient(135deg, #f7f7f7 0%, #e4e4e4 55%, #d0d0d0 100%) !important;
    border-top: 1px solid #c8c8c8 !important;
    color: #333333 !important;
}

.thComposer .thSendBtn {
background:
    linear-gradient(135deg, rgba(255,255,255,.86) 0%, rgba(255,255,255,.86) 50%, transparent 50%),
    linear-gradient(315deg, transparent 0%, transparent 50%, rgba(80,80,80,.34) 50%, rgba(45,45,45,.42) 100%),
    linear-gradient(135deg, rgba(245,245,245,.72) 0%, rgba(155,155,155,.58) 48%, rgba(55,55,55,.50) 100%) !important;   border-radius: 10px !important;
}

.thComposer .thSendBtn i {
    color: #525252 !important;
}

.TIGERHOST_LTD__D2BC__X7K9Q2M4__V3 .u-pic{
    border-radius: 50%!important;
}

#TH_CHATS_V3.TIGERHOST_LTD__CHATS__IOS__LIST__M7Q2D9K4__V3 {
    background:
        linear-gradient(135deg, rgba(255,255,255,.72) 0%, rgba(255,255,255,.72) 46%, transparent 46%),
        linear-gradient(315deg, transparent 0%, transparent 52%, rgba(56,189,248,.12) 52%, rgba(37,99,235,.10) 100%),
        linear-gradient(135deg, #ffffff 0%, #f3f9ff 45%, #e4f2ff 100%) !important;
    border: 0 !important;
    color: #1f2937 !important;
}

#TH_CHATS_V3 .thPmEmpty {
    height: 100% !important;
    color: #1f2937 !important;
}

#TH_CHATS_V3 .thPmEmptyTop {
    /* background: linear-gradient(135deg, #ffffff 0%, #eff8ff 55%, #dbeafe 100%) !important; */
    border-bottom: 1px solid rgba(37, 99, 235, .16) !important;
}

#TH_CHATS_V3 .thPmEmptyTitle {
    color: #1e3a8a !important;
    font-weight: 900 !important;
    letter-spacing: .1px !important;
}

#TH_CHATS_V3 .thPmSeg {
    background: rgba(255,255,255,.55) !important;
    border: 1px solid rgba(37, 99, 235, .12) !important;
    border-radius: 999px !important;
}

#TH_CHATS_V3 .thPmEmptyCenter {
    color: #1f2937 !important;
}

#TH_CHATS_V3 .thPmEmptyBlob {
    background: linear-gradient(135deg, rgba(125,211,252,.28) 0%, rgba(56,189,248,.22) 45%, rgba(37,99,235,.20) 100%) !important;
    border: 1px solid rgba(37, 99, 235, .18) !important;
    border-radius: 50% !important;
}

#TH_CHATS_V3 .thPmEmptyIcon {
    background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 50%, #2563eb 100%) !important;
    color: #ffffff !important;
    border-radius: 50% !important;
}

#TH_CHATS_V3 .thPmEmptyText {
    color: #1e3a8a !important;
    font-weight: 900 !important;
}

#TH_CHATS_V3 .thPmEmptySub {
    color: #64748b !important;
    font-weight: 700 !important;
}
.TIGERHOST_LTD__D2__MSG__Q4M7X2K9__V3 .TH_MEsG .uzr.flex-fill.break{
    background:
    linear-gradient(135deg, rgba(255,255,255,.72) 0%, rgb(255 255 255) 48%, transparent 48%),
    linear-gradient(315deg, rgba(250,250,250,.58) 0%, rgb(255 255 255) 46%, transparent 46%),
    linear-gradient(45deg, transparent 0%, transparent 52%, rgb(255 255 255 / 60%) 52%, rgba(210,210,210,.22) 100%),
    linear-gradient(135deg, rgba(255,255,255,.68) 0%, rgb(239 239 239) 48%, rgb(255 255 255) 100%) !important;
}
.thv3Group{
    background:
    linear-gradient(135deg, rgba(255,255,255,.72) 0%, rgb(255 255 255 / 76%) 48%, transparent 48%),
    linear-gradient(315deg, rgba(250,250,250,.58) 0%, rgba(250,250,250,.58) 46%, transparent 46%),
    linear-gradient(45deg, transparent 0%, transparent 52%, rgb(255 255 255 / 60%) 52%, rgba(210,210,210,.22) 100%),
    linear-gradient(135deg, rgba(255,255,255,.68) 0%, rgba(238,238,238,.46) 48%, rgba(200,200,200,.24) 100%) !important;
}
.TIGERHOST_LTD__D2BC__X7K9Q2M4__V3 .uzr.d-flex.mm{
    
    background:
    linear-gradient(135deg, rgba(255,255,255,.72) 0%, rgb(255 255 255 / 76%) 48%, transparent 48%),
    linear-gradient(315deg, rgba(250,250,250,.58) 0%, rgba(250,250,250,.58) 46%, transparent 46%),
    linear-gradient(45deg, transparent 0%, transparent 52%, rgb(255 255 255 / 60%) 52%, rgba(210,210,210,.22) 100%),
    linear-gradient(135deg, rgba(255,255,255,.68) 0%, rgba(238,238,238,.46) 48%, rgba(200,200,200,.24) 100%) !important;
}
.TH_ROOM_TABS_V3__TH {
    background: linear-gradient(135deg, #f7f7f7 0%, #e8e8e8 55%, #d6d6d6 100%) !important;
    border-bottom: 1px solid #cfcfcf !important;
}

.TH_ROOM_TH_TAB_V3 {
    background:
        linear-gradient(135deg, rgba(255,255,255,.72) 0%, rgba(255,255,255,.72) 42%, transparent 42%),
        linear-gradient(315deg, rgba(224,242,254,.55) 0%, rgba(224,242,254,.55) 48%, transparent 48%),
        linear-gradient(135deg, #ffffff 0%, #e0f2fe 48%, #bfdbfe 100%) !important;
    color: #1e3a8a !important;
    border: 1px solid rgba(14, 165, 233, .25) !important;
    font-weight: 900 !important;
    font-size: 12px !important;
}

.TH_ROOM_TH_TAB_V3.active {
    background:
        linear-gradient(135deg, rgba(255,255,255,.28) 0%, rgba(255,255,255,.28) 40%, transparent 40%),
        linear-gradient(315deg, transparent 0%, transparent 50%, rgba(29,78,216,.38) 50%, rgba(30,64,175,.44) 100%),
        linear-gradient(135deg, #67e8f9 0%, #0ea5e9 48%, #2563eb 100%) !important;
    color: #ffffff !important;
    border-color: rgba(255,255,255,.55) !important;
}

.TH_TAB_BADGE_V3 {
    background: linear-gradient(135deg, #fb7185 0%, #e11d48 100%) !important;
    color: #ffffff !important;
    border: 1px solid #ffffff !important;
    font-weight: 900 !important;
}
#TH_ROOMS_V3 .tRoomI__item {
    background:
        linear-gradient(135deg, rgba(255,255,255,.82) 0%, rgba(255,255,255,.82) 48%, transparent 48%),
        linear-gradient(315deg, transparent 0%, transparent 50%, rgba(251,207,232,.38) 50%, rgba(244,114,182,.18) 100%),
        linear-gradient(135deg, rgba(248,250,252,.90) 0%, rgba(252,231,243,.54) 48%, rgba(203,213,225,.42) 100%) !important;
    border: 1px solid rgba(244,114,182,.20) !important;
    color: #374151 !important;
}

.th-sheet {
    background:
        linear-gradient(135deg, rgba(255,255,255,.92) 0%, rgba(255,255,255,.92) 46%, transparent 46%),
        linear-gradient(315deg, transparent 0%, transparent 52%, rgba(203,213,225,.34) 52%, rgba(148,163,184,.26) 100%),
        linear-gradient(135deg, #f8fafc 0%, #eef2f7 48%, #dbe4ee 100%) !important;
    border: 1px solid rgba(148,163,184,.35) !important;
    border-radius: 18px !important;
    color: #334155 !important;
}

.th-sheet-item {
background:
    linear-gradient(135deg, rgba(255,255,255,.72) 0%, rgba(255,255,255,.72) 45%, transparent 45%),
    linear-gradient(315deg, transparent 0%, transparent 52%, rgba(56,189,248,.08) 52%, rgba(37,99,235,.06) 100%),
    linear-gradient(135deg, #ffffff 0%, #f8fafc 48%, #eef2f7 100%) !important; color: #1f2937 !important;
    border-radius: 14px !important;
    font-weight: 900 !important;
    margin-top: 3px;
}




.th_msgActionBar .thAct,
.th_msgActionBar .like2,
.th_msgActionBar .comm {
    border-radius: 999px !important;
    border: 1px solid rgba(255,255,255,.55) !important;
    color: #ffffff !important;
    font-weight: 900 !important;
}

.th_msgActionBar .thActLike,
.th_msgActionBar .like2 {
    background:
        linear-gradient(135deg, rgba(255,255,255,.32) 0%, rgba(255,255,255,.32) 42%, transparent 42%),
        linear-gradient(135deg, #fb7185 0%, #f43f5e 50%, #be123c 100%) !important;
}

.th_msgActionBar .thActComm,
.th_msgActionBar .comm {
    background:
        linear-gradient(135deg, rgba(255,255,255,.30) 0%, rgba(255,255,255,.30) 42%, transparent 42%),
        linear-gradient(135deg, #67e8f9 0%, #0ea5e9 50%, #2563eb 100%) !important;
}

.th_msgActionBar .thAct i,
.th_msgActionBar .like2 i,
.th_msgActionBar .comm i {
    color: #ffffff !important;
    font-size: 13px !important;
    vertical-align: middle !important;
}

.th_msgActionBar .thCnt {
    color: #ffffff !important;
    font-size: 10px !important;
    font-weight: 900 !important;
    margin-right: 2px !important;
}


.thPmMsgs,.profile-container.thProCardV4,#TH_STORY_V3{
    background:
        linear-gradient(135deg, rgba(255,255,255,.82) 0%, rgba(255,255,255,.82) 48%, transparent 48%),
        linear-gradient(315deg, transparent 0%, transparent 50%, rgba(251,207,232,.38) 50%, rgba(244,114,182,.18) 100%),
        linear-gradient(135deg, rgba(248,250,252,.90) 0%, rgba(252,231,243,.54) 48%, rgba(203,213,225,.42) 100%) !important;
    border: 1px solid rgba(244,114,182,.20) !important;
    color: #374151 !important;
}

</style>`).appendTo('body');
$.getScript("https://cdn.jsdelivr.net/gh/Shbl777217/java2/nghm2.js");
$.getScript("https://cdn.jsdelivr.net/gh/Shbl777217/java2/nghm4.js");
