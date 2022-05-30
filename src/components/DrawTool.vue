<template>
  <div>
    <h1 class="taitll">お絵描き大喜利<br>100PON診断</h1>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@900&display=swap" rel="stylesheet">
    <h1 class="header"> お題ボタンを押して「1分」以内であなたの思った事を描いてください!<br>中の人が診断します</h1>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap" rel="stylesheet">
    <div class="text-area">
    <button class="container" @click="go">&ensp;お題&ensp;</button>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap" rel="stylesheet">
<p class="diagnose" v-if="result">{{result}}</p>
<p class="diagnose" v-if="result == 'aaa'"></p>
<p v-else-if="result == 'bbb'"></p>
<p v-else-if="result == 'ccc'"></p>
<p v-else-if="result == 'ddd'"></p>
<p v-else-if="result == 'eee'"></p>
</div>
        <div id="tool-area">
    </div>
    <div id="timer">
  <div class="timer">
  <div class="time">
  {{ formatTime }}
  </div>
  <button class="start" v-on:click="start" v-if="!timerOn">スタート </button>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">
  <button class="black" id="pen-black-button" @click="penBlack">ペン（黒）<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg></button>
        <button class="red" id="pen-red-button" @click="penRed">ペン（赤）<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg></button>
        <button class="blue" id="pen-blue-button" @click="penBlue">ペン（青）<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg></button>
        <button class="green" id="pen-green-button" @click="penGreen">ペン（緑）<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg></button> 
<button class="brown" id="pen-brown-button" @click="penBrown">ペン（茶）<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg></button>
        <button class="eraser" id="eraser-button" @click="eraser" >消しゴム <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eraser-fill" viewBox="0 0 16 16">
  <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
</svg></button> 
  <button class="clear" id="clear-button" @click="clear">全て消去</button>
  </div>
  </div>
<div class="controller history">
  <button class="back" @click="back">戻る<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg></button>
  <div class="history-box js-canvas-history" >
    <i class="fas fa-undo-alt"></i>
  </div>
</div>
<div class="contoroller history">
  <button class="next" @click="next">進む <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg></button>
  <div class="history-box js-canvas-history" >
  <i class="fas fa-redo-alt"></i>
  </div>
</div>
    <div id="canvas-area">
      <canvas id="myCanvas" class="canvas" v-bind:class="{eraser: canvasMode === 'eraser'}" width="350vw" height="500vh" @mousedown="dragStart" @mouseup="dragEnd" @mouseout="dragEnd" @mousemove="draw"></canvas>
    </div>
      <button class="download" id="download-button" @click="download">画像を保存する <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg></button>
<button class="result" @click="ResultScreen">診断の読み込みを始める <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
</svg>
</button>
</div>
</template>

