
const Timer = ({time, setter}) => {
    let seconds = time+1
    function RenderTime(seconds){
        if (seconds>=60) {
            const mins = Math.floor(seconds/60)
            const s = seconds-(mins*60) 
            return(<p>{mins}min, {s}s</p>)
        }
        else  {
            return (<p>{seconds}s</p>)
        }
    }
    setTimeout(
        () => setter(seconds),
        1000
    )
    return(RenderTime(seconds))
}

export default Timer