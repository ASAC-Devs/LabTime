import UserVideoComponent from "./UserVideoComponent";

export default function Room(probs) {

    return (
        <>
            <button onClick={probs.leaveSession}>Leave</button>
            <h1 id="session-title">{probs.roomName}</h1>
            {probs.publisher ? (
                <UserVideoComponent
                    streamManager={probs.publisher} />
            ) : null}
            <h1>probs.subscribers: {probs.subscribers.length}</h1>
            {probs.subscribers.map((sub, i) => (
                <div key={i} >
                    <h2>{sub}</h2>
                    <UserVideoComponent streamManager={sub} />
                </div>
            ))}
        </>
    )
}
