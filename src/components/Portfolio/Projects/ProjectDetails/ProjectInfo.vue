<template>
    <h1>{{ projectInfo.title }}</h1>
    <span>Live Demo: <a target="_blank" :href="projectInfo.projectLink">{{ projectInfo.projectLink }}</a></span>
    <span>Github URL: <a target="_blank" :href="projectInfo.githubLink">{{ projectInfo.githubLink }}</a></span>
    <ul>
        <h4>Tools: </h4> 
        <li v-for="tool in projectInfo.tools" :key="tool">
            <span>{{ tool }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['projectInfo'],
}
</script>

<style scoped>
h1 {
    color: var(--primary);
    margin-bottom: 15px;
}
span {
    color: var(--light);
    display: block;
    font-size: 18px;
}
a {
    display: block;
    color: var(--primary-alt);
    font-weight: bold;
}
ul {
    list-style: none;
    margin-top: 20px;
}
h4 {
    margin-bottom: 10px;
    color: var(--light);
    font-size: 18px;
}
ul {
    max-width: 400px;
}
li {
    display: inline-block;
    margin: 0 10px 10px 0;
}
li span {
    color: var(--dark);
    background-color: var(--primary-alt);
    padding: 5px 15px;
    font-size: 12px;
}
</style>