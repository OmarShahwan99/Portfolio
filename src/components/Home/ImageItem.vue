<template>
    <div class="image">
        <div class="bubble"></div>
        <img src="../../assets/my-photo.png" alt="my-photo"/>
    </div>
</template>

<script>

</script>

<style scoped>
.image {
    max-width: 340px;
    position: relative;
}
@media(max-width: 767px) {
    .image {
        display: none;
    }
}
.image img:first-of-type {
    width: 100%;
}
.bubble {
    content: '';
    position: absolute;
    background-color: var(--primary);
    top: 0;
    border-radius: 50%;
    width: 340px;
    height: 340px;
    opacity: 0.4;
    z-index: -1;
}
</style>