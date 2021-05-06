import React from "react";
import { inject, observer } from "mobx-react";

@inject("store") @observer
export default class Patternstatue extends React.Component {
    render() {
        // const { options, enableHMIButtonsOnly } = this.props.store;
        // const disablePanel = enableHMIButtonsOnly || options.tasksPanelLocked;
         const { drivingMode } = this.props;
        //  $("#stop_mode").prop("checked",true);
        //  $('#Manual_mode').removeAttr("checked");
        // if(drivingMode==="MANUAL"){
        // document.getElementById("stop_mode").checked=true;//会出问题！！！！！！！！
        // }else if(drivingMode==="AUTO")
        // {
        //     document.getElementById("Manual_mode").checked=true;
        // }else if(drivingMode==="AUTO_STEER")
        // {
        //     document.getElementById("Emergency_driving_mode").checked=true;
        // }else if(drivingMode==="AUTO_SPEED")
        // {
        //     document.getElementById("Remote_driving_mode").checked=true;
        // }else{
        //     document.getElementById("Autopilot_mode").checked=true;//底盘错误
        // }
        // alert(drivingMode);//可以发
        return (
            <div className="card">
                <div className="card-header summary"><span>当前模式</span></div>
                <div className="card-content-column">
                    <ul>
                        <li>
                            <input type="radio" name="Patternstatue"
                                checked={drivingMode === "MANUAL"} id="stop_mode" />
                            <label className="radio-selector-label" />
                            <span>stop_mode</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="radio" name="Patternstatue"
                                checked={drivingMode === "AUTO"} id="Manual_mode" />
                            <label className="radio-selector-label" />
                            <span>Manual_mode</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="radio" name="Patternstatue"
                                checked={drivingMode === "AUTO_STEER"}
                                 id="Emergency_driving_mode"  />
                            <label className="radio-selector-label" />
                            <span>Emergency_driving_mode</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="radio" name="Patternstatue"
                                checked={drivingMode === "AUTO_SPEED"} id="Remote_driving_mode" />
                            <label className="radio-selector-label" />
                            <span>Remote_driving_mode</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="radio" name="Patternstatue"
                                checked={drivingMode === "CHASSIS_ERROR"} id="Autopilot_mode" />
                            <label className="radio-selector-label" />
                            <span>Autopilot_mode</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
