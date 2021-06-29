<template>
  <div class="infobar">
    <div class="info-container"></div>
  </div>
</template>

<script>
export default {
  name: "InfoBar",
  props: {
    zoom: Number,
    latlng: Object,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.infobar {
  width: 100%;
  height: 100%;
  background: $background-dark;
}
</style>
