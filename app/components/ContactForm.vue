<template>
  <form
    ref="formEl"
    class="contact-form"
    name="kontakt"
    method="POST"
    action="/kontakt"
    novalidate
    @submit.prevent="handleSubmit"
  >
    <div class="contact-form__intro">
      <span class="overline">Pošaljite upit</span>
      <h2>Recite nam što vam treba</h2>
      <p>
        Kratak opis prostora ili pošiljke dovoljan je za prvi dogovor. Odgovaramo
        na upite vezane uz čišćenje, uređenje okoliša i prijevoz robe i materijala.
      </p>
    </div>

    <div class="form-grid">
      <div class="field">
        <label for="contact-name">Ime i prezime <span aria-hidden="true">*</span></label>
        <input
          id="contact-name"
          v-model="form.name"
          type="text"
          name="name"
          autocomplete="name"
          placeholder="Vaše ime i prezime"
          :aria-invalid="errors.name ? 'true' : undefined"
          :aria-describedby="errors.name ? 'error-name' : undefined"
        />
        <p v-if="errors.name" id="error-name" class="field__error">
          {{ errors.name }}
        </p>
      </div>

      <div class="field">
        <label for="contact-phone">Telefon <span class="field__optional">(nije obavezno)</span></label>
        <input
          id="contact-phone"
          v-model="form.phone"
          type="tel"
          name="phone"
          inputmode="tel"
          autocomplete="tel"
          placeholder="npr. 095 509 4124"
        />
      </div>

      <div class="field">
        <label for="contact-service">Usluga</label>
        <select id="contact-service" v-model="form.service" name="service">
          <option value="">Odaberite uslugu</option>
          <option v-for="service in services" :key="service.path" :value="service.name">
            {{ service.name }}
          </option>
          <option value="Kombinacija usluga / ostalo">Kombinacija usluga / ostalo</option>
        </select>
      </div>

      <div class="field">
        <label for="contact-location">Lokacija</label>
        <input
          id="contact-location"
          v-model="form.location"
          type="text"
          name="location"
          autocomplete="address-level2"
          placeholder="npr. Donji Miholjac ili Valpovo"
        />
      </div>

      <div class="field field--full">
        <label for="contact-message">Poruka <span aria-hidden="true">*</span></label>
        <textarea
          id="contact-message"
          v-model="form.message"
          name="message"
          rows="5"
          placeholder="Opišite prostor, kvadraturu, željeni termin ili vrstu pošiljke."
          :aria-invalid="errors.message ? 'true' : undefined"
          :aria-describedby="errors.message ? 'error-message' : undefined"
        />
        <p v-if="errors.message" id="error-message" class="field__error">
          {{ errors.message }}
        </p>
      </div>
    </div>

    <div class="consent">
      <input
        id="contact-privacy"
        v-model="form.privacyAck"
        type="checkbox"
        name="privacy-ack"
        :aria-invalid="errors.privacyAck ? 'true' : undefined"
        :aria-describedby="errors.privacyAck ? 'error-privacy' : undefined"
      />
      <div>
        <label for="contact-privacy">
          Potvrđujem da sam pročitao/la Politiku privatnosti i da razumijem
          obradu podataka za odgovor na ovaj upit.
        </label>
        <NuxtLink to="/politika-privatnosti">Politika privatnosti</NuxtLink>
        <p v-if="errors.privacyAck" id="error-privacy" class="field__error">
          {{ errors.privacyAck }}
        </p>
      </div>
    </div>

    <p v-if="formError" class="contact-form__error" role="alert">
      Molimo provjerite označena polja i pokušajte ponovno.
    </p>

    <div class="contact-form__submit">
      <button type="submit" class="btn">
        Pripremite upit
        <Send :size="17" aria-hidden="true" />
      </button>
      <span class="contact-form__hint">
        Otvara se vaša e-mail aplikacija s pripremljenom porukom.
      </span>
    </div>

    <div v-if="submitted" class="contact-form__success" role="status">
      <div class="contact-form__success-icon">
        <Check :size="19" aria-hidden="true" />
      </div>
      <div>
        <strong>Upit je pripremljen u vašoj e-mail aplikaciji.</strong>
        <p>
          Ako se e-mail aplikacija nije otvorila, javite se na
          <a :href="`mailto:${site.email}`">{{ site.email }}</a> ili nazovite
          <a :href="`tel:${site.phoneHref}`">{{ site.phoneDisplay }}</a>.
        </p>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { Check, Send } from 'lucide-vue-next'
import { services } from '~/data/services'

const site = useSite()

const form = reactive({
  name: '',
  phone: '',
  service: '',
  location: '',
  message: '',
  privacyAck: false,
})

const formEl = ref<HTMLFormElement | null>(null)
const errors = reactive<Record<string, string>>({})
const formError = ref(false)
const submitted = ref(false)

function clearErrors() {
  for (const key of Object.keys(errors)) {
    delete errors[key]
  }
  formError.value = false
}

