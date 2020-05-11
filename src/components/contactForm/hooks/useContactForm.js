import { useState, useEffect } from 'react';

const EscapeKeys = ['27', 'Escape'];
export default () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handler = ({key}) => {
      if (EscapeKeys.includes(String(key))) {
        setShowModal(null);
      }
    };
    window.addEventListener('keyup', handler);

    return () => {
      window.removeEventListener('keyup', handler);
    };
  }, []);

  return {
    name, setName,
    email, setEmail,
    message, setMessage,
    showModal, setShowModal,
    isSubmitting, setIsSubmitting,
  };
}