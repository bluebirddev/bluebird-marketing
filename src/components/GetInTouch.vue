<template>
  <div class="content">
    <div id="contact-us" />
    <div class="left-content-arrow" />
    <div class="right-content-arrow" />
    <h2>
      get in <strong>touch</strong>
      <svg class="underline">
        <polyline points="0,5 145,5 152,17" />
      </svg>
    </h2>
    <div class="row">
      <form
        class="form"
        @submit.prevent="onSubmit"
        v-if="!submitted"
        data-aos="fade-right"
        name="contact"
        netlify
        netlify-honeypot
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <label>
          <span>Your name</span>
          <input placeholder="Your name" v-model="name" required />
        </label>
        <label>
          <span>Your company (optional)</span>
          <input placeholder="Your company (optional)" v-model="company" />
        </label>
        <label>
          <span>Your email</span>
          <input placeholder="Your email" type="email" v-model="email" required />
        </label>
        <label>
          <span>Your message</span>
          <textarea placeholder="Your message" v-model="message" required />
        </label>
        <button class="button" type="submit" :disabled="submitting">Send</button>
      </form>
      <div class="success" v-else>
        <p>
          Thank you for reaching out to us.<br />We’ll get back to you <strong>shortly.</strong>
        </p>
      </div>
      <p class="contact" data-aos="fade-left">
        <strong>find us at</strong><br />
        Fintec Spaces<br />
        20 Krige Road<br />
        Stellenbosch<br />
        South Africa
        <br />
        <br />
        <strong>contact us at</strong><br />
        <a href="tel:+27739787541">+27 73 978 7541</a><br />
        <a href="mailto:info@bluebird.dev">info@bluebird.dev</a>
      </p>
    </div>
  </div>  
</template>

<script>
import { encode } from '../utils';

export default {
  data() {
    return {
      submitting: false,
      submitted: false,
      name: '',
      company: '',
      email: '',
      message: '',
    };
  },
  methods: {
    onSubmit(e) {
      const { name, company, email, message } = this;
      this.submitting = true;
      if (!name || !email || !message) return;
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': e.target.getAttribute('name'),
          name,
          company,
          email,
          message,
        }),
      })
      .finally(() => {        
        this.submitted = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 140px;
  margin-bottom: 120px;
  text-align: center;
  position: relative;
  a:hover {
    text-decoration: underline;
  }
}
#contact-us {
  position: absolute;
  top: -100px;
}
.row {
  display: flex;
  justify-content: center;
}
h2 {
  display: inline-block;
  margin-bottom: 60px;
}
.success {  
  width: 550px;
  display: flex;
  padding: 50px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  p {
    color: #1A73E8;
    font-size: 16px;
    line-height: 30px;
  }
}
.form {
  width: 550px;
  text-align: right;
  z-index: 1;
  margin-top: -20px;
  label span {
    display: none;
  }
  input, textarea {
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: 15px;
    font-size: 15px;
    /* border: 1px solid #A6A8AB; TODO */
    border: 1px solid #D6D8DB;
    outline: none;
    border-radius: 5px 0px;
    font: inherit;
    color: inherit;
    &::placeholder {
      color: #D6D8DB;
    }
    &:focus {
      border-color: #1A73E8;
    }
  }
  textarea {    
    resize: vertical;
  }
  input, textarea {
    margin-top: 20px;
  }
}
.button {
  margin-top: 30px;
}
.contact {
  margin: 0 160px 0 160px;
  z-index: 1;
  text-align: left;
  color: #666666;
  strong {    
    color: #1A73E8;
    font-weight: bold;
  }
}
.underline {
  margin-top: 10px;
  height: 17px;
  display: block;
  width: 160px;
  polyline {
    stroke: #1A73E8;
    stroke-width: 1px;
    fill: none;
  }
}

.left-content-arrow {
  position: absolute;
  top: 190px;
  left: -80px;
  width: 24px;
  height: 24px;
  border-top: 1px solid #1A73E8;
  border-right: 1px solid #1A73E8;
}
.right-content-arrow {
  position: absolute;
  top: 260px;
  right: 0px;
  width: 24px;
  height: 24px;
  border-top: 1px solid #1A73E8;
  border-left: 1px solid #1A73E8;
}


// mobile
@media only screen and (max-width: 1100px) {
  .content {
    margin-top: 60px;
    text-align: left;
    margin-bottom: 40px;
  }
  .row {
    flex-direction: column;
  }
  .form {
    width: 100%;
  }
  .right-content-arrow {
    display: none;
  }
  .contact {
    margin: 60px 0 0 0;
  }
  h2 {
    margin-bottom: 30px;
  }
}
</style>