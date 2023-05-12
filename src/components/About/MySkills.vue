<template>
    <div class="skills">
        <h1>My Skills</h1>
        <div class="skills-content">
            <skill-item :skills="skills"></skill-item>
        </div>
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
            skills: [
                    { lang: 'HTML', precent: 90 },
                    { lang: 'CSS', precent: 80 },
                    { lang: 'JavaScript', precent: 75 },
                    { lang: 'tailwindcss', precent: 85 },
                    { lang: 'Bootstrap', precent: 85 },
                    { lang: 'React', precent: 80 },
                    { lang: 'Vujs', precent: 70 },
                    { lang: 'APIs', precent: 75 }
                ],
            
        }
    }
}
</script>

<style scoped>
@media (min-width: 991px) {
    .skills {
        flex-basis: 50%;
    }
}
.skills {
    padding: 20px;
}
h1 {
    margin-bottom: 20px;
    color: var(--light);
}
.skills-content {
    border-radius: 12px;
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