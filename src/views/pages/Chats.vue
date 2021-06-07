<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Conversas</ion-title>
            </ion-toolbar>
        </ion-header>
    <ion-content :fullscreen="true">
    <ion-header collapse="condense">
    <ion-toolbar>
        <ion-title size="large">Conversas</ion-title>
    </ion-toolbar>
    </ion-header>
    <div class="person-like">
        <person-like v-for="(person, index) in persons" :key="index" :person="person"></person-like>
    </div>
    <chat-item v-for="(person, index) in persons" :key="index" :person="person"></chat-item>
    </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ChatItem from "@/components/ChatItem.vue";
import PersonLike from "@/components/PersonLike.vue";
import { getPersons } from "../../service/chat"

export default  {
    name: 'Chats',
    components: {PersonLike, ChatItem, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
    async mounted () {
        this.persons = await getPersons();
    },
    data() {
        return {
            persons: []
        }
    }
}
</script>

<style scoped lang="scss">
.person-like {
    height: 7.6rem;
    max-height: 7.6rem;
    overflow: auto;
    white-space: nowrap;
}
</style>