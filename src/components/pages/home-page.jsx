import {Fragment} from "react";

import PageContainer from "../ui/container/page/page-container";
import BannerBox from "../ui/box/banner/banner-box";
import MainBox from "../ui/box/main/main-box";
import InlineBoxGrid from "../ui/box/grid/inline-box-grid";
import MainButton from "../ui/button/main/main-button";

export default function HomePage() {
    return (
        <Fragment>
            <PageContainer>
                <BannerBox>
                    <h1>Encrypt. Protect. Control.</h1>
                    <h3>Your files encrypted with a passkey stored only on your device for ultimate security and privacy.
                        Access and control your data like never before.</h3>
                    <MainButton text="Get started" />
                </BannerBox>
                <InlineBoxGrid>
                    <MainBox>
                        <h3>A passkey is a 256-bit password that is stored locally on your devices and can also be synchronized
                            with your Google or iCloud account.</h3>
                    </MainBox>
                    <MainBox>
                        <h3>Your files are encrypted with the access key, which is encrypted with your passkey, so no one can
                            access them without that key.</h3>
                    </MainBox>
                    <MainBox>
                        <h3>Neither attackers, nor governments, nor even ourselves will be able to access your files. Nobody.
                            What's yours is only yours.</h3>
                    </MainBox>
                </InlineBoxGrid>
            </PageContainer>
        </Fragment>
    )
}
