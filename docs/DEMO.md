# 测试插件

## html 模板渲染

::: demo 查看源码

```html
<h1>标题</h1>
<h3 style="color:red">标题3</h3>
```

:::

## vue 模板渲染

::: demo [vue] 查看源码

```vue
<template>
  <div>
    <h1>demo</h1>
  </div>
</template>

<script>
export default {
  name: "demo",
};
</script>

<style></style>
```

:::

## vue 模板渲染 2

::: demo [vue] 一个 Vue Demo

```vue
<template>
  <div class="box">
    Mr.Hope <span @click="handler">{{ message }}</span>
  </div>
</template>
<script>
export default {
  data: () => ({ message: "十分帅" }),
  methods: {
    handler() {
      alert(this.message);
    },
  },
};
</script>
<style>
.box span {
  color: red;
}
</style>
```

:::

## vue 组件渲染

<test-temp />

:::demo [vue] 查看源码

```vue
<template>
  <div>
    <h1>vue 组件渲染</h1>
    <test-temp />
  </div>
</template>

<script>
export default {
  name: "name",
};
</script>
```

:::
