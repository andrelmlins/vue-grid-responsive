<template>
  <main>
    <div class="title">
      <img
        alt="Vue Framework"
        src="https://vuejs.org/images/logo.png"
        width="200"
      />
      <h1>Vue Grid Responsive</h1>
    </div>
    <br />
    <SpecifyingSizes />
    <WithoutSizes />
    <SettingColumnsCount />
    <ChangingGutter />
  </main>
</template>

<script>
import SpecifyingSizes from './examples/SpecifyingSizes.vue';
import WithoutSizes from './examples/WithoutSizes.vue';
import SettingColumnsCount from './examples/SettingColumnsCount.vue';
import ChangingGutter from './examples/ChangingGutter.vue';

export default {
  name: 'App',
  components: {
    SpecifyingSizes,
    WithoutSizes,
    SettingColumnsCount,
    ChangingGutter
  }
};
</script>

<style>
main {
  padding: 20px 38px;
  box-sizing: border-box;
  color: #263238;
}
h1 {
  margin-top: 0;
}
.title {
  text-align: center;
}
.col {
  width: 100%;
  padding: 15px 8px;
  box-sizing: border-box;
  color: #263238;
  text-align: center;
  background-color: white;
  font-size: 14pt;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
}
.card {
  border-radius: 2px;
  box-sizing: border-box;
  margin-bottom: 50px;
}
</style>
