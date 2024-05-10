<script setup lang="ts">
interface Props {
    animated?: boolean
    shadow?: 'sm' | 'md' | 'lg' | 'xl'
    border?: boolean
}
withDefaults(defineProps<Props>(), {
    animated: false,
    shadow: 'sm',
    border: false,
})

</script>

<template>
    <div :class="`w-[95%] rounded-lg ${border && 'border'} mt-8 ${animated && 'animated'}`">
        <div class="m-8">
            <slot></slot>
        </div>
    </div>
</template>