<template>
  <div class="content">
    <h2>
      get in <strong>touch</strong>
      <svg class="underline">
        <polyline points="0,5 145,5 152,17" />
      </svg>
    </h2>
    <div class="row">
      <form class="form">
        <input placeholder="Your name" required />
        <input placeholder="Your company (optional)" />
        <input placeholder="Your email" required />
        <textarea placeholder="Your message" required />
        <button class="button" type="submit">Send</button>
      </form>
      <p class="contact">
        <strong>lorem ipsum dolor sit</strong><br />
        XX Lorem ipsum<br />
        Dolor sit amet<br />
        Consectetuer<br />
        (+27) 00 000 0000
        <br />
        <br />
        <strong>lorem ipsum dolor sit</strong><br />
        Utwisi enim adminim<br />
        xxxx@bluebird.dev
        <br />
        <br />
        <strong>lorem ipsum dolor sit</strong><br />
        Utwisi enim adminim<br />
        xxxx@bluebird.dev
      </p>
    </div>
  </div>  
</template>

<style lang="scss" scoped>
.content {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 140px;
  margin-bottom: 120px;
  text-align: center;
}
.row {
  display: flex;
  justify-content: center;
}
h2 {
  display: inline-block;
  margin-bottom: 60px;
}
.form {
  width: 550px;
  text-align: right;
  input, textarea {
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: 15px;
    /* border: 1px solid #A6A8AB; TODO */
    border: 1px solid #D6D8DB;
    outline: none;
    border-radius: 5px 0px;
    font: inherit;
    color: inherit;
    &:focus {
      border-color: #1A73E8;
    }
  }
  textarea {    
    resize: vertical;
  }
  input + input, input + textarea {
    margin-top: 20px;
  }
}
.button {
  margin-top: 30px;
}
.contact {
  margin: 0 160px 0 160px;
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
</style>