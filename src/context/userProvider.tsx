import React, { createContext, useContext, useState } from "react";

interface ProfileFormData {
  name: string;
  email: string;
  dateOfBirth: string;
  country: string;
  phone: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
}

interface ProfileContextType {
  formData: ProfileFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProfileFormData>>;
}

// Definir el contexto
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

// Proveedor del contexto
export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Utilizamos el estado local para manejar los datos del formulario
  const [formData, setFormData] = useState<ProfileFormData>({
    name: "Alex Dunphy",
    email: "adunphy@example.com",
    dateOfBirth: "3 de abril de 1998",
    country: "Estados Unidos",
    phone: "11424243234",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    emailNotifications: true,
    pushNotifications: false,
  });

  return (
    <ProfileContext.Provider value={{ formData, setFormData }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Hook para usar el contexto
export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error(
      "useProfileContext debe ser utilizado dentro de un ProfileProvider"
    );
  }
  return context;
};
