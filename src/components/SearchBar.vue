<template>
  <div>
    <input @input="onInput" placeholder="Search..." />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput(event) {
      this.$emit('searchTermChange', event.target.value);
    }
  }
};
</script>

<style scoped>
  input {
    width: 75%;
  }

  div {
    text-align: center;
    margin: 20px;
  }
</style>
