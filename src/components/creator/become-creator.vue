<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="section-title text-center mb-4 pb-2">
                    <h4 class="title mb-3">Fill the form</h4>
                    <p class="text-muted mb-0 para-desc mx-auto">We are a huge marketplace dedicated to connecting great
                        artists of all Superex with their fans and unique token collectors!</p>
                </div>
            </div>
        </div>
        <div class="row justify-content-center mt-4 pt-2">
            <div class="col-lg-10">
                <div class="card p-4 rounded-md shadow">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="d-grid">
                                <p class="fw-semibold">Upload your ART here, Please click "Upload Image" Button.</p>
                                <div v-if="imageSrc === null ? 'd-none' : ''"
                                    class="preview-box d-block justify-content-center rounded-md shadow overflow-hidden bg-light text-muted p-2 text-center small">
                                    Supports JPG, PNG and MP4 videos. Max file size : 10MB.</div>
                                    <div v-else
                                    class="preview-box d-block justify-content-center rounded-md shadow overflow-hidden bg-light text-muted p-2 text-center small">
                                    <img :src="imageSrc" alt=""></div>
                                <input type="file" id="input-file" name="input-file" accept="image/*"
                                    @change="loadFile" hidden />                                    
                                <label class="btn-upload btn btn-primary rounded-md mt-4" for="input-file">Upload
                                    Image</label>
                            </div>
                        </div><!--end col-->

                        <div class="col-md-7 mt-4 mt-sm-0">
                            <div class="ms-md-4">
                                <form>
                                    <div class="row">
                                        <div class="col-12 mb-4">
                                            <label class="form-label">Display Name</label>
                                            <input name="name" id="first" type="text" class="form-control"
                                                value="streetboyyy">
                                        </div><!--end col-->

                                        <div class="col-12 mb-4">
                                            <label class="form-label">URL</label>
                                            <div class="form-icon">
                                                <input name="url" id="superex-url" type="url" class="form-control"
                                                    value="https://superex.exe/streetboyyy">
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-12 mb-4">
                                            <label class="form-label">Bio</label>
                                            <textarea name="comments" id="comments" rows="3" class="form-control"
                                                placeholder="I'm a Digital Artist. Digital Art with over 3 years of experience. Experienced with all stages of the Art cycle for dynamic projects."></textarea>
                                        </div><!--end col-->

                                        <div class="col-12 mb-4">
                                            <label class="form-label d-block">Twitter Account</label>
                                            <small class="text-muted d-block">Link your twitter account to gain more
                                                trust on the Marketplace</small>
                                            <div class="form-icon mt-3">
                                                <input name="url" id="twitter-url" type="url" class="form-control"
                                                    value="https://twitter.com/streetboyyy">
                                            </div>
                                        </div><!--end col-->

                                        <div class="col-lg-12">
                                            <button type="submit" class="btn btn-primary rounded-md">Create Your
                                                Account</button>
                                        </div><!--end col-->
                                    </div>
                                </form>
                            </div>
                        </div><!--end col-->
                    </div><!--end row-->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';


const imageSrc = ref(null)
const image = ref('')

const loadFile = (event) =>{
    imageSrc.value = URL.createObjectURL(event.target.files[0]);
    image.value = event.target.files[0];
}

</script>

<style lang="scss" scoped></style>