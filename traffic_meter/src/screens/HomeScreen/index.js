import React, { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import MenuBar from "../../components/MenuBar";
import { doc, onSnapshot } from "firebase/firestore";
import Loading from "../../components/Loading";
import { db } from "../../database";
import DataList from "../../components/DataList";
import StyledHomeScreenContainer from "./HomeScreen.styles";
import { modalDataInitialState, useModalContext } from "../../contexts/ModalContext";
import Modal from "../../components/Modal";
import DataBar from "../../components/DataBar";


export default function HomeScreen() {
    const [user, setUser] = useUserContext();
    const [modalData,] = useModalContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user.id) {
            const unsub = onSnapshot(doc(db, "users", user.id), (doc) => {
                console.log("Current data: ", doc.data());
                setUser(doc.data());
                setIsLoading(false);
            });
        } else {
            console.log("NO USER FOUND!");
        }
    }, []);

    return (
        isLoading ? (
            <Loading />
        ) : (
            <>
                <MenuBar nickname={user.nickname} email={user.email} />
                {modalData !== modalDataInitialState && <Modal />}
                <StyledHomeScreenContainer >
                    <DataBar tittle="download" />
                    <DataBar tittle="upload" />
                    <DataList data={user.data} />
                </StyledHomeScreenContainer>
            </>
        )
    )
}