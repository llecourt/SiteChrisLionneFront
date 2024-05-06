<script setup lang="ts">
interface Props {
    animated?: boolean
    shadow?: 'sm' | 'md' | 'lg' | 'xl'
}
withDefaults(defineProps<Props>(), {
    animated: false,
    shadow: 'sm',
})

</script>

<template>
    <div :class="`bg-white w-[95%] shadow-${shadow} mt-8 ${animated ? 'animated' : ''}`">
        <div class="m-8">
            <slot></slot>
        </div>
    </div>
</template>