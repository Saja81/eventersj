import { useEffect, useState } from "react";

export interface Result {
  id: number;
  name: string;
  id_name: string;
  description: string;
  category: string;
  location: string;
  city: string;
  adress: string;
  cost: string;
  link: string;
  date: string;
  image: string;
  location_image: string;
  openhours: string;
}

export function useFetchEvents(): Result[] | [] {
  const [result, setResult] = useState<Result[] | []>([]);
  useEffect(() => {
    fetch("/fetchevents")
      .then((response) => response.json())
      .then((result) => {
        setResult(result);
      });
  }, []);

  return result;
}
