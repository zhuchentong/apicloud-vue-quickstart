<template>
  <div>
    {{test}}asdasdasdasdasdsad
  </div>
</template>

<script>
  export default {
    data() {
      return {
        test: 'aaa'
      }
    },
    mounted() {
      this.$api.setRefreshHeaderInfo({
        loadingImg: 'widget://image/refresh.png',
        bgColor: '#ccc',
        textColor: '#fff',
        textDown: '下拉刷新...',
        textUp: '松开刷新...'
      }, function (ret, err) {
        //在这里从服务器加载数据，加载完成后调用api.refreshHeaderLoadDone()方法恢复组件到默认状态

      });
      var listContact = this.$api.require('listContact')
      listContact.open({
        h: this.$api.frameHeight,
        rightBtn: [{
          color: '#8B0000',
          title: '备注'
        }],
        data: {
          common: [{
            placeholderImg: 'widget://res/img/ic/listContact.png',
            img: 'http://img1.3lian.com/gif/more/11/201206/a5194ba8c27b17def4a7c5495aba5e32.jpg',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            img: 'http://img1.3lian.com/gif/more/11/201206/a5194ba8c27b17def4a7c5495aba5e32.jpg',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            img: 'http://img1.3lian.com/gif/more/11/201206/a5194ba8c27b17def4a7c5495aba5e32.jpg',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            img: 'http://img1.3lian.com/gif/more/11/201206/a5194ba8c27b17def4a7c5495aba5e32.jpg',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            img: 'http://img1.3lian.com/gif/more/11/201206/a5194ba8c27b17def4a7c5495aba5e32.jpg',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            title: '标题'
          }, {
            placeholderImg: 'widget://res/img/ic/listContact.png',
            title: '标题'
          }]
        },
        fixedOn: this.$api.frameName
      }, function (ret, err) {
        if (ret) {
          window.alert(JSON.stringify(ret))
        } else {
          window.alert(JSON.stringify(err))
        }
      })
    },
    frames: {
      aa: {
      }
    }
  }
</script>