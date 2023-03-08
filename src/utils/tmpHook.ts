/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from 'vue';

export const useState = (v: any) => {
    const state = ref(v);
    const setState = (newVal: any) => {
        state.value = newVal;
    };

    return [state, setState];
};
