import React, { useState } from "react";
import Input from "../../components/Input";
import ErrorText from "../../components/ErrorText";
import StyledSignInScreenContainer, { StyledContentContainer, StyledSignInImageContainer, StyledSignInImg, StyledSignInScreenForm, StyledRedirect, StyledRedirectText, StyledinputConteiner } from "./SigninScreen.styles"
import Button from "../../components/Button";
import inatel from "../../assets/images/InatelBranco.png";
import viasat from "../../assets/images/Viasat.png"
import { useNavigate } from "react-router-dom";
import validateInputs, { checkValidations } from "../../contexts/userValidation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, createUser } from "../../database";
import Loading from "../../components/Loading";

export default function SignInScreen() {
    const navigate = useNavigate();
    const userInputsInitialState = {
        nickname: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [userInputs, setUserInputs] = useState(userInputsInitialState);
    const [errors, setErrors] = useState(userInputsInitialState);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        if (event.target.name === "nickname") setUserInputs({ ...userInputs, nickname: event.target.value })
        if (event.target.name === "email") setUserInputs({ ...userInputs, email: event.target.value })
        if (event.target.name === "password") setUserInputs({ ...userInputs, password: event.target.value })
        if (event.target.name === "confirmPassword") setUserInputs({ ...userInputs, confirmPassword: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        if (checkValidations(userInputs)) {
            try {
                createUserWithEmailAndPassword(auth, userInputs.email, userInputs.password)
                    .then((userCredential) => {
                        const newUser = {
                            id: userCredential.user.uid,
                            nickname: userInputs.nickname,
                            email: userInputs.email,
                        }
                        createUser(newUser)
                            .then(res => {
                                console.log(res);
                                navigate("/");
                            })
                            .catch(error => {
                                console.log(error);
                            })
                            .finally(() => {
                                setIsLoading(false);
                            });
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                    })
                    .finally(() => {
                        setIsLoading(false);
                    })
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
            <StyledSignInScreenContainer>
                <StyledContentContainer>
                    <StyledSignInScreenForm onSubmit={handleSubmit} >
                        <StyledinputConteiner>
                            <Input
                                name="nickname"
                                id="nickname"
                                type="text"
                                placeholder="nickname..."
                                value={userInputs.nickname}
                                onChange={handleChange}
                                onBlur={(event) => setErrors({ ...errors, nickname: validateInputs(event) })}
                                required={true}
                            />
                            <ErrorText>{errors.nickname}</ErrorText>
                        </StyledinputConteiner>
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
                        <StyledinputConteiner>
                            <Input
                                name="confirmPassword"
                                id="confirmPassword"
                                type="password"
                                placeholder="confirm password..."
                                value={userInputs.confirmPassword}
                                onChange={handleChange}
                                onBlur={(event) => setErrors({ ...errors, confirmPassword: validateInputs(event, userInputs.password) })}
                                required={true}
                            />
                            <ErrorText>{errors.confirmPassword}</ErrorText>
                        </StyledinputConteiner>
                        <Button type="submit">SignIn</Button>
                        <StyledRedirect>
                            <StyledRedirectText>already have an account?</StyledRedirectText>
                            <Button type="button" onClick={() => navigate("/login")}>login</Button>
                        </StyledRedirect>
                    </StyledSignInScreenForm>
                    <StyledSignInImageContainer>
                        <StyledSignInImg src={inatel} />
                        <StyledSignInImg src={viasat} />
                    </StyledSignInImageContainer>
                </StyledContentContainer>
            </StyledSignInScreenContainer>
        )
    )
}