<template>
    <editor-menu-bar :editor="editor" v-slot="{}">
      <q-toolbar class="menubar">
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="الخيارات"
        >
          <q-icon name="menu" />
        </q-btn>
      </q-toolbar>
    </editor-menu-bar>

</template>

<script>
import UiMixin from 'src/mixins/ui'
import { EditorMenuBar } from 'tiptap'
import { mapActions } from 'vuex'
export default {
  name: 'BasicToolbar',
  mixins: [UiMixin],
  props: [],
  components: {
    EditorMenuBar
  },
  methods: {
    ...mapActions([
      'toggleLeftDrawer'
    ])
  }
}
</script>
