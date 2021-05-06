import React from "react";
import { inject, observer } from "mobx-react";

import CheckboxItem from "components/common/CheckboxItem";
import WS from "store/websocket";

@inject("store") @observer
export default class CurrentblockStatusDisplay extends React.Component {
    render() {
        // const { options, enableHMIButtonsOnly } = this.props.store;
        // const disablePanel = enableHMIButtonsOnly || options.tasksPanelLocked;
         const { gearLocation } = this.props;

        return (
            <div className="card">
                <div className="card-header summary"><span>当前挡位</span></div>
                <div className="card-content-column">
                    <ul>
                        <li>
                            <input type="radio" name="CurrentblockStatusDisplay"
                                checked={gearLocation === "GEAR_NEUTRAL"} id="NEUTRAL" />
                            <label className="radio-selector-label" />
                            <span>空挡</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="radio" name="CurrentblockStatusDisplay"
                                checked={gearLocation === "GEAR_DRIVE"} id="DRIVE" />
                            <label className="radio-selector-label" />
                            <span>前进</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="radio" name="CurrentblockStatusDisplay"
                                checked={gearLocation === "GEAR_REVERSE"}
                                 id="REVERSE"  />
                            <label className="radio-selector-label" />
                            <span>后退</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="radio" name="CurrentblockStatusDisplay"
                                checked={gearLocation === "GEAR_PARKING"} id="PARKING" />
                            <label className="radio-selector-label" />
                            <span>驻车</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input type="radio" name="CurrentblockStatusDisplay"
                                checked={gearLocation === "?"} id="?" />
                            <label className="radio-selector-label" />
                            <span>???</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

// @inject("store") @observer
// export default class CurrentblockStatusDisplay extends React.Component {
//     render() {
//         const { options, enableHMIButtonsOnly } = this.props.store;

//         const disablePanel = enableHMIButtonsOnly || options.tasksPanelLocked;

//         return (
//             <div className="card">
//                 <div className="card-header"><span>2222222</span></div>
//                 <div className="card-content-column">
//                     <CheckboxItem id={"showPNCMonitor"}
//                                   title={"Neutralgear"}
//                                   isChecked={options.showPNCMonitor}
//                                   disabled={disablePanel}
//                                   onClick={() => {
//                                       this.props.store.handleOptionToggle('showPNCMonitor');
//                                   }}/>
//                     <CheckboxItem id={"toggleSimControl"}
//                                   title={"Forward"}
//                                   isChecked={options.simControlEnabled}
//                                   disabled={options.tasksPanelLocked}
//                                   onClick={() => {
//                                       WS.toggleSimControl(!options.simControlEnabled);
//                                       this.props.store.handleOptionToggle('simControlEnabled');
//                                   }}/>
//                     <CheckboxItem id={"showVideo"}
//                                   title={"Backoff"}
//                                   isChecked={options.showVideo}
//                                   disabled={disablePanel}
//                                   onClick={() => {
//                                       this.props.store.handleOptionToggle('showVideo');
//                                   }}/>
//                     <CheckboxItem id={"panelLock"}
//                                   title={"Parking"}
//                                   isChecked={options.tasksPanelLocked}
//                                   disabled={false}
//                                   onClick={() => {
//                                     this.props.store.handleOptionToggle('tasksPanelLocked');
//                                   }}/>
//                 </div>
//             </div>
//         );
//     }
// }