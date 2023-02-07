<template>
  <div class="app">
    <!-- <SideBar :sidebarIsOpen="sidebarIsOpen"/>
    <MobileNavigations /> -->
    <component :is="activeComponent"></component>
    <main>
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import SideBar from './Layout/SideBar/SideBar.vue';
import MobileNavigations from './Layout/MobileNavigations/MobileNavigations.vue'

export default {
  components: {
    SideBar,
    MobileNavigations
  },
  data(){
        return {
            sidebarItems: [
                { link: '/', icon: 'fa-house', title: 'Home' },
                { link: '/about', icon: 'fa-circle-info', title: 'About' },
                { link: '/portfolio', icon: 'fa-briefcase', title: 'Portfolio' },
                { link: '/contact', icon: 'fa-envelope', title: 'Contact' },
            ],
            activeComponent: 'side-bar'
        }
    },
    mounted() {
      this.getWindowWidth()
      window.addEventListener('resize', this.getWindowWidth);
    },
    methods: {
        getWindowWidth() {
          if (window.innerWidth <= 768 ) {
            this.activeComponent = 'mobile-navigations'
          }else {
            this.activeComponent = 'side-bar'
          }
        }
    },
    provide() {
        return {
            items: this.sidebarItems,
        }
    }
}
</script>

<style>
:root {
  --background: linear-gradient(to right, #1e293b, #334155, #2c5364);
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --gray: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --p-color: #a5a7a8;
  --sidebar-width: 300px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', sans-serif;
  background-image: var(--background);
  overflow: hidden;
}
.container {
    padding-left: 15px;
    padding-right: 15px;
    max-width: 90rem;
    margin-left: auto;
    margin-right: auto;
}
button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background-color: transparent;
}
a {
  text-decoration: none;
}
.app {
  display: flex;
}
main {
  flex: 1 1 0;
  padding: 2rem;
  min-height: 100vh;
}
@media (min-width: 767px) and (max-width: 991px) {
  main {
    margin-left: 50px;
  }
}
.route-enter-active {
  animation: enterPageAnimation 1s ease-in-out;
}
.route-leave-active {
  animation: leavePageAnimation 1s ease-in-out;
}
@keyframes enterPageAnimation {
  0% {
    transform: scale(0.9) translateX(100%);
  }
  80% {
    transform: scale(0.9) translateX(0);
  }
  100% {
    transform: scale(1) translateX(0);
  }
}

@keyframes leavePageAnimation {
  0% {
    transform: scale(1) translateX(0);
    opacity: 1;
  }
  80% {
    transform: scale(0.9) translateX(0);
    opacity: 1;
  }
  100% {
    transform: scale(0.9) translateX(-100%);
    opacity: 0;
  }
}
</style>