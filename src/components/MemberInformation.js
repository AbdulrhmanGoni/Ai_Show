import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { teamMembers } from "../Ai_Show_Data";


export const memberInfo = createContext(teamMembers);

const MemberInformation = (props) => {

    const [membersdata, setMembersdata] = useState();

    useEffect(() => {
        // getMemberInformation();
    }, []);

    return (
        <memberInfo.Provider value={membersdata}>
            {props.children}
        </memberInfo.Provider>
    )
}

export default MemberInformation;