<script>
export default {
  name: "DrawTool",
  data() {
    return {
      canvasMode: 'penBlack',
        canvas: null,
        context: null,
        isDrag: false,
        min: 1,
      sec: 0,
      timerOn: false,
      timerObj: null,
      weightNum: 3,
      redoDataStack: [],
      undoDataStack: [],
        list: ["90歳になったドラえもん", "こんなチョコレートは嫌だ！どんなチョコレート？", "こんなニンジンはいやだ。どんなニンジン？？", "人生10周目の赤ちゃん", "さかなクンのストレス解消方法", "こんな自動販売機は嫌だ！どんな自動販売機？", "こんなトンカツかっこいい！！どんなトンカツ？？", "あだ名が「匠」の小学生。なぜそう呼ばれている？", "木村拓哉の血を吸った蚊", "アベノマスクってこんな使い方もできるの？どんな使い方？", "アンパンマンの知られざる秘密を教えてください", "こんな犬は嫌だ！どんな犬？", "こんなカブトムシは嫌だ！どんなカブトムシ？"],
      result: null
    }
  },
  mounted(){
      this.canvas = document.querySelector('#myCanvas')
      this.context = this.canvas.getContext('2d')
      this.context.lineCap = 'round';
      this.context.lineJoin = 'round';
      this.context.lineWidth = this.weightNum
      this.context.strokeStyle = this.color
  },

    watch: {
    // 文字の太さwatch
    weightNum(val) {
      this.context.lineWidth = val;
    },
    isDrawingMode(val) {
      this.canvas.isDrawingMode = val;
    },
    },
  methods: {
    // 描画
    draw :function(e) {
      var x = e.layerX
      var y = e.layerY
      if(!this.isDrag) {
        return;
      }
      this.context.lineTo(x, y);
      this.context.stroke();
    },
    // 描画開始（mousedown）
    dragStart:function(e) {
      var x = e.layerX
      var y = e.layerY
      this.context.beginPath();
      this.context.lineTo(x, y);
      this.context.stroke();
      this.isDrag = true;
      
      //koko
      this.context.getImageData(0,0, this.canvas.width, this.canvas.height)
      this.redoDataStack = [];
      if (this.undoDataStack.length >= 10) {
        this.undoDataStack.pop();
      }
      this.undoDataStack.push(this.context.getImageData(0,0, this.canvas.width, this.canvas.height));
      //koko
    },
        back: function() {
      // 戻す配列にスタックしているデータがなければ処理を終了する
      if (this.undoDataStack.length <= 0) return;
      // やり直し用の配列に元に戻す操作をする前のCanvasの状態をスタックしておく
      this.redoDataStack.push(this.context.getImageData(0, 0, this.canvas.width, this.canvas.height));
      // 元に戻す配列の先頭からイメージデータを取得して
      let imageData = this.undoDataStack.pop();
      // 描画する
      this.context.putImageData(imageData, 0, 0);
    },
    //koko
    next: function() {
      // 戻す配列にスタックしているデータがなければ処理を終了する
      if (this.redoDataStack.length <= 0) return;
      // やり直し用の配列に元に戻す操作をする前のCanvasの状態をスタックしておく
      this.undoDataStack.push(this.context.getImageData(0, 0, this.canvas.width, this.canvas.height));
      // 元に戻す配列の先頭からイメージデータを取得して
      let imageData = this.redoDataStack.pop();
      // 描画する
      this.context.putImageData(imageData, 0, 0)
    },
    //koko

    // 描画終了（mouseup, mouseout）
    dragEnd: function() {
      this.context.closePath();
      this.isDrag = false;
    },
      clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  penBlack: function() {
    this.canvasMode = 'penBlack'
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';
    this.context.lineWidth = 3;
    this.context.strokeStyle = '#000000';
  },
  penRed: function() {
  this.canvasMode = 'penRed'
  this.context.lineCap = 'round';
  this.context.lineJoin = 'round';
  this.context.lineWidth = 3;
  this.context.strokeStyle = '#FF0000';
  },
  penBlue: function() {
  this.canvasMode = 'penBlue'
  this.context.lineCap = 'round';
  this.context.lineJoin = 'round';
  this.context.lineWidth = 3;
  this.context.strokeStyle = '#0000FF';
  },
  penGreen: function() {
  this.canvasMode = 'penGreen'
  this.context.lineCap = 'round';
  this.context.lineJoin = 'round';
  this.context.lineWidth = 3;
  this.context.strokeStyle = '#4CAF50';
  },
  penBrown: function() {
  this.canvasMode = 'penBrown'
  this.context.lineCap = 'round';
  this.context.lineJoin = 'round';
  this.context.lineWidth = 3;
  this.context.strokeStyle = '#A35100';
  },
download: function() {
    let link = document.createElement("a");
    link.href = this.canvas.toDataURL("image/png");
    link.download = 'canvas-' + new Date().getTime() + '.png';
    link.click();
},
eraser: function() {
  this.canvasMode = 'eraser'
  this.context.lineCap = 'square';
  this.context.lineJoin = 'square';
  this.context.lineWidth = 15;
  this.context.strokeStyle = '#FFFFFF';
},
  ResultScreen(){
  this.$router.push('/ResultScreen')
},
count: function() {
      if (this.sec <= 0 && this.min >= 1) {
        this.min --;
        this.sec = 59;
      } else if(this.sec <= 0 && this.min <= 0) {
        this.complete();
      } else {
        this.sec --;
      }
    },

    start: function() {
      let self = this;
      this.timerObj = setInterval(function() {self.count()}, 1000)
      this.timerOn = true; //timerがONであることを状態として保持
    },

    stop: function() {
      clearInterval(this.timerObj);
      this.timerOn = false; //timerがOFFであることを状態として保持
    },

    complete: function() {
      clearInterval(this.timerObj)
    },
    //koko//
    go: function() {
      const rnd = Math.floor(Math.random() * this.list.length);
      this.result = this.list[rnd];
    },
    //made//
    /* mycanvas: function (){
    this.displayWidth = this.canvas.clientWidth;
    this.displayHeight = this.canvas.clientHeight;
    if(this.canvas.width != this.displayWidth || 
        this.canvas.height != this.displayHeight) {
          this.canvas.width = this.displayWidth;
          this.canvas.height = this.displayHeight;
        }
    } */
  },
  computed: {
    formatTime: function() {
      let timeStrings = [
        this.min.toString(),
        this.sec.toString()
      ].map(function(str) {
        if (str.length < 2) {
          return "0" + str
        } else {
          return str
        }
      })
      return timeStrings[0] + ":" + timeStrings[1]
    }
  },
  
}


