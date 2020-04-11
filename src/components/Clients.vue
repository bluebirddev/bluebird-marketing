<template>
  <div class="wrapper">
    <div class="content">
      <h2 class="title">
        some of the people we’ve <strong>worked</strong> with
        <svg class="underline">
          <polyline points="5,5 115,5 122,17" />
        </svg>
      </h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: #1A73E8;
  padding: 90px 0;
  margin-bottom: 100px; // temp
}
.content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  padding: 0 20px;
}
.title {
  width: 300px;
  color: #fff;
  width: 310px;
}
.underline {
  margin-top: 10px;
  height: 17px;
}
polyline {
  stroke: #fff;
  stroke-width: 1px;
  fill: none;
}
</style>
