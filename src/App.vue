<template>
  <div id="app">
    <div>
      <img v-bind:class="className" src="./assets/logo.png">
      <span v-html="world"></span>
      <span v-text="world"></span> {{status?'success':'fail'}}
    </div>
    <div>
      <ul>
        <li v-for="(item,index) in list" v-bind:class="{odd:index%2}">
          <label>
            <input type="radio" name="myradio" v-model="myRadio" v-bind:value="item.price">{{item.name}}-{{item.price}}</label>
        </li>
      </ul>
      {{myRadio}}myRadio
      <p>
        <select name="mySelect" v-model="mySelect">
          <option v-for="(item,index) in list" v-bind:value="item.price">{{item.name}}</option>
        </select>
        {{mySelect}}--mySelect</p>
    </div>
    <div>
      <ol>
        <li v-for="(value,key) in obj" v-bind:style="css">
          <label>
            <input type="checkbox" name="mycheckbox" v-model="myCheckbox" v-bind:value="value">{{key}}---{{value}}</label>
        </li>
      </ol>
      {{myCheckbox}}
    </div>
    <div>
      <p>
        <input v-model="myValue" type="text">{{myValue}}</p>
      <p>myValueWithoutNum----------{{myValueWithoutNum}}</p>
    </div>
    <div>
      <button v-on:click="addItem">addItem</button>
      <a v-bind:href="link" v-text="linktitle" target="_blank" class="default"></a>
      <button v-on:click="changeStyle">change style</button>
    </div>
    <div>
      <span v-if="showflag">陈</span>
      <span v-else>国</span>
      <span v-show="showflag">华</span>
      <button v-on:click="toggleShow">toggleShow</button>
    </div>
    <componentTest v-on:my-event="onComTestMyEvent"></componentTest>
  </div>
</template>
<script>
import Vue from 'vue'
import componentTest from './components/test'
export default {
  components: {
    componentTest: componentTest
  },
  computed: {
    myValueWithoutNum: function() {
      return this.myValue.replace(/\d/g, "");
    }
  },
  watch: {
    myValue: function(val, oldVal) {
      console.log(val + "----" + oldVal);
    }
  },
  data: function() {
    return {
      myValue: '',
      myRadio: '',
      mySelect: '',
      myCheckbox: [],
      world: '<p>hello</p><img src="./assets/logo.png">',
      num: 1,
      status: false,
      link: 'https://www.baidu.com',
      linktitle: '百度一下',
      showflag: true,
      className: {
        'head-img': true,
      },
      css: {
        'font-size': '30px',
        'color': 'red'
      },
      list: [{
        name: 'apple',
        price: 34
      }, {
        name: 'banana',
        price: 99
      }, {
        name: 'orange',
        price: 22
      }, {
        name: 'pineapple',
        price: 22
      }, {
        name: 'jiba',
        price: 69
      }],
      obj: {
        name: "gg",
        gender: 'female',
        age: 18
      }
    }
  },
  methods: {
    addItem: function() {
      // this.list.push({
      //   name:'pineapple',
      //   price:"998"
      // });
      Vue.set(this.list, 1, { name: "修改后", price: "kkkk" });
    },
    changeStyle: function() {
      this.css = {
        'font-size': '20px',
        'color': 'blue'
      }
    },
    toggleShow: function() {
      this.showflag = !this.showflag;
    },
    onComTestMyEvent: function(w) {
      console.log("on my event" + w);
    }
  }


}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.head-img {
  width: 50px;
}

label {
  cursor: pointer;
}

#app>div {
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #000;
}

</style>