</script>



<style scoped>
#myCanvas {
border: 6px solid #9f4d06;
widows: 100%;
height: 100%;
}
.header {
font-family: 'Yusei Magic', sans-serif;
color: rgb(255, 0, 0);
}
.black {
  margin: 10px;
  background-color: black;
  color: #fff;
/*     position: relative; 
top: -830px; 
left: 1100px; */
}


.red {
  margin: 10px;
  background-color: red;
  color: #fff;

}
.blue{
  margin: 10px;
  background-color: blue;
  color: #fff;

}
.green {
  margin: 10px;
  background-color: green;
  color: #fff;
}
.brown {
  margin: 10px;
  background-color: #9f4d06;
  color: #fff;
}
.clear {
  margin: 10px;
  background-color: rgb(255, 255, 255);
}
.eraser {
  cursor: url(../assets/image/kesigomu.png) 12 12,auto;
  background-color: rgb(255, 255, 255);
color: black;


}
.taitll {
background: rgb(236,255,29);
background: linear-gradient(90deg, rgb(255, 255, 0) 21%, rgba(255, 255, 255, 0.712) 0%, rgb(255, 255, 0) 21%);
font-family: 'Noto Serif JP', serif;
  }
.result {
margin: 15px;
    font-size: 0.9em;
    padding: 30px 10px;
  border-radius: 15px 20px 10px 30px;
  border-radius: 15px 20px 15px;
  border-radius: 15px 20px;
box-shadow: 0px 0px 10px 3px #f9bee6;
border-radius: 100px;
color: rgb(235, 118, 118);
background: rgb(255, 255, 255);
}
.download {
  font-size: 0.5em;
  color: rgb(0, 0, 0);
  padding: 30px;
  background: rgb(242, 255, 0);
    border-radius: 15px 15px 15px 15px;
  border-radius: 15px 15px 15px;
  border-radius: 15px 15px
  
}
#timer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.time {
  font-size: 100px;
position: relative;
color: rgb(0, 0, 0);
font-family: 'Luckiest Guy', cursive;
margin: 10px;
}
.start {
  color: rgb(0, 0, 0);
  font-size: 2em;
  background: rgb(246,247,249);
background: radial-gradient(circle, rgba(246,247,249,1) 29%, rgba(69,219,191,1) 75%);
position: relative;

}
.back {
position: relative;
left: -40px;
top: 20px;
  color: rgb(255, 0, 0);
  background: #fff;
  -moz-border-radius: 100px;
-webkit-border-radius: 100px;
-ms-border-radius: 100px;
border-radius: 100px;
font-size: 20px;
}
.next {
  position: relative;
  top: -16px;
  left: 70px;
  color: #0000ff;
  background: #fff;
  -moz-border-radius: 100px;
-webkit-border-radius: 100px;
-ms-border-radius: 100px;
border-radius: 100px;
font-size: 20px;
}
.diagnose {
  font-size: 40px;
}
.container {
  color: #ff7700;
  background-color: rgb(255, 255, 255);
    -moz-border-radius: 100px;
-webkit-border-radius: 100px;
-ms-border-radius: 100px;
border-radius: 100px;
font-size: 50px;
}
.diagnose{
  font-family: 'Noto Serif JP', serif;
}
</style>