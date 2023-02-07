<template>
    <div class="text">
        <span>Welcome!</span>
        <h1>I Am 
            <span class="typed-text">{{ typeValue }}</span>
            <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
        </h1>
        <p>I'm a frontend developer with 1 year experience, I work with Vuejs framework and i have many projects with it.</p>
        <base-button><router-link to="/contact">Contact</router-link></base-button>
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
            typeStatus: null,
            typingArray: ['Omar Shahwan.', 'a Frontend Developer.'],
            arrayIndex: 0,
            typingSpeed: 200,
            charIndex: 0,
            typingCounter: 0,
            socialIcons: [
                { icon: 'fa-facebook-f', link: 'www.facebook.com/Omar.Shahwan.X'},
                { icon: 'fa-github', link: 'github.com/OmarShahwan99?tab=repositories' },
                { icon: 'fa-telegram', link: 't.me/OmarShahwan' },
                { icon: 'fa-linkedin-in', link: 'https://www.linkedin.com/in/omar-shahwan-4b615624a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLk7RH6KuQqmnn2NP21nTEg%3D%3D' }
            ],
        }
    },
    methods: {
        typeText() {
            this.typeStatus = false;
            this.typingCounter++;
            const interval = setInterval(() => {
                this.typeValue += this.typingArray[this.arrayIndex].charAt(this.charIndex);
                this.charIndex++;
                if (this.charIndex > this.typingArray[this.arrayIndex].length) {
                    clearInterval(interval);
                    this.typeStatus = true;
                    this.arrayIndex++;
                    if (this.arrayIndex > 1) {
                        this.arrayIndex = 0;
                    }
                    if (this.typingCounter < 3) {
                        setTimeout(() => {
                            this.eraseText();
                        }, 1000)
                    }
                }
            }, this.typingSpeed)
        },
        eraseText() {
            const interval = setInterval(() => {
                this.typeStatus = false;
                this.typeValue = this.typeValue.substr(0, this.charIndex-1);
                this.charIndex--;
                if (this.charIndex <= 0) {
                    clearInterval(interval);
                    this.typeStatus = true;
                    this.charIndex = 0;
                    this.typeText();
                }
            }, this.typingSpeed / 1.5) 
        }
    },
    mounted(){
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
    font-size: 46px;
    color: var(--light);
}
@media(max-width: 767px) {
    h1 {
        font-size: 30px;
    }
}
span.cursor  {
    display: inline-block;
    margin-left: 5px;
    width: 3px;
    background-color: var(--light);
    animation: cursorBink 1s infinite;
}
span.cursor.typing {
    animation: none;
}
p {
    color: var(--p-color);
    line-height: 1.7;
    margin: 20px 0;
}
a {
    color: var(--light);
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
        background-color: var(--light);
    }
    50% {
        background-color: transparent;
    }
    99% {
        background-color: transparent;
    }
}
</style>