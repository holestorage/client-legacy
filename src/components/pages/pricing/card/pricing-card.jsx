import style from "./pricing-card.module.css";

import MainCard from "../../../ui/card/main/main-card";

export default function PricingCard({ name, price, size }) {
    return (
        <MainCard>
            <div className={style.container}>
                <p>{name}</p>
                <h2>{size}GB</h2>
                <h3>{price} €/mes</h3>
            </div>
        </MainCard>
    )
}
