gdjs.MenuCode = {};
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDBackgroundObjects3= [];
gdjs.MenuCode.GDPlayButtonObjects1= [];
gdjs.MenuCode.GDPlayButtonObjects2= [];
gdjs.MenuCode.GDPlayButtonObjects3= [];
gdjs.MenuCode.GDCreditsButtonObjects1= [];
gdjs.MenuCode.GDCreditsButtonObjects2= [];
gdjs.MenuCode.GDCreditsButtonObjects3= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDTitle2Objects1= [];
gdjs.MenuCode.GDTitle2Objects2= [];
gdjs.MenuCode.GDTitle2Objects3= [];
gdjs.MenuCode.GDCreditsBackgroundObjects1= [];
gdjs.MenuCode.GDCreditsBackgroundObjects2= [];
gdjs.MenuCode.GDCreditsBackgroundObjects3= [];
gdjs.MenuCode.GDCloseButtonObjects1= [];
gdjs.MenuCode.GDCloseButtonObjects2= [];
gdjs.MenuCode.GDCloseButtonObjects3= [];
gdjs.MenuCode.GDCreditsObjects1= [];
gdjs.MenuCode.GDCreditsObjects2= [];
gdjs.MenuCode.GDCreditsObjects3= [];
gdjs.MenuCode.GDLogoTipoObjects1= [];
gdjs.MenuCode.GDLogoTipoObjects2= [];
gdjs.MenuCode.GDLogoTipoObjects3= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MenuCode.GDPlayButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPlayButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPlayButtonObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPlayButtonObjects2[k] = gdjs.MenuCode.GDPlayButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlayButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDPlayButtonObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayButtonObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 3, 5, 5, 0.1, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MenuCode.GDPlayButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPlayButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDPlayButtonObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPlayButtonObjects2[k] = gdjs.MenuCode.GDPlayButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlayButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDPlayButtonObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayButtonObjects2[i].getBehavior("ShakeObject_PositionAngle").StopShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPlayButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPlayButtonObjects1[k] = gdjs.MenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15955236);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level #1", true);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CreditsButton"), gdjs.MenuCode.GDCreditsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCreditsButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCreditsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCreditsButtonObjects1[k] = gdjs.MenuCode.GDCreditsButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDCreditsButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15955988);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Credits");
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CloseButton"), gdjs.MenuCode.GDCloseButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCloseButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCloseButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCloseButtonObjects1[k] = gdjs.MenuCode.GDCloseButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDCloseButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15957188);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Credits");
}}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15950708);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsBackground"), gdjs.MenuCode.GDCreditsBackgroundObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDCreditsBackgroundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCreditsBackgroundObjects1[i].setOpacity(200);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Credits");
}{gdjs.evtTools.sound.playSound(runtimeScene, "menu.ogg", true, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)), 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.MenuCode.GDCreditsObjects1);
gdjs.copyArray(runtimeScene.getObjects("CreditsButton"), gdjs.MenuCode.GDCreditsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LogoTipo"), gdjs.MenuCode.GDLogoTipoObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MenuCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.MenuCode.GDTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title2"), gdjs.MenuCode.GDTitle2Objects1);
{for(var i = 0, len = gdjs.MenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayButtonObjects1[i].setX((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2) - ((gdjs.MenuCode.GDPlayButtonObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.MenuCode.GDCreditsButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCreditsButtonObjects1[i].setX((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2) - ((gdjs.MenuCode.GDCreditsButtonObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.MenuCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTitleObjects1[i].setX((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2) - ((gdjs.MenuCode.GDTitleObjects1[i].getWidth()) / 2) - ((( gdjs.MenuCode.GDTitle2Objects1.length === 0 ) ? 0 :gdjs.MenuCode.GDTitle2Objects1[0].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.MenuCode.GDTitle2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTitle2Objects1[i].setX((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2) - ((gdjs.MenuCode.GDTitle2Objects1[i].getWidth()) / 2) + ((( gdjs.MenuCode.GDTitleObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDTitleObjects1[0].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.MenuCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCreditsObjects1[i].setX((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2) - ((gdjs.MenuCode.GDCreditsObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.MenuCode.GDLogoTipoObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLogoTipoObjects1[i].setX(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2 - (gdjs.MenuCode.GDLogoTipoObjects1[i].getWidth()) / 2);
}
}}

}


{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{


gdjs.MenuCode.eventsList1(runtimeScene);
}


{


gdjs.MenuCode.eventsList2(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MenuCode.GDCreditsButtonObjects1.length = 0;
gdjs.MenuCode.GDCreditsButtonObjects2.length = 0;
gdjs.MenuCode.GDCreditsButtonObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDTitle2Objects1.length = 0;
gdjs.MenuCode.GDTitle2Objects2.length = 0;
gdjs.MenuCode.GDTitle2Objects3.length = 0;
gdjs.MenuCode.GDCreditsBackgroundObjects1.length = 0;
gdjs.MenuCode.GDCreditsBackgroundObjects2.length = 0;
gdjs.MenuCode.GDCreditsBackgroundObjects3.length = 0;
gdjs.MenuCode.GDCloseButtonObjects1.length = 0;
gdjs.MenuCode.GDCloseButtonObjects2.length = 0;
gdjs.MenuCode.GDCloseButtonObjects3.length = 0;
gdjs.MenuCode.GDCreditsObjects1.length = 0;
gdjs.MenuCode.GDCreditsObjects2.length = 0;
gdjs.MenuCode.GDCreditsObjects3.length = 0;
gdjs.MenuCode.GDLogoTipoObjects1.length = 0;
gdjs.MenuCode.GDLogoTipoObjects2.length = 0;
gdjs.MenuCode.GDLogoTipoObjects3.length = 0;

gdjs.MenuCode.eventsList3(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
