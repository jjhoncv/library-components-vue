<template>
    <div class="table">
        <div class="table-head">
            <div class="table-row">
                <slot name="columns">
                    <div class="table-column" v-for="column in columns">{{ column }}</div>
                </slot>
            </div>
        </div>
        <div class="table-body">
            <div class="table-row" v-for="item in data">
                <slot :row="item">
                    <div class="table-column" v-for="column in columns" v-if="hasValue(item, column)">{{itemValue(item, column)}}</div>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
import VueTypes from "vue-types";

const Table = {
  name: "Table",
  props: {
    data: Array,
    columns: Array
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    }
  }
};

export default Table;
</script>

<style>
.table {
  width: 100%;
  flex-flow: column nowrap;
  justify-content: space-between;
}
.table-row {
  display: flex;
  flex-flow: row nowrap;
}
.table-column {
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
  flex-basis: 0;
  word-break: break-word;
  padding: 10px;
}
.table-head .table-column {
  font-weight: bold;
}
.table-head .table-row {
  border-bottom: 1px solid #ebeef5;
}
.table-body .table-row {
  justify-content: space-around;
  border-bottom: 1px solid #ebeef5;
  align-items: center;
}
</style>
