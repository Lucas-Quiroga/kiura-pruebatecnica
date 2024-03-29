import React, { useState, useEffect } from "react";
import { Avatar } from "@/components/ui/avatar";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useProfileContext } from "@/context/userProvider";
import SuccessMessage from "./SuccessMessage";

const ProfileUser = () => {
  const [success, setSuccess] = useState(false);
  const [successMsgPassword, setSuccessMsgPassword] = useState(false);
  const [successMsgTel, setSuccessMsgTel] = useState(false);
  const { formData: userData, setFormData: setUserData } = useProfileContext();
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    dateOfBirth: userData.dateOfBirth,
    country: userData.country,
    phone: userData.phone,
  });

  const [changePassword, setChangePassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [changeTel, setChangeTel] = useState({
    newPhone: "",
  });

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangePassword({
      ...changePassword,
      [e.target.id]: e.target.value,
    });
  };

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setChangePassword((prevData) => ({
      ...prevData,
      newPassword: changePassword.newPassword,
      confirmPassword: changePassword.confirmPassword,
    }));

    if (changePassword.newPassword !== changePassword.confirmPassword) {
      alert("Las contraseñas no coinciden");

      setChangePassword((prevData) => ({
        ...prevData,
        newPassword: "",
        confirmPassword: "",
      }));
    } else {
      setSuccessMsgPassword(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //mostramos el mensaje y luego lo sacamos
    setSuccess(true);

    setUserData((prevData) => ({
      ...prevData,
      name: formData.name,
      email: formData.email,
      dateOfBirth: formData.dateOfBirth,
      country: formData.country,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeTel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setChangeTel((prevData) => ({
      ...prevData,
      newPhone: value,
    }));
  };

  const handleTelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      phone: changeTel.newPhone,
    }));
    setSuccessMsgTel(true);
  };

  useEffect(() => {
    console.log(changeTel);
  }, [formData]);

  return (
    <div className="grid max-w-6xl gap-6 px-4 mx-auto lg:grid-cols-2 lg:gap-10">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <div>AD</div>
              </Avatar>
              <div className="space-y-1">
                <CardTitle className="text-base">{userData.name}</CardTitle>
                <CardDescription className="text-sm">
                  {userData.email}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="flex items-center space-x-2">
                <div>Nombre: {userData.name}</div>
              </div>
              <div className="flex items-center space-x-2">
                <div>Email: {userData.email}</div>
              </div>
              <div className="flex items-center space-x-2">
                <div>Fecha de nacimiento: {userData.dateOfBirth}</div>
              </div>
              <div className="flex items-center space-x-2">
                <div>País: {userData.country}</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">Editar perfil</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                {success ? (
                  <SuccessMessage
                    title={"Contratación exitosa"}
                    subtitle="Tu solicitud ha sido enviada."
                    message={" La contratación se ha realizado correctamente."}
                  />
                ) : (
                  <div>
                    <DialogHeader>
                      <DialogTitle>Editar informacion personal</DialogTitle>
                      <DialogDescription>
                        Actualiza tu información personal.
                      </DialogDescription>
                    </DialogHeader>
                    <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Ingresa tu nombre"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          placeholder="Ingresa tu email"
                          required
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Fecha de nacimiento</Label>
                        <Input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          placeholder="Ingresa tu fecha de nacimiento"
                          required
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">País</Label>
                        <Input
                          id="country"
                          name="country"
                          placeholder="Ingresa tu país"
                          required
                          value={formData.country}
                          onChange={handleChange}
                        />
                      </div>
                      <Button type="submit">Enviar solicitud</Button>
                    </form>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contacto</CardTitle>
            <CardDescription>
              Actualiza tu información de contacto.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Télefono actual: {formData.phone}</Label>
            </div>
            {successMsgTel ? (
              <SuccessMessage
                title={"Teléfono actualizado"}
                subtitle="Tu teléfono ha sido actualizado."
                message={"El teléfono se ha actualizado correctamente."}
              />
            ) : (
              <form className="space-y-2" onSubmit={handleTelSubmit}>
                <Label htmlFor="phone">Nuevo Teléfono</Label>
                <Input
                  id="newPhone"
                  placeholder="Ingresa tu nuevo número de teléfono"
                  onChange={handleChangeTel}
                />
                <CardFooter>
                  <Button size="sm" type="submit">
                    Guardar
                  </Button>
                </CardFooter>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
      <div>
        {successMsgPassword ? (
          <SuccessMessage
            title={"Contraseña actualizada"}
            subtitle="Tu contraseña ha sido actualizada."
            message={"La contraseña se ha actualizado correctamente."}
          />
        ) : (
          <form className="space-y-6" onSubmit={handlePasswordSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Contraseña</CardTitle>
                <CardDescription>Actualiza tu contraseña.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Nueva Contraseña</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={changePassword.newPassword}
                    onChange={handleChangePassword}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={changePassword.confirmPassword}
                    onChange={handleChangePassword}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Guardar</Button>
              </CardFooter>
            </Card>
          </form>
        )}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Preferencias</CardTitle>
            <CardDescription>Actualiza tus preferencias.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="text-sm">Notificaciones por Email</div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm">Notificaciones Push</div>
              <Switch />
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Guardar</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProfileUser;

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function GlobeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
