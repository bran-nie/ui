import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Hello',
    setup() {
        return () => (
            <div class='x-hello'>
                我是 - 你好 - 组件
                <div>ahdhf</div>
                <div>ahdhf</div>
                <div>ahdhf</div>
                <div>ahdhf</div>
            </div>
        );
    },
});
