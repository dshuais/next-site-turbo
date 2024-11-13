/*
 * @Author: dushuai
 * @Date: 2024-03-29 18:14:56
 * @LastEditors: dushuai
 * @LastEditTime: 2024-11-13 23:42:11
 * @description: loading 组件
 */
'use client';

import { useMemo, useState } from 'react';

import styles from '~/asstes/styles/loading.module.css';
import './index.scss';

export default function Loading() {

  const [temp] = useState(TEMP_TYPE.THREE);

  const Component = useMemo(() => {
    const comp = {
      [TEMP_TYPE.ONE]: <LoadingOne />,
      [TEMP_TYPE.TWO]: <LoadingTwo />,
      [TEMP_TYPE.THREE]: <LoadingThree />,
      [TEMP_TYPE.FOUR]: <LoadingFour />
    };

    return comp[temp];
  }, [temp]);

  return (
    Component
  );
}

// 规则循环旋转
function LoadingOne() {
  return (
    <div className={styles.loader}>
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
    </div>
  );
}

// 不规则旋转
function LoadingTwo() {
  return (
    <div className={styles['loader-two']} />
  );
}

// 粉色方块
function LoadingThree() {
  return <div className={styles['loader-three']} />;
}

// 基础 loading
function LoadingFour() {
  return <div className="dot-spinner">
    <div className="dot-spinner__dot" />
    <div className="dot-spinner__dot" />
    <div className="dot-spinner__dot" />
    <div className="dot-spinner__dot" />
    <div className="dot-spinner__dot" />
    <div className="dot-spinner__dot" />
    <div className="dot-spinner__dot" />
    <div className="dot-spinner__dot" />
  </div>;
}

/** loading 类型 */
export const TEMP_TYPE = {
  ONE: 'one',
  TWO: 'two',
  THREE: 'three',
  FOUR: 'four'
};
