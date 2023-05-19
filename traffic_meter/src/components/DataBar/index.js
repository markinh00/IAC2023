import React, { useEffect, useState } from "react";
import StyledDataBarContainer, { StyledDataBarButton, StyledDataBarButtonContainer, StyledDataBarButtonIcon, StyledDataBarContent, StyledDataBarMaxValue, StyledDataBarText, StyledDataBarTextArea, StyledDataBarTextContainer, StyledDataBarTittle, StyledDataBarValue } from "./DataBar.styles";
import { useUserContext } from "../../contexts/UserContext";
import leftButton from "../../assets/images/left-button.png";
import rightButton from "../../assets/images/right-button.png";
import { updateUser } from "../../database";


export default function DataBar({ tittle }) {
    const [user,] = useUserContext();
    const [value, setValue] = useState(0);
    const [maxValue, setMaxvalue] = useState(tittle === "download" ? user.maxdownload : user.maxupload); //MB
    const [valuePercent, setValuePercent] = useState(0);
    const [alert, setAlert] = useState(false);

    const filterUnity = (string) => {
        if (string.includes("GB")) {
            const number = Number(string.replace("GB", "")) * 1000
            return (number)
        }
        else if (string.includes("MB")) {
            const number = Number(string.replace("MB", "")) * 1
            return (number)
        }
        else if (string.includes("KB")) {
            const number = Number(string.replace("KB", "")) / 1000
            return (number)
        }
        else if (string.includes("B")) {
            const number = Number(string.replace("B", "")) / (1000 * 1000)
            return (number)
        }
    }

    const calcValue = (data, filter) => {
        return new Promise((resolve, reject) => {
            try {
                let sum = 0;
                data.forEach(element => {
                    for (const key in element) {
                        if (key === filter) {
                            sum += filterUnity(element[key]);
                        }
                    }
                });
                resolve(Number(sum.toFixed(2)));
            } catch (error) {
                reject(error);
            }
        });
    }

    const handleClick = (newValue) => {
        newValue = Number(newValue);
        const update = {};
        if (maxValue + newValue <= value) {
            setMaxvalue(value);
            update[`max${tittle}`] = value;
        } else if (maxValue + newValue <= 0) {
            setMaxvalue(0);
            update[`max${tittle}`] = 0;
        } else {
            setMaxvalue(Number((maxValue + newValue).toFixed(2)));
            update[`max${tittle}`] = Number((maxValue + newValue).toFixed(2));
        }
        updateUser(user.id, update);
    }

    const handleChange = (event) => {
        const number = Number(event.target.value); 
        if(number < 0) setMaxvalue(0);
        else setMaxvalue(number);
    }

    const updatevaluePercent = (number) => {
        if(number >= 100){
            setValuePercent(100);
        }else if(number < 0){
            setValuePercent(0);
        } else {
            setValuePercent(number)
        }
    }

    useEffect(() => {
        calcValue(user.data, tittle).then(res => {
            setValue(res);
            updatevaluePercent(Number((value / maxValue * 100).toFixed(2)));
        }).catch(error => {
            console.log(error);
        });

    }, [user.data, maxValue]);

    useEffect(() => {
        if (value >= maxValue) {
            setValuePercent(100);
            setAlert(true);
        }else{
            setAlert(false);
        }
    },[value, maxValue]);

    return (
        <StyledDataBarContainer>
            <StyledDataBarTittle>{tittle}</StyledDataBarTittle>
            <StyledDataBarContent>
                <StyledDataBarValue value={valuePercent} alert={alert}/>
            </StyledDataBarContent>
            <StyledDataBarTextArea>
                <StyledDataBarText>value: {value}MB</StyledDataBarText>
                <StyledDataBarTextContainer>
                    <StyledDataBarText>
                        max:{" "}
                        <StyledDataBarMaxValue
                            value={maxValue}
                            setSize={String(maxValue).length}
                            onChange={handleChange}
                            min={value}
                            type="text"
                        />
                        MB
                    </StyledDataBarText>
                    <StyledDataBarButtonContainer>
                        <StyledDataBarButton onClick={() => handleClick(-10)} >
                            <StyledDataBarButtonIcon src={leftButton} />
                        </StyledDataBarButton>
                        <StyledDataBarButton onClick={() => handleClick(10)} >
                            <StyledDataBarButtonIcon src={rightButton} />
                        </StyledDataBarButton>
                    </StyledDataBarButtonContainer>
                </StyledDataBarTextContainer>
            </StyledDataBarTextArea>
        </StyledDataBarContainer>
    )
}