<script setup lang="ts">

</script>

<template>
  <div>
    <div class="header"></div>
    <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
    <label for="openSidebarMenu" class="sidebarIconToggle">
      <div class="spinner diagonal part-1"></div>
      <div class="spinner horizontal"></div>
      <div class="spinner diagonal part-2"></div>
    </label>
    <div id="sidebarMenu">
      <ul class="sidebarMenuInner">
        <li>TTS GENERATION PROGRAM
          <span>Web Developer</span></li>
        <li><a href="#">생성하기</a></li>
        <li><a href="#">관리하기</a></li>
        <li><a href="#">프로필 설정</a></li>
      </ul>
    </div>
    <div id='center' class="main center">
      <!--      <div class="mainInner">-->
      <!--        <div>PURE CSS SIDEBAR TOGGLE MENU</div>-->
      <!--      </div>-->
      <!--      <div class="mainInner">-->
      <!--        <div>PURE CSS SIDEBAR TOGGLE MENU</div>-->
      <!--      </div>-->
      <!--      <div class="mainInner">-->
      <!--        <div>PURE CSS SIDEBAR TOGGLE MENU</div>-->
      <!--      </div>-->
    </div>
  </div>
  <router-view/>
</template>

<style scoped>
html, body {
  overflow-x: hidden;
  height: 100%;
}

body {
  background: #fff;
  padding: 0;
  margin: 0;
  font-family: 'Varela Round', sans-serif;
}

.header {
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  box-shadow: none;
  background-color: #fff;
  position: fixed;
  height: 60px !important;
  overflow: hidden;
  z-index: -10;
}

.main {
  margin: 0 auto;
  display: block;
  height: 100%;
}

.mainInner {
  display: table;
  height: 100%;
  width: 100%;
  text-align: center;
}

.mainInner div {
  display: table-cell;
  vertical-align: middle;
  font-size: 3em;
  font-weight: bold;
  letter-spacing: 1.25px;
}

#sidebarMenu {
  height: 100%;
  position: fixed;
  left: 0;
  width: 260px;
  transform: translateX(-260px);
  transition: transform 250ms ease-in-out;
  border-right: 2px solid #d7d7d7;
}

.sidebarMenuInner {
  margin: 0 0 0 41px;
  padding: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.10);
}

.sidebarMenuInner li:first-child {
  font-size: 20px;
}

.sidebarMenuInner li {
  list-style: none;
  color: #333;
  text-transform: uppercase;
  font-weight: bold;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.10);
  font-size: 18px;
}

.sidebarMenuInner li span {
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.50);
}

.sidebarMenuInner li a {
  color: #333;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

input[type="checkbox"]:checked ~ #sidebarMenu {
  transform: translateX(0);
}

input[type=checkbox] {
  transition: all 0.3s;
  box-sizing: border-box;
  display: none;
}

.sidebarIconToggle {
  transition: all 0.3s;
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  z-index: 99;
  height: 100%;
  width: 100%;
  top: 22px;
  left: 15px;
  height: 22px;
  width: 22px;
}

.spinner {
  transition: all 0.3s;
  box-sizing: border-box;
  position: absolute;
  height: 3px;
  width: 100%;
  background-color: #4da6f6;
}

.horizontal {
  transition: all 0.3s;
  box-sizing: border-box;
  position: relative;
  float: left;
  margin-top: 3px;
}

.diagonal.part-1 {
  position: relative;
  transition: all 0.3s;
  box-sizing: border-box;
  float: left;
}

.diagonal.part-2 {
  transition: all 0.3s;
  box-sizing: border-box;
  position: relative;
  float: left;
  margin-top: 3px;
}

input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
  transition: all 0.3s;
  box-sizing: border-box;
  opacity: 0;
}

input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
  transition: all 0.3s;
  box-sizing: border-box;
  transform: rotate(135deg);
  margin-top: 8px;
}

input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
  transition: all 0.3s;
  box-sizing: border-box;
  transform: rotate(-135deg);
  margin-top: -9px;
}
</style>
