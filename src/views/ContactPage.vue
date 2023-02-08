<template>
    <div class="contact">
        
        <div class="container">
            <ul>
                <social-icons
                    v-for="icon in socialIcons"
                    :key="icon.icon"
                    :icon="icon.icon"
                    :link="icon.link"
                ></social-icons>
            </ul>
            <contact-form></contact-form>
        </div>
    </div>
</template>

<script>
import ContactForm from '../components/Contact/ContactForm.vue';
import SocialIcons from '../components/Contact/SocialIcons.vue';

export default {
    components: {
        ContactForm,
        SocialIcons,
    },
    data() {
        return {
            socialIcons: [
                { icon: 'fa-facebook-f', link: 'www.facebook.com/Omar.Shahwan.X'},
                { icon: 'fa-github', link: 'github.com/OmarShahwan99?tab=repositories' },
                { icon: 'fa-telegram', link: 't.me/OmarShahwan' },
                { icon: 'fa-linkedin-in', link: 'www.linkedin.com/in/omar-shahwan-4b615624a/' }
            ]
        }
    }
}
</script>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    gap: 40px;
    align-items: center;
}
ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
}
</style>