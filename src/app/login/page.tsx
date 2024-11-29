/*
 * @Author: dushuai
 * @Date: 2024-04-19 10:58:39
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-23 17:56:17
 * @description: Login
 */
import { Button } from 'antd';
import LoginHandle from './components/LoginHandle';

export default function Login() {

  return (
    <div>
      login
      <LoginHandle />
      <Button type="primary">primary</Button>
      <Button type="dashed">dashed</Button>
    </div>
  );
}
