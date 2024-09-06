<template>
    <div class="ml-[0%] lg:ml-sidebar-margin w-full sticky-footer">
        <slot></slot>
    </div>
</template>

<style>
.sticky-footer {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
}
</style>