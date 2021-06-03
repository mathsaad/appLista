<template>
  <ion-page>
      <ion-content :fullscreen="true">
          <ion-header collapse="condense">
              <ion-toolbar>
                  <ion-title size="large">{{ person.username }}</ion-title>
              </ion-toolbar>
          </ion-header>
          <br>
          <img class="avatar-detail" :src="person.photo" :alt="person.username"/>
          <div class="row-name">
              <h1 class="name">{{ person.username }}</h1>
              <h2 class="city">{{ person.city }}</h2>
          </div>
          <ion-item-divider/>
          <div class="row">
              <div class="col-left">
                  <p>{{ person.gender }},</p>
                  <p>{{ person.sexualOrientation }}</p>
              </div>
              <div class="col-right">
                  <p>{{ person.age }} anos</p>
              </div>
          </div>
      </ion-content>
      <ion-header>
      <ion-toolbar>
        <ion-title>{{ person.username }}</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { mapGetters } from "vuex";

export default  {
    name: 'Detail',
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
    computed: {
        ...mapGetters({
            person: 'detail/person'
        })
    },
}
</script>

<style scoped>
.avatar-detail {
    border-radius: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
}

.row-name {
    display: block;
    text-align: center;
}
.name {
    font-size: 1.5rem;
}
.city {
    font-size: .8rem;
}
.row {
    margin: 1rem 0 0 1rem;
    display: flex;
    justify-content: space-between;
}
.col-right {
    padding-right: 2rem;
}
</style>