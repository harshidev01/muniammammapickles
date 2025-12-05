import axios from "axios";

export async function imageUplaod(data: FormData) {
  return await await axios.post(
    "https://api.imgbb.com/1/upload",
    data
  );
}
