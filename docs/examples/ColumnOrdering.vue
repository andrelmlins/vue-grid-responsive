<template>
  <div>
    <h2>Column ordering</h2>
    <div class="card">
      <row :gutter="12">
        <column :xs="12" :lg="4" :order="2">
          <div class="col">First, but second</div>
        </column>
        <column :xs="12" :lg="4" :order="3">
          <div class="col">Second, but last</div>
        </column>
        <column :xs="12" :lg="4">
          <div class="col">Third, but unordered</div>
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
  name: 'ColumnOrdering',
  data() {
    return {
      example: `<template>
      <row :gutter="50">
        <column :xs="12" :lg="4">First, but second</column>
        <column :xs="12" :lg="4">Second, but last</column>
        <column :xs="12" :lg="4">Third, but unordered</column>
      </row>
    </template>`
    };
  }
};
</script>
