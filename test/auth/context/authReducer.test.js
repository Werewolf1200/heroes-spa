import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => {

    test('Debe retornar el estado por defecto', () => {
        
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('Debe llamar el Login y establecer el usuario', () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'Iaphet',
                id: '123'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({ logged: true, user: action.payload });
    });

    test('El Logout debe borrar el nombre del usuario y poner el logged en false', () => {
        
        const state = {
            logged: true,
            user: { id: '1', name: 'Iaphet'}
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action);
        expect(newState).toEqual({logged: false})
    });
});