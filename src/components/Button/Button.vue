<template>
    <a :class="className" class="btn">
        <slot></slot>
    </a>
</template>

<script>
import VueTypes from "vue-types";

export default {
  name: "Button",
  props: {
    show: VueTypes.bool,
    className: VueTypes.oneOf([
      "btn-primary",
      "btn-default",
      "btn-danger",
      "btn-info",
      "btn-success",
      "btn-warning"
    ]),
    value: VueTypes.string
  },
  methods: {
    click() {
      console.log("click");
    }
  }
};
</script>

<style>
.btn:hover {
  opacity: 0.8;
}
.btn {
  opacity: 1;
  color: #606266;
  border: 1px solid #606266;
  padding: 10px 20px;
  border-radius: 20px;
  font-family: "Trebuchet MS";
  font-size: 12px;
  cursor: pointer;
}
.btn-primary {
  color: white;
  background: #409eff;
  border: 1px solid #409eff;
}

.btn-success {
  color: white;
  background: #67c23a;
  border: 1px solid #67c23a;
}

.btn-default {
  color: #606266;
  background: #fff;
  border: 1px solid #dcdfe6;
}

.btn-info {
  color: white;
  background: #909399;
  border: 1px solid #909399;
}

.btn-warning {
  color: white;
  background: #e6a23c;
  border: 1px solid #e6a23c;
}

.btn-danger {
  color: white;
  background: #f56c6c;
  border: 1px solid #f56c6c;
}
</style>
