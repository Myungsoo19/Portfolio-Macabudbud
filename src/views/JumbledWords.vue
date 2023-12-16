<template>
    <div id="app" class="game-arena">
      <div v-if="wordData.length > 0" class="game-container">
        <h1 class="game-title">Jumble Words</h1>
        <div v-for="(word, index) in wordData" :key="index" class="word">
          <span v-if="!word.isCorrect" class="jumbled-word">{{ word.jumbled }}</span>
          <input v-model="word.userAnswer" @input="checkAnswer(word, index)" v-if="!word.isCorrect" class="answer-input" />
          <span v-if="word.isCorrect" class="correct-answer">Correct!</span>
          <span v-if="word.userAnswer && !word.isCorrect" class="wrong-answer">Wrong!</span>
        </div>
        <button @click="nextSet" v-if="!allSetsCompleted" class="next-button">Next</button>
        <div v-else>
          <p class="congrats-message">Congratulations! You completed all sets.</p>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        allWords: [
          "apple", "banana", "orange", "grape", "kiwi", "lemon", "lime", "cherry", "blueberry", "strawberry",
          "watermelon", "pineapple", "melon", "peach", "plum", "apricot", "pear", "nectarine", "mango", "coconut",
          "computer", "programming", "developer", "keyboard", "mouse", "algorithm", "database", "server", "website", "internet",
          "mountain", "ocean", "forest", "desert", "river", "lake", "cloud", "rainbow", "sunshine", "moon",
          "dog", "cat", "elephant", "lion", "tiger", "zebra", "giraffe", "penguin", "dolphin", "whale",
          "book", "pen", "pencil", "paper", "notebook", "library", "reading", "writing", "author", "novel",
          "music", "guitar", "piano", "drums", "singer", "song", "concert", "dance", "artist", "band",
          // ... add more words ...
        ],
        wordData: [],
        currentSetIndex: 0,
        totalSets: 3,
      };
    },
    created() {
      this.shuffleWords();
    },
    computed: {
      allSetsCompleted() {
        return this.currentSetIndex === this.totalSets;
      },
    },
    methods: {
      shuffleWords() {
        const shuffledWords = this.allWords.slice().sort(() => Math.random() - 0.5);
        this.wordData = shuffledWords.slice(this.currentSetIndex * 10, (this.currentSetIndex + 1) * 10).map((word) => ({
          original: word,
          jumbled: this.shuffleWord(word),
          userAnswer: "",
          isCorrect: false,
        }));
      },
      shuffleWord(word) {
        return word.split("").sort(() => Math.random() - 0.5).join("");
      },
      checkAnswer(word, index) {
        word.isCorrect = word.userAnswer.toLowerCase() === word.original.toLowerCase();
      },
      nextSet() {
        if (this.currentSetIndex < this.totalSets - 1) {
          this.currentSetIndex++;
          this.shuffleWords();
        }
      },
    },
  };
  </script>
  
  <style scoped>
.game-arena {
  background-color: #f0f0f0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.game-title {
  text-align: center;
  color: #333;
}

.word {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.jumbled-word {
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
}

.answer-input {
  padding: 5px;
  font-size: 16px;
}

.correct-answer {
  color: green;
  margin-left: 10px;
}

.wrong-answer {
  color: red;
  margin-left: 10px;
}

.next-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.next-button:hover {
  background-color: #2980b9;
}

.congrats-message {
  text-align: center;
  color: #27ae60;
  font-size: 18px;
  font-weight: bold;
}
</style>
  