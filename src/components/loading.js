import loadGif from "../assets/animated/hourglass.png"

const Loading =() => {
    return (<div className={"loading"}>
        <img src={loadGif}/>
        <p>Loading...</p>
    </div>)
}

export default Loading;