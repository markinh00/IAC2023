import React, { useState } from "react";
import Input from "../../components/Input";
import ErrorText from "../../components/ErrorText";
import StyledLoginScreenContainer, { StyledLoginScreenContent, StyledLoginImageContainer, StyledLoginImg, StyledLoginScreenForm, StyledRedirect, StyledRedirectText, StyledinputConteiner } from "./LoginScreen.styles"
import Button from "../../components/Button";
import inatel from "../../assets/images/InatelBranco.png";
import viasat from "../../assets/images/Viasat.png"
import { useNavigate } from "react-router-dom";
import validateInputs, { checkValidations } from "../../contexts/userValidation";
import { auth } from "../../database";
import { signInWithEmailAndPassword } from "firebase/auth";
import Loading from "../../components/Loading";

export default function LoginScreen() {
    const navigate = useNavigate();
    const userInputsInitialState = {
        email: "",
        password: ""
    }
    const [userInputs, setUserInputs] = useState(userInputsInitialState);
    const [errors, setErrors] = useState(userInputsInitialState);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        if (event.target.name === "email") {
            setUserInputs({ ...userInputs, email: event.target.value })
        }
        if (event.target.name === "password") {
            setUserInputs({ ...userInputs, password: event.target.value })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        if (checkValidations(userInputs)) {
            try {
                signInWithEmailAndPassword(auth, userInputs.email, userInputs.password)
                    .then(() => {
                        console.log("Login successful!")
                        navigate("/");
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                    .finally(() => {
                        setIsLoading(false);
                    });
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        } else {
            setIsLoading(false);
            const errorText = "something went wrong!";
            console.log(errorText);
            window.alert(errorText);
        }
    }

    return (
        isLoading ? (
            <Loading />
        ) : (
            <StyledLoginScreenContainer>
                <StyledLoginScreenContent>
                    <StyledLoginScreenForm onSubmit={handleSubmit} >
                        <StyledinputConteiner>
                            <Input
                                name="email"
                                id="email"
                                type="email"
                                placeholder="email..."
                                value={userInputs.email}
                                onChange={handleChange}
                                onBlur={(event) => setErrors({ ...errors, email: validateInputs(event) })}
                                required={true}
                            />
                            <ErrorText>{errors.email}</ErrorText>
                        </StyledinputConteiner>
                        <StyledinputConteiner>
                            <Input
                                name="password"
                                id="password"
                                type="password"
                                placeholder="password..."
                                value={userInputs.password}
                                onChange={handleChange}
                                onBlur={(event) => setErrors({ ...errors, password: validateInputs(event) })}
                                required={true}
                            />
                            <ErrorText>{errors.password}</ErrorText>
                        </StyledinputConteiner>
                        <Button type="submit">login</Button>
                        <StyledRedirect>
                            <StyledRedirectText>don't have an account?</StyledRedirectText>
                            <Button type="button" onClick={() => navigate("/signin")}>sigin</Button>
                        </StyledRedirect>
                    </StyledLoginScreenForm>
                    <StyledLoginImageContainer>
                        <StyledLoginImg src={inatel} />
                        <StyledLoginImg src={viasat} />
                    </StyledLoginImageContainer>
                </StyledLoginScreenContent>
            </StyledLoginScreenContainer>
        )
    )
}