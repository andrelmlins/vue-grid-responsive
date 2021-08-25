<template>
  <div>
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
    </div>
    <code-highlight>
      {{ example }}
    </code-highlight>
  </div>
</template>

<script>
export default {
  name: 'SpecifyingSizes',
  data() {
    return {
      example: `<template>
      <row :gutter="12">
        <column :xs="12" :md="4" :lg="3">xs=12 md=4 lg=3</column>
        <column :xs="12" :md="4" :lg="3">xs=12 md=4 lg=3</column>
        <column :xs="12" :md="4" :lg="3">xs=12 md=4 lg=3</column>
        <column :xs="12" :md="4" :lg="3">xs=12 md=4 lg=3</column>
        <column :xs="12" :lg="6">xs=12 lg=6</column>
        <column :xs="12" :lg="6">xs=12 lg=6</column>
        <column :lg="4">lg=4</column>
        <column :lg="4">lg=4</column>
        <column :lg="4">lg=4</column>
      </row>
    </template>`
    };
  }
};
</script>
