<template>
    <div>
        <x-button @click="onClick(1)">第一个</x-button>
        <x-button @click="onClick(2)">第二个</x-button>
        <x-button @click="onClick(3)">第三个</x-button>
    </div>
</template>

<script lang="ts" setup>
const onClick = (num: number) => {
    console.log(`我是第 ${num} 个自定义按钮`);
};
</script>
