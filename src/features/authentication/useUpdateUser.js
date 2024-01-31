import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  // Call updatCurrentUser, on success show a toast message & reset the query cache
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], user);
      queryClient.invalidateQueries({ querykey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateUser, isUpdating };
}
