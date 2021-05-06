import React from "react";//React前端框架
import { observer } from "mobx-react";

// import Carstatue from "components/Remote5G/Carstatue";
import CurrentblockStatusDisplay from "components/Remote5G/CurrentblockStatusDisplay";
import Patternstatue from "components/Remote5G/Patternstatue";
import Carstatue from "components/Remote5G/Carstatue";
{/* <Carstatue /> */}
//drivingMode={meters.drivingMode}
@observer
export default class Remote5G extends React.Component {
    render() {
        const { meters } = this.props;
        return (
            <div className="Remote5G">
                <Patternstatue drivingMode={meters.drivingMode} />
                <CurrentblockStatusDisplay gearLocation={meters.gearLocation} />
                <Carstatue meterPerSecond={meters.speed}
                steeringAngle={meters.steeringAngle}
                throttlePercent={meters.throttlePercent}
                brakePercent={meters.brakePercent}
                steeringPercentage={meters.steeringPercentage}
                speedAcceleration={meters.speedAcceleration}
                />
            </div>
        );
    }
 }
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
// export default class Remote5G extends React.Component {
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
