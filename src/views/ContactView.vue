<template>
  <MainLayout :pageTitle="pageTitle">
    <section class="bg-white dark:bg-blue-900 bg-blue-50 rounded-lg">
  <div class="py-8 lg:py-14 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-900 dark:text-white">Contact Me</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-black-500 dark:text-blue-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let me know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-blue-900 dark:text-gray-300" >Your email</label>
              <input type="email" id="email" class="shadow-sm bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-blue-900 bg-blue-50 rounded-lg border border-blue-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-blue-900 bg-blue-50 rounded-lg shadow-sm border border-blue-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-900 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send message</button>
      </form>
  </div>
</section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../components/MainLayout.vue';
import {ref} from 'vue';

// Page Title of Views
const pageTitle = 'Contact';

const contactInfo = {
  FacebookLink: 'https://web.facebook.com/javy.macabudbud.90',
  GithubLink: 'https://github.com/Myungsoo19',
};

const messagePlaceholder = 'Type your message here...';

const userMessage = ref('');
</script>
