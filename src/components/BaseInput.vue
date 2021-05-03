<template>
    <div class="form-group">
        <label :for="$attrs.id" v-if="showLabel">{{ labelText }} </label>

        <input 
            class="form-control" 
            :aria-describedby="$attrs.id" 
            :value="value"
            v-bind="$attrs" 
            @input="$emit('input', $event.target.value)"
        >
        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
    </div>
</template>

<script>
    export default {
        props: {
            value: null,
            labelText: String,
            showLabel: {
                type: Boolean,
                default: false
            }
        },

        inheritAttrs: false
    }
</script>

<style lang="scss" scoped>

</style>