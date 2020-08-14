import { useRouter } from "next/router";

export default function hotelDetails ()  {

    const router = useRouter();
    console.log(router.query);
    return(
        <h1>Hotel Details</h1>
    )
}