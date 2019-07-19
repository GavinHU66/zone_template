export default {
  bind (el, binding) {
    el.onmouseover = () => {
      if (typeof binding.value.ms !== 'undefined') {
        binding.value.ms()
      }
      if (typeof binding.value.class !== 'undefined') {
        el.classList.add(binding.value.class)
      }
    }
    el.onmouseout = () => {
      if (typeof binding.value.mo !== 'undefined') {
        binding.value.mo()
      }
      if (typeof binding.value.class !== 'undefined') {
        el.classList.remove(binding.value.class)
      }
    }
  }
}
