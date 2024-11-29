/*
 * @Author: dushuai
 * @Date: 2024-11-29 10:52:39
 * @LastEditors: dushuai
 * @LastEditTime: 2024-11-29 17:10:01
 * @description: antd happy主题wrapper
 */
import React from 'react';
import { HappyProvider } from '@ant-design/happy-work-theme';

export default function HappyWrapper(props: Props) {

  const { children } = props;

  return (
    <HappyProvider>
      {children}
    </HappyProvider>
  );
}

type Props = {
  children: React.ReactNode;
}
