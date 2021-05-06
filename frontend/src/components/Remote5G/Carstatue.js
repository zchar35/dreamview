import React from "react";
import { inject, observer } from "mobx-react";
import classNames from "classnames";//新
import STORE from "store";

import CheckboxItem from "components/common/CheckboxItem";
import WS from "store/websocket";

@observer
export default class Carstatue extends React.Component {
    constructor(props) {
        super(props);
        this.handleCancel1 = this.handleCancel1.bind(this);
        this.handleCancel2 = this.handleCancel2.bind(this);
    }
    handleCancel1() {
        Options.BatchAddToBasket();
    }
    handleCancel2() {
        Options.SelectAll(this);
    }

    render() {
        // const { options, enableHMIButtonsOnly } = this.props.store;
        // const { meters, trafficSignal, showNotification, monitor } = this.props;
        const { meterPerSecond,steeringAngle,
                throttlePercent,brakePercent,
                steeringPercentage,speedAcceleration} = this.props;
        // const { meters, warning, options, enableHMIButtonsOnly } = this.props;
         const read = Math.round(meterPerSecond);//speech取整
         const read1 = Math.round(speedAcceleration);//speech取整
        return (
            <div className="Carstatue">
                <div className="card-header"><span>小车状态信息</span></div>
                <div className="card-content-column">
                    <div className="delay-item">
                        <div className="name">速度(m/s)</div>
                        <div className="value">
                            {read}
                        </div>
                    </div>
                    <div className="delay-item">
                        <div className="name">转向角(°)</div>
                        <div className="value">
                            {steeringAngle}
                        </div>
                    </div>
                    <div className="delay-item">
                        <div className="name">油门百分比(%)</div>
                        <div className="value">
                            {throttlePercent}
                        </div>
                    </div>
                    <div className="delay-item">
                        <div className="name">刹车百分比(%)</div>
                        <div className="value">
                            {brakePercent}
                        </div>
                    </div>
                    <div className="delay-item">
                        <div className="name">转向百分比(%)</div>
                        <div className="value">
                            {steeringPercentage}
                        </div>
                    </div>
                    <div className="delay-item">
                        <div className="name">加速度(m/s^2)</div>
                        <div className="value">
                            {read1}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
{/* <div className="danwei1">m/s</div> */}
{/* <button onClick={this.BatchAddToBasket}>测试</button>
<input type="checkbox" name="checkboxAll" onclick={this.SelectAll}></input>
<input type="checkbox" name="question" id="0"></input>
<input type="checkbox" name="question" id="1"></input>
<input type="checkbox" name="question" id="2"></input> */}
// import React from "react";//React前端框架
// import { observer } from "mobx-react";
// import classNames from "classnames";

// import RadioItem from 'components/common/RadioItem';

// import menuData5G from 'store/config/MenuData5G';
// import menuData5G2 from 'store/config/MenuData5G2';
// import perceptionIcon from "assets/images/menu/perception.png";
// import predictionIcon from "assets/images/menu/prediction.png";
// import routingIcon from "assets/images/menu/routing.png";
// import decisionIcon from "assets/images/menu/decision.png";
// import planningIcon from "assets/images/menu/planning.png";
// import cameraIcon from "assets/images/menu/point_of_view.png";
// import positionIcon from "assets/images/menu/position.png";
// import mapIcon from "assets/images/menu/map.png";

// import { POINT_CLOUD_WS } from "store/websocket";

// const MenuIconMapping = {
//         perceptiona: perceptionIcon,
//         cameraa: cameraIcon
// };

// @observer
// class SubMenu5G extends React.Component {
//     render() {
//         const {tabId, tabTitle, tabType, data, options} = this.props;
//         let entries = null;
//         if (tabType === 'radio') {//是否那种类型的按钮
//             entries = Object.keys(data)
//                 .map(key => {
//                     const item = data[key];
//                     if (options.hideOptionToggle[key]) {
//                         return null;
//                     }
//                     return (
//                         <RadioItem key={`${tabId}_${key}`} id={tabId}
//                                    onClick={() => {
//                                             options.selectCamera(item);
//                                    }}
//                                    checked={options.cameraAngle === item}
//                                    title={item} options={options}/>
//                     );
//                 });
//         }
//         const result = (//Layer Menu的第一栏 tabId先不管
//             <div className="card">
//                 <div className="card-header summary">
//                     <span>
//                         <img src={MenuIconMapping[tabId]}/>
//                         {tabTitle}
//                     </span>
//                 </div>
//                 <div className="card-content-column">{entries}</div>
//             </div>
//         );
//         return result;
//     }
// }

// @observer
// export default class Carstatue extends React.Component {
//     render() {
//         const { options } = this.props;//options这玩意有鬼

//         const subMenu5G = Object.keys(menuData5G)//导入menuData5G.js的数据
//             .map(key => {
//                 const item = menuData5G[key];//import menuData5G from 'store/config/MenuData';

//                 if (OFFLINE_PLAYBACK && !item.supportInOfflineView) {//离线要打开按钮
//                     return null;
//                 } else {
//                     return (
//                         <SubMenu5G key={item.id} tabId={item.id} tabTitle={item.title}
//                                  tabType={item.type} data={item.data} options={options} />
//                     );
//                 }
//             });
//         const subMenu5G2 = Object.keys(menuData5G2)//导入menuData5G.js的数据
//             .map(key => {
//                 const item = menuData5G2[key];//import menuData5G from 'store/config/MenuData';

//                 if (OFFLINE_PLAYBACK && !item.supportInOfflineView) {//离线要打开按钮
//                     return null;
//                 } else {
//                     return (
//                         <SubMenu5G key={item.id} tabId={item.id} tabTitle={item.title}
//                                  tabType={item.type} data={item.data} options={options} />
//                     );
//                 }
//             });
//         return (
//             <div className="Remote-5G" id="menu">
//                 {subMenu5G}
//                 {subMenu5G2}
//             </div>
//         );
//     }
// }