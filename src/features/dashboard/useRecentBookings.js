import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";

import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  // Check the date range in the URL and use 7 days as a default
  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  // Calculate the date to use from the given date range
  const queryDate = subDays(new Date(), numDays).toISOString();

  // Call getBookingsAfterDate & return the relevant bookings
  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { isLoading, bookings };
}
