export const BasicEvents = () => {
    function handleEvent(event) {
        console.log(event.target)
        console.log(event.type)
    }
    function handleEvent(user){
        console.log(user)
    }
    return(
        <>
            <button onClick = {handleEvent}>Click Here</button>
            <button onClick = {(event)=>handleEvent(event)}>Click Here</button>
        </>
    )
}