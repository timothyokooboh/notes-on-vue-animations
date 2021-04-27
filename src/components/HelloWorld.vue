<template>
  <div class="app">
    <button @click="toggle">toggle</button>
    <transition 
      name="fade" 
      mode="out-in" 
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
      <div class="modal" v-if="isOpen">
        <div class="modal__content">
          <button @click="close" class="close-btn">close</button>
          <div>modal content</div>
        </div>
      </div>
    </transition>

    <!-- TWEENS -->
    <div :style="`width: ${tweenedNumber}px`" class="progress">{{ tweenedNumber.toFixed(0) }}</div>

    <!-- Timelines-->
    <div class="circle first"></div>
    <div class="circle second"></div>
    <div class="circle third"></div>
    <button @click="play">play</button>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      isOpen: true,
      stats: 0,
      tweenedNumber: 0
    }
  },

  watch: {
    stats(newValue) {
      gsap.to(this.$data, {
        duration: .5,
        ease: "power2",
        tweenedNumber: newValue
      })
    }
  },

  methods: {
    play() {
      let master = gsap.timeline();

      master
      .add(this.timelines())
      .add(this.updateProgress())
    },
    updateProgress() {
      setInterval(() => {
        this.stats = Math.floor(Math.random() * (800 - 0))
      }, 2000)
    },
    toggle() {
      this.isOpen =! this.isOpen;
    },
    close() {
      this.isOpen = false;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "scale(0, 0)";
    },
    enter(el, done) {
      gsap.to(el, {
        duration: .5,
        opacity: 1,
        scale: 1,
        ease: "",
        onComplete: done
      })
    },
    leave(el, done) {
      gsap.to(el, {
        duration: .5,
        opacity: 0,
        scale: 0,
        onComplete: done
      })
    },

    timelines() {
      let tl = gsap.timeline({ repeat: -1, delay: 1, yoyo: true});
      tl.to(".first", {
        x: 200,
        ease: "power2",
        duration: 2
      })
      .to(".second", 
        {
          x: 200,
          ease: "power2",
          duration: 2,
        },
        .5
      )
      .to(".third", 
      {
        x: 200,
        ease: "power2",
        duration: 2
      },
      "<"
      )

      return tl;
    }
  },
  mounted() {
    // this.updateProgress();
    // this.timelines()
  }
}
</script>

<style>
  .app {
    width: 90%;
    margin: 2rem auto;
  }

  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }

  .modal__content {
    position: relative;
    max-width: 30rem;
    width: 90%;
    height: 10rem;
    box-shadow: 0 .5rem .8rem rgba(0, 0, 0, .1);
    border-radius: 1rem;
    background: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 5s ease;
  }

  .fade-leave-to {
    opacity: 0;
  }

  .progress {
    margin-top: 1rem;
    background: dodgerblue;
    padding: .5rem 1rem;
  }

  .circle {
    width: 40px;
    height: 40px;
    background: yellow;
    border-radius: 50%;
    margin-top: 1rem;
  }
</style>