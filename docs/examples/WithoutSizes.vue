<template>
  <div>
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
        {{ example }}
      </code-highlight>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WithoutSizes',
  data() {
    return {
      example: `
    <template>
      <row :gutter="12">
        <column>col</column>
        <column>col</column>
        <column>col</column>
      </row>
      
      <row :gutter="12">
        <column>col</column>
        <column>col</column>
        <column>col</column>
        <column>col</column>
        <column>col</column>
      </row>
    </template>
      `
    };
  }
};
</script>
