// pages/ChildPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChildProfile from './ChildProfile';
import { getChildByChildId } from '../utils/findUser';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import VaccineModal from './UpdateForm';
import { ref, set } from 'firebase/database';

function ChildPage() {
  const { id } = useParams(); // ✅ dynamic param from route
  const [childData, setChildData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  
  function onOpen()
  {
    setIsOpen(true)
  }
  function onClose(){
    setIsOpen(false)
  }
  const handleVaccineSubmit = (updatedVaccines) => {
  if (!childData) return;

  const childId = Object.keys(childData)[0];
  const updatedChildData = {
    ...childData[childId],
    vaccinations: updatedVaccines,
  };

  // Push updated data to Firebase
  set(ref(db, "children/" + childId), updatedChildData)
    .then(() => {
      console.log("✅ Vaccination data updated!");
      setChildData({ [childId]: updatedChildData }); // local state update
      setIsOpen(false);
    })
    .catch((error) => {
      console.error("❌ Error updating vaccination data:", error);
    });
};


  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const fetch = async () => {
      const result = await getChildByChildId(id);
      setChildData(result);
    };
    fetch();
  }, [id]);

  return (
    <div>
    {
      user &&
      <button onClick={onOpen}>Update profile</button>
    }
      <ChildProfile data={childData} />
      <VaccineModal isOpen={isOpen} onClose={onClose} onSubmit={handleVaccineSubmit} />
    </div>
  );
}

export default ChildPage;
