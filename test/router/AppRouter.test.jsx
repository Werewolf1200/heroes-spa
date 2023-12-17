import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { AppRouter } from "../../src/router/AppRouter";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en AppRouter', () => {

    test('Debe mostrar el login si no está autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                
                    <AppRouter />
                
                </AuthContext.Provider>
            </MemoryRouter>
        );

    expect(screen.getAllByRole('button',{name:'Login'})).toBeTruthy();
        
    })
});