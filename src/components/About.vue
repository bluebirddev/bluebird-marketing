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
        We are a remote team with diverse backgrounds and complimentary skillsets.  We’re united through our love of tech, adaptability, and eagerness to learn. 
        Our culture is built upon pride and collaboration, allowing us to effectively divide, conquer and tailor every task and challenge.
      </p>
      <p>
       Each of our clients has a unique set of needs, so we don’t just offer a boilerplate solution.  We can slot into your existing development pipeline, provide a hands-on approach, or
        adopt and manage the entire process.  Your choice.  Our process is custom tailored for your requirements.        
      </p>
      <p>
        We’re not limited to one stack.  The world of tech is constantly evoling.  We find the balance between modern technologies and honoring time-tested methodologies.
      </p>
      <p>
        We pride ourselves in creating solutions that are simple, powerful, sustainable and beautiful.
      </p>
      <p>
        Want to <strong>work</strong> with us?  
        Let’s build <strong>something</strong>.
        Get in <strong>touch</strong> below.
      </p>
    </div>
    <div class="right" data-aos="fade-left">
      <div class="col">
        <div class="person-card">
          <g-image src="~/assets/cj.jpg" alt="cj" class="person-image" width="400" height="400" fit="cover" />
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
.person-image {
  width: 200px;
  height: 200px;
}
.person-card {
  z-index: 2;
  width: 240px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 10px #0000000D;
  border-radius: 5px 0px;
  opacity: 1;
  & + & {
    margin-top: 30px;
  }
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Courier Prime', monospace;
  h4 {
    text-align: center;
    letter-spacing: 0px;
    color: #1A73E8;
    line-height: 14px;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 0;
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