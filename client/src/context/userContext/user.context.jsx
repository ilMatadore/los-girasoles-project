import React, { useState, createContext } from 'react';

export const UserContext = createContext({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    phone: '',
    city: '',
    state: '',
    successLogin: () => {},
    userLogout: () => {},
    updateProfile: () => {},
})

const UserProvider = ({ children }) => {
    const [id, setId] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const successLogin = (user) => {
        setId(user.id);
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setEmail(user.email);
        setAddress(user.address);
        setPhone(user.phone);
        setCity(user.city);
        setState(user.state);
    }

    const userLogout = () => {
        setId(undefined);
        setFirstName('');
        setLastName('');
        setEmail('');
        setAddress('');
        setPhone('');
        setCity('');
        setState('');
    }

    const updateProfile = (user) => {
        setId(user.id);
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setEmail(user.email);
        setAddress(user.address);
        setPhone(user.phone);
        setCity(user.city);
        setState(user.state);
      };

    return (
        <UserContext.Provider value={{
            id,
            first_name,
            last_name,
            email,
            address,
            phone,
            city,
            state,
            successLogin,
            userLogout,
            updateProfile,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;

