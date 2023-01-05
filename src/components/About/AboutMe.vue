<template>
    <div class="about-me">
        <h1>About Me</h1>
        <p>I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.</p>
        <ul>
            Skills:
            <li v-for="icon in icons" :key="icon">
                <font-awesome-icon :icon="['fab', icon]" class="icon"/>
            </li>
        </ul>
        <base-button>Download CV</base-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            icons: ['fa-html5', 'fa-css3', 'fa-bootstrap', 'fa-vuejs', 'fa-react'],
        }
    }
}
</script>

<style scoped>
.about-me {
    flex-basis: 50%;
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
    color: #777;
    line-height: 1.7;
    margin: 20px 0;
}
ul {
    display: flex;
    gap: 15px;
    list-style: none;
    margin-bottom: 20px;
}
.icon {
    color: var(--dark-alt);
    font-size: 22px;
}
</style>