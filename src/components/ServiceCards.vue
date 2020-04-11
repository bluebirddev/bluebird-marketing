<template>
  <div class="content">
    <div class="row">
      <div class="card">
        <h3>dolor sit amet <strong>consectetuer</strong></h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
      </div>
      <div class="card">
        <h3>dolor sit amet <strong>consectetuer</strong></h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
      </div>
      <div class="card">
        <h3>dolor sit amet <strong>consectetuer</strong></h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
      </div>
      <div class="card">
        <h3>dolor sit amet <strong>consectetuer</strong></h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
      </div>
      <div class="card">
        <h3>dolor sit amet <strong>consectetuer</strong></h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
      </div>
      <div class="card">
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
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  width: 300px;
  height: 350px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 10px #0000000D;
  border-radius: 5px 0px;
  margin: 20px;
  padding: 60px 37px;
  box-sizing: border-box;
  text-align: center;
  p {    
    color: #A6A8AB;
  }
}

// mobile
@media only screen and (max-width: 1100px) {
  .card {
    max-width: 300px;
    width: 100%;
  }
}
</style>