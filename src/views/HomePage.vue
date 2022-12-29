<template>
    <div class="home">
        <div class="container">
            <text-item></text-item>
            <image-item></image-item>
        </div>
    </div>
</template>

<script>
import TextItem from '../components/Home/TextItem';
import ImageItem from '../components/Home/ImageItem';

export default {
    components: {
        TextItem,
        ImageItem,
    }
}
</script>

<style scoped>
.home {
    height: 100%;
}
.container {
    height: 100%;
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
}
</style>