import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Create the Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is already logged in when the component mounts
        const checkUserLoggedIn = async () => {
            try {
                const res = await axios.get('/api/users/current', {
                    headers: {
                        'x-auth-token': localStorage.getItem('token')
                    }
                });
                if (res.data) {
                    setUser(res.data);
                }
            } catch (err) {
                console.error('Error checking logged in user:', err);
            } finally {
                setLoading(false);
            }
        };

        checkUserLoggedIn();
    }, []);

    // Function to log in the user
    const login = async (email, password) => {
        try {
            const res = await axios.post('/api/users/login', { email, password });
            localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
            navigate('/profile');
        } catch (err) {
            console.error('Error logging in:', err);
            throw err; // This allows the component to handle the error
        }
    };

    // Function to log out the user
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
