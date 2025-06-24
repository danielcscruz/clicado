<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <div class="card shadow border-0 rounded">
                    <div class="card-body">
                        <h5 class="card-title">Introduction :</h5>
                        <p class="text-muted mt-4">It seems that only fragments of the original text remain in the Lorem
                            Ipsum texts used today. One may speculate that over the course of time certain letters were
                            added or deleted at various positions within the text.</p>

                        <h5 class="card-title mt-5">User Agreements :</h5>
                        <p class="text-muted mt-4">The most well-known dummy text is the 'Lorem Ipsum', which is said to
                            have <b class="text-danger">originated</b> in the 16th century. Lorem Ipsum is <b
                                class="text-danger">composed</b> in a pseudo-Latin language which more or less <b
                                class="text-danger">corresponds</b> to 'proper' Latin. It contains a series of real
                            Latin words. This ancient dummy text is also <b class="text-danger">incomprehensible</b>,
                            but it imitates the rhythm of most European languages in Latin script. The <b
                                class="text-danger">advantage</b> of its Latin origin and the relative <b
                                class="text-danger">meaninglessness</b> of Lorum Ipsum is that the text does not attract
                            attention to itself or distract the viewer's <b class="text-danger">attention</b> from the
                            layout.</p>
                        <p class="text-muted">There is now an <b class="text-danger">abundance</b> of readable dummy
                            texts. These are usually used when a text is <b class="text-danger">required purely</b> to
                            fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell
                            short, funny or <b class="text-danger">nonsensical</b> stories.</p>
                        <p class="text-muted">It seems that only <b class="text-danger">fragments</b> of the original
                            text remain in the Lorem Ipsum texts used today. One may speculate that over the course of
                            time certain letters were added or deleted at various positions within the text.</p>

                        <h5 class="card-title mt-5">Restrictions :</h5>
                        <p class="text-muted mt-4">You are specifically restricted from all of the following :</p>
                        <ul class="list-unstyled text-muted">
                            <li v-for="item in digital" :key="item" class="mt-2"><i data-feather="arrow-right"
                                    class="fea icon-sm me-2"></i>{{ item }}</li>
                        </ul>

                        <h5 class="card-title mt-5">Users Question & Answer :</h5>

                        <question />

                        <div class="mt-4">
                            <a href="javascript:void(0)" class="btn btn-primary rounded-md mt-2 me-2">Accept</a>
                            <a href="javascript:void(0)" class="btn btn-outline-primary rounded-md mt-2">Decline</a>
                        </div>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';
import question from '@/components/question.vue'

const digital = ref(['Digital Marketing Solutions for Tomorrow', 'Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand', 'Digital Marketing Solutions for Tomorrow', 'Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand'])


</script>

<style lang="scss" scoped></style>