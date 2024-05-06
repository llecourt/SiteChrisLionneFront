<template>
    <div class="p-5 sm:p-8">
        <div :class="`columns-1 gap-4 sm:columns-2 md:columns-3 [&>div:not(:first-child)]:mt-4`">
            <slot></slot>
        </div>
    </div>
</template>