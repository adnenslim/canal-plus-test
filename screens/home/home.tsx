import React, { useState } from "react";

import SearchList from "@/components/search-list/search-list";
import { InputWithButton } from "@/components/input-with-button/input-with-button";

type THomeScreenProps = {
  searchQuery: string| string[] | undefined;
};

export default function HomeScreen({ searchQuery }: THomeScreenProps) {
  const [search, setSearch] = useState<string | string[] | undefined>(searchQuery);

  return (
    <>
      <InputWithButton
        placeholder="Search"
        search={search}
        setSearch={setSearch}
      />
      {search ? (
        <>
          <h1> {`Results for : " ${search} "`}</h1>
          <SearchList search={search} />
        </>
      ) : (
        <h1>Try a new search</h1>
      )}
    </>
  );
}
