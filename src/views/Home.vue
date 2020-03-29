<template>
  <v-container>
    <v-row>
      <v-col v-for="course in courses" :key="course.name" cols="12" sm="6" md="4">
        <CourseCard
                :course-name="course.title"
                :image="course.image"
                :language="course.language"
                :link="course.link"
        />
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
  import CourseCard from "./CourseCard";

  export default {
    name: 'Home',
    components: {CourseCard},
    data: () => ({
      courses: [
        {link: 'https://www.udemy.com/course/curso-javascript-ninja/?couponCode=ESTUDENAQUARENTENA', language: 'javascript', image: 'javascript.png', title: 'Javascript '},
        {link: 'https://www.udemy.com/course/git-e-github-ninja/?couponCode=ESTUDENAQUARENTENA/', language: 'git', image: 'git.png', title: 'Git | Github '},
        {link: 'https://www.udemy.com/course/curso-reactjs-ninja/?couponCode=ESTUDENAQUARENTENA', language: 'react', image: 'react.png', title: 'React'}
      ]
    })
  }
</script>
