import React, { useState } from "react";
import StyledMenuBarContainer, { StyledMenuBarContent, StyledMenuBarLogo, StyledMenuBarLogoContainer, StyledUserArea, StyledUserData, StyledUserProfilePicture, StyledUserText } from "./MenuBar.styles";
import inatel from "../../assets/images/InatelBranco.png";
import viasat from "../../assets/images/Viasat.png";
import profile from "../../assets/images/user.png";
import Button from "../Button";
import { signOut } from "firebase/auth";
import { auth } from "../../database";
import { useUserContext, userInitialState } from "../../contexts/UserContext";

export default function MenuBar({ nickname, email }) {
    const [active, setActive] = useState(false);
    const [,setUser] = useUserContext();

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser(userInitialState);
                console.log("User logged out successfully!");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <StyledMenuBarContainer>
            <StyledMenuBarContent>
                <StyledMenuBarLogoContainer>
                    <StyledMenuBarLogo src={inatel} />
                    <StyledMenuBarLogo src={viasat} />
                </StyledMenuBarLogoContainer>
                <StyledUserProfilePicture src={profile} onClick={() => setActive(!active)} />
                {active && <StyledUserArea>
                    <StyledUserData>
                        <StyledUserText>Nickname: {nickname}</StyledUserText>
                        <StyledUserText>Email: {email}</StyledUserText>
                    </StyledUserData>
                    <Button type="button" onClick={logout}>sair</Button>
                </StyledUserArea>}
            </StyledMenuBarContent>
        </StyledMenuBarContainer>
    );
}