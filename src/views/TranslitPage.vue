<template>
  <v-container>
    <v-text-field
        label="Введите текст"
        class="py-1 mt-16"
        v-model="text"
        @input="translit"
    ></v-text-field>
    <h3>Транслитерация:</h3>
    <p>{{ translitText }}</p>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      translitText: ''
    }
  },
  methods: {
    translit() {
      const dict = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
        'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
        'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
        'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': "'",
        'ы': 'y', 'ь': "'", 'э': 'e', 'ю': 'yu', 'я': 'ya'
      };
      this.translitText = this.text.split('').map(char => dict[char.toLowerCase()] || char).join('');
    }
  }
}
</script>

<style scoped lang="scss">

</style>
