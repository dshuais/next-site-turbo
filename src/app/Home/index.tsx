'use client';

import { Button, message } from 'antd';
import { Icon } from '@iconify-icon/react';

import useRouter from '@/hooks/useRouter';

export default function HomeComp() {

  const { Logout } = useRouter();

  function logout() {
    Logout();
    message.success('Logout Success');
  }

  return (
    <div className="flex justify-center items-center my-4 border border-gray-400 w-fit px-2 rounded-md">
      <Icon icon="ph:gear-fill" className="text-xl mr-1" />
      <Icon icon="mdi:github" className="text-xl mr-1" />
      <Icon icon="simple-icons:juejin" className="text-xl mr-1" />
      <Icon icon="mingcute:wechat-line" className="text-xl mr-1" />
        设置

      <Button type="primary" onClick={logout}>Logout</Button>
    </div>
  );
}
