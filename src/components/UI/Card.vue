<script setup lang="ts">
interface Props {
    shadow?: string
    border?: boolean
}
withDefaults(defineProps<Props>(), {
    border: false,
})

</script>

<template>
    <div :class="`w-[95%] rounded-lg ${border && 'border'} mt-8 ${shadow && 'shadow-'+shadow}`">
        <div class="m-8">
            <slot></slot>
        </div>
    </div>
</template>