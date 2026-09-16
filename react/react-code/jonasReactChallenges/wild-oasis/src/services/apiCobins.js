import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("cabins couldn't be loaded");
  }
  return data;
}

export async function addEditCabin(dataCabin, id) {
  const hasImagePath = dataCabin.image?.startsWith?.(supabaseUrl);
  // console.log(hasImagePath)
  // console.log(id)
  const imageName = `${Math.random()}-${dataCabin.image.name}`.replaceAll(
    "/",
    "",
  );
  // https://znxrmnqblefihdehhwvo.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const imagePath = hasImagePath
    ? dataCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //add/edit
  let query = supabase.from("cabins");

  //add
  if (!id) query = query.insert([{ ...dataCabin, image: imagePath }]);

  //edit
  if (id) query = query.update({ ...dataCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("cabins couldn't be created");
  }

  if (hasImagePath) return data;
  
  //upload image
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
