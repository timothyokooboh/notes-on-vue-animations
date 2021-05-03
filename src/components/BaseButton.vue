<template>
    <button 
        class="btn text-center"
        ref="btn"
    >
        <slot></slot>
    </button>
    
</template>

<script>
    export default {
        props: {
        },
        methods: {
            addDisabledState() {
                const btn = this.$refs.btn;
                btn.setAttribute("disabled", true);
            },
            removeDisabledState() {
                const btn = this.$refs.btn;
                btn.removeAttribute("disabled");
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn[disabled] {
        cursor: no-drop !important;
        opacity: .5;
  }
</style>