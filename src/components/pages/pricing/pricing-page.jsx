import {Fragment} from "react";

import PageContainer from "../../ui/container/page/page-container";
import MainButton from "../../ui/button/main/main-button";
import FullBannerBox from "../../ui/box/banner/full/full-banner-box";
import CardList from "../../ui/card/list/card-list";
import PricingCard from "./card/pricing-card";

const plans = [
    {
        name: 'Basic',
        price: '1.99',
        size: '80'
    },
    {
        name: 'Premium',
        price: '3.99',
        size: '250'
    },
    {
        name: 'Premium',
        price: '4.99',
        size: '500'
    },
    {
        name: 'Advanced',
        price: '6.99',
        size: '1000'
    },
    {
        name: 'Advanced',
        price: '10.99',
        size: '2000'
    }
]

export default function PricingPage() {
    return (
        <Fragment>
            <FullBannerBox>
                <h1>Cheaper. Privater. Make the change.</h1>
                <MainButton text="Get started"/>
            </FullBannerBox>
            <PageContainer>
                <CardList>
                    {
                        plans.map((value, key) =>
                            <Fragment key={key}>
                                <PricingCard {...value} />
                            </Fragment>
                        )
                    }
                </CardList>
            </PageContainer>
        </Fragment>
    )
}
