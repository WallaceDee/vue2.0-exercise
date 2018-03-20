<template>
  <div class="exercise">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <button v-on:click="message='This is my first  page with vuejs'">Change message</button>
    <span v-bind:id="message">这里绑定了id</span>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      message: '这是我的第一个vue页面'
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  },
  created: function() {
    // `this` 指向 vm 实例
    console.log('message is: ' + this.message)
  }
}
</script>
<style scoped>
p {
  color: blue;
}

</style>
