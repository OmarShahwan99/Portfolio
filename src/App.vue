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
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --gray: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', sans-serif;
  background-color: var(--light);
}
.container {
    padding-left: 15px;
    padding-right: 15px;
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
@media (max-width: 767px) {
  main {
    padding: 2rem 0;
  }
}
/* .route-enter-from {
  opacity: 0;
  transform: translateY(100px);
} */
.route-enter-active {
  animation: enterPageAnimation 1s ease-in-out;
}
/* .route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
} */
.route-leave-active {
  animation: leavePageAnimation 1s ease-in-out;
}
/* .route-leave-to {
  opacity: 0;
  transform: translateY(-100px);
} */

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