function validate() {
  clearErrors()

  if (form.name.trim().length < 2) {
    errors.name = 'Molimo unesite ime i prezime.'
  }

  if (form.message.trim().length < 10) {
    errors.message = 'Opišite nam ukratko što vam je potrebno (najmanje 10 znakova).'
  }

  if (!form.privacyAck) {
    errors.privacyAck = 'Potrebna je potvrda da ste pročitali Politiku privatnosti.'
  }

  return Object.keys(errors).length === 0
}

function handleSubmit() {
  submitted.value = false

  if (!validate()) {
    formError.value = true
    nextTick(() => {
      formEl.value
        ?.querySelector<HTMLElement>('[aria-invalid="true"]')
        ?.focus()
    })
    return
  }

  const subject = `Upit: ${form.service || 'općenito'} – ${form.name}`
  const bodyLines = [
    `Ime i prezime: ${form.name}`,
    form.phone ? `Telefon: ${form.phone}` : '',
    form.service ? `Usluga: ${form.service}` : '',
    form.location ? `Lokacija: ${form.location}` : '',
    'Potvrda politike privatnosti: da',
    '',
    'Poruka:',
    form.message,
  ].filter(Boolean)

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`
  submitted.value = true
  window.location.href = mailto
}
</script>

<style scoped>
.contact-form {
  padding: clamp(1.5rem, 3.5vw, 2.7rem);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--paper-strong);
  box-shadow: var(--shadow-sm);
}

.contact-form__intro {
  margin-bottom: 2rem;
}

.contact-form__intro h2 {
  margin-bottom: 0.65rem;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
}

.contact-form__intro p {
  max-width: 56ch;
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.93rem;
  line-height: 1.65;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.1rem 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.38rem;
  min-width: 0;
}

.field--full {
  grid-column: 1 / -1;
}

.field label {
  color: var(--ink);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.015em;
  line-height: 1.4;
}

.field label span[aria-hidden] {
  color: var(--sage-dark);
}

.field__optional {
  color: var(--muted);
  font-size: 0.68rem;
  font-weight: 600;
}

.field input,
.field select,
.field textarea {
  width: 100%;
  min-height: 47px;
  padding: 0.72rem 0.85rem;
  border: 1px solid var(--line);
  border-radius: 11px;
  background: #fffefb;
  color: var(--ink);
  font-size: 0.9rem;
  line-height: 1.5;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.field textarea {
  min-height: 128px;
  resize: vertical;
}

.field select {
  appearance: none;
  background-image:
    linear-gradient(45deg, transparent 50%, var(--ink-soft) 50%),
    linear-gradient(135deg, var(--ink-soft) 50%, transparent 50%);
  background-position:
    calc(100% - 18px) calc(50% - 2px),
    calc(100% - 13px) calc(50% - 2px);
  background-repeat: no-repeat;
  background-size: 5px 5px, 5px 5px;
  padding-right: 2.4rem;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: var(--sage-deep);
  outline: none;
  box-shadow: 0 0 0 3px rgba(92, 154, 132, 0.15);
}

.field input[aria-invalid='true'],
.field select[aria-invalid='true'],
.field textarea[aria-invalid='true'] {
  border-color: #b4544a;
}

.field__error {
  margin: 0.1rem 0 0;
  color: #9f3f36;
  font-size: 0.73rem;
  font-weight: 650;
  line-height: 1.45;
}

.consent {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  margin-top: 1.4rem;
}

.consent input {
  width: 18px;
  height: 18px;
  margin: 0.15rem 0 0;
  flex-shrink: 0;
  accent-color: var(--sage-dark);
}

.consent label {
  display: inline;
  color: var(--ink-soft);
  font-size: 0.75rem;
  line-height: 1.55;
}

.consent a {
  display: inline-block;
  margin-left: 0.25rem;
  color: var(--sage-dark);
  font-size: 0.75rem;
  font-weight: 700;
}

.contact-form__error {
  margin: 1rem 0 0;
  color: #9f3f36;
  font-size: 0.78rem;
  font-weight: 700;
}

.contact-form__submit {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.9rem;
  margin-top: 1.5rem;
}

.contact-form__hint {
  color: var(--muted);
  font-size: 0.7rem;
  line-height: 1.45;
}

.contact-form__success {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding: 1rem 1.1rem;
  border: 1px solid var(--line-green);
  border-radius: var(--radius-sm);
  background: var(--sage-wash);
}

.contact-form__success-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--sage);
  color: var(--ink);
}

.contact-form__success strong {
  display: block;
  margin-bottom: 0.2rem;
  color: var(--ink);
  font-size: 0.82rem;
}

.contact-form__success p {
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.78rem;
  line-height: 1.55;
}

.contact-form__success a {
  color: var(--sage-dark);
  font-weight: 700;
}

@media (max-width: 640px) {
  .contact-form {
    padding: 1.25rem;
    border-radius: 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .field--full {
    grid-column: auto;
  }

  .contact-form__submit .btn {
    width: 100%;
  }
}
</style>
