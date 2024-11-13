import { useRouter as useNextRouter, useSearchParams } from 'next/navigation';

import { useAppStore, useSelector } from '@/store';

export default function useRouter() {
  const router = useNextRouter();
  const redirect = useSearchParams().get('redirect');
  const { SET_TOKEN, REMOVE_TOKEN } = useAppStore(useSelector(['SET_TOKEN', 'REMOVE_TOKEN']));

  function Login(token: string) {
    SET_TOKEN(token);
    router.replace(redirect || '/');
  }

  function Logout() {
    REMOVE_TOKEN();
    router.replace('/login');
  }

  function Replace(path: string) {
    router.replace(path || '/');
  }

  return {
    Login,
    Logout,
    Replace
  };
}