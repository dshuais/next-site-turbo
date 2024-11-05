
/*
 * @Author: dushuai
 * @Date: 2024-04-16 14:41:04
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-19 17:47:45
 * @description: test
 */
'use client';

import dynamic from 'next/dynamic';
import { Spin } from 'antd';

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
    </div>
  );
}
