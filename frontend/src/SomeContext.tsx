import { createContext } from "react";
import { Result } from "./useFetch";

export interface SomeContextValue {
  concerts?: Result[];
  museums?: Result[];
  activities?: Result[];
  eventResult?: Result[];
}

// type SetBlogFunction = React.Dispatch<React.SetStateAction<Blog[]>>;
// type SetThemeFunction = (newValue: string) => void;
// type SetLoggedInFunction = (newValue: boolean) => void;

export const SomeContext = createContext<SomeContextValue | null>(null);
