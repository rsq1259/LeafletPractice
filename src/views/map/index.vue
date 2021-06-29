<template>
  <div class="map">
    <div class="map-toolbar">
      <Tool @operate="operate" />
    </div>
    <div ref="map" class="map-container"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
  computed: mapState("map", ["isShowMenu"]),
  watch: {
    isShowMenu() {
      this.mapResize();
    },
  },
  created() {
    this.$nextTick(() => {
      this.initMap();
    });
  },
  methods: {
    initMap() {
      if (!this.map) {
        this.map = this.$L.map(this.$refs.map, {
          minZoom: 3,
          maxZoom: 14,
          center: [39.550339, 116.114129],
          zoom: 12,
          zoomControl: false,
          attributionControl: false,
          crs: this.$L.CRS.EPSG3857,
        });
        this.$L
          .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
          .addTo(this.map);
      }
    },
    mapResize() {
      this.map.invalidateSize(true);
    },
    operate(evt) {
      console.log(evt);
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
    height: $tool-height;
    line-height: calc(#{$tool-height} - 1px);
    z-index: 999;
    background-color: $background-light;
    min-width: 220px;
    overflow-x: auto;
    border-bottom: $border;
  }
  &-container {
    width: 100%;
    height: 100%;
  }
}
</style>
