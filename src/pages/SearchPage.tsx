import React, { useState } from "react";
import Category from "@/components/Category";
import ProfileCards from "@/components/ProfileCards";

const SearchPage = () => {
  const [work, setWork] = useState<string>("");

  const handleWork = (work: string) => {
    setWork(work);
  };

  return (
    <div>
      <Category handleWork={handleWork} />
      <ProfileCards workFilter={work} />
    </div>
  );
};

export default SearchPage;
