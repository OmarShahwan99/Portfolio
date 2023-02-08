<template>
    <div class="about-me">
        <h1>About Me</h1>
        <p>I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.</p>
        <ul>
            <span>Skills:</span>
            <li v-for="icon in icons" :key="icon">
                <img :src="require(`../../assets/icons/${icon}`)" class="icon"/>   
            </li>
        </ul>
        <base-button>Download CV</base-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            icons: ['html.png', 'css3.png', 'js-1.png', 'tailwind.png', 'vue.png', 'react.png']
        }
    }
}
</script>

<style scoped>
@media (min-width: 991px) {
    .about-me {
        flex-basis: 50%;
    }
}
@media(max-width: 991px) {
    .about-me {
        text-align: center;
    }
}
h1 {
    font-size: 38px;
    color: var(--primary-alt);
}
h2 {
    color: var(--dark-alt);
    font-size: 38px;
}
p {
    color: var(--p-color);
    line-height: 1.7;
    margin: 20px 0;
}
ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
    list-style: none;
    margin-bottom: 20px;
}
span {
    text-transform: uppercase;
    font-size: 18px;
    color: var(--primary-alt);
    font-weight: 700;
}
.icon {
    width: 40px;
}
</style>