"use client";
import { useUser } from "@stackframe/stack";
import { useMutation } from "convex/react";
import React, { useEffect, useState } from "react";
import { api } from "../convex/_generated/api";
import { UserContext } from "./_context/UserContext";

function AuthProvider({ children }) {
  const user = useUser();
  const CreateUser = useMutation(api.users.CreateUser);
  const [userData, setUserData] = useState();
  useEffect(() => {
    if (user) {
      CreateNewUser();
    } else {
      console.log("User is not logged in");
    }
  }, [user]);

  const CreateNewUser = async () => {
    const result = CreateUser({
      name: user?.displayName,
      email: user?.primaryEmail,
    });
    setUserData(result);
  };

  return (
    <div>
      <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    </div>
  );
}

export default AuthProvider;
