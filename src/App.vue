<template>
  <div id="app">
    <img src="./assets/logo.png">
    <editor v-model="data" placeholder="place holder" :readOnly="false" :gapp-config="config"></editor>
    <editor v-model="data" placeholder="place holder" :readOnly="true" :gapp-config="config"></editor>
    {{data}}
  </div>
</template>

<script>
import Hello from './components/Hello'
import Editor from './components/Editor'
export default {
  name: 'app',
  components: {
    Hello,
    Editor
  },
  data: () => {
    return {
      /* eslint-disable */
      data: "",
      config: {
        APP_ID: '<APP_ID>',
        CLIENT_ID: '<CLIENT_ID>',
        API_KEY: '<API_KEY>'
      }
    }
  },
  mounted () {
    let self = this
    // setTimeout(function () {
    //   self.data = "{\"ops\":[{\"insert\":\"Hello worl\\n\"}]}"
    // },1000)
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ql-editor{
  img{
    width: 300px
  }
}
</style>
