gdjs.gameCode = {};
gdjs.gameCode.forEachIndex2 = 0;

gdjs.gameCode.forEachObjects2 = [];

gdjs.gameCode.forEachTemporary2 = null;

gdjs.gameCode.forEachTotalCount2 = 0;

gdjs.gameCode.GDbackgroundObjects1= [];
gdjs.gameCode.GDbackgroundObjects2= [];
gdjs.gameCode.GDPlayerObjects1= [];
gdjs.gameCode.GDPlayerObjects2= [];
gdjs.gameCode.GDfloorObjects1= [];
gdjs.gameCode.GDfloorObjects2= [];
gdjs.gameCode.GDNewObjectObjects1= [];
gdjs.gameCode.GDNewObjectObjects2= [];

gdjs.gameCode.conditionTrue_0 = {val:false};
gdjs.gameCode.condition0IsTrue_0 = {val:false};
gdjs.gameCode.condition1IsTrue_0 = {val:false};


gdjs.gameCode.eventsList0x64f300 = function(runtimeScene, context) {

}; //End of gdjs.gameCode.eventsList0x64f300
gdjs.gameCode.eventsList0xaf580 = function(runtimeScene, context) {

{



}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("scroll_speed").setNumber(1);
}}

}


{



}


{

gdjs.gameCode.GDbackgroundObjects1.createFrom(runtimeScene.getObjects("background"));

for(gdjs.gameCode.forEachIndex2 = 0;gdjs.gameCode.forEachIndex2 < gdjs.gameCode.GDbackgroundObjects1.length;++gdjs.gameCode.forEachIndex2) {
gdjs.gameCode.GDbackgroundObjects2.createFrom(gdjs.gameCode.GDbackgroundObjects1);


gdjs.gameCode.forEachTemporary2 = gdjs.gameCode.GDbackgroundObjects1[gdjs.gameCode.forEachIndex2];
gdjs.gameCode.GDbackgroundObjects2.length = 0;
gdjs.gameCode.GDbackgroundObjects2.push(gdjs.gameCode.forEachTemporary2);
gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDbackgroundObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDbackgroundObjects2[i].getX() <= -(gdjs.gameCode.GDbackgroundObjects2[i].getWidth()) ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDbackgroundObjects2[k] = gdjs.gameCode.GDbackgroundObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDbackgroundObjects2.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.gameCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDbackgroundObjects2[i].setX((gdjs.gameCode.GDbackgroundObjects2[i].getWidth()));
}
}}
}

}


{



}


{


{
gdjs.gameCode.GDbackgroundObjects1.createFrom(runtimeScene.getObjects("background"));
{for(var i = 0, len = gdjs.gameCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDbackgroundObjects1[i].setX(gdjs.gameCode.GDbackgroundObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scroll_speed"))));
}
}}

}


{

gdjs.gameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDPlayerObjects1[k] = gdjs.gameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects1.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.gameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDPlayerObjects1[k] = gdjs.gameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects1.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects1[i].setAnimationName("run");
}
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.gameCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


{
}

}


}; //End of gdjs.gameCode.eventsList0xaf580


gdjs.gameCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.gameCode.GDbackgroundObjects1.length = 0;
gdjs.gameCode.GDbackgroundObjects2.length = 0;
gdjs.gameCode.GDPlayerObjects1.length = 0;
gdjs.gameCode.GDPlayerObjects2.length = 0;
gdjs.gameCode.GDfloorObjects1.length = 0;
gdjs.gameCode.GDfloorObjects2.length = 0;
gdjs.gameCode.GDNewObjectObjects1.length = 0;
gdjs.gameCode.GDNewObjectObjects2.length = 0;

gdjs.gameCode.eventsList0xaf580(runtimeScene, context);return;
}
gdjs['gameCode']= gdjs.gameCode;
