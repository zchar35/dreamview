import React from "react";
import { observer, inject } from "mobx-react";
import classNames from "classnames";

import RENDERER from "renderer";
import STORE from "store";
import GifSrc from "assets/images/Gifvehicle.gif";
@inject("store") @observer
export default class Gifvehicle extends React.Component {
    render() {
        const { height, extraClasses } = this.props;
        const imgSrc = GifSrc ;

        return (
            <div className="loader"style={{height: height}}>
                <div className={classNames("img-container", extraClasses)}>
                    <img src={imgSrc}/>
                </div>
            </div>
        );
    }
}