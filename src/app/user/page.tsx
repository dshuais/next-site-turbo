
/*
 * @Author: dushuai
 * @Date: 2024-04-16 14:41:04
 * @LastEditors: dushuai
 * @LastEditTime: 2024-11-13 23:50:04
 * @description: test
 */
import dynamic from 'next/dynamic';
import { Spin } from 'antd';
import Link from 'next/link';

// 动态加载组件
const UserTest = dynamic(
  () => import('./users/components/UserTest'),
  {
    loading: () => <Spin /> // <div>Loading...</div>
  }
);

export default function User() {

  return (
    <div>
      user index
      <UserTest>
        <div>user test slot</div>
      </UserTest>

      <Link href={'/user/users'}>to users</Link>
    </div>
  );
}
