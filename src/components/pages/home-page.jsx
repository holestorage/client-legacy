import PageContainer from "../ui/container/page/page-container";
import BannerBox from "../ui/box/banner/banner-box";

export default function HomePage() {
    return (
        <PageContainer>
            <BannerBox>
                <h1>Encrypt. Protect. Control.</h1>
                <h3>Your files encrypted with a passkey stored only on your device for ultimate security and privacy.
                    Access and control your data like never before.</h3>
            </BannerBox>
        </PageContainer>
    )
}
