const setRememberMe = (isRememberMe) => {
    localStorage.setItem('isRememberMe', isRememberMe);
}

const isRememberMe = () => {
    if (localStorage.getItem('isRememberMe') === null || localStorage.getItem('isRememberMe') === undefined) {
        return true;
    };
    // convert string to boolean
    return JSON.parse(localStorage.getItem('isRememberMe'));
}

const setItem = (key, value) => {
    if (isRememberMe()) {
        localStorage.setItem(key, value);
    } else {
        sessionStorage.setItem(key, value);
    }
}

const getItem = (key) => {
    if (isRememberMe()) {
        return localStorage.getItem(key);
    } else {
        return sessionStorage.getItem(key);
    }
}

const setRole = (role) => {
    setItem('role', role);
}

const getRole = () => {
    return getItem('role');
}

const setToken = (token) => {
    setItem('token', token);
}

const getToken = () => {
    return getItem('token');
}

const setUserInfo = (userName, email, firstName, lastName, role, status) => {
    setItem('userName', userName);
    setItem('email', email);
    setItem('firstName', firstName);
    setItem('lastName', lastName);
    setItem('role', role);
    setItem('status', status);
}

const getUserInfo = () => {
    return {
        'userName': getItem('userName'),
        'email': getItem('email'),
        'firstName': getItem('firstName'),
        'lastName': getItem('lastName'),
        'role': getItem('role'),
        'status': getItem('status')
    }


}

const setTourID = (tourId) => {
    localStorage.setItem('tourId', tourId);
}

const getTourID = () => {
    return localStorage.getItem('tourId');
}

const setTourForeignID = (tourId) => {
    localStorage.setItem('tourId', tourId);
}

const getTourForeignID = () => {
    return localStorage.getItem('tourId');
}

const deleteStorage = () => {
    return localStorage.clear();
}

const storage = { getRole, setRole, setToken, getToken, setUserInfo, getUserInfo, setRememberMe, isRememberMe, deleteStorage, setTourID, getTourID, setTourForeignID, getTourForeignID };
export default storage;