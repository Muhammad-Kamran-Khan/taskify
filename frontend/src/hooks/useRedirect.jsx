import { useEffect } from 'react';
import { useUserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

export default function useRedirect(redirectPath) {

  const {user} = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if(!user || !user.email){
      navigate(redirectPath);
    }

    //watch for changes to user, redirectPath, navigate
  }, [redirectPath, user, navigate]);
}