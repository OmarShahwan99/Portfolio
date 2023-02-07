<template>
    <div>
        <transition>
            <img
                v-if="index === counter"
                :src="require(`../../../../assets/${img}`)"
            />
        </transition>
    </div>
</template>

<script>
export default {
    props: ['projectImgs', 'index', 'img'],
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        slideImages() {
            setInterval(() => {
                this.counter++;
                if (this.counter >= this.projectImgs.length) {
                    this.counter = 0;
                }
            }, 2500)
        },
    },
    mounted() {
        this.slideImages();
    }
}
</script>

<style scoped>
div {
    position: relative;
    object-fit: cover;
    width: 100%;
}
img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    
}
.v-enter-from {
    transform: translateX(100%);
}
.v-enter-active {
    transition: 0.4s ease-out;
}
.v-enter-to {
    transform: translateX(0);
}
.v-leave-from {
    transform: translateX(0);
}
.v-leave-active {
    transition: 0.4s ease-in;
}
.v-leave-to {
    transform: translateX(-100%);
}
</style>