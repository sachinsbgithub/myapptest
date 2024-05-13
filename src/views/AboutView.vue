<template>
  <div>
    <form>
      <p>
        {{ loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in' }}
      </p>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="text" placeholder="Name" v-model="name" />
      <button type="button" @click="login(email, password)">Login</button>
      <button type="button" @click="register">Register</button>
      <button type="button" @click="logout">Logout</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { account, ID } from '@/lib/appwrite.js'

const loggedInUser = ref(null)
const email = ref('')
const password = ref('')
const name = ref('')

const login = async (email, password) => {
  await account.createEmailSession(email, password)
  loggedInUser.value = await account.get()
}

const register = async () => {
  await account.create(ID.unique(), email.value, password.value, name.value)
  login(email.value, password.value)
}

const logout = async () => {
  await account.deleteSession('current')
  loggedInUser.value = null
}
</script>
<style scoped>
form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
}
input {
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  width: 250px;
  color: darkgreen;
}
button {
  padding: 010px;
  display: block;
  width: 250px;
  margin: 5px;
  border-radius: 10px;
  background-blend-mode: color-burn;
  background: red;

  border: none;
}
</style>
