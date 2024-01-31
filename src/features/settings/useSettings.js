import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

// Calls getSettings and returns the settings
export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({ queryKey: ["settings"], queryFn: getSettings });

  return { isLoading, error, settings };
}
