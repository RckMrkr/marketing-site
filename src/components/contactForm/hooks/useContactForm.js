import { useState } from 'react';

export default () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return {
    name, setName,
    email, setEmail,
    message, setMessage,
  };
}