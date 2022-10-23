import * as i from 'types';
import { v4 as uuidv4 } from "uuid";
import { collection, query, where, getDocs, CollectionReference } from "firebase/firestore";

import { db } from 'services'

export const getMedia = async (): Promise<i.Media[]> => {
  const media: i.Media[] = [];
  const mediaCollection = collection(db, 'media') as CollectionReference<i.Media>;
  const getMediaQuery = query(mediaCollection);
  const mediaSnapshot = await getDocs(getMediaQuery);
  mediaSnapshot.forEach((doc) => {
    media.push({ ...doc.data(), id: doc.id });
  });
  return media;
  
    
  // await updateDoc(docRef, "field", 'value');
  // try {
  //   const snapshot = await get(query(ref(db, 'media/')));
  //   const snapshotPrev = await get(child(ref(db), 'media'));
  //   console.log('runs');
    
  //   if (snapshot.exists()) {
  //     return snapshot.val();
  //   } else return null;
  // } catch (e) {
  //   console.error(e);
  //   return null;
  // }
}

export const addMedia = async (title: string) => {
  const mediaToAdd = { title, downloaded: false };
  // await set(ref(db, 'media/' + uuidv4()), mediaToAdd);

  return mediaToAdd;
};
