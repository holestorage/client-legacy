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
                <MainButton text="Get started"/>
            </FullBannerBox>
            <PageContainer>
                <BannerBox>
                    <h2>Encrypt. Protect. Control.</h2>
                    <h3>Your files encrypted with a passkey stored only on your device for ultimate security and
                        privacy.
                        Access and control your data like never before.</h3>
                </BannerBox>
                <InlineBoxGrid>
                    <MainBox>
                        <h3>A passkey is a 256-bit password that is stored locally on your devices and can also be
                            synchronized
                            with your Google or iCloud account.</h3>
                    </MainBox>
                    <MainBox>
                        <h3>Your files are encrypted with the access key, which is encrypted with your passkey, so no
                            one can
                            access them without that key.</h3>
                    </MainBox>
                    <MainBox>
                        <h3>Neither attackers, nor governments, nor even ourselves will be able to access your files.
                            Nobody.
                            What's yours is only yours.</h3>
                    </MainBox>
                </InlineBoxGrid>
            </PageContainer>
            <PageContainer>
                <InlineBoxGrid>
                    <BannerBox>
                        <h2>Unleash the speed of distributed storage.</h2>
                        <h3>Files are fragmented into small fractions and stored and distributed with redundancy among
                            hundreds of servers around the world.</h3>
                    </BannerBox>
                    <BlockBoxGrid>
                        <MainBox>
                            <h3>Durability</h3>
                            <h3>Infinitely reduce the risk of data loss compared to any other alternative, as files are
                                replicated multiple times in different parts of the world.</h3>
                        </MainBox>
                        <MainBox>
                            <h3>Speed</h3>
                            <h3>File access is always performed through the node closest to the user, allowing
                                infinitely faster access to files from anywhere in the world.</h3>
                        </MainBox>
                        <MainBox>
                            <h3>Replication</h3>
                            <h3>In the event that a node loses the stored files, they are instantly replicated again to
                                ensure a minimum number of replicas.</h3>
                        </MainBox>
                    </BlockBoxGrid>
                </InlineBoxGrid>
            </PageContainer>
            <PageContainer>
                <InlineBoxGrid>
                    <InlineBoxGrid>
                        <BannerBox>
                            <h2>The power is yours.</h2>
                            <h3>Unlock all potential and play with your files.</h3>
                        </BannerBox>
                        <MainBox>
                            <h3>Your files, secure and accessible anywhere.</h3>
                            <h3>Avoid troubles with your hard drives and secure your belongings in data centers
                                monitored day and night. Access them from anywhere with a touch, thanks to the passkey
                                system.</h3>
                        </MainBox>
                        <MainBox>
                            <h3>Share encrypted files.</h3>
                            <h3>When sharing files with other users, they will be encrypted with their public keys, and
                                only they, with their private key, will be able to unlock them, preventing anyone from
                                intercepting the process.
                            </h3>
                        </MainBox>
                        <MainBox>
                            <h3>Send and share with the world.</h3>
                            <h3>You can generate links for your files to share or use them, and we will keep an
                                unencrypted copy for that purpose. If you assign an expiration period or manually expire
                                them, we will destroy the unencrypted copy.</h3>
                        </MainBox>
                    </InlineBoxGrid>
                </InlineBoxGrid>
            </PageContainer>
            <PageContainer>
                <InlineBoxGrid>
                    <BannerBox>
                        <h2>Share</h2>
                        <h3>Share files in the simplest and most secure way you've ever seen.</h3>
                    </BannerBox>
                    <BlockBoxGrid>
                        <MainBox>
                            <h3>Password encryption</h3>
                            <h3>Add an extra layer of security by encrypting the files with a password, and you can even
                                add a hint that only you and the recipient know.</h3>
                        </MainBox>
                        <MainBox>
                            <h3>Set your rules</h3>
                            <h3>You can specify that only one person can download the file, and once downloaded, the
                                transfer will be completely destroyed from our servers.
                            </h3>
                        </MainBox>
                        <MainBox>
                            <h3>No limits</h3>
                            <h3>Make as many transfers of up to 2GB of content as you want. No limits, no registration,
                                no ads, no spies.</h3>
                        </MainBox>
                    </BlockBoxGrid>
                </InlineBoxGrid>
            </PageContainer>
            <PageContainer>
                <BannerBox>
                    <h2>Get started.</h2>
                    <h3>Create an account with just one click, completely free - no, really, give it a try, it's magical.</h3>
                    <MainButton text="Get started"/>
                </BannerBox>
            </PageContainer>
        </Fragment>
    )
}
