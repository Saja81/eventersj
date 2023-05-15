import { useEffect, useState } from "react";

export interface Result {
  id: number;
  name: string;
  id_name: string;
  description: string;
  category: string;
  location: string;
  address: string;
  city: string;
  cost: string;
  link: string;
  first: string;
  last: string;
}

export function useFetch(): Result | null {
  const [result, setResult] = useState<Result | null>(null);
  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((result) => {
        setResult(result);
      });
  }, []);

  return result;
}
