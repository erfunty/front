import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEditCabin } from "../../services/apiCobins";
import toast from "react-hot-toast";

export function useAddCabin() {
  const queryClient = useQueryClient();
  const { mutate: addCabin, isLoading: isCreating } = useMutation({
    mutationFn: addEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return{addCabin,isCreating}
}
