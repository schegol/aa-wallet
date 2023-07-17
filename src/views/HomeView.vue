<template>
    <div class="app-container">
        <ColorPicker
            initialSize="55"
            colorName="color1"
        ></ColorPicker>
    </div>
</template>

<script>
import ColorPicker from '@/components/ColorPicker.vue'

export default {
    name: 'AAWallet',
    data: () => ({

    }),
    components: {
        ColorPicker,
    },
}
</script>
