import { useCallback, useState } from "react";
import { ApiService } from "../service/apiService";

export interface User {
  dob: {
    date: string;
    age: number;
  }
  email: string;
  name: {
    first: string;
    last: string;
    title: string;
  }
  login: {
    username: string;
  }
  gender: string;
};

export const getUser = async () => {
  const responce = await ApiService.get("/api");
  const user = await responce.data.results[0];
  return user;
};

export const useGetUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  const getNewUser = useCallback(async () => {
    try {
      setLoading(true);
      const newUser = await getUser();
      setUser(newUser);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { getNewUser, user, loading };
};
