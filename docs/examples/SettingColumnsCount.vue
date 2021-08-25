<template>
  <div>
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
    </div>
    <code-highlight>
      {{ example }}
    </code-highlight>
  </div>
</template>

<script>
export default {
  name: 'SettingColumnsCount',
  data() {
    return {
      example: `<template>
      <row :gutter="12" :columns="10">
        <column :xs="10" :md="5" :lg="2">xs=10 md=5 lg=2</column>
        <column :xs="10" :md="5" :lg="2">xs=10 md=5 lg=2</column>
        <column :xs="10" :md="5" :lg="2">xs=10 md=5 lg=2</column>
        <column :xs="10" :md="5" :lg="2">xs=10 md=5 lg=2</column>
        <column :xs="10" :md="5" :lg="2">xs=10 md=5 lg=2</column>
        <column :xs="10" :lg="3">xs=10 lg=3</column>
        <column :xs="10" :lg="3">xs=10 lg=3</column>
        <column :xs="10" :lg="3">xs=10 lg=3</column>
      </row>
    </template>`
    };
  }
};
</script>
