import { App as VM } from "vue";

import {
  ElButton
} from 'element-plus'

const plugins: Array<any> = [
  ElButton
];

export const vantPlugins = {
  install: function(vm: VM) {
    plugins.forEach(item => {
      vm.component(item.name, item);
    });
  }
};
