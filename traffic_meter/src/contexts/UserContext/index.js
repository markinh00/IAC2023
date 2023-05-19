import React, { useContext, useState } from "react";

const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

export function useUserContext() {
    return [useContext(UserContext), useContext(UserUpdateContext)]
}

export const userInitialState = {}

export default function UserProvider({children}){
    const [user, setUser] = useState(userInitialState);

    return(
        <UserContext.Provider value={user}>
            <UserUpdateContext.Provider value={setUser}>
                { children }
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    )
}