<template>
  <div>
    <div class="container pb-5 text-center text-sm-left">
      <div class="row">
        <div class="offset-lg-1 col-lg-6 col-md-8 mt-5 mb-0 mb-lg-4">
          <h1 class="h1">MPay Link Builder</h1>
          <p class="lead">
            Modifica i campi sottostanti per creare il link con i tuoi
            parametri. Quindi utilizza i due pulsanti per testare il link,
            copiarlo nei tuoi appunti ed incollarlo dove ne hai necessità.
          </p>
          <p>
            Prima dell'utilizzo,
            <router-link to="/about"
              >leggere la pagina informazioni</router-link
            >
          </p>
        </div>
      </div>

      <div class="row">
        <div class="offset-lg-1 col-lg-6 col-md-8 mt-5 mb-0 mb-lg-4">
          <div class="text-center text-sm-left">
            <p class="lead">Compila e seguenti campi per creare il link.</p>
          </div>
          <BTabs v-model="active">
            <BTab title="Campi Dati Pagamento">
              <BInputGroup
                v-model="urlParams.payerTipologiaServizio"
                label="Tipologia Servizio"
                placeholder="payerTipologiaServizio"
                help="Parametro fornito dal servizio MPay
          corrispondente al Servizio per il quale si sta creando il link."
              />

              <BInputGroup
                v-model="urlParams.payerCodiceEnte"
                label="Codice Ente"
                placeholder="payerCodiceEnte"
                help="Parametro fornito dal servizio MPay
          corrispondente all'ente per il quale si sta creando il link."
              />

              <BInputGroup
                v-model="urlParams.payerTipoUfficio"
                placeholder="payerTipoUfficio"
                label="Tipo Ufficio"
                help="Parametro opzionale."
              />

              <BInputGroup
                placeholder="payerCodiceUfficio"
                v-model="urlParams.payerCodiceUfficio"
                label="Codice Ufficio"
                help="Parametro opzionale."
              />

              <BInputGroup
                type="number"
                placeholder="payerImporto"
                v-model.number="urlParams.payerImporto"
                label="Importo (interi)"
                help="Importo precompilato interi."
              />

              <BInputGroup
                type="number"
                placeholder="payerImportoCent"
                v-model.number="urlParams.payerImportoCent"
                label="Importo (decimali)"
                help="Importo precompilato centesimi."
              />

              <BInputGroup
                placeholder="payerCausale"
                v-model="urlParams.payerCausale"
                label="Causale"
                help="Causale Precompilata."
              />

              <BInputGroup
                placeholder="payerCespite"
                v-model="urlParams.payerCespite"
                label="Cespite"
                help="Cespite Precompilato."
              />

              <BInputGroup
                type="number"
                placeholder="payerAnno"
                v-model.number="urlParams.payerAnno"
                label="Anno"
                help="Anno Precompilato."
              />
            </BTab>
            <BTab title="Campi Dati Utente">
              <BInputGroup
                placeholder="payerCognomeContribuente"
                v-model="urlParams.payerCognomeContribuente"
                label="Cognome o Ragione Sociale"
                help="Cognome (se persona fisica) o Ragione Sociale del Contribuente
            Precompilato" />

              <BInputGroup
                placeholder="payerNomeContribuente"
                v-model="urlParams.payerNomeContribuente"
                label="Nome"
                help="Nome (se persona fisica) del Contribuente Precompilato" />

              <BInputGroup
                placeholder="payerCodiceFiscaleContribuente"
                v-model="urlParams.payerCodiceFiscaleContribuente"
                label="Codice Fiscale o Partita IVA"
                help="Codice Fiscale (se persona fisica) o Partita IVA del Contribuente
            Precompilato." />

              <BInputGroup
                placeholder="payerIndirizzoContribuente"
                v-model="urlParams.payerIndirizzoContribuente"
                label="Indirizzo"
                help="Indirizzo del Contribuente Precompilato." />

              <BInputGroup
                placeholder="payerCittaContribuente"
                v-model="urlParams.payerCittaContribuente"
                label="Comune"
                help="Comune del Contribuente Precompilato." />

              <BInputGroup
                placeholder="payerProvinciaContribuente"
                v-model="urlParams.payerProvinciaContribuente"
                label="Provincia (Sigla)"
                help="Provincia del Contribuente Precompilato. Utilizzare la
            sigla."
            /></BTab>
            <BTab title="Campi default">
              <BInputGroup
                v-model="baseUrl"
                label="Url Base"
                placeholder="Url Sito Web"
                disabled
              />
              <BInputGroup
                v-model="urlParams.formName"
                label="FormName"
                placeholder="formName"
                disabled
              />
              <BInputGroup
                v-model="urlParams.payerTipoBollettino"
                label="Tipo Bollettino"
                placeholder="payerTipoBollettino"
                help="Default SPOM per pagamenti spontanei."
                disabled
              />
              <BInputGroup
                v-model="urlParams.payerCodiceUtente"
                label="Codice Utente"
                placeholder="payerCodiceUtente"
                help="Default 000RM."
                disabled
              />
            </BTab>
          </BTabs>
        </div>
      </div>
      <div class="row">
        <div class="offset-lg-1 col-lg-6 col-md-8 mt-5 mb-0 mb-lg-4">
          <div class="text-center text-sm-left">
            <p class="lead">Link generato</p>
          </div>
          <p style="overflow-wrap: break-word">{{ url }}</p>
          <small id="urlHelp" class="form-text text-muted"
            ><strong
              >Da utilizzare per la creazione del link di collegamento</strong
            ></small
          >
          <div class="form-group">
            <a
              class="btn btn-outline-primary btn-sm mx-1"
              :href="url"
              target="_blank"
              >Test Link</a
            >
            <button class="btn btn-primary btn-sm mx-1" @click="copyToClp">
              Copia negli appunti
            </button>
          </div>
          <div style="min-height: 100px">
            <transition name="slide-fade">
              <div v-if="copied" class="alert alert-success" role="alert">
                Link copiato negli appunti con successo.
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                  @click="copied = false"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import BTabs from '../components/BTabs.vue'
import BTab from '../components/BTab.vue'
import BSvgIcon from '../components/BSvgIcon.vue'
import BInputGroup from '../components/BInputGroup.vue'

