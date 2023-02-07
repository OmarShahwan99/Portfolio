<template>
    <teleport to=".app">
        <transition name="alert">
            <div @click="fieldIsEmpty = false" v-if="fieldIsEmpty" class="alert">There are empty fields!</div>
        </transition>
    </teleport>
    <form @submit.prevent="submitData">
        <h1>Get In Toch</h1>
        <div>
            <label for="name">Name</label>
            <input ref="enteredName" type="text" name="name" />
        </div>
        <div>
            <label for="email">Email</label>
            <input ref="enteredEmail" type="email" name="email" />
        </div>
        <div>
            <label for="phone">Phone</label>
            <input ref="enteredPhone" type="text" name="phone" />
        </div>
        <div>
            <label for="name">Message</label>
            <textarea ref="enteredMsg" name="message"></textarea>
        </div>
        <base-button>SEND</base-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            fieldIsEmpty: false,
        }
    },
    methods: {
        submitData() {
            if (
                this.$refs.enteredName.value.trim() === ''
                || this.$refs.enteredEmail.value.trim() === ''
                || this.$refs.enteredPhone.value.trim() === ''
                || this.$refs.enteredMsg.value.trim() === ''
                ) {
                    this.fieldIsEmpty = true;
                }else {
                    fetch('https://formsubmit.co/el/segawo', {
                        method: 'POST',
                        body: JSON.stringify({
                            name: this.$refs.enteredName,
                            email: this.$refs.enteredEmail,
                            phone: this.$refs.enteredPhone,
                            msg: this.$refs.enteredMsg
                        }),
                    })
                }
        }    
    }
}
</script>

<style scoped>
.alert {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: red;
    color: #fff;
    font-size: 20px;
    padding: 10px 15px;
    font-weight: 600;
}
.alert-enter-active {
    animation: alertAnimation 1s linear;
}
.alert-leave-from {
    transform: translateX(0);
}
.alert-leave-active {
    transition: .5s;
}
.alert-leave-to {
    transform: translateX(100%);
}
@keyframes alertAnimation {
    0% {
        transform: translateX(100%);
    }
    20% {
        transform: translateX(-120px);
    }
    40% {
        transform: translateX(-60px);
    }
    100% {
        transform: translateX(0);
    }
}
h1 {
    color: var(--light);
    font-size: 48px;
    text-align: center;
}
form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 60%;
}
input,
textarea {
    background: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #777;
    padding: 10px;
    transition: 0.3s;
    color: var(--light);
    font-size: 18px;
}
input:focus,
textarea:focus {
    outline: none;
    background-color: var(--dark);
}
label {
    display: block;
    color: var(--primary-alt);
    margin-bottom: 5px;
    font-weight: 600;
}
textarea {
    height: 140px;
}
button {
    width: fit-content;
}
</style>