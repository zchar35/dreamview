import React from "react";

import classNames from "classnames";

import RENDERER from "renderer";
import loaderImg from "assets/images/logo_jmc_auto.png";
import loaderGif from "assets/images/loader_jmc_auto.gif";


export default class Loader extends React.Component {
    render() {
        const { height, extraClasses } = this.props;
        const message = OFFLINE_PLAYBACK
                            ? "Loading ...." : "Please send car initial position and map data.";
        const imgSrc = OFFLINE_PLAYBACK ? loaderGif : loaderImg;

        return (
            <div className="loader"style={{height: height}}>
                <div className={classNames("img-container", extraClasses)}>
                    <img src={imgSrc} alt="Loader"/>
                    <div className="status-message">{message}</div>
                </div>
            </div>
        );
    }
}
