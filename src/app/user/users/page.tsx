/*
 * @Author: dushuai
 * @Date: 2024-04-16 16:08:44
 * @LastEditors: dushuai
 * @LastEditTime: 2024-11-13 23:51:01
 * @description: 心平气和
 */
import Link from 'next/link';
import React from 'react';

export default function UserUsers() {
  return (
    <div>
      user users

      <Link href={'/user/about'}>to about</Link>
    </div>
  );
}
