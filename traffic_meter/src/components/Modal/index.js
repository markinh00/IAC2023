import React from "react";
import StyledModalContainer, { StyledModalContent, StyledModalData, StyledModalExitButtom, StyledModalExitButtomImg, StyledModalTittle } from "./Modal.styles";
import closeButton from "../../assets/images/icons-close-red.svg";
import ModalItem from "./ModalItem";
import { modalDataInitialState, useModalContext } from "../../contexts/ModalContext";


export default function Modal() {
    const [modalData, setModalData] = useModalContext();

    return (
        <StyledModalContainer>
            <StyledModalExitButtom alt="exit button" >
                <StyledModalExitButtomImg
                    src={closeButton}
                    onClick={() => setModalData(modalDataInitialState)}
                />
            </StyledModalExitButtom>
            <StyledModalContent>
                <StyledModalTittle><p>{modalData.tittle}</p></StyledModalTittle>
                <StyledModalData>
                    {modalData.data.map((content, index) => (
                        <ModalItem key={index} data={content} />
                    ))}
                </StyledModalData>
            </StyledModalContent>
        </StyledModalContainer>
    )
}