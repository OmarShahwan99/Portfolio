<template>
  <div class="prjects">
    <h1>My Portfolio</h1>
    <project-card
      v-for="(project, index) in projects" :key="project.title"
      @view-project="viewProject"
      :index="index"
      :title="project.title"
      :imgs="project.imgs"
      :tools="project.tools"
    >
    </project-card>
  </div>
  <project-modal @close="closeModal" :open="projectIsViewed">
    <div class="project-modal">
      <div class="image-slider">
        <image-slider
          v-for="(img, index) in projectImgs"
          :key="img"
          :img="img"
          :projectImgs="projectImgs"
          :index="index"
        ></image-slider>
      </div>
      <div class="project-info">
        <project-info :projectInfo="projectInfo"></project-info>
      </div>
    </div>
  </project-modal>
</template>
<script>


import ProjectModal from '../ProjectModal.vue';
import ProjectInfo from './ProjectDetails/ProjectInfo.vue';
import ImageSlider from './ProjectDetails/ImageSlider.vue';
import ProjectCard from './ProjectCard.vue';

export default {
  components: {
    ProjectModal,
    ProjectInfo,
    ImageSlider,
    ProjectCard,
  },
  data() {
    return {
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
      this.projectIsViewed = true;
      this.projectInfo = {
        ...this.projects[index]
      }
      console.log(this.showedCmp);
    },
    closeModal() {
      this.projectIsViewed = false;
    },
  },
};
</script>

<style scoped>
h1 {
  width: 100%;
  text-align: left;
  color: var(--light);
  margin-bottom: 20px;
}
.prjects {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}
.project-modal {
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 100%;
}

.image-slider {
  width: 400px;
  overflow: hidden;
}
@media (max-width: 767px) {
  .image-slider {
    display: none;
  }
}
</style>
