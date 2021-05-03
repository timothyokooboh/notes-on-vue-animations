<template>
  <div class="">
    <form
      class="mx-auto w-90"
      @submit.prevent="submit"
      style="max-width: 600px"
    >
      <base-input
        type="email"
        required
        placeholder="Email address"
        labelText="Email address"
        show-label
        id="email"
        v-model="email"
      >
      </base-input>

      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          v-model="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          autocomplete=""
        />
      </div>

      <div class="form-check">
        <input
          type="checkbox"
          v-model="checked"
          class="form-check-input"
          id="exampleCheck1"
        />
        <label class="form-check-label" for="exampleCheck1"
          >Accept terms and conditions</label
        >
      </div>

      <base-button
        class="btn-primary shadow-lg rounded-pill w-100 mt-3"
        ref="myBtn"
        :disabled="hasAcceptedTerms"
        type="submit"
        id="btn-id"
      >
        submit
      </base-button>

      <!-- <button 
        type="submit" 
        class="btn btn-primary shadow-lg rounded-pill w-100 mt-3" 
        ref="myBtn"
        :disabled="hasAcceptedTerms"
      >
        Submit
      </button> -->
    </form>
  </div>
</template>

<script>
import BaseInput from "./components/BaseInput.vue";
import BaseButton from "./components/BaseButton.vue";

export default {
  components: { BaseInput, BaseButton },
  data() {
    return {
      email: "",
      password: "",
      checked: false,
    };
  },

  computed: {
    hasAcceptedTerms() {
      return this.checked ? false : true;
    },
  },

  methods: {
    submit() {
      console.log(this.email, this.password, this.checked);

      const btn = this.$refs.myBtn;
      btn.addDisabledState();

      setTimeout(() => {
        btn.removeDisabledState();
      }, 10000);
    },
  },
};
</script>

<style lang="scss" scoped></style>
