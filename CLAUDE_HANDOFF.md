# Claude Code 交接说明：好安颐官网

## 当前状态

项目路径：

```bash
/Users/jasmine/Downloads/好安颐项目/haoyanyi-site
```

当前已经完成一个可运行版本，风格已调整为更接近医疗器械商业产品官网：

- 白色固定导航栏
- 深蓝灰 Hero 首屏
- 右侧为 ECG 报告 + 产品终端 + App 状态卡片组合
- 深蓝数据背书条
- 浅蓝灰图文分屏介绍
- 产品方案、产品形态、商城、新闻动态、团队、联系我们模块
- 页面不使用旧海报、展板截图或计划书截图作为产品主视觉

## 已修改文件

- `src/app/page.tsx`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `package.json`
- `public/images/*`

## 当前图片使用

当前页面用到：

- `/images/logo.png`
- `/images/01-handheld-wearable.png`
- `/images/02-home-companion-robot.png`
- `/images/03-ecg-report-device.png`
- `/images/04-app-dashboard.png`
- `/images/05-bedside-wearable-dock.png`
- `/images/hero-device-ecg.png`

已确认这些图片在本地页面中可以正常加载。

当前图片分配：

- Hero：`hero-device-ecg.png`
- 图文分屏：`05-bedside-wearable-dock.png`
- 产品形态：`01-handheld-wearable.png`、`02-home-companion-robot.png`、`04-app-dashboard.png`
- 商城：`01-handheld-wearable.png`、`05-bedside-wearable-dock.png`、`02-home-companion-robot.png`

## 运行命令

本地预览：

```bash
cd "/Users/jasmine/Downloads/好安颐项目/haoyanyi-site"
npm run dev
```

打开：

```text
http://127.0.0.1:3000
```

构建：

```bash
npm run build
```

`package.json` 中 build 已固定为：

```bash
next build --webpack
```

这样可以避开 Next 16 Turbopack 在部分本地沙盒环境中的端口/进程错误。

## 已验证

- `npm run dev` 已成功启动
- 浏览器已打开 `http://127.0.0.1:3000`
- DOM 内容完整
- 页面图片加载正常

## 下一步建议

优先级从高到低：

1. 视觉微调 Hero 右侧产品组合，让 ECG 报告、设备、App 卡片之间更有真实医疗器械销售页层次。
2. 根据页面实际效果微调 5 张新产品图的裁切位置和卡片高度。
3. 检查移动端 Hero，高度和元素遮挡可能还需要微调。
4. 根据真实商业需求修改商城价格、产品功能和联系表单字段。
5. 做 `npm run build` 最终检查，再部署到 Vercel。

## 设计方向提醒

继续参考 AliveCor Kardia 12L 的风格，但不要照抄：

- 医疗器械产品官网
- 专业、克制、干净、高级
- 深蓝灰 Hero
- 白色导航栏
- 大面积留白
- 产品 + ECG 报告 + App 界面
- 少用光晕、玻璃拟态和 PPT 风卡片
