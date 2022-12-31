<template>
    <div class="about-me">
        <h1>About Me</h1>
        <h2>I'm Omar Shahwan</h2>
        <p>I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.</p>
        <base-button>Download CV</base-button>
    </div>
</template>

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
</style>