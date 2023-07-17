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
                        v-model="initialHue"
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
                        v-model="initialSaturation"
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
                        v-model="initialLightness"
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
    props: ['initialSize', 'colorName'],
    data: () => ({
        
    }),
    computed: {
        initialHue: {
            get() {
                return this.$store.state.system[this.colorName].h;
            },
            set(newValue) {
                const colorName = this.colorName;
                this.$store.dispatch('passColorHue', {newValue, colorName});
            },
        },
        initialSaturation: {
            get() {
                return this.$store.state.system[this.colorName].s;
            },
            set(newValue) {
                const colorName = this.colorName;
                this.$store.dispatch('passColorSaturation', {newValue, colorName});
            },
        },
        initialLightness: {
            get() {
                return this.$store.state.system[this.colorName].l;
            },
            set(newValue) {
                const colorName = this.colorName;
                this.$store.dispatch('passColorLightness', {newValue, colorName});
            },
        },

        saturationGradient() {
            return 'linear-gradient(to right, hsl(' + this.initialHue + ', 0%, 50%) 0%, hsl(' + this.initialHue + ', 100%, 50%) 100%)';
        },

        hueThumbColor() {
            return 'hsl(' + this.initialHue + ', 100%, 50%)';
        },
        saturationThumbColor() {
            return 'hsl(' + this.initialHue + ', ' + this.initialSaturation + '%, 50%)';
        },
        lightnessThumbColor() {
            return 'hsl(' + this.initialHue + ', 100%, ' + this.initialLightness + '%)';
        },
        
        size() {
            return this.initialSize + 'px';
        },
        btnColor() {
            return 'hsl(' + this.initialHue + ', ' + this.initialSaturation + '%, ' + this.initialLightness + '%)';
        },
    },
    methods: {

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
        position: relative;
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
        z-index: 1;
    }

    .color-picker__controls-wrapper {
        position: absolute;
        top: 5px;
        left: 10px;
        z-index: 0;
    }

    .color-picker__control-block {
        position: relative;
        width: 220px;
        height: 12px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
        border: 1px solid #000;
        border-radius: 6px;

        &:not(:last-child) {
            margin-bottom: 18px;
        }

        &--hue {
            background-image: linear-gradient(
                to right,
                hsl(0, 100%, 50%) 0%,
                hsl(36, 100%, 50%) 10%,
                hsl(72, 100%, 50%) 20%,
                hsl(108, 100%, 50%) 30%,
                hsl(144, 100%, 50%) 40%,
                hsl(180, 100%, 50%) 50%,
                hsl(216, 100%, 50%) 60%,
                hsl(252, 100%, 50%) 70%,
                hsl(288, 100%, 50%) 80%,
                hsl(324, 100%, 50%) 90%,
                hsl(359, 100%, 50%) 99.72%
            );
        }

        &--saturation {
            background-image: v-bind(saturationGradient);
        }

        &--lightness {
            background-image: linear-gradient(
                to right,
                hsl(0, 100%, 0%) 0%,
                hsl(0, 100%, 100%) 100%
            );
        }
    }

    .color-picker__control {
        position: absolute;
        top: 50%;
        left: 0;
        width: 220px;
        transform: translateY(-50%);
        -webkit-appearance: none;
        background-color: transparent;

        &:focus {
            outline: none;
        }

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
        }

        &::-ms-track {
            width: 100%;
            color: transparent;
            background-color: transparent; 
            border-color: transparent;
            cursor: pointer;
        }

        /***/
        &::-webkit-slider-thumb {
            height: 18px;
            width: 18px;
            border: none;
            border-radius: 50%;
            box-shadow: 0 4px 8px rgba(0, 0, 0, .25);
            cursor: pointer;
            -webkit-appearance: none;
        }

        &::-moz-range-thumb {
            position: relative;
            height: 18px;
            width: 18px;
            border: none;
            border-radius: 50%;
            box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
            cursor: pointer;
        }

        &::-ms-thumb {
            position: relative;
            height: 18px;
            width: 18px;
            border: none;
            border-radius: 50%;
            box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
            cursor: pointer;
        }

        &--hue {
            &::-webkit-slider-thumb {
                background-color: v-bind(hueThumbColor);
            }

            &::-moz-range-thumb {
                background-color: v-bind(hueThumbColor);
            }

            &::-ms-thumb {
                background-color: v-bind(hueThumbColor);
            }
        }

        &--saturation {
            &::-webkit-slider-thumb {
                background-color: v-bind(saturationThumbColor);
            }

            &::-moz-range-thumb {
                background-color: v-bind(saturationThumbColor);
            }

            &::-ms-thumb {
                background-color: v-bind(saturationThumbColor);
            }
        }

        &--lightness {
            &::-webkit-slider-thumb {
                background-color: v-bind(lightnessThumbColor);
            }

            &::-moz-range-thumb {
                background-color: v-bind(lightnessThumbColor);
            }

            &::-ms-thumb {
                background-color: v-bind(lightnessThumbColor);
            }
        }
    }
</style>