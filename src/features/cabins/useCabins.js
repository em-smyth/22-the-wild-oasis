import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

// Call getCabins and return the cabin data
export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  return { isLoading, cabins, error };
}
