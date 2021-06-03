<template>
  <ion-item class="chat-item" button @click="openDetail()">
    <ion-avatar slot="start">
      <img :src="person.photo" :alt="person.username">
    </ion-avatar>
    <ion-label>
      <p>
          {{ person.username }},
          {{ person.age }} anos,
      </p>
      <p>
          {{ person.gender }},
      {{ person.sexualOrientation }},
      </p>
        <p>
            {{ person.city }}
        </p>
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel } from '@ionic/vue';
import { home, navigate } from 'ionicons/icons';

export default {
    props: {
        person: Object
    },
    components: {
        IonItem,
        IonLabel,
    },
    setup() {
        return {
            home,
            navigate
        }
    },
    methods: {
        async openDetail() {
            await this.$store.dispatch('detail/openDetail', this.person);
        }
    }
};
</script>

<style scoped>

</style>