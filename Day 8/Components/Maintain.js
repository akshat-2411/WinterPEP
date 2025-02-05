import { useState } from 'react';
function Maintain() {
    const [name, setName] = useState("LPU Punjab")
    return (
        <>
            <p>My name is {name}</p>
            <button onClick = {() => setName("Lovely")}>Update State</button>
        </>
    );
}
export default Maintain