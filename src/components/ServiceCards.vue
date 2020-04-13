<template>
  <div class="content">
    <div id="services" />
    <div class="left-arrow" />
    <div class="right-arrow" />
    <div class="row">
      <div class="card">
        <g-image src="~/assets/service-logo.svg" width="54" />
        <h3>dolor sit amet <strong>consectetuer</strong></h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
      </div>
      <div class="card">
        <g-image src="~/assets/service-logo.svg" width="54" />
        <h3>dolor sit amet <strong>consectetuer</strong></h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
      </div>
      <div class="card">
        <g-image src="~/assets/service-logo.svg" width="54" />
        <h3>dolor sit amet <strong>consectetuer</strong></h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
      </div>
      <div class="card">
        <g-image src="~/assets/service-logo.svg" width="54" />
        <h3>dolor sit amet <strong>consectetuer</strong></h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
      </div>
      <div class="card">
        <g-image src="~/assets/service-logo.svg" width="54" />
        <h3>dolor sit amet <strong>consectetuer</strong></h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
      </div>
      <div class="card">
        <g-image src="~/assets/service-logo.svg" width="54" />
        <h3>dolor sit amet <strong>consectetuer</strong></h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 120px;
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