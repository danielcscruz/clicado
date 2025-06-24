<template>
    <div>
      <div
        id="style-switcher"
        class="bg-light border p-3 pt-2 pb-2"
        @click="toggleSwitcher"
        :style="{ left: isOpen ? '0px' : '-189px' }"
      >
        <div class="content">
          <h6 class="title text-center">Select Your Color</h6>
          <ul class="pattern">
            <li v-for="(color, index) in colors" :key="index" class="list-inline-item">
              <!-- Change href="#" to href="javascript:void(0);" -->
              <a :class="color.class" href="javascript:void(0);" @click="setColor(color.theme)"></a>
            </li>
          </ul>
  
          <h6 class="title text-center pt-3 mb-0 border-top">Theme Option</h6>
          <ul class="text-center list-unstyled mb-0">
            <li v-for="(theme, index) in themes" :key="index" class="d-grid">
              <a href="#" :class="theme.class" @click.prevent="setTheme(theme.style)">{{ theme.label }}</a>
            </li>
          </ul>
  
          <h6 class="title text-center pt-3 mb-0 border-top">Download</h6>
          <ul class="text-center list-unstyled mb-0">
            <li>
              <a href="https://1.envato.market/superex" target="_blank" class="btn btn-sm btn-block btn-warning mt-2 w-100">Download</a>
            </li>
          </ul>
        </div>
        <div class="bottom p-0">
          <a href="#" class="settings bg-white title-bg-dark shadow d-flex align-items-center justify-content-center">
            <i class="mdi mdi-cog mdi-24px position-absolute mdi-spin text-primary"></i>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        currentColor: 'yellow',
        currentTheme: 'style',
        colors: [
          { class: 'color2', theme: 'yellow' },
          { class: 'color3', theme: 'green' },
          { class: 'color4', theme: 'red' },
          { class: 'color5', theme: 'purple' },
          { class: 'color6', theme: 'saffron' },
          { class: 'color7', theme: 'pink' }
        ],
        themes: [
          { label: 'RTL', class: 'btn btn-sm btn-block btn-primary rtl-version t-rtl-light mt-2', style: 'style-rtl' },
          { label: 'LTR', class: 'btn btn-sm btn-block btn-primary ltr-version t-ltr-light mt-2', style: 'style' },
          { label: 'RTL', class: 'btn btn-sm btn-block btn-primary dark-rtl-version t-rtl-dark mt-2', style: 'style-dark-rtl' },
          { label: 'LTR', class: 'btn btn-sm btn-block btn-primary dark-ltr-version t-ltr-dark mt-2', style: 'style-dark' },
          { label: 'Dark', class: 'btn btn-sm btn-block btn-dark dark-version t-dark mt-2', style: 'style-dark' },
          { label: 'Light', class: 'btn btn-sm btn-block btn-dark light-version t-light mt-2', style: 'style' }
        ]
      };
    },
    computed: {
      colorOption() {
        return `../src/assets/css/colors/${this.currentColor}.css`;
      },
      themeOption() {
        return `../src/assets/css/${this.currentTheme}.css`;
      }
    },
    methods: {
      toggleSwitcher() {
        this.isOpen = !this.isOpen;
      },
      setColor(theme) {
        this.currentColor = theme;
        // Uncomment below line if you want to close the switcher after selecting color
        this.toggleSwitcher();
      },
      setTheme(theme) {
        this.currentTheme = theme;
        // Uncomment below line if you want to close the switcher after selecting theme
        this.toggleSwitcher();
      }
    }
  };
  </script>
  
  <style lang="scss" scoped></style>
  