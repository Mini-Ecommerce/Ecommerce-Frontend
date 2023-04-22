<template>
  <header>
    <div class="logo">
      <NuxtLink to="/"><h1>LOGO</h1></NuxtLink>
    </div>
    <div class="">
      <InputSearch />
    </div>
    <div class="links">
      <el-button :icon="ElIconSetting">
        <NuxtLink to="/login">Admin</NuxtLink>
      </el-button>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

a {
  text-decoration: none;
  color: var(--el-button-text-color);
}

button:hover {
  color: var(--el-button-text-color);
  border-color: var(--el-button-border-color);
  background-color: var(--el-button-bg-color);
}
</style>
