"use client";
import React, { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../../firebase/clientApp";
import { addDoc, collection } from "firebase/firestore";

export const UploadImageComponent = () => {
  const onUploadImage = async (src: string, name: string) => {
    await addDoc(collection(db, "photos"), {
      src,
      name,
      type: "portrait",
    });
  };
  const [imgUrl, setImgUrl] = useState<null | string>(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `photos/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          onUploadImage(downloadURL, file.name);
        });
      }
    );
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <input className="text-white" type="file" />
        <button className="bg-slate-50 p-2" type="submit">
          Upload
        </button>
      </form>
      {!imgUrl && (
        <div className="outerbar text-white">
          <div className="innerbar" style={{ width: `${progresspercent}%` }}>
            {progresspercent}%
          </div>
        </div>
      )}
      {imgUrl && <img src={imgUrl} alt="uploaded file" height={200} />}
    </div>
  );
};
