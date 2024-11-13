/*
 * @Author: dushuai
 * @Date: 2024-03-29 18:14:56
 * @LastEditors: dushuai
 * @LastEditTime: 2024-11-13 23:43:03
 * @description: loading 组件
 */
import LoadingComp from '@/components/Loading';

export default function Loading() {

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="mt-[-60px]">
        <LoadingComp />
      </div>
    </div>
  );
}
