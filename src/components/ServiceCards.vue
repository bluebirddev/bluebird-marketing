<template>
  <div class="content" data-aos="fade-right">
    <div id="services" />
    <div class="left-arrow" />
    <div class="right-arrow" />
    <div class="row">
      <div class="card">
        <g-image src="~/assets/service-logo.svg" alt="service-logo" width="54" />
        <h3><strong>web</strong><br/> development</h3>
        <p>Using modern technologies combined with the latest web standards, we create performant, responsive, sleek, and secure websites.</p>
      </div>
      <div class="card">
        <g-image src="~/assets/service-logo.svg" alt="service-logo" width="54" />
        <h3><strong>infrastructure</strong><br/> development</h3>
        <p>We develop everything from banking solutions to logistic systems and have the server-, database-, and services development experience to tackle any problem.</p>
      </div>
      <div class="card">
        <g-image src="~/assets/service-logo.svg" alt="service-logo" width="54" />
        <h3><strong>mobile app</strong><br/> development</h3>
        <p>Native or cross-platform — we take the hassle out of mobile development, and deliver beautiful apps quickly and cost effectively.</p>
      </div>
      <div class="card">
        <g-image src="~/assets/service-logo.svg" alt="service-logo" width="54" />
        <h3><strong>product</strong><br/> management</h3>
        <p>Using Agile methodologies and effective time management we provide accurate expectations and deliver on time.</p>
      </div>
      <div class="card">
        <g-image src="~/assets/service-logo.svg" alt="service-logo" width="54" />
        <h3><strong>UX</strong> and <strong>UI</strong><br/> design</h3>
        <p>Working with a wide range of designers and employing a multi-iterative approach, we invent powerful brands and provide pixel perfect fine tuning to existing solutions.</p>
      </div>
      <div class="card">
        <g-image src="~/assets/service-logo.svg" alt="service-logo" width="54" />
        <h3><strong>discovery</strong> and <strong><br/>architecture</strong></h3>
        <p>We help you discover your project requirements, design a proposed solution, and create MVPs to jumpstart your development.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 100px;
}
#services {
  position: absolute;
  top: -100px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  width: 300px;
  min-height: 350px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 10px #0000000D;
  border-radius: 5px 0px;
  margin: 20px;
  padding: 60px 37px 37px;
  box-sizing: border-box;
  text-align: center;
  p {    
    color: #A6A8AB;
  }
}
.left-arrow {
  position: absolute;
  top: 170px;
  left: -200px;
  width: 24px;
  height: 24px;
  border-top: 1px solid #1A73E8;
  border-right: 1px solid #1A73E8;
}
.right-arrow {
  position: absolute;
  top: 550px;
  right: -170px;
  width: 24px;
  height: 24px;
  border-right: 1px solid #1A73E8;
  border-bottom: 1px solid #1A73E8;
}

// mobile
@media only screen and (max-width: 1100px) {
  .card {
    max-width: 300px;
    width: 100%;
    padding: 24px;
    min-height: 0;
  }
  .content {
    margin-bottom: 60px;
  }
}


// mobile
@media only screen and (max-width: 600px) {
  .card {
    max-width: inherit;
    margin: 10px 0;
    padding: 18px;
  }
}
</style>