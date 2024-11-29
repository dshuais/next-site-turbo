'use client';

import { Button, Input, message, Calendar, Checkbox, Switch, theme } from 'antd';
import { Icon } from '@iconify-icon/react';

import HappyWrapper from '@/components/UI/HappyWrapper';

import useRouter from '@/hooks/useRouter';

import './index.scss';

export default function HomeComp() {

  const { Logout } = useRouter();

  const { token } = theme.useToken();

  console.log('token:>> ', token);

  function logout() {
    Logout();
    message.success('Logout Success');
  }

  function onMessage() {
    message.success('Hello World');
  }

  return (
    <div>
      <div className="flex justify-center items-center my-4 border border-gray-400 w-fit px-2 rounded-md">
        <Icon icon="ph:gear-fill" className="text-xl mr-1" />
        <Icon icon="mdi:github" className="text-xl mr-1" />
        <Icon icon="simple-icons:juejin" className="text-xl mr-1" />
        <Icon icon="mingcute:wechat-line" className="text-xl mr-1" />
        设置
        <Input />
        <Button type="primary" onClick={onMessage}>primary</Button>
        <Button type="link">primary</Button>
        <Checkbox>Checkbox</Checkbox>
        <Button type="primary" onClick={logout}>Logout</Button>

      </div>
      <div
        style={{
          width: 300
        }}
      >
        <Calendar fullscreen={false} />
      </div>

      <HappyWrapper>
        <Button type="primary">primary</Button>
      </HappyWrapper>

      <HappyWrapper>
        <Button type="primary">primary</Button>
        <Switch />
      </HappyWrapper>

      <div className="colorPrimary">colorPrimary</div>
    </div>
  );
}
