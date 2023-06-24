import Container from "../../ui/container/container";
import BucketList from "../../ui/list/bucket/bucket-list";
import {HoleApi} from "../../../App";
import {useEffect, useState} from "react";

export default function BoardPage() {
    const [data, setData] = useState(null);

    const fetchBucket = () => {
        HoleApi.get(`bucket`).then(response => setData(response.data));
    }

    useEffect(() => fetchBucket(), []);

    if (data) {
        return (
            <Container>
                <BucketList list={data.list} />
            </Container>
        )
    }
}
