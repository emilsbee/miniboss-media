import * as i from 'types';
import { v4 as uuidv4 } from "uuid";
import { collection, query, setDoc, getDocs, CollectionReference, doc, orderBy } from "firebase/firestore";

import { db } from 'services'

export const getMedia = async (): Promise<i.Media[] | undefined> => {
  try {
    const media: i.Media[] = [];
    
    const mediaCollection = collection(db, 'media') as CollectionReference<i.Media>;
    const mediaSnapshot = await getDocs(query(mediaCollection, orderBy("title")));

    mediaSnapshot.forEach((doc) => {
      media.push({ ...doc.data(), id: doc.id });
    });

    return media;
  } catch (e) {
    console.error(e);
  }
}

export const addMedia = async (title: string): Promise<i.Media | undefined> => {
  try {
    const mediaId = uuidv4();
    const mediaToAdd = { title, downloaded: false };

    await setDoc(doc(db, "media", uuidv4()), {
      ...mediaToAdd
    });

    return { ...mediaToAdd, id: mediaId };
  } catch (e) {
    console.error(e);
  }
};
