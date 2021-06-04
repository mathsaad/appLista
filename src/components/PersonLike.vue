<template>
    <div class="person" @click="openDetail()">
        <ion-avatar class="space-image">
            <img :src="person.photo" :alt="person.username">
        </ion-avatar>
        <ion-label class="center-name">
            {{ person.username }}
        </ion-label>
    </div>
</template>

<script>
import { IonLabel } from '@ionic/vue';
import {  home, navigate } from 'ionicons/icons';

export default {
    props: {
        person: Object
    },
    components: {
        IonLabel
    },
    setup() {
        return {
            home,
            navigate,
        }
    },
    methods: {
        async openDetail() {
            await this.$store.dispatch('detail/openDetail', this.person);
        }
    }
};
</script>

<style scoped lang="scss">
.person {
    display: inline-block;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: .7rem;
    .space-image {
        margin: auto;
    }
    .center-name {
        display: flex;
        justify-content: center;
    }
}
</style>