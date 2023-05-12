<template>
    <div class="card">
        <div class="image-content">
            <img :src="require(`../../../assets/${imgs[0]}`)"/>
            <div class="buttons">
                <button @click="$emit('view-project', index)">view</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['view-project'],
    props: ['index', 'imgs'],
}
</script>

<style scoped>
.card {
    border-radius: 8px;
    max-width: 320px;
    height: 320px;
    background-color: var(--primary-alt);
}
.image-content {
    width: 100%;
    height: 100%;
    border: 15px solid var(--primary-alt);
    border-radius: 8px;
    overflow: hidden;
    position: relative;
}
.image-content img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    transition: .3s;
    object-fit: cover;
}
.image-content::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    border-radius: 8px;
    transition: 0.3s;
    opacity: 0;
}
.image-content:hover::before {
    opacity: 1;
}
.buttons {
    position: absolute;
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    transition: 0.6s;
}
.image-content:hover .buttons {
    bottom: 5px;
}

button {
    color: var(--dark-alt);
    padding: 10px 18px;
    background-color: var(--primary);
    transition: 0.3s;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
}
button:hover {
    background-color: var(--primary-alt);
}
</style>