<template>
  <v-sheet width="80%" style="position: relative; margin: auto; overflow: hidden">
    <div class="chat">

      <div class="chat-top">
        <span>Chat</span>
        <v-btn color="white" style="position: absolute; right: 0" variant="plain" icon="mdi-close" size="x-small" theme="dark"></v-btn>
      </div>

      <div class="chat-body">
        <div class="msg">
          <div class="msg-content">
            <span>isto é uma mensagem bem grande<br/>dfgdfghfhfghfghgf<br/>fghfghfghfghfgh</span>
          </div>
        </div>
        <div class="msg">
          <div class="msg-content msg-user">
            <span>isto é uma mensagem bem grande<br/>dfgdfghfhfghfghgf<br/>fghfghfghfghfgh</span>
          </div>
        </div>
        <div class="chat-status">
          <span>Chat iniciado as 00h36</span>
        </div>
        <div class="msg">
          <div class="msg-content msg-user">
            <span>olá</span>
          </div>
        </div>
        <div class="msg">
          <div class="msg-content msg-user">
            <span>olá</span>
          </div>
        </div>
        <div class="msg">
          <div class="msg-content msg-user">
            <span>olá</span>
          </div>
        </div>
        <div class="msg">
          <div class="msg-content msg-user">
            <span>olá</span>
          </div>
        </div>
        <div class="msg">
          <div class="msg-content msg-user">
            <span>olá</span>
          </div>
        </div>
        <div class="msg">
          <div class="msg-content msg-user">
            <span>olá</span>
          </div>
        </div>
      </div>

      <div class="chat-bottom">
        <v-text-field
            variant="solo"
            placeholder="Digite sua mensagem..."
            density="compact" style="margin-top: 8px"
        >
          <template v-slot:append>
            <v-icon icon="mdi-send" style="padding-right: 15px" color="#ffffff"></v-icon>
          </template>
        </v-text-field>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "ChatComponent"
}
</script>

<style scoped>
.chat {
  width: 100%;
  background-color: rgb(30,30,30);
}

.chat-top {
  width: 100%;
  height: 50px;
  background-color: rgb(30,30,30);
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.chat-top span {
  font-size: 22px;
  color: white;
}

.chat-body {
  width: 100%;
  height: 300px;
  background-color: rgb(50,50,50);
  overflow: auto;
}

.chat-status {
  margin: 6px auto;
  color: white;
  text-align: center;
  font-size: 12px;
}

.msg {
  padding: 5px 10px;
  border-radius: 5px;
}

.msg-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.msg span {
  display: inline-block;
  background-color: #adadad;
  padding: 5px 10px;
  border-radius: 5px;
  max-width: 80%;
}

.msg-user {
  align-items: flex-end !important;
}

.msg-user span {
  background-color: #525eb2;
  color: #d1d1d4;
}

.chat-body::-webkit-scrollbar {
  width: 10px;
}

.chat-body::-webkit-scrollbar-thumb {
  background-color: #ccc;
}

.chat-body::-webkit-scrollbar-thumb:hover {
  background-color: #b1b1b1;
}

.chat-body::-webkit-scrollbar-thumb:active {
  background-color: #8d8d8d;
}

.chat-body::-webkit-scrollbar-track {
  background-color: transparent;
}

.chat-body::-moz-scrollbar {
  width: 10px;
}

.chat-body::-moz-scrollbar-thumb {
  background-color: #ccc;
}

.chat-body::-moz-scrollbar-thumb:hover {
  background-color: #b1b1b1;
}

.chat-body::-moz-scrollbar-thumb:active {
  background-color: #8d8d8d;
}

.chat-body::-moz-scrollbar-track {
  background-color: transparent;
}

.chat-bottom {
  width: 100%;
  height: 50px;
}
</style>