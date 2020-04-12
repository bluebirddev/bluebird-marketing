<template>
  <div class="content">
    <div id="about-us" />
    <div class="left-content-arrow" />
    <div class="right-content-arrow" />
    <div class="left">
      <h2>
        what we’re all <strong>about</strong>
        <svg class="underline">
          <polyline points="0,5 235,5 242,17" />
        </svg>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </p>
      <p>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </p>
      <p>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui.
      </p>
    </div>
    <div class="right">
      <div class="col">
        <div class="person-card">
          <div class="placeholder-image">Placeholder Image</div>
          <h4>CJ Visser<br/>(founder)</h4>
        </div>
        <div class="person-card">
          <div class="placeholder-image">Placeholder Image</div>
          <h4>Nick Zaverdinos<br/>(something)</h4>
        </div>
      </div>
      <div class="col">
        <img src="@/assets/logo-faded.svg" class="logo-faded" width="135" />
        <div class="person-card">
          <div class="placeholder-image">Placeholder Image</div>
          <h4>Rikus Louw<br/>(something)</h4>
        </div>
      </div>
    </div>
  </div>  
</template>

<style lang="scss" scoped>
.content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  margin-top: 180px;
  position: relative;
}
#about-us {
  position: absolute;
  top: -100px;
}
.underline {
  margin-top: 10px;
  height: 17px;
  display: block;
  width: 250px;
  polyline {
    stroke: #1A73E8;
    stroke-width: 1px;
    fill: none;
  }
}
.left {
  width: 600px;
  z-index: 1;
}
.person-card {
  z-index: 2;
  width: 240px;
  height: 280px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 10px #0000000D;
  border-radius: 5px 0px;
  opacity: 1;
  & + & {
    margin-top: 30px;
  }
  padding: 20px;
  box-sizing: border-box;
  h4 {
    text-align: center;
    letter-spacing: 0px;
    color: #1A73E8;
    line-height: 14px;
    font-size: 11px;
    font-weight: 400;
  }
}
.right {
  margin-left: auto;
  display: flex;
}
.col {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
}
.placeholder-image {
  width: 200px;
  height: 200px;
  border: 0.5px solid #E6E8EB;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C6C8CB;
}
.logo-faded {
  top: -60px;
  position: absolute;
}

.left-content-arrow {
  position: absolute;
  top: -50px;
  left: -190px;
  width: 24px;
  height: 24px;
  border-top: 1px solid #1A73E8;
  border-left: 1px solid #1A73E8;
}
.right-content-arrow {
  position: absolute;
  top: 260px;
  right: -170px;
  width: 24px;
  height: 24px;
  border-top: 1px solid #1A73E8;
  border-left: 1px solid #1A73E8;
  transform: rotate(-45deg);
}


// mobile
@media only screen and (max-width: 1100px) {
  .content {
    flex-direction: column;
    margin-top: 80px;
  }
  .left {
    width: 100%;
  }
  .right {
    flex-direction: column;
    margin-left: 0;
  }
  .col {
    margin: 30px 0 0 0;
  }
  .logo-faded {
    display: none;
  }
}
</style>