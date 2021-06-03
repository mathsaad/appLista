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
import axios from 'axios';
import PersonLike from "@/components/PersonLike.vue";
import {mapGetters} from "vuex";

export default  {
    name: 'Chats',
    components: {PersonLike, ChatItem, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
    mounted () {
        // if (!this.person.name.isEmpty()) {
            axios.get( "https://my.api.mockaroo.com/mobiletest.json", {
                headers: {
                    'X-API-Key': '82333f10'
                }
            }).then(response => this.persons =  [ ...response.data ] );
        // }
    },
    computed: {
        ...mapGetters({
            person: 'detail/person'
        })
    },
    data() {
        return {
            persons: []
        }
    }
}
</script>

<style scoped>
.person-like {
    height: 7.6rem;
    max-height: 7.6rem;
    overflow: auto;
    white-space: nowrap;
}
</style>