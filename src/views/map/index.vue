<template>
  <div class="map">
    <div class="map-toolbar">
      <Tool />
    </div>
    <div ref="map" class="map-container"></div>
  </div>
</template>

<script>
import Tool from "@/components/Tool";
export default {
  name: "Map",
  components: {
    Tool,
  },
  data() {
    return {
      map: null,
    };
  },
  created() {
    this.$nextTick(() => {
      this.initMap();
    });
  },
  methods: {
    initMap() {
      if (!this.map) {
        this.map = this.L.map(this.$refs.map, {
          minZoom: 3,
          maxZoom: 14,
          center: [39.550339, 116.114129],
          zoom: 12,
          zoomControl: false,
          attributionControl: false,
          crs: this.L.CRS.EPSG3857,
        });
        this.L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ).addTo(this.map);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
  position: relative;
  &-toolbar {
    position: absolute;
    width: 100%;
    top: 0;
    height: 42px;
    line-height: 42px;
    z-index: 999;
    background-color: #ffffff8f;
    min-width: 220px;
    overflow-x: auto;
    border-bottom: 1px solid #ece1e1;
  }
  &-container {
    width: 100%;
    height: 100%;
  }
}
</style>
