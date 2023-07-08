<template>
    <div class="app-container">
        <ColorPicker
            initialSize="55"
            :color="color"
        ></ColorPicker>
    </div>
</template>

<script>
import ColorPicker from '@/components/ColorPicker.vue'

export default {
    name: 'AAWallet',
    data: () => ({
        color: {
          h: 250,
          s: 100,
          l: 50
        },
    }),
    components: {
        ColorPicker,
    }
}
</script>
