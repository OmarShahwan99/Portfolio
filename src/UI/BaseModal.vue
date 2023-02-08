<template>
    <Teleport to="body">
        <div class="backdrop" v-if="open" @click="$emit('close')"></div>
        <transition name="modal">
            <div class="modal" v-if="open">
                <span @click="$emit('close')">X</span>
                <slot></slot>
            </div>
        </transition>
    </Teleport>
</template>

<script>
export default {
    props: ['open'],
    emits: ['close']
}
</script>

<style scoped>
.backdrop {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    z-index: 999;
}
.modal {
    background-color: var(--dark-alt);
    width: fit-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    padding: 20px;
    z-index: 1000;
}
.modal span {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: var(--primary-alt);
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
}
.modal-enter-active {
    animation: enterModal 0.4s ease-out;
}
.modal-leave-active {
    animation: leaveModal 0.4s ease-in;
}

@keyframes enterModal {
    0% {
        top: -100%;
        opacity: 0;
    }
    100% {
        top: 50%;
        opacity: 1;
    }
}

@keyframes leaveModal {
    0% {
        top: 50%;
        opacity: 1;
    }
    80% {
        top: 55%;
        opacity: 1;
    }
    100% {
        top: -100%;
        opacity: 0;
    }
}
</style>