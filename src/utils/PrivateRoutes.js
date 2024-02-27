import { Outlet, Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const PrivateRoutes = () => {
    const token = localStorage.getItem('token');

    // Função para verificar se o token está expirado
    const isTokenExpired = (token) => {
        if (token) {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000; // Tempo atual em segundos desde a época Unix

            return decodedToken.exp < currentTime;
        }
        return true; // Se não houver token, considera-se expirado
    };

    // Verifica se o token está presente e não expirado
    const isAuthenticated = token && !isTokenExpired(token);

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoutes;