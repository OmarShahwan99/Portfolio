<template>
    <div class="image">
        <div class="bubble"></div>
        <img src="../../assets/my-photo.png" alt="my-photo"/>
        <img
            class="icon"
            v-for="icon in icons"
            :key="icon"
            :src="require(`../../assets/icons/${icon}`)"
            :class="{
                'web': icon === 'web.png',
                'js': icon === 'js.png',
                'vue': icon === 'vue.png'
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            icons: ['web.png', 'js.png', 'vue.png']
        }
    }
}
</script>

<style scoped>
.image {
    max-width: 340px;
    position: relative;
}
@media(max-width: 767px) {
    .image {
        display: none;
    }
}
.image img:first-of-type {
    width: 100%;
}
.bubble {
    content: '';
    position: absolute;
    background-color: var(--primary);
    top: 0;
    border-radius: 50%;
    width: 340px;
    height: 340px;
    opacity: 0.4;
    z-index: -1;
}
.icon {
    width: 70px;
    position: absolute;
}
.web {
    right: 22px;
    top: 10px;
    animation: movingIcons 4s linear infinite;
}
.js {
    left: -30px;
    top: 100px;
    animation: movingIcons 5s linear infinite;
}
.vue {
    top: 215px;
    right: -12px;
    animation: movingIcons 6s linear infinite;
}
@keyframes movingIcons {
    0% {
        transform: translateY(0)
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
}
</style>