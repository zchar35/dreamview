import { observable, computed, action, runInAction } from "mobx";

function roundToTens(percent) {
    return Math.round(percent / 10.0) * 10;
}

function toDrivingMode(disengageType) {
    switch (disengageType) {
        case "DISENGAGE_MANUAL":// 停止模式 手工
            return "MANUAL";
        case "DISENGAGE_NONE"://自动模式
            return "AUTO";
        case "DISENGAGE_EMERGENCY"://紧急模式
            return "DISENGAGED";
        case "DISENGAGE_AUTO_STEER_ONLY"://仅停用自动转向
            return "AUTO STEER";
        case "DISENGAGE_AUTO_SPEED_ONLY"://自动速度
            return "AUTO SPEED";
        case "DISENGAGE_CHASSIS_ERROR"://底盘错误
            return "CHASSIS ERROR";
        default:
            return "?";
    }
}
function toDrivingModegear(disengageTypegear) {
    switch (disengageTypegear) {
        case "GEAR_NEUTRAL"://空挡
            return "GEAR_NEUTRAL";
        case "GEAR_DRIVE"://前进
            return "GEAR_DRIVE";
        case "GEAR_REVERSE"://后退
            return "GEAR_REVERSE";
        case "GEAR_PARKING"://驻车
            return "GEAR_PARKING";
        default:
            return "?";
    }
}
function isAutoMode(disengageType) {
    return disengageType === "DISENGAGE_NONE" ||//自动模式
           disengageType === "DISENGAGE_AUTO_STEER_ONLY" ||
           disengageType === "DISENGAGE_AUTO_SPEED_ONLY";
}

function meterPerSecondToKmPerHour(speed) {
    return Math.round(speed * 3600 / 1000.0);
}

export default class Meters {
    @observable throttlePercent = 0;//油门百分比
    @observable brakePercent = 0;//刹车百分比
    @observable speed = 0;//车速
    @observable steeringAngle = 0;//转向角
    @observable steeringPercentage = 0;//转向百分比
    @observable drivingMode = "?";//驾驶模式 5种，手动、全自动驾驶、
    @observable isAutoMode = false;
    @observable turnSignal = "";//左右转向标志
    @observable speedAcceleration;//加速度
    @observable gearLocation ="?"//暂定四种
    @action update(world) {
        if (world.autoDrivingCar) {
            if (world.autoDrivingCar.throttlePercentage !== undefined) {
                this.throttlePercent = roundToTens(world.autoDrivingCar.throttlePercentage);
            }
            if (world.autoDrivingCar.brakePercentage !== undefined) {
                this.brakePercent = roundToTens(world.autoDrivingCar.brakePercentage);
            }
            if (world.autoDrivingCar.speed !== undefined) {
                // Convert the unit from m/s to mph.
                this.speed = world.autoDrivingCar.speed;
            }

            if (world.autoDrivingCar.steeringPercentage !== undefined &&
                !isNaN(world.autoDrivingCar.steeringPercentage)) {
                this.steeringPercentage = Math.round(world.autoDrivingCar.steeringPercentage);
            }

            if (world.autoDrivingCar.steeringAngle !== undefined &&
                !isNaN(world.autoDrivingCar.steeringAngle)) {
                this.steeringAngle = -Math.round(
                    world.autoDrivingCar.steeringAngle * 180.0 / Math.PI);
            }

            if (world.autoDrivingCar.disengageType !== undefined) {
                this.drivingMode = toDrivingMode(world.autoDrivingCar.disengageType);
                this.isAutoMode = isAutoMode(world.autoDrivingCar.disengageType);
            }
            if (world.autoDrivingCar.disengageTypegear !== undefined) {//11111111111111111
                this.gearLocation = toDrivingModegear(world.autoDrivingCar.disengageTypegear);
            }
            if (world.autoDrivingCar.currentSignal !== undefined) {
                this.turnSignal = world.autoDrivingCar.currentSignal;
            }
            if (world.autoDrivingCar.speedAcceleration !== undefined) {
                this.speedAcceleration = world.autoDrivingCar.speedAcceleration;
            }
        }
    }
}
