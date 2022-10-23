import * as i from 'types';
import { ref, get, child, set, query, getDatabase } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

export const getMedia = async (): Promise<i.MediaList | null> => {
  try {
    const db = getDatabase();
    const snapshot = await get(query(ref(db, 'media/')));
    const snapshotPrev = await get(child(ref(db), 'media'));
    
    if (snapshot.exists()) {
      console.log(snapshot.val())
      return snapshot.val();
    } else return null;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const addMedia = async (title: string) => {
  const db = getDatabase();
  const mediaToAdd = { title, downloaded: false };
  await set(ref(db, 'media/' + uuidv4()), mediaToAdd);

  return mediaToAdd;
};
