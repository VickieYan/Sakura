# 需求文档
## 前端
## 后端
### 数据库设计
admin:

| 字段 | 类型 | 说明 |
| - | - |- |
|account|-|-|
|password|-|-|
|role|-|权限|

user(用户基础信息表):

| 字段 | 类型  |说明 |
|-|-|-|
|uid|-|本站唯一ID|
|status|-|用户是否被封禁|
|email|-|-|
|gender|-|-|
|signature|-|个性签名|
|avatarUrl|-|头像地址|
|integration|-|用户积分|
|register_time|-|-|
|register_ip|-|-|
|role|-|用户权限|

user_auths:

|字段|类型|说明|
|-|-|-|
|uid|-|本站唯一ID|
|identity_type|-|登录类型（手机号 邮箱 用户名）或第三方应用名称（微信 微博等）|
|identifier|-|标识（手机号 邮箱 用户名或第三方应用的唯一标识）|
|credential|-|密码凭证（站内的保存密码，站外的不保存或保存token）|

word(词条):

|字段|类型|说明|
|-|-|-|
|uid|-|本站唯一ID|
|wid|-|该单词ID|
|word|-|单词|
|pronunciation|-|发音|
|tone|-|音调|
|property|-|词性|





