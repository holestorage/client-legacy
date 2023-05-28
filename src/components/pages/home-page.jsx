import PageContainer from "../ui/container/page/page-container";
import BannerBox from "../ui/box/banner/banner-box";
import MainBox from "../ui/box/main/main-box";

export default function HomePage() {
    return (
        <PageContainer>
            <BannerBox>
                <h1>Encrypt. Protect. Control.</h1>
                <h3>Your files encrypted with a passkey stored only on your device for ultimate security and privacy.
                    Access and control your data like never before.</h3>
            </BannerBox>
            <MainBox>
                <p>A passkey is a 256-bit password that is stored locally on your devices and can also be synchronized
                    with your Google or iCloud account.</p>
            </MainBox>
            <MainBox>
                <p>Your files are encrypted with the access key, which is encrypted with your passkey, so no one can
                    access them without that key.</p>
            </MainBox>
            <MainBox>
                <p>Neither attackers, nor governments, nor even ourselves will be able to access your files. Nobody.
                    What's yours is only yours.</p>
            </MainBox>
        </PageContainer>
    )
}
