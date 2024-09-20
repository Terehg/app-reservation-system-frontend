<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Reservation App</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/create-reservation" class="nav-link">Create Reservation</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/consult-reservation" class="nav-link">Consult Reservation</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>