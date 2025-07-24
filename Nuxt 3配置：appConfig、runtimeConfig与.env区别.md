# Nuxt 3 配置系统详细指南与完整示例

下面我将通过一个完整的示例项目来详细说明三种配置系统的使用场景、区别和最佳实践。

## 项目结构示例

```
/my-nuxt-app
  ├── .env
  ├── .env.development
  ├── app.config.ts
  ├── nuxt.config.ts
  ├── composables/
  │   └── useApi.ts
  ├── pages/
  │   └── index.vue
  └── server/
      └── api/
          └── hello.get.ts
```

## 1. 环境变量(.env)配置

### 基本配置

`.env` 文件（所有环境共享）:
```ini
NUXT_API_SECRET=default_secret
NUXT_PUBLIC_API_BASE=https://api.example.com
```

`.env.development` 文件（开发环境专用）:
```ini
NUXT_API_SECRET=dev_secret
NUXT_PUBLIC_API_BASE=http://localhost:3000/api
```

### 特点说明
- 环境变量需要 `NUXT_` 前缀才能在 Nuxt 中自动加载
- `NUXT_PUBLIC_` 前缀的变量会自动添加到 runtimeConfig 的 public 部分
- 开发环境会优先加载 `.env.development` 中的变量

## 2. runtimeConfig 配置

### nuxt.config.ts 配置

```typescript
export default defineNuxtConfig({
  runtimeConfig: {
    // 私有配置，仅服务器端可用
    apiSecret: '', // 会被 .env 中的 NUXT_API_SECRET 覆盖
    
    // 公共配置，客户端也可用
    public: {
      apiBase: '/default-api', // 会被 .env 中的 NUXT_PUBLIC_API_BASE 覆盖
      appName: 'My Nuxt App'
    }
  }
})
```

### 服务器端使用示例

`/server/api/hello.get.ts`:
```typescript
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  
  // 访问私有配置
  const secret = config.apiSecret
  
  // 访问公共配置
  const apiBase = config.public.apiBase
  
  return {
    message: `Hello from API!`,
    secret: secret.substring(0, 3) + '...', // 不要返回完整密钥
    apiBase
  }
})
```

### 客户端使用示例

`/composables/useApi.ts`:
```typescript
export const useApi = () => {
  const config = useRuntimeConfig()
  
  // 客户端只能访问 public 配置
  const apiBase = config.public.apiBase
  const appName = config.public.appName
  
  const fetchData = async () => {
    const response = await fetch(`${apiBase}/data`)
    return response.json()
  }
  
  return { apiBase, appName, fetchData }
}
```

## 3. appConfig 配置

### app.config.ts 配置

```typescript
export default defineAppConfig({
  // UI 主题配置
  theme: {
    primaryColor: '#3b82f6',
    secondaryColor: '#10b981',
    darkMode: false
  },
  
  // 应用元数据
  metadata: {
    version: '1.0.0',
    buildDate: '2023-07-01'
  },
  
  // 功能开关
  features: {
    analytics: true,
    notifications: false
  }
})
```

### 客户端使用示例

`/pages/index.vue`:
```vue
<script setup>
const appConfig = useAppConfig()

// 访问主题配置
const primaryColor = computed(() => appConfig.theme.primaryColor)

// 访问元数据
const version = appConfig.metadata.version
</script>

<template>
  <div>
    <h1 :style="{ color: primaryColor }">Welcome to {{ appConfig.metadata.version }}</h1>
    <p>Current theme: {{ appConfig.theme }}</p>
    <p>API Base: {{ $config.public.apiBase }}</p>
  </div>
</template>
```

## 三者的综合比较与使用场景

### 1. 敏感信息 (API 密钥、数据库凭证)
- **推荐方式**: runtimeConfig (非 public) + .env 文件
- **原因**: 不会暴露给客户端，可以通过环境变量灵活配置

```typescript
// nuxt.config.ts
runtimeConfig: {
  databaseUrl: '', // 通过 NUXT_DATABASE_URL 环境变量设置
  authSecret: ''   // 通过 NUXT_AUTH_SECRET 环境变量设置
}
```

### 2. 公共 API 端点
- **推荐方式**: runtimeConfig.public + .env (NUXT_PUBLIC_*)
- **原因**: 客户端需要知道 API 地址，但不同环境可能需要不同地址

```typescript
// nuxt.config.ts
runtimeConfig: {
  public: {
    apiBase: '/api' // 默认值，可通过 NUXT_PUBLIC_API_BASE 覆盖
  }
}
```

### 3. UI 主题/样式配置
- **推荐方式**: appConfig
- **原因**: 纯静态配置，构建时确定，不需要运行时修改

```typescript
// app.config.ts
export default defineAppConfig({
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#10b981'
    }
  }
})
```

### 4. 功能开关
- **动态功能开关**: runtimeConfig.public
- **静态功能开关**: appConfig

```typescript
// 动态开关 (runtimeConfig)
runtimeConfig: {
  public: {
    enableExperimentalFeatures: false // 可通过环境变量覆盖
  }
}

// 静态开关 (appConfig)
appConfig: {
  features: {
    legacySupport: true // 构建时确定
  }
}
```

## 高级用法示例

### 类型安全的 runtimeConfig

创建 `types/runtime-config.d.ts`:
```typescript
declare module 'nuxt/schema' {
  interface RuntimeConfig {
    apiSecret: string
    databaseUrl: string
    public: {
      apiBase: string
      appVersion: string
    }
  }
}
// 确保文件被当作模块处理
export {}
```

### 环境变量验证

创建 `utils/validateEnv.ts`:
```typescript
export const validateEnv = () => {
  const requiredVars = ['NUXT_API_SECRET', 'NUXT_PUBLIC_API_BASE']
  
  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      throw new Error(`Missing required environment variable: ${varName}`)
    }
  }
  
  if (process.env.NUXT_PUBLIC_API_BASE?.startsWith('http://') && process.env.NODE_ENV === 'production') {
    console.warn('WARNING: Using HTTP in production is not secure!')
  }
}
```

然后在 `nuxt.config.ts` 中调用:
```typescript
import { validateEnv } from './utils/validateEnv'

validateEnv()

export default defineNuxtConfig({
  // ... 其他配置
})
```

## 常见问题解答

**Q: 为什么我的环境变量没有生效？**
A: 确保:
1. 变量以 `NUXT_` 或 `NUXT_PUBLIC_` 开头
2. `.env` 文件位于项目根目录
3. 重启开发服务器 (环境变量在启动时加载)

**Q: appConfig 和 runtimeConfig.public 有什么区别？**
A: 
- appConfig 是构建时确定的，会被硬编码到客户端代码中
- runtimeConfig.public 是运行时确定的，可以通过环境变量覆盖

**Q: 如何在服务器路由中访问 appConfig？**
A: appConfig 是客户端概念，服务器端应该使用 runtimeConfig。如果需要共享配置，可以:
1. 将配置放在 runtimeConfig 中
2. 或者创建一个共享的 TS 配置文件

**Q: 如何为不同的部署环境管理配置？**
A: 推荐方法:
1. 使用不同的 `.env` 文件 (`.env.production`, `.env.staging`)
2. 在 CI/CD 中设置环境变量
3. 使用 `dotenv` 根据 `NODE_ENV` 加载不同文件

通过以上详细示例和解释，你应该能够清晰理解 Nuxt 3 中三种配置系统的区别和使用场景，从而为你的项目选择最合适的配置方案。
