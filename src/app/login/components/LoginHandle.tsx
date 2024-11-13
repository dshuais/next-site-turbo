
/*
 * @Author: dushuai
 * @Date: 2024-04-23 14:36:27
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-23 17:48:19
 * @description: login
 */
'use client';

import { message } from 'antd';
import styled from 'styled-components';

import useRouter from '@/hooks/useRouter';

const ButtonCustom = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  transition: background-color 0.2s linear;
  &:hover {
    background-color: #0056b3;
  }
`;

export default function LoginHandle() {

  const { Login } = useRouter();

  function login() {
    Login('new_token');
    message.success('Login Success');
  }

  return (
    <div>
      <ButtonCustom onClick={login}>登陆</ButtonCustom>
    </div>
  );
}
