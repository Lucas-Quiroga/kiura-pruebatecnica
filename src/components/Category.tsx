import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import axios from "axios";

interface CategoryPropsComponent {
  handleWork: (work: string) => void;
}

interface CategoryProps {
  job: string;
  id: string;
}

const Category = ({ handleWork }: CategoryPropsComponent) => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  async function getCategories() {
    try {
      const response = await axios.get(
        "https://6602f0839d7276a75554a537.mockapi.io/api/v1/jobs"
      );
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <section>
        <div className="container grid gap-6 md:gap-8">
          <div className="flex flex-col  items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">
                Buscar profesionales
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Busque profesionales en función de varios criterios.
              </p>
            </div>
            <div className="flex gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="shrink-0" variant="outline">
                    Trabajo
                    <ArrowUpDownIcon className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {categories.map((category) => (
                    <DropdownMenuCheckboxItem
                      key={category.id}
                      onClick={() => handleWork(category.job)}
                    >
                      {category.job}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="shrink-0" variant="outline">
                    Ubicación
                    <ArrowUpDownIcon className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuCheckboxItem checked>
                    New York
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Los Angeles
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Chicago</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="shrink-0" variant="outline">
                    Calificaciones
                    <ArrowUpDownIcon className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuCheckboxItem checked>
                    4 Stars & Up
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    3 Stars & Up
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    2 Stars & Up
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;

function ArrowUpDownIcon(props: any) {
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
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}
