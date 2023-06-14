import Container from "../../ui/container/container";
import BucketList from "../../ui/list/bucket/bucket-list";
import {HoleApi} from "../../../App";
import {useEffect, useState} from "react";

export default function BoardPage() {
    const [data, setData] = useState(null);

    useEffect(async () => {
        setData(await (await HoleApi.get('bucket', {
        })).data)
    }, []);

    if (data) {
        return (
            <Container>
                <BucketList list={data.list} />
            </Container>
        )
    }
}
