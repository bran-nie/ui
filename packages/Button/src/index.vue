<template>
    <button class="x-button" @click="$emit('click', $event)" :data-name="user.name" :data-age="user.age">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
defineEmits(['click']);

interface User {
    name: string;
    age: number;
}

const user: User = {
    name: 'bran',
    age: 22,
}
</script>

<style lang="less" scoped>
.x-button {
    appearance: none;
    padding: 5px 10px;
    background: lightskyblue;
    border: none;
    border-radius: 4px;
    color: #fff;
    &:active {
        background: rgb(92, 185, 243);
    }
    &:not(:last-child) {
        margin-right: 15px;
    }
}
</style>
