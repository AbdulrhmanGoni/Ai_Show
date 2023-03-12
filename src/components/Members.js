import "./css/Members.css";
import TitleSection from "./TitleSection";
import MembersSlider from "./MembersSlider";
import { PersonalCard } from "./cards";
import { useSelector } from "react-redux";
import { useState } from "react";

// import { addMember } from "../data_center/membersData-slice";

function Members() {

    const membersList = useSelector(state => state.theMembers);
    const channel = useSelector(state => state.theChannel);
    const [currentlyVisibleMember, setCurrentMember] = useState(null);
    const showFullData = (fullData) => {
        setCurrentMember(fullData);
        document.getElementById("members").scrollIntoView();
    }

    const close_slider = () => {
        setCurrentMember(null);
    }

    const members = membersList.map((member, i) => {
        return (
            <PersonalCard
                key={i}
                fullData={member}
                showFullData={showFullData}
                firstName={member.name.firstName}
                lastName={member.name.lastName}
                title={member.position}
                image={member.images[0]}
                logo={channel !== null? channel.snippet.thumbnails.high.url : null}
                twitter={member.socialMedia.twitter}
                instagram={member.socialMedia.instagram}
                snapchat={member.socialMedia.snapchat}
                tiktok={member.socialMedia.tiktok}
            />
        )
    })

    return (
        <div id="members">
            <TitleSection title="Ai Show Members" brief="Brief about Ai Show Team Members"/>
            {
                currentlyVisibleMember !== null ? 
                <MembersSlider id="MembersSlider" theMember={currentlyVisibleMember} showFullData={showFullData} close={close_slider} /> 
                :
                <div className="members container">
                    {members}
                </div>
                }
        </div>
    )
}





export default Members;
