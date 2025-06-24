<template>
    <!-- Footer Start -->
    <footer class="bg-footer">

<div class="container">
  <div class="row">
    <div class="col-12">
      <div class="footer-py-60">
        <div class="row text-center text-md-start">
          <!-- Coluna 1 - Logo -->
          <div class="col pt-2">
            <a href="#" class="logo-footer">
              <img src="../../assets/images/logo.png" alt="" height="64">
            </a>
            <p class="para-desc mb-0 mt-4">Descrição aqui.</p>
          </div>

          <!-- Coluna 2 - Clicado -->
          <div class="col pt-2">
            <h5 class="footer-head">Clicado</h5>
            <ul class="list-unstyled footer-list mt-4">
              <li v-for="item in home" :key="item">
                <router-link :to="item.link" class="text-foot">
                  <i class="uil uil-angle-right-b me-1"></i> {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Coluna 3 - Comunidade -->
          <div class="col pt-2">
            <h5 class="footer-head">Comunidade</h5>
            <ul class="list-unstyled footer-list mt-4">
              <li v-for="item in community" :key="item">
                <router-link :to="item.link" class="text-foot">
                  <i class="uil uil-angle-right-b me-1"></i> {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Coluna 4 - Perfil (nova) -->
          <div class="col pt-2">
            <h5 class="footer-head">Perfil</h5>
            <ul class="list-unstyled footer-list mt-4">
            <li v-for="item in account" :key="item">
                <router-link :to="item.link" class="text-foot">
                  <i class="uil uil-angle-right-b me-1"></i> {{ item.name }}
                </router-link>
            </li>
            </ul>
          </div>

          <!-- Coluna 5 - Newsletter -->
          <div class="col pt-2">
            <h5 class="footer-head">Newsletter</h5>
            <p class="mt-4">Se inscreva para ficar por dentro das nossas novidades</p>
            <form>
              <div class="foot-subscribe mb-3">
                <div class="form-icon position-relative">
                  <i data-feather="mail" class="fea icon-sm icons"></i>
                  <input type="email" class="form-control ps-5 rounded" placeholder="Seu e-mail" required>
                </div>
              </div>
              <div class="d-grid">
                <input type="submit" class="btn btn-soft-primary" value="Enviar">
              </div>
            </form>
          </div>
        </div><!--end row-->
      </div>
    </div>
  </div>
</div>


<div class="py-4">
    <div class="container">
        <div class="row footer-border justify-content-center text-center">
            <div class="col-xl-4 col-lg-5 col-md-6 mt-4 mt-sm-0 d-flex flex-column align-items-center">
                <ul class="list-unstyled social-icon foot-social-icon mb-0 mt-4 d-flex justify-content-center">
                    <li v-for="item in icons" :key="item" class="list-inline-item lh-1">
                        <a href="" class="rounded me-1"><i :class="item"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

        
        <div class="footer-py-30 footer-bar">
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <div class="text-sm-start">
                            <p class="mb-0">©
                                {{ date }} Clicado. Desenvolvido por <a
                                    href="https://dev.dancruz.me" target="_blank" class="text-reset">Codan</a>.
                            </p>
                        </div>
                    </div><!--end col-->

                    <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <ul class="list-unstyled footer-list text-sm-end mb-0">
                            <li class="list-inline-item mb-0"><router-link to="/privacy" class="text-foot me-2">Privacidade</router-link>
                            </li>
                            <li class="list-inline-item mb-0"><router-link to="/terms" class="text-foot me-2">Termos</router-link></li>
                            <li class="list-inline-item mb-0"><router-link to="/helpcenter-overview"
                                    class="text-foot me-2">Ajuda</router-link></li>
                            <li class="list-inline-item mb-0"><router-link to="/contact" class="text-foot">Contato</router-link></li>
                        </ul>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </div>
    </footer><!--end footer-->
    <!-- Footer End -->
</template>

<script setup>
import { ref } from 'vue';
import { account, home, community } from '@/data/links.ts'

const date = ref(new Date().getFullYear())

const icons = ref(['uil uil-facebook-f', 'uil uil-instagram', 'uil uil-linkedin', 'uil uil-dribbble', 'uil uil-twitter', 'uil uil-skype', 'uil uil-telegram', 'uil uil-tumblr', 'uil uil-whatsapp'])


</script>

<style lang="scss" scoped></style>