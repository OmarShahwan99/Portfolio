<template>
    <div class="skills">
        <skill-item :skills="skills"></skill-item>
    </div>
</template>

<script>
import SkillItem from './SkillItem.vue';

export default { 
    components: {
        SkillItem,
    },
    data() {
        return {
            skills: {
                one: [
                    { lang: 'HTML', precent: 90 },
                    { lang: 'CSS', precent: 80 },
                    { lang: 'JavaScript', precent: 75 }],
                two: [
                    { lang: 'tailwindcss', precent: 85 },
                    { lang: 'Vujs', precent: 80 },
                    { lang: 'React', precent: 50 }
                ]
            } 
        }
    },
}
</script>

<style scoped>
.skills {
    flex-basis: 50%;
    background-color: #fff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 1px 3px 8px #ccc;
    display: flex;
    flex-direction: column;
}
@media (max-width: 991px) {
    .skills {
        width: 100%;
        flex-direction: row;
        gap: 20px;
    }
    .skill-item {
        flex-basis: 50%;
    }
}
@media (max-width: 767px) {
    .skills {
        flex-direction: column;
        gap: 0;
    }
}

</style>