import React, { useContext } from 'react';
import Camera from '../img/cam.png';
import AddFriend from '../img/add.png';
import More from '../img/more.png';
import { Messages } from './Messages';
import { Input } from './Input';
import { ChatContext } from '../context/ChatContext';

export const Chat = () => {

  const { data } = useContext(ChatContext);
  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>{data.user?.displayName}</span>
            <div className="chatIcons">
                <img src={Camera} alt='Video Call' />
                <img src={AddFriend} alt='Add Friend' />
                <img src={More} alt='More Info' />
            </div>
        </div>
        <Messages />
        <Input />
    </div>
  )
}
