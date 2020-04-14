<template>
  <div class="content">
    <div id="about-us" />
    <div class="left-content-arrow" />
    <div class="right-content-arrow" />
    <div class="left" data-aos="fade-right">
      <h2>
        what we’re all <strong>about</strong>
        <svg class="underline">
          <polyline points="0,5 235,5 242,17" />
        </svg>
      </h2>
      <p>
        We are a remote team with diverse backgrounds and complimentary skillsets.  What unite us are our willingness to work in dynamic environments, our love of tech, and our eagerness to learn.
        We don't push a project on anyone.  We believe the best work comes from an engaged and interested person - from taking immense pride in your work.<span class="comment">(better structure)</span>
      </p>
      <p>
        Every one of our clients are different and have their own needs - that's why we won't give you a boilerplate solution.  Want to be hands-on?  Want us to slot into your existing development pipeline?  Want to leave 
        everything to us?  Your choice.  Our process is custom made for your requirements.        
      </p>
      <p>
        We don't tie ourselves to one tech.  We focus on structures that trancends fads.  We find the balance between the latest tech and honoring time-tested methodologies. <span class="comment">(Too airy fairy)</span>
      </p>
      <p>
        We create things that simple, useful, powerful, sustainable, and beautiful.
      </p>
      <p>
        Want to work with us?  
        Want to create something amazing?
        Get in touch below.
      </p>
    </div>
    <div class="right" data-aos="fade-left">
      <div class="col">
        <div class="person-card">
          <g-image src="~/assets/cj.jpg" alt="cj" class="person-image" width="200" height="200" fit="cover" />
          <h4>CJ Visser<br/>(founder)</h4>
        </div>
        <div class="person-card">
          <g-image src="~/assets/nick.jpg" alt="nick" class="person-image" width="200" height="200" fit="cover" />
          <h4>Nick Zaverdinos<br/>(something)</h4>
        </div>
      </div>
      <div class="col">
        <img src="@/assets/logo-faded.svg" class="logo-faded" alt="logo-faded" width="135" fit="cover" />
        <div class="person-card">
          <g-image src="~/assets/rikus.jpg" alt="rikus" class="person-image" width="200" height="200" />
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