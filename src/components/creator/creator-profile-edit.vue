<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-9">
                <h5>You can set preferred display name, create your branded profile URL and manage other personal
                    settings.</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8 col-md-7 col-12 order-2 order-md-1 mt-4 pt-2">
                <div class="rounded-md shadow">
                    <div class="p-4 border-bottom">
                        <h5 class="mb-0">Edit Profile :</h5>
                    </div>

                    <div class="p-4">
                        <form class="profile-edit">
                            <div class="row">
                                <div class="col-12 mb-4">
                                    <label class="form-label h6">Display Name</label>
                                    <input name="name" id="first" type="text" class="form-control" value="streetboyyy">
                                </div><!--end col-->

                                <div class="col-12 mb-4">
                                    <label class="form-label h6">URL</label>
                                    <div class="form-icon">
                                        <input name="url" id="superex-url" type="url" class="form-control"
                                            value="https://superex.exe/streetboyyy">
                                    </div>
                                </div><!--end col-->

                                <div class="col-12 mb-4">
                                    <label class="form-label h6">Bio</label>
                                    <textarea name="comments" id="comments" rows="3" class="form-control"
                                        placeholder="I'm a Digital Artist. Digital Art with over 3 years of experience. Experienced with all stages of the Art cycle for dynamic projects."></textarea>
                                </div><!--end col-->

                                <div class="col-12 mb-4">
                                    <label class="form-label h6">Twitter Account</label>
                                    <p class="text-muted">Link your twitter account to gain more trust on the
                                        Marketplace</p>
                                    <div class="form-icon">
                                        <input name="url" id="twitter-url" type="url" class="form-control"
                                            value="https://twitter.com/streetboyyy">
                                    </div>
                                </div><!--end col-->

                                <div class="col-12 mb-4">
                                    <label class="form-label h6">Website</label>
                                    <div class="form-icon">
                                        <input name="url" id="web-url" type="url" class="form-control"
                                            value="https://streetboyyy.com/">
                                    </div>
                                </div><!--end col-->

                                <div class="col-12 mb-4">
                                    <label class="form-label h6">Email</label>
                                    <input name="email" id="email" type="email" class="form-control"
                                        value="streetboyyy@example.com">
                                </div><!--end col-->
                            </div><!--end row-->


                            <div class="row">
                                <div class="col-12">
                                    <button type="submit" id="submit" name="send"
                                        class="btn btn-primary rounded-md">Update Profile</button>
                                </div><!--end col-->
                            </div><!--end row-->
                        </form>
                    </div>
                </div>

                <div class="rounded-md shadow mt-4">
                    <div class="p-4 border-bottom">
                        <h5 class="mb-0">Account Notifications :</h5>
                    </div>

                    <div class="p-4">
                        <div class="d-flex justify-content-between pb-4">
                            <h6 class="mb-0">When someone mentions me</h6>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="noti1">
                                <label class="form-check-label" for="noti1"></label>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between py-4 border-top">
                            <h6 class="mb-0">When someone follows me</h6>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" checked id="noti2">
                                <label class="form-check-label" for="noti2"></label>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between py-4 border-top">
                            <h6 class="mb-0">When shares my activity</h6>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="noti3">
                                <label class="form-check-label" for="noti3"></label>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between py-4 border-top">
                            <h6 class="mb-0">When someone messages me</h6>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="noti4">
                                <label class="form-check-label" for="noti4"></label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="rounded-md shadow mt-4">
                    <div class="p-4 border-bottom">
                        <h5 class="mb-0">Marketing Notifications :</h5>
                    </div>

                    <div class="p-4">
                        <div class="d-flex justify-content-between pb-4">
                            <h6 class="mb-0">There is a sale or promotion</h6>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="noti5">
                                <label class="form-check-label" for="noti5"></label>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between py-4 border-top">
                            <h6 class="mb-0">Company news</h6>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="noti6">
                                <label class="form-check-label" for="noti6"></label>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between py-4 border-top">
                            <h6 class="mb-0">Weekly jobs</h6>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" checked id="noti7">
                                <label class="form-check-label" for="noti7"></label>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between py-4 border-top">
                            <h6 class="mb-0">Unsubscribe News</h6>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" checked id="noti8">
                                <label class="form-check-label" for="noti8"></label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="rounded-md shadow mt-4">
                    <div class="p-4 border-bottom">
                        <h5 class="mb-0 text-danger">Delete Account :</h5>
                    </div>

                    <div class="p-4">
                        <h6 class="mb-0">Do you want to delete the account? Please press below "Delete" button</h6>
                        <div class="mt-4">
                            <button class="btn btn-danger">Delete Account</button>
                        </div><!--end col-->
                    </div>
                </div>
            </div><!--end col-->

            <div class="col-lg-4 col-md-5 col-12 order-1 order-md-2 mt-4 pt-2">
                <div class="card ms-lg-5">
                    <div class="profile-pic">
                        <input id="pro-img" name="profile-image" type="file" class="d-none"
                            @change="loadFile" />
                        <div class="position-relative d-inline-block">
                            <img :src="imageSrc"
                                class="avatar avatar-medium img-thumbnail rounded-pill shadow-sm" id="profile-image"
                                alt="">
                            <label class="icons position-absolute bottom-0 end-0" for="pro-img"><span
                                    class="btn btn-icon btn-sm btn-pills btn-primary"><i data-feather="camera"
                                        class="icons"></i></span></label>
                        </div>
                    </div>

                    <div class="mt-4">
                        <p class="text-muted mb-0">We recommend an image of at least 400X400. GIFs work too.</p>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import {ref} from 'vue';
import image from '../../assets/images/client/01.jpg';

const imageSrc = ref(image);
const image2 = ref(null)

const loadFile = (event) =>{
    imageSrc.value = URL.createObjectURL(event.target.files[0]);
    image2.value = document.getElementById(event.target.name)
}

</script>

<style lang="scss" scoped></style>