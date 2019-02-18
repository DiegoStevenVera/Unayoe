<template>
  <v-form v-model="valid" @submit.prevent="submit">
    <v-container>
      <v-layout>
        <v-flex
          xs12
          md12
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md12
        >
          <v-text-field
            v-model="password"
            type="password"
            :rules="passwordRules"
            :counter="10"
            label="Password"
            required
          ></v-text-field>
        </v-flex>

        <v-btn class="green" type="submit">Submit</v-btn>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      password: '',
      passwordRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }),
    methods:{
      submit(){
        console.log(`Email is ${this.email} and password is ${this.password}`)
      }
    }
  }
</script>