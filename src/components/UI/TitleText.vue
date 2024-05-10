<script setup lang="ts">
interface Props {
    animated?: boolean
    text?: string
}

const props = withDefaults(defineProps<Props>(), {
    animated: false,
})

</script>

<template>
    <p class="mt-4 font-bold text-3xl mb-4 text-neutral-900 text-center md:text-left overflow-hidden">
        <p :class="animated && 'text-reveal'"><slot></slot></p>
    </p>
</template>