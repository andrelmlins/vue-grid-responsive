<template>
  <div>
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
    </div>
    <code-highlight>
      {{ example }}
    </code-highlight>
  </div>
</template>

<script>
export default {
  name: 'ChangingGutter',
  data() {
    return {
      example: `<template>
      <row :gutter="50">
        <column :xs="12" :md="4" :lg="3">xs=12 md=4 lg=3</column>
        <column :xs="12" :md="4" :lg="3">xs=12 md=4 lg=3</column>
        <column :xs="12" :md="4" :lg="3">xs=12 md=4 lg=3</column>
        <column :xs="12" :md="4" :lg="3">xs=12 md=4 lg=3</column>
      </row>
    </template>`
    };
  }
};
</script>
