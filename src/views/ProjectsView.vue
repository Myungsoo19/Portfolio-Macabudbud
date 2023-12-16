<script setup>
import MainLayout from '../components/MainLayout.vue';

// Page Title of Views
const pageTitle = 'Projects'
</script>

<template>
  <MainLayout :pageTitle="pageTitle">
  <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16  lg:flex-row py-14">
  <div class="container justify-center">
    <div class="grid grid-cols-1 justify-center object-center gap-4 md:grid-cols-3 md:gap-6 xl:gap-8">
            <!-- image - start -->
            <router-link to="/todo" href="#" class="group relative flex h-48 items-end  overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/todo.jpg"
                    loading="lazy" alt="Photo by Minh Pham"
                    class="absolute inset-0 h-full w-full object-cover object-center  transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">TODO APP</span>
            </router-link>
            <!-- image - end -->

            
            <router-link to="/jumbledwords" href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="../assets/jumbledwords.jpg"
                    loading="lazy" alt="Photo by Minh Pham"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">JUMBLED WORDS</span>
            </router-link>
    </div>
  </div>
</section>
</MainLayout>
</template>