export default defineComponent({
  name: 'App',
  components: { BSvgIcon, BInputGroup, BTabs, BTab },
  data() {
    return {
      baseUrl: 'https://mpay.regione.marche.it/mpay/pagonet/extern.do?',
      urlParams: {
        formName: 'formExtern',
        payerTipoBollettino: 'SPOM',
        payerCodiceUtente: '000RM',
        payerTipologiaServizio: 'UBC',
        payerCodiceEnte: '05671',
        payerTipoUfficio: '',
        payerCodiceUfficio: '',
        payerImporto: '',
        payerImportoCent: '',
        payerCespite: '',
        payerCausale: '',
        payerAnno: '',
        payerCognomeContribuente: '',
        payerNomeContribuente: '',
        payerCodiceFiscaleContribuente: '',
        payerIndirizzoContribuente: '',
        payerCittaContribuente: '',
        payerProvinciaContribuente: '',
      },
      copied: false,
      showDefaults: false,
      active: 1,
    }
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height
    },
    enter(element) {
      const { height } = getComputedStyle(element)

      element.style.height = this.prevHeight

      setTimeout(() => {
        element.style.height = height
      })
    },
    afterEnter(element) {
      element.style.height = 'auto'
    },
    copyToClp() {
      var m = document
      var txt = m.createTextNode(this.url)
      var w = window
      var b = m.body
      b.appendChild(txt)
      if (b.createTextRange) {
        var d = b.createTextRange()
        d.moveToElementText(txt)
        d.select()
        m.execCommand('copy')
      } else {
        var d = m.createRange()
        var g = w.getSelection
        d.selectNodeContents(txt)
        g().removeAllRanges()
        g().addRange(d)
        m.execCommand('copy')
        g().removeAllRanges()
      }
      txt.remove()
      this.copied = true
    },
  },
  computed: {
    url() {
      const url = new URL(this.baseUrl.trim())
      const params = url.searchParams
      // const queryParams = []
      for (const param in this.urlParams) {
        // console.log({ param })
        // queryParams.push(`${param}=${this.urlParams[param]}`)
        if (this.urlParams[param].toString().trim().length > 0) {
          params.append(param, this.urlParams[param].toString().trim())
        }
      }
      // console.log(url.to)
      // return `${this.baseUrl}${queryParams.join('&')}`
      return url.toString()
    },
  },
  mounted() {
    console.log(this.$route)
    if ('test' in this.$route.query) {
      console.log('test mode')
    }
  },
})
</script>

<style lang="scss" scoped>
.form-group {
  margin-top: 4em !important;
}
.smooth-enter-active,
.smooth-leave-active {
  transition: height 1s;
  overflow: hidden;
}
.smooth-enter,
.smooth-leave-to {
  height: 0;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
