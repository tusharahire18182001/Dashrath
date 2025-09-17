
import Recat, { useState, useEffect } from "react"

function Complain() {

    const [count, setCount] = useState(0);

    const getadd = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        const Getdata = async () => {

            try {
                const payload = {
                    "id": 990
                }
                const header = {
                    "Content-type": "appliaction/json"
                }
                const response = await fetch("http://nncdck/sdn.com", {
                    method: "POST",
                    headers: header,
                    body: JSON.stringify(payload),
                });

                const data = await response.json();
                console.log("data", data);
            }
            catch {
                console.log("error while fetching data")
            }
        }

        Getdata();
    }, []);


    // const handlesubmitpaylaod = () => {

    // }

    return (
        <>
            <div>
                Hi i am the Complain Componant
            </div>
            <div>
                <button onClick={getadd}>Click to Update{count}</button>
            </div>

            <div>

            </div>
        </>
    )
} export default Complain;