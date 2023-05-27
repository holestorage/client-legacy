import style from "./main-category.module.css";

export default function MainCategory({ list }) {
    return (
        <div className={style.container}>
            {
                list.map((section, key) =>
                    <div key={key}>
                        {
                            section.list.map((value, key) =>
                                <div className={style.element} key={key}>
                                    <i className={value.icon} />
                                    <p>{value.name}</p>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
