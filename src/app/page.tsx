/*
* @Author: dushuai
* @Date: 2024-04-15 17:10:01
* @LastEditors: dushuai
* @LastEditTime: 2024-04-23 14:50:02
* @description: page
*/
import Link from 'next/link';

import HomeComp from './Home';

export default function Home() {

  return (
    <main className="Home-kja23t">
      home
      <Link className="text-pink-400 ml-2" href="/user">to user</Link>

      <HomeComp />
    </main>
  );
}
