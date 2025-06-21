import { db } from "../firebase"
import { ref, query, orderByChild, equalTo, get } from 'firebase/database';

export const getChildByChildId = async (childId) => {
  try {
    const childrenRef = ref(db, 'children');
    const q = query(childrenRef, orderByChild('childId'), equalTo(childId));

    const snapshot = await get(q);

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error searching child:', error);
    throw error;
  }
};
