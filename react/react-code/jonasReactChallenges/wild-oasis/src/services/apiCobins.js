import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("cabins couldn't be loaded");
  }
  return data;
}
export async function addCabin(dataCabin) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([dataCabin])
    .select();
  if (error) {
    console.error(error);
    throw new Error("cabins couldn't be created");
  }
  return data
}
export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("cabins couldn't be deleted");
  }
}
