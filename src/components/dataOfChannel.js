import { createContext, useEffect, useState } from "react";

export const basicDataOfChannel = createContext("");

const apiKey = process.env.REACT_APP_API_KEY;
const channelId = process.env.REACT_APP_CHANNELID;

const DataOfChannel = (props) => {

    const [dataOfChannel, setDataOfChannel] = useState(basicDataOfChannel);

    const fetchChannelData = (channelId, apiKey) => {
        fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                setDataOfChannel(data.items[0]);
            });
    }

    useEffect(() => {
        fetchChannelData(channelId, apiKey);
    }, [])

    return (
        <basicDataOfChannel.Provider value={dataOfChannel}>
            {props.children}
        </basicDataOfChannel.Provider>
    )
}


export default DataOfChannel