import React, {createContext, useContext, useState, useEffect } from "react";
import { User, DEFAULT_USERS } from "../types/User";

interface AuthContextType {
    user: User | null;
    users: User[];
    login: (email: string, password: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: { children: React.ReactNode}) {
    const [user, setUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // Initialize users from localStorage or default users
        const storedUsers = localStorage.getItem("users");
        if (!storedUsers) {
            localStorage.setItem("users", JSON.stringify(DEFAULT_USERS));
            setUsers(DEFAULT_USERS);
        }
        else {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    const login = (email: string, password: string): boolean => {
        const foundUser = users.find(
            (u) => u.email === email && u.password === password
        );

        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem("currentUser", JSON.stringify(foundUser));
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("currentUser");
    };

    return (
        <AuthContext.Provider value={{ user, users, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;
}