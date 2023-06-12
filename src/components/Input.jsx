import React, { useContext, useState } from 'react';
import Img from './../img/img.png';
import Attach from './../img/attach.png';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { Timestamp, updateDoc, arrayUnion, doc, serverTimestamp } from 'firebase/firestore';
import { v4 as uuid } from "uuid";
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export const Input = () => {

    const [text, setText] = useState("");
    const [image, setImage] = useState(null);

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async() => {
        if(image) {

            const storageRef = ref(storage, uuid());

            await uploadBytesResumable(storageRef, image).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    await updateDoc(doc(db, "chats", data.chatId), {
                      messages: arrayUnion({
                        id: uuid(),
                        text,
                        senderId: currentUser.uid,
                        date: Timestamp.now(),
                        img: downloadURL,
                      }),
                    });
                  });
                }
              );

        }else {
            await updateDoc(doc(db, "chats", data.chatId),{
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId:currentUser.uid,
                    date: Timestamp.now(),
                })
            })
        }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]:{
                text
            },
            [data.chatId + ".date"]: serverTimestamp(),
        })

        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]:{
                text
            },
            [data.chatId + ".date"]: serverTimestamp(),
        })

        setText("");
        setImage(null);
    }

    return (
        <div className='input'>
            <input type='text' placeholder='Type Something...' onChange={e=>setText(e.target.value)} value={text} />
            <div className="send">
                <img src={Attach} alt="Attach Doc" />
                <input type="file" id='file' style={{display:"none"}} onChange={e=>setImage(e.target.files[0])} />
                <label htmlFor='file'>
                    <img src={Img} alt="media" />
                </label>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}
