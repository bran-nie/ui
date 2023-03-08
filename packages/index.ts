/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { BranPlugin } from './Bran';
import { InputPlugin } from './Input';
import { HelloPlugin } from './Hello';
import { ZzjPlugin } from './Zzj';
import { SelectPlugin } from './Select';
import { BoltCutPlugin } from './BoltCut';
import { TkPlugin } from './Tk';

const MakeXPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    BranPlugin.install?.(app);
    InputPlugin.install?.(app);
    HelloPlugin.install?.(app);
    ZzjPlugin.install?.(app);
    SelectPlugin.install?.(app);
    BoltCutPlugin.install?.(app);
    TkPlugin.install?.(app);
  },
};

export default MakeXPlugin;

export * from './Button'
export * from './Bran'
export * from './Input'
export * from './Hello'
export * from './Zzj'
export * from './Select'
export * from './BoltCut'
export * from './Tk'