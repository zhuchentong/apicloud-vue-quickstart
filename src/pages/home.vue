<template>
  <div>
    sadfhs
    <button @click="click">this is  test</button> {{ver}}
    <ul v-if="dataHasLoaded">
      <li>引擎版本信息: {{ver}}</li>
      <li>系统类型: {{sType}}</li>
      <li>系统版本: {{sVer}}</li>
      <li>设备标识: {{id}}</li>
      <li>设备型号: {{model}}</li>
      <li>设备名称sdsd: {{name}}</li>
      <li>网络状asd态: {{cType}}</li>
      <li>主窗口asd名字: {{winName}}</li>
      <li>主窗口宽度: {{winWidth}}</li>
      <li>主窗口高度: {{winHeight}}</li>
      <li>子窗口名字: {{frameName}}</li>
      <li>子窗口宽度: {{frameWidth}}</li>
      <li>子窗口高度: {{frameHeight}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dataHasLoaded: false,
        ver: '123123asdasd'
      }
    },
    methods: {
      click () {
        this.$api.openWin({
          name: 'login',
          url: 'http://192.168.3.89:8010/auth/login.html'
        })
      }
    },
    created () {
      console.log('asdassdsd')
      this.ver = this.$api.version
      this.sType = this.$api.systemType
      this.sVer = this.$api.systemVersion
      this.id = this.$api.deviceId
      this.model = this.$api.deviceModel
      this.name = this.$api.deviceName
      this.cType = this.$api.connectionType
      this.winName = this.$api.winName
      this.winWidth = this.$api.winWidth
      this.winHeight = this.$api.winHeight
      this.frameName = this.$api.frameName || ''
      this.frameWidth = this.$api.frameWidth || ''
      this.frameHeight = this.$api.frameHeight || ''
      this.dataHasLoaded = true
    }
  }
</script>