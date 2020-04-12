<template>
  <div class="content">
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
        <g-image src="~/assets/logo-faded.svg" class="logo-faded" width="135" />
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
}
.person-card {
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
</style>