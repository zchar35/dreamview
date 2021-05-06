import React from "react";

import Image from "components/common/Image";
import logoJmcAuto from "assets/images/logo_jmc_auto.png";
import HMIControls from "components/Header/HMIControls";

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Image image={logoJmcAuto} className="jmc_auto-logo" />
                {!OFFLINE_PLAYBACK && <HMIControls />}
            </header>
        );
    }
}
