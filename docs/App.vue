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

    <h2>Setting columns count</h2>
    <div class="card">
      <row :gutter="12" :columns="10">
        <column :xs="10" :md="5" :lg="2">
          <div class="col">xs=10 md=5 lg=2</div>
        </column>
        <column :xs="10" :md="5" :lg="2">
          <div class="col">xs=10 md=5 lg=2</div>
        </column>
        <column :xs="10" :md="5" :lg="2">
          <div class="col">xs=10 md=5 lg=2</div>
        </column>
        <column :xs="10" :md="5" :lg="2">
          <div class="col">xs=10 md=5 lg=2</div>
        </column>
        <column :xs="10" :md="5" :lg="2">
          <div class="col">xs=10 md=5 lg=2</div>
        </column>
        <column :xs="10" :lg="3">
          <div class="col">xs=10 lg=3</div>
        </column>
        <column :xs="10" :lg="4">
          <div class="col">xs=10 lg=4</div>
        </column>
        <column :xs="10" :lg="3">
          <div class="col">xs=10 lg=3</div>
        </column>
      </row>
      <code-highlight>
        {{ codeThird }}
      </code-highlight>
    </div>
    <h2>Without define sizes</h2>
    <div class="card">
      <div>
        <row :gutter="12">
          <column>
            <div class="col">col</div>
          </column>
          <column>
            <div class="col">col</div>
          </column>
          <column>
            <div class="col">col</div>
          </column>
        </row>
        <br />
        <row :gutter="12">
          <column>
            <div class="col">col</div>
          </column>
          <column>
            <div class="col">col</div>
          </column>
          <column>
            <div class="col">col</div>
          </column>
          <column>
            <div class="col">col</div>
          </column>
          <column>
            <div class="col">col</div>
          </column>
        </row>
      </div>
      <code-highlight>
        {{ codeFirst }}
      </code-highlight>
    </div>
    <h2>Specifying sizes</h2>
    <div class="card">
      <row :gutter="12">
        <column :xs="12" :md="4" :lg="3">
          <div class="col">xs=12 md=4 lg=3</div>
        </column>
        <column :xs="12" :md="4" :lg="3">
          <div class="col">xs=12 md=4 lg=3</div>
        </column>
        <column :xs="12" :md="4" :lg="3">
          <div class="col">xs=12 md=4 lg=3</div>
        </column>
        <column :xs="12" :md="4" :lg="3">
          <div class="col">xs=12 md=4 lg=3</div>
        </column>
        <column :xs="12" :lg="6">
          <div class="col">xs=12 lg=6</div>
        </column>
        <column :xs="12" :lg="6">
          <div class="col">xs=12 lg=6</div>
        </column>
        <column :lg="4">
          <div class="col">lg=4</div>
        </column>
        <column :lg="4">
          <div class="col">lg=4</div>
        </column>
        <column :lg="4">
          <div class="col">lg=4</div>
        </column>
      </row>
      <code-highlight>
        {{ codeSecond }}
      </code-highlight>
    </div>
    <h2>Changing gutter</h2>
    <div class="card">
      <row :gutter="50">
        <column :xs="12" :md="4" :lg="3">
          <div class="col">xs=12 md=4 lg=3</div>
        </column>
        <column :xs="12" :md="4" :lg="3">
          <div class="col">xs=12 md=4 lg=3</div>
        </column>
        <column :xs="12" :md="4" :lg="3">
          <div class="col">xs=12 md=4 lg=3</div>
        </column>
        <column :xs="12" :md="4" :lg="3">
          <div class="col">xs=12 md=4 lg=3</div>
        </column>
      </row>
      <code-highlight>
        {{ codeFourth }}
      </code-highlight>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      codeFirst: `
    <row :gutter="12">
      <column>
        <div class="col">col</div>
      </column>
      <column>
        <div class="col">col</div>
      </column>
      <column>
        <div class="col">col</div>
      </column>
    </row>
      `,
      codeSecond: `
    <row :gutter="12">
      <column :xs="12" :md="4" :lg="3">
        <div class="col">xs=12 md=4 lg=3</div>
      </column>
      <column :xs="12" :md="4" :lg="3">
        <div class="col">xs=12 md=4 lg=3</div>
      </column>
      <column :xs="12" :md="4" :lg="3">
        <div class="col">xs=12 md=4 lg=3</div>
      </column>
      <column :xs="12" :md="4" :lg="3">
        <div class="col">xs=12 md=4 lg=3</div>
      </column>
      <column :xs="12" :lg="6">
        <div class="col">xs=12 lg=6</div>
      </column>
      <column :xs="12" :lg="6">
        <div class="col">xs=12 lg=6</div>
      </column>
    </row>
      `,
      codeThird: `
    <row :gutter="12" :columns="10">
      <column :xs="10" :md="5" :lg="2">
        <div class="col">xs=10 md=5 lg=2</div>
      </column>
      <column :xs="10" :md="5" :lg="2">
        <div class="col">xs=10 md=5 lg=2</div>
      </column>
      <column :xs="10" :md="5" :lg="2">
        <div class="col">xs=10 md=5 lg=2</div>
      </column>
      <column :xs="10" :md="5" :lg="2">
        <div class="col">xs=10 md=5 lg=2</div>
      </column>
      <column :xs="10" :md="5" :lg="2">
        <div class="col">xs=10 md=5 lg=2</div>
      </column>
    </row>
      `,
      codeFourth: `
    <row :gutter="50">
      <column :xs="12" :md="4" :lg="3">
        <div class="col">xs=12 md=4 lg=3</div>
      </column>
      <column :xs="12" :md="4" :lg="3">
        <div class="col">xs=12 md=4 lg=3</div>
      </column>
      <column :xs="12" :md="4" :lg="3">
        <div class="col">xs=12 md=4 lg=3</div>
      </column>
      <column :xs="12" :md="4" :lg="3">
        <div class="col">xs=12 md=4 lg=3</div>
      </column>
    </row>
      `
    };
  }
};
</script>

<style scoped>
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
