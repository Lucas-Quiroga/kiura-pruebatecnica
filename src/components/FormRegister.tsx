import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Camera from "./Camare";
import { useForm } from "react-hook-form";
import SuccessMessage from "./SuccessMessage";

const FormRegister = () => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit } = useForm();

  const handleCapture = (image: string) => {
    setCapturedImage(image); // Aquí guardamos la imagen capturada
  };

  const onSubmit = (data: any) => {
    //comprobamos que todos los inputs estén llenos
    if (
      !data.name ||
      !data.email ||
      !data.password ||
      !data.confirmPassword ||
      !capturedImage
    ) {
      alert("Por favor, llena todos los campos y toma una foto  ");
      return;
    }

    if (data.password !== data.confirmPassword) {
      alert("Las contraseñas no coinciden");

      return;
    }
    setSuccess(true);
    // Aquí puedes enviar los datos a tu API
    console.log(data);
  };

  return (
    <>
      {success ? (
        <SuccessMessage
          title="Registro exitoso"
          subtitle="¡Bienvenido a la comunidad!"
          message="Tu cuenta ha sido creada correctamente."
        />
      ) : (
        <form
          className="mx-auto max-w-sm space-y-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">
              Crear una cuenta para tu perfil profesional
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Ingresa tu información para registrarte
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input
                id="name"
                placeholder="Lee Robinson"
                required
                {...register("name")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                {...register("email")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                required
                type="password"
                {...register("password")}
              />
            </div>
            <div>
              <Label htmlFor="password">Repetir contraseña</Label>
              <Input
                id="confirmPassword"
                required
                type="password"
                {...register("confirmPassword")}
              />
            </div>
            <div className="space-y-2">
              <Label>Tomar una foto</Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Haz clic en el botón para tomar una foto usando tu cámara
              </p>
              <div className="mt-4 w-full aspect-video overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
                {capturedImage ? (
                  <div className="flex">
                    <img
                      alt="Capturada"
                      className="object-cover"
                      src={capturedImage}
                      style={{
                        aspectRatio: "400/225",
                        objectFit: "cover",
                      }}
                      width={400}
                      height={225}
                    />
                    <Button>X</Button>
                  </div>
                ) : (
                  <Camera onCapture={handleCapture} />
                )}
              </div>
            </div>
            <Button className="w-full" type="submit">
              Registrarse
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default FormRegister;
