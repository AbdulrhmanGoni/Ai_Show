import { createContext, useState, useEffect } from "react";
import axios from "axios";

const membersImagesProvider = createContext();

//`https://live.staticflickr.com/65535/52718850971_09eb3ab4c8.png`

const TeamMembersImgs = (props) => {
    const [membersImgs, setMembersImgs] = useState();

    const apiKey = 'fb335554e2d8deb44d16e637fb654252';
    const userId = 'kingdhme10';
    
    // const cloud_name = 'da8txs4co';
    // const api_key = '452523747395962';
    // const api_secret = '_rEEe-XMkUVK4I_GnRyQ8-gXUUw';

    const getMembersIMages = () => {
        axios.get('https://api.flickr.com/services/rest', {
            params: {
                method: 'flickr.photos.search',
                api_key: apiKey,
                user_id: userId,
                format: 'json',
                nojsoncallback: 1,
            },
        })
        .then(response => {
        const photos = response.data.photos.photo;
            console.log(photos)
            const membersImagesUrls = photos.map((photo) => {
                return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.png`
            })
            setMembersImgs(membersImagesUrls)
        })
        .catch(error => console.error(error));
    }

    useEffect(() => { 
        // getMembersIMages();
        return () => {
            
        };
    }, []);

    return (
        <membersImagesProvider.Provider value={membersImgs}>
            {props.children}
        </membersImagesProvider.Provider>
    )
};


export default TeamMembersImgs;
