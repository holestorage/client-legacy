import {Fragment} from "react";

import PageContainer from "../ui/container/page/page-container";
import BannerBox from "../ui/box/banner/banner-box";
import MainBox from "../ui/box/main/main-box";
import MainButton from "../ui/button/main/main-button";
import InlineBoxGrid from "../ui/box/grid/inline/inline-box-grid";
import BlockBoxGrid from "../ui/box/grid/box/block-box-grid";
import FullBannerBox from "../ui/box/banner/full/full-banner-box";

export default function HomePage() {
    return (
        <Fragment>
            <FullBannerBox>
                <h1>Encrypt. Protect. Control.</h1>
                <h3>Your files encrypted with a passkey stored only on your device for ultimate security and privacy.
                    Access and control your data like never before.</h3>
                <MainButton text="Get started" />
            </FullBannerBox>
            <PageContainer>
                <BannerBox>
                    <h2>Encrypt. Protect. Control.</h2>
                    <h3>Your files encrypted with a passkey stored only on your device for ultimate security and privacy.
                        Access and control your data like never before.</h3>
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
            <PageContainer>
                <InlineBoxGrid>
                    <BannerBox>
                        <h2>Unleash the Speed of Distributed Storage.</h2>
                        <h3>Files are fragmented into small fractions and stored and distributed with redundancy among hundreds of servers around the world.</h3>
                    </BannerBox>
                    <BlockBoxGrid>
                        <MainBox>
                            <h3>Durability</h3>
                            <h3>Infinitely reduce the risk of data loss compared to any other alternative, as files are replicated multiple times in different parts of the world.</h3>
                        </MainBox>
                        <MainBox>
                            <h3>Speed</h3>
                            <h3>File access is always performed through the node closest to the user, allowing infinitely faster access to files from anywhere in the world.</h3>
                        </MainBox>
                        <MainBox>
                            <h3>Replication</h3>
                            <h3>In the event that a node loses the stored files, they are instantly replicated again to ensure a minimum number of replicas.</h3>
                        </MainBox>
                    </BlockBoxGrid>
                </InlineBoxGrid>
            </PageContainer>
        </Fragment>
    )
}
