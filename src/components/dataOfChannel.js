import { createContext, useEffect, useState } from "react";

export const basicDataOfChannel = createContext("");

const DataOfChannel = (props) => {

    const [dataOfChannel, setDataOfChannel] = useState(basicDataOfChannel);

    const apiKey = 'AIzaSyA_nZ30x1kOjflxf89cp37Mcy3P9D1ZX-Y';
    const channelId = 'UCYwpozNeo2tcmb0sZVb1X-A';

    const fetchChannelData = (channelId, apiKey) => {
        fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                setDataOfChannel(data.items[0]);
            });
    }

    useEffect(() => {
        fetchChannelData(channelId, apiKey);
    },[])

    return (
        <basicDataOfChannel.Provider value={dataOfChannel}>
            {props.children}
        </basicDataOfChannel.Provider>
    )
}


export default DataOfChannel