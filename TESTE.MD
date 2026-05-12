import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://sua-api.com",
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
  const token = "TOKEN_AQUI";

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

##############################################################

import { apiClient } from "../api/apiClient";

export const userService = {
  getUsers: () => apiClient.get("/users"),
  getUserById: (id: number) => apiClient.get(`/users/${id}`),
  createUser: (data: any) => apiClient.post("/users", data),
};

###############################################################

import { useState, useCallback } from "react";
import { userService } from "../services/userService";

export const useUsers = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await userService.getUsers();
      setUsers(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    users,
    loading,
    error,
    fetchUsers,
  };
};

####################################################33


import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useUsers } from "../hooks/useUsers";

export default function UsersScreen() {
  const { users, loading, fetchUsers } = useUsers();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <ActivityIndicator />;

  return (
    <View>
      {users.map((user: any) => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </View>
  );
}