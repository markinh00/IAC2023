import React, { useContext, useState } from "react";

const ModalContext = React.createContext();
const ModalUpdateContext = React.createContext();

export function useModalContext() {
    return [useContext(ModalContext), useContext(ModalUpdateContext)]
}

export const modalDataInitialState = {
    tittle: "",
    data: []
};

export default function ModalProvider({children}){
    const [modalData, setModalData] = useState(modalDataInitialState);

    return(
        <ModalContext.Provider value={modalData}>
            <ModalUpdateContext.Provider value={setModalData}>
                { children }
            </ModalUpdateContext.Provider>
        </ModalContext.Provider>
    )
}