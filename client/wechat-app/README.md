# SAKURA(mp)
## 路由管理

### 说明

首先我们来看mpvue是如何获取query参数的：

>微信小程序的页面的 `query` 参数是通过 `onLoad` 获取的，mpvue 对此进行了优化，直接通过 `this.$root.$mp.query` 获取相应的参数数据，其调用需要在 `onLoad` 生命周期触发之后使用，比如 `onShow` 等。

通过`this.$root.$mp.page.route`我们可以拿到当前路由：`route:"pages/index/main"`

通过`this.$root.$mp.query`我们可以获得查询语句`query:{id: "1"}`

在参考**mpvue-router-patch**后，我们模仿vue-router做了如下封装：

```json
$router {
    currentRoute: _route,
    push,
    replace,
    go,
    back
}
```

```json
$route {
    path,
    params,
    query,
    hash,
    fullPath
}
```

这样对从vue转向小程序的用户来说，降低了对小程序方法学习的成本。

### 用法

```js
this.$router.push({ path: '/pages/news/detail', query: { id: 1 } })
```

