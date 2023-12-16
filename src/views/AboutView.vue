<template>
  <MainLayout :pageTitle="pageTitle">
    <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row py-14">
  <!-- content - start -->
  <div class="flex flex-col lg:flex-row">
    <div class="lg:w-1/2 lg:pr-4">
      <div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-9/12">
            <img src="../assets/jv.jpg"
                loading="lazy" alt="Photo by javy" class="h-full w-full object-cover object-center" />
        </div>
    </div>
    <div class="lg:w-1/2 lg:text-left lg:pl-4">
      <h3 class="font-semibold text-blue-900 md:text-lg mb-4   xl:text-xl">ABOUT ME</h3>
      <p class="mb-5 text-4xl text-justify text-gray-600 sm:text-2xl">
        Hi there! I'm Javy, an IT student at CPC with a passion for creating captivating web experiences.
        Over the past 3 years, I've honed my skills in web development, merging artistic flair with technical expertise.
        My journey in graphic design and user interface development has allowed me to deliver visually stunning and highly functional solutions.
      </p>
    </div>
  </div>
</section>


    <section class="skills-section">
      <h2 class="text-2xl font-semibold mb-4 text-white">Skills</h2>
      <ul class="list-disc text-white">
        <li>HTML5, CSS3, JavaScript</li>
        <li>Vue.js, React</li>
        <li>UI/UX Design</li>
        <li>Responsive Web Design</li>
        <li>Version Control (Git)</li>
      </ul>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../components/MainLayout.vue';

// Page Title of Views
const pageTitle = 'About';
</script>

<style scoped>
.job-title {
  color: #6B7280;
}

.skills-section {
  max-width: 800px;
  margin: 20px auto;
  background-color: #6B7280; /* Secondary background color */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Add any additional styling as needed */
</style>
