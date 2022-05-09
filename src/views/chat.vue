  <template>
<div>
  <div class="chat">
    <div class="chat-header">
      <div class="chat-header-title">
        <h1 class="heading">Chat with Any Partner</h1>
        </div>
      </div>
   </div>
    <div class="chat-body">
      <div v-for="message in messages" :key="message" class="chat-body-messages">
          <h3>{{message.text}}</h3>
                    <span class="mdi mdi-delete"></span>
          <span class="mdi mdi-pencil"></span>
          <p class="date">{{message.date}}</p>

       </div> 
        <div class="chat-body-input">
          <textarea name="write-message" id="text-message" cols="50" rows="5" v-model="text"></textarea>
          <button class="btn-send" id="btn-send" @click="send(e)">Send</button>
        </div> 
    </div> 
   </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex"; 
export default {
  name: "chat",
  data() {
    return{
      messages: [],
      text: "",
    }
  },
  computed: {
   ...mapGetters("messages",["getMessagesList"])
  },

  watch: {
   
  },

created() {
  this.fetchMessagesList();
},
  methods: {
    ...mapActions("messages",["fetchMessagesList"]),
    send() {
      if(this.text.length > 0) {
      this.messages.push({
        text: this.text,
        date: new Date().toLocaleString(), 
    });
    this.text = "";
      }
  }
  }
}
</script>

<style>
body{
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgb(232, 231, 229);
}
.chat-body{
    overflow: auto;
  scroll-behavior: smooth;
  width: 50%;
  height: 60vh;

}
.chat-body-messages{
  background-color: rgba(128, 128, 128, 0.5);
  padding: 5px 30px;
  width: fit-content;
  height: fit-content;
  border-radius: 25px;
  margin: 10px;

}
.chat-body-input{
  position: fixed;
  width: 50%;
  bottom: 10px;
}
.chat-body-input textarea{
 border-radius: 15px;
 padding: 10px;
}
#btn-send{
 vertical-align: top;
    border: none;
    padding: 20px;
    border-radius: 20px;
    margin: 50px 20px;
}
#btn-send:hover{
  cursor: pointer;
  background-color: rgb(172, 171, 171);
  color: white;
  transition: 0.2s ease-in-out;
}
.date{
  font-size: 10px;
  color: rgb(111, 106, 106);
}
h1,h2,h3,h4,h5,h6,p{
  color: rgb(69, 69, 103);
}

</style>
