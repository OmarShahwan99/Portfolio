<template>
    <div class="text">
        <span>Welcome!</span>
        <h1>I Am a 
            <span class="typed-text">{{ typeValue }}</span>
            <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
        </h1>
        <p>I'm a frontend developer with 1 year experience, I work with Vuejs framework and i have many projects with it.</p>
        <base-button>Contact</base-button>
        <ul class="social-icons">
            <social-icons 
                v-for="socialIcon in socialIcons"
                :key="socialIcon.icon"
                :icon="socialIcon.icon"
                :link="socialIcon.link"
            ></social-icons>
        </ul>
    </div>
</template>

<script>
import SocialIcons from './SocialIcons.vue';

export default {    
    components: {
        SocialIcons,
    },
    data() {
        return {
            typeValue: '',
            typeStatus: false,
            text: 'Frontend Developer.',
            typingSpeed: 200,
            charIndex: 0,
            socialIcons: [
                { icon: 'fa-facebook-f', link: 'www.facebook.com/Omar.Shahwan.X'},
                { icon: 'fa-github', link: 'github.com/OmarShahwan99?tab=repositories' },
                { icon: 'fa-telegram', link: 't.me/OmarShahwan' },
                { icon: 'fa-linkedin-in', link: '' }
            ],
        }
    },
    methods: {
        typeText() {
            const interval = setInterval(() => {
                this.typeValue += this.text.charAt(this.charIndex);
                this.charIndex++;
                if (this.charIndex > this.text.length) {
                    clearInterval(interval);
                    this.typeStatus = true;
                }
            }, this.typingSpeed)
        }
    },
    created(){
        this.typeText();
    }
}
</script>

<style scoped>
.text {
    flex-basis: 50%;
    position: relative;
}

.text::before {
    content: '';
    position: absolute;
    background-color: var(--primary);
    top: -100px;
    border-radius: 50%;
    width: 340px;
    height: 340px;
    opacity: 0.4;
    z-index: -1;
    display: none;
}
@media (max-width: 767px) {
    .text {
        flex-basis: 100%;
        text-align: center;
    }
    .text::before {
        display: block;
    }
}
@media(max-width: 478px) {
    .text::before {
        width: 240px;
        height: 240px;
    }
}
span {
    text-transform: uppercase;
    font-weight: 700;
    color: var(--primary-alt);
}
h1 {
    font-size: 38px;
    color: var(--dark-alt);
    margin: 0.5rem 0;
}
@media(max-width: 767px) {
    h1 {
        font-size: 30px;
    }
}
span.cursor  {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: var(--dark);
    animation: cursorBink 1s infinite
}
span.cursor.typing {
    animation: none;
}
p {
    color: #777;
    line-height: 1.7;
    margin-bottom: 0.5rem;
}
ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

@media(max-width: 767px) {
    ul {
        justify-content: center;
    }
}

@keyframes cursorBink {
    49% {
        background-color: var(--dark);
    }
    50% {
        background-color: transparent;
    }
    99% {
        background-color: transparent;
    }
}
</style>