<template>
    <div class="color-picker">
        <div class="color-picker__container">
            <button class="color-picker__btn"></button>

            <div class="color-picker__controls-wrapper">
                <div class="color-picker__control-block color-picker__control-block--hue">
                    <input
                        class="color-picker__control color-picker__control--hue"
                        ref="hue"
                        type="range"
                        min="0"
                        max="359"
                        step="1"
                        v-model="initialColor.h"
                        @change="changeHue"
                        @input="inputHue"
                    >
                </div>

                <div class="color-picker__control-block color-picker__control-block--saturation">
                    <input
                        class="color-picker__control color-picker__control--saturation"
                        ref="saturation"
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        v-model="initialColor.s"
                        @change="changeSaturation"
                        @input="inputSaturation"
                    >
                </div>

                <div class="color-picker__control-block color-picker__control-block--lightness">
                    <input
                        class="color-picker__control color-picker__control--lightness"
                        ref="lightness"
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        v-model="initialColor.l"
                        @change="changeLightness"
                        @input="inputLightness"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['initialSize', 'color'],
    data: () => ({
        
    }),
    computed: {
        initialColor() {
            return this.color;
        },
        size() {
            return this.initialSize + 'px';
        },
        btnColor() {
            return 'hsl(' + this.color.h + ',' + this.color.s + '%,' + this.color.l + '%)';
        },
    },
    methods: {
        changeHue() {
            console.log('changeHue');
        },
        inputHue() {
            console.log('inputHue');
        },
        changeSaturation() {
            console.log('changeSaturation');
        },
        inputSaturation() {
            console.log('inputSaturation');
        },
        changeLightness() {
            console.log('changeLightness');
        },
        inputLightness() {
            console.log('inputLightness');
        },
    },
}
</script>

<style scoped lang="scss">
    .color-picker {
        position: relative;
        width: v-bind(size);
        height: v-bind(size);
    }

    .color-picker__container {
        position: absolute;
        top: 0;
        right: 0;
        width: v-bind(size);
        height: v-bind(size);
        padding: 5px;
        border: 1px solid;
        border-radius: calc(v-bind(size) / 2);
        overflow: hidden;

        width: 300px;
        height: 200px;
    }

    .color-picker__btn {
        display: block;
        width: 100%;
        max-width: calc(v-bind(size) - 10px);
        min-height: calc(v-bind(size) - 10px);
        height: 100%;
        max-height: 100%;
        margin-left: auto;
        padding: 0;
        background-color: v-bind(btnColor);
        border: none;
        border-radius: calc(v-bind(size) / 2 - 5px);
    }

    .color-picker__controls-wrapper {
        position: absolute;
        top: 5px;
        left: 10px;
        z-index: -1;
    }
</style>