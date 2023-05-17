import { useEffect, useState } from "react";

export interface Result {
  id: number;
  name: string;
  id_name: string;
  description: string;
  category: string;
  location: string;
  adress: string;
  city: string;
  cost: string;
  link: string;
  date: string;
  image: string;
  location_image: string;
}

export function useFetchEvents(): Result[] | [] {
  const [result, setResult] = useState<Result[] | []>([]);
  useEffect(() => {
    fetch("http://localhost:8080/events")
      .then((response) => response.json())
      .then((result) => {
        setResult(result);
      });
  }, []);

  return result;
}
