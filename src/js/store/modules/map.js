export default {
  namespaced: true,
  state: {
    isShowMenu: true,
    currentFileName: "",
  },
  mutations: {
    setIsShowMenu(state, status) {
      state.isShowMenu = status;
    },
    setCurrentFileName(state, status) {
      state.currentFileName = status;
    },
  },
};
