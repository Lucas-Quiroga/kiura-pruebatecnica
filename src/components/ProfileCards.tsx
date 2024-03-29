import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import axios from "axios";

interface ProfileCardsComponent {
  workFilter: string;
}

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

const ProfileCards = ({ workFilter }: ProfileCardsComponent) => {
  const [originalProfiles, setOriginalProfiles] = useState<ProfileProps[]>([]);
  const [filteredProfiles, setFilteredProfiles] = useState<ProfileProps[]>([]);

  useEffect(() => {
    async function getProfiles() {
      try {
        const response = await axios.get(
          "https://6602f0839d7276a75554a537.mockapi.io/api/v1/profesionals"
        );
        setOriginalProfiles(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProfiles();
  }, []);

  useEffect(() => {
    const filterProfesionals = originalProfiles.filter(
      (profesional) =>
        profesional.job.toLocaleLowerCase() === workFilter.toLocaleLowerCase()
    );

    setFilteredProfiles(filterProfesionals);
  }, [workFilter, originalProfiles]);

  if (workFilter === "" || workFilter === null) {
    return <p className="mt-10">Por favor busca un profesional</p>;
  }

  if (filteredProfiles.length === 0) {
    return (
      <p className="mt-10">
        No se encontraron profesinales con el trabajo {workFilter}{" "}
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mt-6">
      {filteredProfiles.length > 0
        ? filteredProfiles.map((professional) => (
            <Card key={professional.id}>
              <div className="flex flex-col items-center gap-4 p-6">
                <img
                  alt="Profile picture"
                  className="rounded-full"
                  height="160"
                  src={professional.avatar}
                  style={{
                    aspectRatio: "160/160",
                    objectFit: "cover",
                  }}
                  width="160"
                />
                <div className="text-center">
                  <h3 className="text-lg font-bold">{professional.name}</h3>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    {professional.job}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-2xl">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-500" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-500" />
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-800">
                <div className="p-6">
                  <div className="grid gap-0.5">
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Experience
                    </p>
                    <p className="text-sm font-medium leading-none">
                      10+ years
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid gap-0.5">
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Specialization
                    </p>
                    <p className="text-sm font-medium leading-none">
                      Botox, Acne Treatment, Laser Therapy
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid gap-0.5">
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Awards & Certifications
                    </p>
                    <p className="text-sm font-medium leading-none">
                      Certified Dermatologist, Best Skin Care Clinic 2023
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="p-6 flex justify-end gap-4"
                href={`/buscar/${professional.id}`}
              >
                <Button size="sm" variant="outline">
                  Ver Perfil
                </Button>
              </a>
            </Card>
          ))
        : originalProfiles.slice(0, 3).map((professional) => (
            <Card key={professional.id}>
              <div className="flex flex-col items-center gap-4 p-6">
                <img
                  alt="Profile picture"
                  className="rounded-full"
                  height="160"
                  src={professional.avatar}
                  style={{
                    aspectRatio: "160/160",
                    objectFit: "cover",
                  }}
                  width="160"
                />
                <div className="text-center">
                  <h3 className="text-lg font-bold">{professional.name}</h3>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    {professional.job}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-2xl">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-500" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-500" />
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-800">
                <div className="p-6">
                  <div className="grid gap-0.5">
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Experience
                    </p>
                    <p className="text-sm font-medium leading-none">
                      10+ years
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid gap-0.5">
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Specialization
                    </p>
                    <p className="text-sm font-medium leading-none">
                      Botox, Acne Treatment, Laser Therapy
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid gap-0.5">
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Awards & Certifications
                    </p>
                    <p className="text-sm font-medium leading-none">
                      Certified Dermatologist, Best Skin Care Clinic 2023
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="p-6 flex justify-end gap-4"
                href={`/buscar/${professional.id}`}
              >
                <Button size="sm" variant="outline">
                  Ver Perfil
                </Button>
              </a>
            </Card>
          ))}
    </div>
  );
};

export default ProfileCards;

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
