<template>
    <div class="skill-item">
        <div class="skill" v-for="skill in skills" :key="skill.lang">
            <span class="title">{{ skill.lang }}</span>
            <span class="precent">{{ skill.precent }}%</span>
            <span class="skill-progress">
                <span
                    ref="progress"
                    :data-prog="skill.precent"
                    class="progress">
                </span>
            </span>
        </div>
    </div>
</template>

<script>
// import { animate } from 'motion';
import { animate } from 'motion';

export default {
    props: ['skills'],
    mounted() {
        this.$refs.progress.forEach(el => {
            animate(el, {width: el.dataset.prog + '%',}, {
                duration: 2
            })
        })
    }
}
</script>

<style scoped>
.skill {
    width: 100%;
    margin-bottom: 20px;
    position: relative;
}
@media (max-width: 991px) {
    .skill-item {
        flex-basis: 50%;
    }
}
.title {
    display: block;
    color: var(--dark);
    font-weight: 500;
    margin-bottom: 3px;
}
.skill-progress {
    width: 100%;
    background-color: #ccc;
    display: block;
    height: 10px;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
}
.progress {
    position: absolute;
    height: 100%;
    width: 0;
    transition: 0.2s;
    background-color: var(--primary-alt);
}
.precent {
    position: absolute;
    right: 5px;
    top: 2px;
    font-size: 14px;
    font-weight: 600;
}
</style>