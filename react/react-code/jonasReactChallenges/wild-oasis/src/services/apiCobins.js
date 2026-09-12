import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("cabins couldn't be loaded");
  }
  return data;
}
export async function addCabin(dataCabin) {
  const imageName = `${Math.random()}-${dataCabin.image.name}`.replaceAll(
    "/",
    "",
  );
  // https://znxrmnqblefihdehhwvo.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  // /cabin-002.jpg
  const imagePath = `https://znxrmnqblefihdehhwvo.supabase.co/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...dataCabin, image: imagePath }])
    .select();
  if (error) {
    console.error(error);
    throw new Error("cabins couldn't be created");
  }
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, dataCabin.image);
  if (storageError) {
    const { error } = await supabase.from("cabins").delete().eq("id", data.id);
    console.error(error);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created",
    );
  }
  return data;
}
export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("cabins couldn't be deleted");
  }
}
