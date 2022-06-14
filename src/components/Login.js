import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/user';

function Login() {

    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();

    return (
        <div>
            { user.name ?

                <button
                onClick={() => {
                    dispatch(logout())
                }}
                >Logout</button>

                :

                <button
                    onClick={() => {
                        dispatch(login(
                            {
                                name: 'me',
                                email: 'me@here.com',
                            }
                        ))
                    }}
                >Login</button>

            }
        </div>
    )
}

export default Login;
