import React from "react";
import UserEntryForm from "./UserEntryForm";
import UserEntryTabs from "./UserEntryTabs";

const UserEntryRegister = () =>{
    return(
        <div style={{display:"grid",justifyContent:'center'}}>
            <UserEntryTabs/>
        </div>
    )
}

export default UserEntryRegister;