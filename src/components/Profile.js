import React from "react";
import { useSelector } from 'react-redux';

function Profile() {

    const user = useSelector((state) => state.user.value);

    return user.name ? (
        <div>
            <p>Name: {user.name} </p>
            <p>Email: {user.email}</p>
        </div>
    ) : (<div></div>);
}

export default Profile;
