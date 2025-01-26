<template>
  <v-container>
    <v-form class="mt-16" ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="email" :rules="emailValidate" label="Email" required />
      <v-text-field v-model="password" :rules="passwordValidate" label="Пароль" type="password" required />
      <v-btn class="mt-4" color="success" :disabled="!valid" @click="validate">Войти</v-btn>
      <v-alert v-if="success" class="mt-16" type="success">
        Успешный вход
      </v-alert>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    email: '',
    password: '',
    emailValidate: [
      v => !!v || 'Email не может быть пустым',
      v => /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v) || 'Email не корректен',
    ],
    passwordValidate: [
      v => !!v || 'Пароль не может быть пустым',
      v => (v && v.length >= 6) || 'Пароль должен содержать минимум 6 знаков',
    ],
    success: false,
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.success = true;
      }
    },
  },
}
</script>
