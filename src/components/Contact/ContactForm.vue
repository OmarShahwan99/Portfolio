<template>
    <teleport to=".app">
        <transition name="alert">
            <div @click="fieldIsEmpty = false" v-if="fieldIsEmpty" class="alert">There are empty fields!</div>
        </transition>
    </teleport>
    <form ref="formData" @submit.prevent="submitData">
        <h1>Get In Toch</h1>
        <div>
            <label for="name">Name</label>
            <input ref="enteredName" type="text" name="from_name" />
        </div>
        <div>
            <label for="email">Email</label>
            <input ref="enteredEmail" type="email" name="email_id" />
        </div>
        <div>
            <label for="phone">Phone</label>
            <input ref="enteredPhone" type="tel" name="phone_id" />
        </div>
        <div>
            <label for="name">Message</label>
            <textarea ref="enteredMsg" name="message"></textarea>
        </div>
        <base-button>SEND</base-button>
        <base-modal @close="closeModal" :open="modalIsOpen">
            <div class="modal-content">
                <div class="lds-ring" v-if="loading"><div></div><div></div><div></div><div></div></div>
                <div v-if="!error && !loading">
                    <font-awesome-icon class="icon" icon="fa-solid fa-circle-check" />
                    <p>Thank you!, Your message has been sent, I'll call you back soon</p>
                    <button class="ok" @click="closeModal">OK!</button>
                </div>
                <div v-else-if="error && !loading">
                    <font-awesome-icon class="icon" icon="fa-solid fa-circle-xmark" />
                    <p>Something went wrong!, please try again.</p>
                    <button class="ok" @click="closeModal">OK!</button>
                </div>
            </div>
        </base-modal>
    </form>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    data() {
        return {
            fieldIsEmpty: false,
            loading: false,
            modalIsOpen: false,
            error: false
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
                    this.modalIsOpen = true;
                    this.loading = true;
                    emailjs.sendForm('service_ly2x6la', 'template_w5ta5p8', this.$refs.formData, 'aUNviJt-roh6hc4Kl')
                            .then(() => {
                                this.loading = false;
                            }).catch(error => {
                                this.loading = false;
                                this.error = true
                                console.log('FAILED',error);
                            })
                    this.$refs.enteredName.value = '';
                    this.$refs.enteredEmail.value = '';
                    this.$refs.enteredPhone.value = '';
                    this.$refs.enteredMsg.value = '';
                    this.fieldIsEmpty = false;
                }
        },
        closeModal() {
            this.modalIsOpen = false
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
    height: 120px;
}
button {
    width: fit-content;
}
.modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.icon {
    font-size: 72px;
    color: var(--primary-alt);
}
.modal-content p {
    color: var(--light);
    margin: 20px 0;
}
.ok {
    text-align: center;
    color: var(--dark);
    background-color: var(--primary-alt);
    font-weight: 600;
    padding: 8px 20px;
}
.lds-ring {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 140px;
    height: 140px;
}
.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid var(--primary-alt);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--primary-alt) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}
@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>