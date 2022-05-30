<template>
  <div>
    
    <h1 class="kan">診断完了<br>診断結果に進む👇🏻</h1>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap" rel="stylesheet">
    <div class="text-area">
    <button class="container" v-on:click.once="onClick">診断結果へ!!</button>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&family=Yuji+Boku&display=swap" rel="stylesheet"><p class="diagnose" v-if="result">{{result}}</p>
<p class="diagnose" v-if="result == 'aaa'"></p>
<p v-else-if="result == 'bbb'"></p>
<p v-else-if="result == 'ccc'"></p>
<p v-else-if="result == 'ddd'"></p>
<p v-else-if="result == 'eee'"></p>
</div>
<span v-for="(t,index) in text" :key="index" v-text="t" class="item delay-anime"></span>
<div class="loader"></div>
<img  class="picsum" src="https://picsum.photos/id/1025/300/580" alt="">
  </div>
</template>

<script >
/* import {VueLoading } from 'vue-loading-template' */
export default {
  data() {
    return {
      list: ["20PON😀", "100PON🤣", "49PON😅", "10PON🙁", "80PON😹", "30PON😾","90PON👏","🔥8192PON🔥","-10PON🤦🏻‍♀️","-30PON🤷🏼‍♂️","-100PON🥶","0PON😟"],
      result: null

    }
  },
  methods: {
    onClick: function() {
      const rnd = Math.floor(Math.random() * this.list.length);
      this.result = this.list[rnd];
    }
  },

}
</script>

<style scoped>
/* .point {
  font-size: 1.3em;
  margin: 50px;
background: linear-gradient(90deg, #af7aff, #d264eb, #ee49cf, #ff22af, #ff008a, #ff0063, #ff003b, #ff0000);
  padding: 30px 60px;
-moz-border-radius: 100px;
-webkit-border-radius: 100px;
-ms-border-radius: 100px;
border-radius: 100px;
  color: rgb(255, 255, 255);
} */
.container {
/* background: linear-gradient(90deg, #ada9d2, #8b4b9b, #e500b2, #ff008c, #ff006c, #ff3f53, #ff6e42, #ff913d); */
    font-size: 1.3em;
    padding: 30px 60px;
  border-radius: 15px 20px 10px 30px;
  border-radius: 15px 20px 15px;
  border-radius: 15px 20px;
border-radius: 15px;
box-shadow: 1px 2px 12px 1px rgba(205, 23, 20, 0.8);
color: rgb(228, 10, 10);
border: solid 10px;
text-align: center;
border-color: #2196F3 #009688 #CDDC39 #FF9800;
font-family: 'Noto Serif JP', serif;
font-family: 'Yuji Boku', serif;
  }
.diagnose {
  font-size: 40px;
color: rgb(1, 3, 53);
}

.kan {
  color: #950cbb;
font-family: 'Sawarabi Mincho', serif;
}
.picsum {
  margin: 10px;
}
</style>

