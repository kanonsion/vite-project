<template>
    <svg
        :class="svgIcon"
        aria-hidden="true"
        v-on="$attrs">
        <use :xlink:href="iconName"/>
    </svg>
</template>

<script setup lang="ts">
    import { computed, defineProps } from 'vue'

    const props = defineProps({
        className: {
            type: String,
            default: ''
        },
        iconClass: {
            type: String,
            required: true
        }
    })
    const iconName = computed(() => `#icon-${props.iconClass}`)
    const svgIcon = computed(() => {
        if (props.className) return 'svg-icon' + props.className
        return 'svg-icon'
    })
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
