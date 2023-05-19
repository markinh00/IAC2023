import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext, userInitialState } from "../../contexts/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth, readUser } from "../../database";
import Loading from "../../components/Loading";
import { socket } from "../../socket";

export default function RootScreen() {
    const navigate = useNavigate();
    const [, setUser] = useUserContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //console.log(user);
                socket.emit("send_id", user.uid);
                readUser(user.uid)
                .then(res =>{
                    setUser({...user, id: res.id});
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    setIsLoading(false);
                })
            } else {
                socket.emit("send_id", "");
                setUser(userInitialState);
                setIsLoading(false);
                navigate("/login");
            }
        });
    }, []);

    return (
        isLoading ? (
            <Loading />
        ) : (
            <Outlet />
        )
    );
}