<template>
  <div>
    <div class="middle-row">
        
        <img :src="scenes.all[selectedSceneIndex].src" title="sceneImage"/> 
      </div>
      <div class="middle-row"  >
        <p title="selectedText"> {{scenes.all[selectedSceneIndex].text}} </p>
      </div> 
    
  <div class="options">
      <ul>
       <li v-for="option in scenes.all[selectedSceneIndex].options">
         <button @click="goToNewScene(option.optionIndex)" >{{option.optionText}}</button>
         </li>
         <button @click="goToNewScene(0)" >Go Home</button> 
      </ul>       
  </div>
  </div>
</template>

<script>
import scenes from '../data/scenes';

export default {
  name: 'HelloWorld',
  data(){
    return {
    scenes,   
    selectedSceneIndex: 0,
  };
},
methods:{
  goToNewScene(newSceneIndex)
  {
    this.selectedSceneIndex = newSceneIndex;
  }
},
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
