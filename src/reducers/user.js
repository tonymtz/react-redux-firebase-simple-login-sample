import { login } from '../lib/firebase';

const initState = {
    user: {}
};

export const USER_GET = 'USER_GET';
export const USER_UPDATE = 'USER_UPDATE';

export const getUser = () => ({ type: USER_GET });
export const updateUser = (userData) => ({ type: USER_UPDATE, payload: userData });

export const startLogin = (email, password) => {
    return (dispatch) => {
        login(email, password)
            .then((data) => {
                dispatch(updateUser({
                    email: data.email,
                    emailVerified: data.emailVerified,
                    displayName: data.displayName
                }));
            });
    };
};

export default (state = initState, action) => {
    switch (action.type) {
        case USER_GET:
            return { ...state };
        case USER_UPDATE:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};