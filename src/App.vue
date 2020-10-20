<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4" id="top">
      <a class="navbar-brand" href="/">Бухгалтерский кооператив</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/"> На главную <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Личный кабинет</a>
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <router-view />
    </div>
    <div class="scrollup" id="scrlbtn">
      <a href="#top"><font-awesome-icon icon="chevron-up"/></a>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;

}
.container{
    max-width: 100%;
    margin: 0;
    padding: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.scrollup {
  position: fixed;
  background-color: #e9ecef;
  right: 5%;
  bottom: 0px;
  padding: 4px 10px;
  font-size: 20px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
  text-align: center;
}
.scrollup:hover {
  background-color: #343a40;
}

#top{
  margin-top:0;
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 1rem;
}

.ncard{
  margin-left: auto;
  margin-right: auto;
  max-width: 90%;
  min-width: 400px;
  text-align: left;
}

</style>
