import { useState } from "react";
import { getPlaylist } from "../services/PlaylistService";

export function usePlaylist() {
    const [playlist, setPlaylist] = useState([]);
    const [loading, setLoading] = useState(true);

    function fetchPlaylist() {
        getPlaylist().then((response) => {
            setPlaylist(response);
            setLoading(false);
        })
            .catch((error) => {
                console.error('Error fetching playlist:', error);
                setLoading(false);
            });
    }

    return {
        playlist,
        loading,
        fetchPlaylist
    }
}