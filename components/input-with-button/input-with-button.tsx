import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { useRouter } from "next/router";

type TInputWithButtonProps = {
  placeholder: string;
  setSearch: (val: string | string[] | undefined) => void;
  search: string | string[] | undefined;
};

export const InputWithButton = ({
  placeholder,
  setSearch,
  search,
}: TInputWithButtonProps) => {
  const [val, setVal] = useState(search);
  const router = useRouter();

  const handleSearch = () => {
    setSearch(val);
    router.push(`/?search=${val}`, undefined, {
      shallow: true,
    });
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === "Enter" && val?.length !== 0) {
      setSearch(val);
      router.push(`/?search=${val}`, undefined, {
        shallow: true,
      });
    }
  };

  return (
    <div className="relative">
      <input
        value={val ?? ""}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Search"
        onKeyPress={handleKeyPress}
      />
      <button
        disabled={val?.length === 0 && true}
        className="absolute"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};
