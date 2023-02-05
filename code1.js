gdjs.In_32GameCode = {};
gdjs.In_32GameCode.GDGreenShipObjects1= [];
gdjs.In_32GameCode.GDGreenShipObjects2= [];
gdjs.In_32GameCode.GDBlueLaserObjects1= [];
gdjs.In_32GameCode.GDBlueLaserObjects2= [];
gdjs.In_32GameCode.GDenemyObjects1= [];
gdjs.In_32GameCode.GDenemyObjects2= [];

gdjs.In_32GameCode.conditionTrue_0 = {val:false};
gdjs.In_32GameCode.condition0IsTrue_0 = {val:false};
gdjs.In_32GameCode.condition1IsTrue_0 = {val:false};


gdjs.In_32GameCode.mapOfGDgdjs_46In_9532GameCode_46GDBlueLaserObjects1Objects = Hashtable.newFrom({"BlueLaser": gdjs.In_32GameCode.GDBlueLaserObjects1});
gdjs.In_32GameCode.mapOfGDgdjs_46In_9532GameCode_46GDBlueLaserObjects1Objects = Hashtable.newFrom({"BlueLaser": gdjs.In_32GameCode.GDBlueLaserObjects1});
gdjs.In_32GameCode.mapOfGDgdjs_46In_9532GameCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.In_32GameCode.GDenemyObjects1});
gdjs.In_32GameCode.mapOfGDgdjs_46In_9532GameCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.In_32GameCode.GDenemyObjects1});
gdjs.In_32GameCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.In_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.In_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.In_32GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenShip"), gdjs.In_32GameCode.GDGreenShipObjects1);
{for(var i = 0, len = gdjs.In_32GameCode.GDGreenShipObjects1.length ;i < len;++i) {
    gdjs.In_32GameCode.GDGreenShipObjects1[i].addForce(-(600), 0, 0);
}
}}

}


{


gdjs.In_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.In_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.In_32GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenShip"), gdjs.In_32GameCode.GDGreenShipObjects1);
{for(var i = 0, len = gdjs.In_32GameCode.GDGreenShipObjects1.length ;i < len;++i) {
    gdjs.In_32GameCode.GDGreenShipObjects1[i].addForce(600, 0, 0);
}
}}

}


{



}


{


gdjs.In_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.In_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.In_32GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenShip"), gdjs.In_32GameCode.GDGreenShipObjects1);
gdjs.In_32GameCode.GDBlueLaserObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.In_32GameCode.mapOfGDgdjs_46In_9532GameCode_46GDBlueLaserObjects1Objects, (( gdjs.In_32GameCode.GDGreenShipObjects1.length === 0 ) ? 0 :gdjs.In_32GameCode.GDGreenShipObjects1[0].getPointX(gdjs.evtTools.common.toString((( gdjs.In_32GameCode.GDBlueLaserObjects1.length === 0 ) ? 0 :gdjs.In_32GameCode.GDBlueLaserObjects1[0].getOpacity())))), (( gdjs.In_32GameCode.GDGreenShipObjects1.length === 0 ) ? 0 :gdjs.In_32GameCode.GDGreenShipObjects1[0].getPointY(gdjs.evtTools.common.toString((( gdjs.In_32GameCode.GDBlueLaserObjects1.length === 0 ) ? 0 :gdjs.In_32GameCode.GDBlueLaserObjects1[0].getOpacity())))), "");
}{for(var i = 0, len = gdjs.In_32GameCode.GDBlueLaserObjects1.length ;i < len;++i) {
    gdjs.In_32GameCode.GDBlueLaserObjects1[i].addForce((gdjs.In_32GameCode.GDBlueLaserObjects1[i].getAngle()), -(500), 1);
}
}{for(var i = 0, len = gdjs.In_32GameCode.GDBlueLaserObjects1.length ;i < len;++i) {
    gdjs.In_32GameCode.GDBlueLaserObjects1[i].setZOrder(-(1));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BlueLaser"), gdjs.In_32GameCode.GDBlueLaserObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.In_32GameCode.GDenemyObjects1);

gdjs.In_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.In_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.In_32GameCode.mapOfGDgdjs_46In_9532GameCode_46GDBlueLaserObjects1Objects, gdjs.In_32GameCode.mapOfGDgdjs_46In_9532GameCode_46GDenemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.In_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.In_32GameCode.GDBlueLaserObjects1 */
/* Reuse gdjs.In_32GameCode.GDenemyObjects1 */
{for(var i = 0, len = gdjs.In_32GameCode.GDBlueLaserObjects1.length ;i < len;++i) {
    gdjs.In_32GameCode.GDBlueLaserObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.In_32GameCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.In_32GameCode.GDenemyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


gdjs.In_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.In_32GameCode.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "enemy") <= 0.5);
}if (gdjs.In_32GameCode.condition0IsTrue_0.val) {
gdjs.In_32GameCode.GDenemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.In_32GameCode.mapOfGDgdjs_46In_9532GameCode_46GDenemyObjects1Objects, gdjs.randomInRange(0, 1440), -(100), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemy");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.In_32GameCode.GDenemyObjects1);
{for(var i = 0, len = gdjs.In_32GameCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.In_32GameCode.GDenemyObjects1[i].addPolarForce(100, 320, 0);
}
}}

}


};

gdjs.In_32GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.In_32GameCode.GDGreenShipObjects1.length = 0;
gdjs.In_32GameCode.GDGreenShipObjects2.length = 0;
gdjs.In_32GameCode.GDBlueLaserObjects1.length = 0;
gdjs.In_32GameCode.GDBlueLaserObjects2.length = 0;
gdjs.In_32GameCode.GDenemyObjects1.length = 0;
gdjs.In_32GameCode.GDenemyObjects2.length = 0;

gdjs.In_32GameCode.eventsList0(runtimeScene);

return;

}

gdjs['In_32GameCode'] = gdjs.In_32GameCode;
