<template>
  <q-page padding>
        <q-list bordered>
      <q-item v-for="item in items" v-bind:key="item.id" @click="loadinfo(item.id,item.name,item.image)" style="padding: 0 !important; border-bottom: inherit;" clickable v-ripple>
        <q-item-section style="text-align-last: right;margin-bottom: auto;padding-top: 8px;">
          <q-item-label>{{ item.name }}</q-item-label>
          <q-item-label caption>{{ item.epName }}</q-item-label>
        </q-item-section>
        <q-item-section style="margin-left: -11px !important; margin-right: 0px !important;" thumbnail>
          <q-img :src="item.image" :alt="pic" spinner-color="red" style="height: 125px; width: 90px;"/>
        </q-item-section>
      </q-item>
    </q-list>
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <div style="background-color: #ffffff;">
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
          <q-btn v-close-popup flat dense round aria-label="الخيارات">
          <q-icon name="arrow_back" />
        </q-btn>
        <q-toolbar-title>
          {{ name }}
        </q-toolbar-title>
       <q-btn style="color: red;" dense flat round icon="favorite_border" />
      </q-toolbar>
        <q-tabs style="color: white !important; background-color: #673ab7 !important;" v-model="tab" dense class="bg-grey-3 text-grey-7" active-color="#ffffff" indicator-color="#ffffff" align="justify">
          <q-tab name="info" label="المعلومات" />
          <q-tab name="ep" label="الحلقات" />
          <q-tab name="commant" label="التعليقات" />
        </q-tabs>
    </q-header>
    <q-page-container>
        <q-tab-panels v-model="tab" animated class="text-black">
          <q-tab-panel name="info">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img :src="image" spinner-color="red" style="height: 145px; width: 110px;" class="col-5"/>
        <q-card-section style="word-break: break-all; text-align: center; width: 100%;">
          {{ story }}
        </q-card-section>
      </q-card-section>
    </q-card>
    <q-card style="margin-top: 10px;" class="my-card">
      <q-card-section style="padding: 0px;" vertical>
        <q-card-section style="padding: 9px; word-break: break-all; text-align: center; width: 100%;">
          التصنيفات
          <q-separator style="background-color: transparent;" />
          <h6 style="font-size: medium;">{{ genres }}</h6>
          <q-separator style="background-color: transparent;" />
          تاريخ ألانمي
          <q-separator style="background-color: transparent;" />
          <h6 style="font-size: medium;">2020</h6>
          <q-separator style="background-color: transparent;" />
          الحالة
          <q-separator style="background-color: transparent;" />
          <h6 style="font-size: medium;">مستمر</h6>
          <q-separator style="background-color: transparent;" />
          التقيم العمري
          <q-separator style="background-color: transparent;" />
          <h6 style="font-size: medium;">{{ ages }}</h6>
          <q-separator style="background-color: transparent;" />
          التقيم العالمي
          <q-separator style="background-color: transparent;" />
          <h6 style="font-size: medium;">{{ rank }}</h6>
          <q-separator style="background-color: transparent;" />
          أخرى
          <q-separator style="background-color: transparent;" />
    <q-scroll-area
      horizontal
      style="height: 175px; width: 100%; background-color: transparent !important;"
    >
      <div class="row no-wrap">
    <q-card v-for="others in other" v-bind:key="others.id" class="my-cardt">
      <q-img style="height: 170px;" :src="others.image" spinner-color="red" basic>
        <div class="cardtext absolute-bottom text-subtitle2 text-center">
          {{ others.name }}
        </div>
      </q-img>
    </q-card>
      </div>
    </q-scroll-area>
        </q-card-section>
      </q-card-section>
    </q-card>
          </q-tab-panel>
          <q-tab-panel name="ep">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="commant">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
    </q-page-container>
  </q-layout>
      </div>
    </q-dialog>
  </q-page>
</template>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './toolbar'
export default {
  mixins: [UiMixin, PageMixin],
  components: {

  },
  data () {
    return {
      count: 0,
      name: '',
      image: '',
      ages: '',
      rank: '',
      genres: '',
      story: '',
      ep: [

      ],
      other: [

      ],
      commants: [

      ],
      items: [

      ],
      dialog: false,
      maximizedToggle: true,
      tab: 'info',
      itemsinfo: {

      }
    }
  },
  beforeDestroy () {
  },
  methods: {
    getPic (index) {
      return this.items[index].image
    },
    loadData () {
      this.$q.loading.show({
        message: '<span>يرجى الأنتظار</span>'
      })
      this.$axios
        .get('https://snoanime.com/ns/api/new/')
        .then(response => {
          this.$q.loading.hide()
          var self = this
          this.data = response.data
          self.items = response.data
        })
        .catch(() => {
          this.$q.loading.hide()
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'توجد مشكلة في الشبكة حاول أعادة الفتح',
            icon: 'report_problem'
          })
        })
    },
    loadinfo: function (id, name, image) {
      this.$q.loading.show({
        message: '<span>يرجى الأنتظار</span>'
      })
      this.$axios
        .get('https://snoanime.com/ns/api/new/info.php/?url=' + id)
        .then(response => {
          this.$q.loading.hide()
          var self = this
          self.dialog = true
          self.itemsinfo = response.data
          self.name = name
          self.image = image
          self.ages = self.itemsinfo.main.age
          self.rank = self.itemsinfo.main.rank
          self.genres = self.itemsinfo.main.genres
          self.story = self.itemsinfo.main.story
          self.ep = self.itemsinfo.ep
          self.other = self.itemsinfo.other
          self.commants = self.itemsinfo.commants
        })
        .catch(() => {
          this.$q.loading.hide()
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'توجد مشكلة في الشبكة حاول أعادة الفتح',
            icon: 'report_problem'
          })
        })
    }
  },
  created () {
    this.setToolbar(Toolbar)
    this.loadData()
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100%
.my-cardt
  height: 170px;
  width: 115px;
  margin: 3px;
  padding: 0.6px;
  max-width: 115px!important;
.cardtext
  background: rgba(0, 0, 0, 0.61);
  padding: 8px;
  font-size: 15px !important;
  font: message-box;
</style>
