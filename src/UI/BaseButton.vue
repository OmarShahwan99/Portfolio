<template>
    <button class="base-button">
        <slot></slot>
    </button>
</template>

<script>
export default {

}
</script>

<style scope>
.base-button {
    padding: 10px 25px;
    color: var(--dark);
    font-size: 1rem;
    font-weight: bold;
    border: 1px solid var(--dark);
    transition: 0.2s ease-out;
    position: relative;
}
.base-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: var(--primary-alt);
    transition: 0.2s ease-out;
    z-index: -1;
}
.base-button:hover {
    color: #fff;
    border-color: var(--primary-alt);
}
.base-button:hover::before {
    width: 100%;
}
</style>