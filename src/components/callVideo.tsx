import React, { useState } from 'react';
import createGuid from '../actions/createGuid';
const CallVideo = () => {
    // const [displayName, setDisplayName] = useState('')
    // const [roomName, setRoomName] = useState('')
    // const [password, setPassword] = useState('')
    // const [jitsi, setJitsi] = React.useState({});
    // const [onCall, setOnCall] = useState(false)
    // const domain = 'https://meet.hyperlogy.com/';
    // const initialiseJitsi = async () => {
    //     const _jitsi = new window.JitsiMeetExternalAPI("meet.hyperlogy.com", {
    //         parentNode: document.getElementById('meet')
    //     });

    //     setJitsi(_jitsi);
    // };
    // React.useEffect(() => {
    //     initialiseJitsi();
    // }, []);
    // return onCall
    //     ? (<>
    //         <div id={"meet"} style={{ height: 720, width: "100%" }} />
    //         {/* <Jitsi
    //             roomName={roomName}
    //             displayName={displayName}
    //             domain={domain}/> */}
    //     </>)
    //     : (
    //         <>
    //             <div id={"meet"} style={{ height: 720, width: "100%" }} />
    //             <h1>Tạo phòng</h1>
    //             <input type='text' placeholder='Tên phòng' value={roomName} onChange={e => setRoomName(e.target.value)} />
    //             <input type='text' placeholder='Tên của bạn' value={displayName} onChange={e => setDisplayName(e.target.value)} />
    //             <button onClick={() => {
    //                 if (roomName && displayName)
    //                     setOnCall(true)
    //             }}> Tạo</button>
    //         </>
    //     )
    return (<div id={"meet"} style={{ height: 720, width: "100%" }} />);
}
export default CallVideo;
