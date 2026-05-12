import { api } from "./api";

export const getPlaylist = async () => {
    try {
        // PARAMS
        // FILTROS
        const response = await api.get('/playlist');
        return response.data;
    } catch (error) {
        console.error('Error fetching playlist:', error);
        throw error;
    }
}