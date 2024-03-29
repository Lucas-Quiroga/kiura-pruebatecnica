import { useEffect, useState } from "react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useParams } from "react-router-dom";
import axios from "axios";
import SuccessMessage from "./SuccessMessage";
import { useForm } from "react-hook-form";

interface ProfileProps {
  id: string;
  name: string;
  avatar: string;
  age: number;
  dni: number;
  tel: string;
  certificate: string;
  price: number;
  email: string;
  password: string;
  job: string;
}

const ProfileCardsDetail = () => {
  const [profile, setProfile] = useState<ProfileProps | null>(null);

  const { id } = useParams<{ id: string }>();

  const [success, setSuccess] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    if (data) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  useEffect(() => {
    async function getProfile() {
      try {
        const response = await axios.get(
          `https://6602f0839d7276a75554a537.mockapi.io/api/v1/profesionals/${id}`
        );

        setProfile(response.data);

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProfile();
  }, []);

  return (
    <>
      {profile && (
        <Card className="w-full max-w-3xl text-start">
          <CardHeader className="pb-0">
            <div className="flex text-start space-x-4">
              <div className="flex text-start space-x-4">
                <Avatar className="w-12 h-12 border">
                  <AvatarImage alt={profile.name} src={profile.avatar} />
                  <AvatarFallback>{profile.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1.5">
                  <h2 className="text-lg font-bold">{profile.name}</h2>
                  <div className="flex items-center space-x-2 text-sm">
                    <StarIcon className="w-4 h-4" />
                    <StarIcon className="w-4 h-4" />
                    <StarIcon className="w-4 h-4" />
                    <StarIcon className="w-4 h-4" />
                    <StarIcon className="w-4 h-4 fill-current dark:text-gray-300" />
                    <span className="font-medium">4.0</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      ($25/hr)
                    </span>
                  </div>
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Contactar Profesional</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  {success ? (
                    <SuccessMessage
                      title={"Contratación exitosa"}
                      subtitle="Tu solicitud ha sido enviada."
                      message={
                        " La contratación se ha realizado correctamente."
                      }
                    />
                  ) : (
                    <div>
                      <DialogHeader>
                        <DialogTitle>Solicitar un Profesional</DialogTitle>
                        <DialogDescription>
                          Ingresa tu información y mensaje para enviar tu
                          solicitud de contratación.
                        </DialogDescription>
                      </DialogHeader>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="grid gap-4 py-4"
                      >
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre</Label>
                          <Input
                            id="name"
                            placeholder="Ingresa tu nombre"
                            required
                            {...register("name")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            placeholder="Ingresa tu email"
                            required
                            type="email"
                            {...register("email")}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="sr-only" htmlFor="message">
                            Mensaje
                          </Label>
                          <Textarea
                            className="min-h-[100px]"
                            id="message"
                            placeholder="Ingresa tu mensaje"
                            required
                            {...register("message")}
                          />
                        </div>
                        <Button type="submit">Enviar solicitud</Button>
                      </form>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-0.5 text-start">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Trabajo
              </div>
              <h3 className="font-semibold">{profile.job}</h3>
            </div>
            <div className="grid gap-0.5 text-start">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Sobre mí
              </div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores eaque aut, dolorem, mollitia blanditiis laboriosam
                temporibus ut quasi illum commodi repellat labore quis saepe
                iusto tenetur at repellendus nihil voluptate suscipit
                repudiandae esse magnam similique! Ipsa nihil minus molestias!
                Praesentium minus ab magnam enim laudantium. Quam eius commodi
                excepturi impedit.
              </p>
            </div>

            <div className="grid gap-0.5">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Experiencia
              </div>
              <ul className="pl-5 list-disc list-inside">
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veniam, Veniam, possimus.
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veniam, possimus.
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veniam, possimus.
                </li>
              </ul>
            </div>
            <div className="grid gap-0.5">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Education
              </div>
              <ul className="pl-5 list-disc list-inside">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
            <div className="grid gap-0.5">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Ubicación
              </div>
              <p>Con sede en Nueva York</p>
            </div>
            <div className="grid gap-0.5">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Disponibilidad
              </div>
              <p>Disponible para proyectos independientes</p>
            </div>
            <div className="grid gap-0.5">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Lenguaje
              </div>
              <p>Ingles (Nativo), Español (Conversacional)</p>
            </div>
            <div className="grid gap-0.5">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Contacto
              </div>
              <div className="grid gap-0.5">
                <div>Doc: {profile.dni}</div>
                <div>Email: {profile.email}</div>
                <div>Celular: {profile.tel}</div>
              </div>
            </div>

            <div className="grid gap-0.5">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Reseñas
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        alt="Alice Lee"
                        src="/placeholder-user.jpg"
                      />
                      <AvatarFallback>AL</AvatarFallback>
                    </Avatar>
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-semibold">Alice Lee</h3>
                      <div className="flex items-center space-x-2 text-xs">
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4 fill-current dark:text-gray-300" />
                        <span className="font-medium">4.0</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">
                    hace 2 días
                  </div>
                </div>
                <div className="prose prose-sm prose-blue:prose-lg">
                  <p>
                    Tuve una gran experiencia trabajando con Jenny. Ella tiene
                    un ojo para el diseño y realmente entendió lo que yo estaba
                    buscando. El proyecto se completó a tiempo y los resultados
                    fueron fantásticos. Definitivamente la recomendaría a otros.
                  </p>
                </div>
                <Separator />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ProfileCardsDetail;

function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
