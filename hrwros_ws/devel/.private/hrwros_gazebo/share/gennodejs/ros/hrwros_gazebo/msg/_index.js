
"use strict";

let TrayContents = require('./TrayContents.js');
let PopulationState = require('./PopulationState.js');
let StorageUnit = require('./StorageUnit.js');
let ConveyorBeltState = require('./ConveyorBeltState.js');
let VacuumGripperState = require('./VacuumGripperState.js');
let Model = require('./Model.js');
let KitObject = require('./KitObject.js');
let KitTray = require('./KitTray.js');
let Proximity = require('./Proximity.js');
let Kit = require('./Kit.js');
let DetectedObject = require('./DetectedObject.js');
let Order = require('./Order.js');
let LogicalCameraImage = require('./LogicalCameraImage.js');

module.exports = {
  TrayContents: TrayContents,
  PopulationState: PopulationState,
  StorageUnit: StorageUnit,
  ConveyorBeltState: ConveyorBeltState,
  VacuumGripperState: VacuumGripperState,
  Model: Model,
  KitObject: KitObject,
  KitTray: KitTray,
  Proximity: Proximity,
  Kit: Kit,
  DetectedObject: DetectedObject,
  Order: Order,
  LogicalCameraImage: LogicalCameraImage,
};
