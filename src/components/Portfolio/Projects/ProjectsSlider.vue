<template>
    <swiper
      :spaceBetween="30"
      :autoplay="{
        duration: 3500,
      }"
      :modules="modules"
      :loop="true"
      class="mySwiper"
    >
      <swiper-slide v-for="(project, index) in projects" :key="project.title">
        <div class="project">
          <div class="image">
            <div class="overlay">
              <button @click="viewProject(index)">
                <font-awesome-icon icon="fa-solid fa-eye" class="icon" />
              </button>
            </div>
            <img  :src="require(`../../../assets/${project.imgs[0]}`)" />
          </div>
          <h1>{{ project.title }}</h1>
          <ul>
            <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
          </ul>
        </div>
      </swiper-slide>
    </swiper>
    <project-modal @close="closeModal" :open="projectIsViewed">
      <div class="project-modal">
        <div class="image-slider">
          <project-image-slider
            v-for="(img, index) in projectImgs"
            :key="img"
            :img="img"
            :projectImgs="projectImgs"
            :index="index"
          ></project-image-slider>
        </div>
        <div class="project-info">
          <project-info :projectInfo="projectInfo"></project-info>
        </div>
      </div>
    </project-modal>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProjectModal from '../ProjectModal.vue';
import ProjectInfo from './ProjectInfo.vue';
import ProjectImageSlider from './ProjectImageSlider.vue';

// import required modules
// import { Autoplay, EffectFlip, Pagination, Navigation } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProjectModal,
    ProjectInfo,
    ProjectImageSlider
  },
  data() {
    return {
      // modules: [Autoplay, EffectFlip, Pagination, Navigation],
      modules: [ Navigation, Autoplay, Pagination],
      projects: [
        {
          imgs: ['project-01.png','project-11.png', 'project-21.png', 'project-31.png'], 
          title: 'Elzero Template', 
          projectLink: "Elzero.com", githubLink: 'github.com', 
          tools: ['HTML5', 'CSS3', 'Vuejs'] 
        },
        { 
          imgs: ['project-02.png','project-12.png', 'project-22.png', 'project-32.png'], 
          title: 'Shop Template', 
          projectLink: "Shop.com", githubLink: 'github.com', 
          tools: ['HTML5', 'CSS3', 'Vuejs'] 
        },
        { 
          imgs: ['project-03.png','project-13.png', 'project-23.png', 'project-33.png'], 
          title: 'Burger Builder', 
          projectLink: "Burger.com", githubLink: 'github.com', 
          tools: ['HTML5', 'CSS3', 'React'] 
        },
      ],
      projectIsViewed: false,
      projectInfo: {},
      projectImgs: [],
    };
  },
  methods: {
    viewProject(index) {
      this.projectImgs = this.projects[index].imgs;
      console.log(this.projectImgs);
      this.projectIsViewed = true;
      this.projectInfo = {
        ...this.projects[index]
      }
    },
    closeModal() {
      this.projectIsViewed = false;
    },
  },
};
</script>

<style scoped>
.project {
  background-color: #fff;
  box-shadow: 1px 3px 8px #ccc;
  border-radius: 12px;
  text-align: left;
  
}
.image {
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  transform: translateY(200%);
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay button {
  padding: 10px 20px;
  color: var(--light);
  border: 1px solid var(--light);
  font-weight: bold;
  transition: 0.2s;
  border-radius: 50%;
}
.project .image:hover .overlay {
  transform: translateY(0);
}
.overlay button:hover {
  background-color: var(--primary-alt);
  border-color: var(--primary-alt);
}
.icon {
  font-size: 24px;
}
h1 {
  color: var(--dark-alt);
  padding: 0 30px;
  font-size: 32px;
}
ul {
  list-style: none;
  padding: 20px 30px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
ul li {
  background-color: var(--primary-alt);
  color: var(--dark);
  padding: 7px 15px;
  font-size: 14px;
  font-weight: 600;
}
.mySwiper {
  width: 100%;
  height: 100%;
  padding: 5px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-modal {
  display: flex;
  gap: 20px;
  height: 100%;
}
.image-slider {
  flex-basis: 50%;
  overflow: hidden;
}
@media (max-width: 767px) {
  .project-modal {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
  .image-slider {
    flex-basis: 100%;
  }
}
</style>
