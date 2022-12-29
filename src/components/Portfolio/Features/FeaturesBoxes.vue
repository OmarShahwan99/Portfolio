<template>
    <h1><span>Better</span> project,<br/>better <span>experiences</span></h1>
    <div class="cards">
        <feature-item :features="features"></feature-item>
    </div>
</template>

<script>
import FeatureItem from './FeatureItem.vue';

export default {
    components: {
        FeatureItem,
    },
    data() {
        return {
            features: [
                { id: 'one', title: 'Web Developer', icon: 'fa-laptop-code' },
                { id: 'two', title: 'User Testing', icon: 'fa-check-circle' },
                { id: 'three', title: 'Proplem Solving', icon: 'fa-circle-exclamation' },
                { id: 'four', title: 'Clean Code', icon: 'fa-code' }
            ]
        }
    }
}
</script>

<style scoped>
h1 {
    margin-bottom: 20px;
    font-size: 38px;
    color: var(--dark-alt);
}
@media (max-width: 767px) {
    h1 {
        font-size: 28px;
    }
}
h1 span {
    color: var(--primary-alt);
}
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}
</style>