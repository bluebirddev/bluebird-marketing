<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style lang="scss">
html {  
  scroll-behavior: smooth;
}
body {
  font-family: 'Montserrat', Arial, sans-serif;
  background-color: #F9FBFD;
}
h2 {
  letter-spacing: 0.6px;
  color: #1A73E8;
  font-weight: 400;
  font-size: 30px;
  /* line-height: 40px; */
  line-height: 1.3333333333333;
  strong {
    font-weight: 600;
  }
}
h3 {
  line-height: 23px;
  letter-spacing: 0.4px;
  color: #1A73E8;
  font-weight: 400;
  font-size: 20px;
  strong {
    font-weight: 600;
  }
}
p {
  letter-spacing: 0.3px;
  color: #A6A8AB;
  font-size: 15px;
  line-height: 25px;
}
.button {
  padding: 10px 17px;
  background: #CADB2C 0% 0% no-repeat padding-box;
  border-radius: 5px 0px;
  font: inherit;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #FFFFFF;
  border: none;
  outline: none;
  cursor: pointer;
  display: inline-block;
}
a {
  font: inherit;
  text-decoration: none;
  color: inherit;
}
.button:hover {  
  background-color: #BACB1C;
}


@media only screen and (max-width: 1100px) {
  h2 {
    font-size: 26px;
  }
}
</style>
