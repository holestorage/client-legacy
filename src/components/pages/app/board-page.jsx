import Container from "../../ui/container/container";
import BucketList from "../../ui/list/bucket/bucket-list";
import {HoleApi} from "../../../App";
import {useAxios} from "use-axios-client";

export default function BoardPage() {
    const {data, error, loading} = useAxios({
        axiosInstance: HoleApi,
        url: 'bucket'
    });

    return (
        <>
            {loading && <p>Loading</p>}
            {error && console.log(error)}
            {data && <Container><BucketList list={data.list}/></Container>}
        </>
    )
}
