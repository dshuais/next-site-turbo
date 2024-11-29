'use client';

import React from 'react';
import { ConfigProvider as AntdConfigProvider, theme } from 'antd';
import { useSetState } from 'ahooks';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';

export default function ConfigProvider(props: Props) {

  const { children } = props;

  const [token, setToken] = useSetState({
    colorPrimary: '#1DA57A',
    colorLink: '#1DA57A',
    borderRadius: 6
  });

  return (
    <AntdConfigProvider
      prefixCls="turbo"
      componentSize="middle"
      locale={enUS}
      theme={{
        // 1. 单独使用暗色算法
        algorithm: theme.defaultAlgorithm,

        // 2. 组合使用暗色算法与紧凑算法
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],

        token,

        cssVar: false
      }}
    >
      {children}
    </AntdConfigProvider>
  );
}

type Props = {
  children: React.ReactNode;
}
