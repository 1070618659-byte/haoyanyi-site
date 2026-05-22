import Image from "next/image";

const navItems = [
  ["首页", "home"],
  ["产品方案", "solutions"],
  ["产品亮点", "products"],
  ["商城", "shop"],
  ["新闻动态", "news"],
  ["团队", "team"],
  ["联系我们", "contact"],
] as const;

const stats = [
  ["96%+", "心电识别能力"],
  ["24项", "授权发明专利"],
  ["32篇", "SCI 论文支撑"],
  ["4类", "核心应用场景"],
  ["双端", "家庭与机构适配"],
];

const solutions = [
  ["家庭健康守护", "面向居家老人和异地子女，提供日常心电监测、异常提醒与远程守护。"],
  ["社区养老管理", "帮助社区服务人员查看健康状态、识别高风险人群并形成服务记录。"],
  ["康养机构管理", "为养老院、康养中心提供健康看板、风险分级与应急响应辅助。"],
  ["法律安全支持", "围绕反诈、防骗、证据存证与法律咨询，补足银发安全守护链路。"],
];

const highlights = [
  { title: "健康监测", tag: "ECG AI", desc: "心电状态记录、异常趋势提醒、今日守护报告。", accent: "bg-[#26C6B8]" },
  { title: "子女远程守护", tag: "APP", desc: "同步老人状态、SOS 事件、定位与风险提醒。", accent: "bg-[#C9A45C]" },
  { title: "反诈干预", tag: "LAW", desc: "识别高风险话术，推送家庭提醒与处置建议。", accent: "bg-[#E53935]" },
  { title: "证据存证", tag: "TRACE", desc: "保留关键沟通与事件记录，辅助后续维权。", accent: "bg-[#0B1F4D]" },
  { title: "法律咨询", tag: "SAFE", desc: "连接普法内容、咨询入口与银发权益保护服务。", accent: "bg-[#C9A45C]" },
  { title: "SOS 应急响应", tag: "ALERT", desc: "一键呼叫家人、社区与紧急联系人，形成闭环。", accent: "bg-[#E53935]" },
];

const shopProducts = [
  {
    name: "好安颐·随身护 标准版",
    price: "¥1,200",
    people: "个人老人 / 家庭日常守护",
    img: "/images/01-handheld-wearable.png",
    features: ["日常心电监测", "异常状态提醒", "子女端同步"],
  },
  {
    name: "好安颐·随身护 Pro",
    price: "¥2,500",
    people: "慢病管理 / 高风险老人",
    img: "/images/05-bedside-wearable-dock.png",
    features: ["高阶心电分析", "健康趋势报告", "SOS 事件提醒"],
    recommended: true,
  },
  {
    name: "好安颐·全屋伴 机构版",
    price: "¥5,500",
    people: "社区 / 养老院 / 康养机构",
    img: "/images/02-home-companion-robot.png",
    features: ["多人健康管理", "机构看板支持", "应急响应辅助"],
  },
];

const news = [
  ["2026.04", "政策观察", "智慧养老政策持续加码，智能健康终端迎来发展窗口", "智慧养老、健康中国与人工智能融合，为智能健康管理产品进入家庭和社区服务场景提供机会。"],
  ["2026.04", "市场趋势", "银发经济规模增长，家庭健康管理需求持续释放", "慢病管理、子女远程照护与居家健康监测正在成为银发家庭的重要需求。"],
  ["2026.03", "技术前沿", "AI 心电监测进入居家健康管理新阶段", "AI 算法与可穿戴终端结合，推动心电监测从医院走向家庭、社区与机构。"],
  ["2026.03", "银发安全", "反诈、防骗与法律安全成为银发科技新需求", "银发科技正在从单一健康监测扩展到财产安全、证据留存与法律支持。"],
];

const team = ["产品与项目统筹", "医疗技术支持", "法律合规设计", "产品与视觉设计", "市场与商业分析"];

const teamDescriptions: Record<string, string> = {
  产品与项目统筹: "负责产品定位、需求梳理与跨端协作，推动方案从概念走向落地。",
  医疗技术支持: "围绕心电监测、风险提醒与健康数据解释，提供专业技术支撑。",
  法律合规设计: "关注银发反诈、权益保护、证据存证与产品合规边界设计。",
  产品与视觉设计: "负责终端外观、App 体验与品牌表达，让产品更易用、更可信。",
  市场与商业分析: "研究家庭、社区与机构场景，设计价格体系、渠道与合作模式。",
};

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-white text-[#102A43]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex items-center">
              <Image src="/images/logo-nobg.png" alt="好安颐" width={90} height={40} unoptimized className="h-10 w-auto object-contain" />
            </span>
            <span>
              <span className="block text-lg font-black">好安颐</span>
              <span className="hidden text-xs text-slate-500 sm:block">AI 智慧健康与安全守护</span>
            </span>
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-sm font-semibold text-slate-600 transition-all duration-300 hover:text-[#102A43] hover:-translate-y-0.5">
                {label}
              </a>
            ))}
          </div>
          <a href="#contact" className="rounded-full bg-[#102A43] px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#26313D] hover:-translate-y-0.5 hover:shadow-lg">
            预约演示
          </a>
        </nav>
        <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 pb-3 lg:hidden">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-all duration-300 hover:bg-slate-200 hover:-translate-y-0.5">
              {label}
            </a>
          ))}
        </div>
      </header>

      <section className="bg-[#26313D] px-4 pt-36 text-white sm:px-6 lg:px-8 lg:pt-32 overflow-visible">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="lg:pb-12">
            <p className="hero-fade-up mb-5 inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-sky-100">
              面向家庭与机构的 AI 心电健康守护系统
            </p>
            <h1 className="hero-fade-up-delay max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              好安颐 AI 智慧健康与安全守护系统
            </h1>
            <p className="hero-fade-up-delay-2 mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              以<span className="text-xl font-black text-white">心狗智慧健康产品</span>心电智能感知为入口，连接老人、子女与机构，提供健康监测、风险预警、远程守护与安全支持的一体化解决方案。
            </p>
            <div className="hero-fade-up-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#solutions" className="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-[#102A43] transition-all duration-300 hover:bg-slate-100 hover:scale-105 hover:shadow-lg">
                了解产品方案
              </a>
              <a href="#shop" className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg">
                查看产品商城
              </a>
            </div>
            <p className="hero-fade-up-delay-3 mt-5 text-sm text-slate-300">适用于家庭健康管理、社区养老、康养机构与基层健康服务场景。</p>
          </div>

          <div className="hero-slide-in flex items-center justify-end self-end lg:self-center">
            <div className="hero-float relative w-full max-w-[920px] drop-shadow-2xl lg:-translate-y-3 lg:translate-x-16 xl:translate-x-24">
              <Image
                src="/images/hero-device-ecg-cutout.png"
                alt="手持好安颐随身护与 ECG 心电报告"
                width={920}
                height={720}
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="reveal h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F4D] px-4 pt-6 pb-8 text-white sm:px-6 lg:px-8 -mt-4 relative z-10">
        <p className="mx-auto max-w-7xl text-sm text-white/80 mb-5">
          搭载的国际首个心电大模型<span className="text-base font-black text-white">心狗智慧健康系统</span>拥有：
        </p>
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map(([num, label]) => (
            <div key={label} className="text-center lg:text-left">
              <p className="text-3xl font-black">{num}</p>
              <p className="mt-1 text-sm text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0B1F4D] px-0 pb-8 sm:pb-0">
        <div className="relative">
          <Image
            src="/images/ren-image.png"
            alt="好安颐智慧健康系统"
            width={1400}
            height={700}
            unoptimized
            priority
            className="reveal h-auto w-full object-cover"
          />
          <div className="absolute inset-x-0 top-0 px-0 pt-0">
            <div className="mx-auto w-full max-w-4xl rounded-b-2xl bg-[#0B1F4D]/50 p-6 text-center text-white shadow-lg sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#26C6B8]">Product System</p>
              <h2 className="mt-3 text-2xl font-black leading-snug sm:text-3xl">
                让心电健康管理，从医院走向家庭与机构
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200">
                传统心电监测依赖医院和专业设备，难以满足居家长期监测、子女远程照护和机构批量管理的需求。好安颐以 AI 心电感知为入口，将健康数据、风险提醒、亲情守护与安全支持整合为一个可持续使用的智慧健康系统。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="section">
        <div className="section-head">
          <p>Solutions</p>
          <h2>产品方案</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map(([title, desc]) => (
            <article key={title} className="clean-card">
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="overflow-hidden bg-[#0B1F4D] py-16 text-white sm:py-20">
        {/* ECG wave */}
        <svg viewBox="0 0 1200 80" className="mx-auto mb-10 h-14 w-full max-w-4xl px-4 sm:h-16" aria-hidden="true">
          <path
            d="M0 40 H280 L300 40 L320 16 L344 68 L370 40 H560 L588 40 L614 20 L638 64 L664 40 H920 L946 40 L968 24 L994 58 L1018 40 H1200"
            fill="none"
            stroke="#26C6B8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ecg-dash-anim"
            opacity="0.6"
          />
          <path
            d="M0 40 H280 L300 40 L320 16 L344 68 L370 40 H560 L588 40 L614 20 L638 64 L664 40 H920 L946 40 L968 24 L994 58 L1018 40 H1200"
            fill="none"
            stroke="#26C6B8"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ecg-pulse-line"
            opacity="0.25"
          />
        </svg>

        <div className="mb-8 px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#26C6B8]">Highlights</p>
          <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl">
            六个能力模块，组成"健康 + 家庭 + 法律"三重守护
          </h2>
        </div>

        {/* Scrolling cards — doubled for seamless loop */}
        <div className="highlight-scroll flex gap-4 px-4">
          {[...highlights, ...highlights].map((item, i) => (
            <article key={`${item.title}-${i}`} className="highlight-card group">
              <div className="flex items-center justify-between">
                <span className={`h-2 w-12 rounded-full ${item.accent}`} />
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-black text-white/60">{item.tag}</span>
              </div>
              <h3 className="mt-3 text-lg font-black">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="shop" className="section">
        <div className="section-head">
          <p>Store</p>
          <h2>产品商城</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {shopProducts.map((item) => (
            <article key={item.name} className={`price-card ${item.recommended ? "recommended" : ""}`}>
              {item.recommended && <span className="badge">推荐</span>}
              <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                <Image src={item.img} alt={item.name} fill sizes="420px" className="reveal object-cover" />
              </div>
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p className="people">{item.people}</p>
              <ul>
                {item.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <a href="#contact">{item.name.includes("机构") ? "联系采购" : "立即购买"}</a>
            </article>
          ))}
        </div>
      </section>

      <section id="news" className="section bg-[#F8FAFC]">
        <div className="section-head">
          <p>News</p>
          <h2>新闻动态</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {news.map(([date, tag, title, desc]) => (
            <article key={title} className="news-card">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span>{date}</span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{tag}</span>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a href="#contact">阅读全文</a>
            </article>
          ))}
        </div>
      </section>

      <section id="team" className="section">
        <div className="section-head">
          <p>Team</p>
          <h2>专业团队与支持体系</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((role) => (
            <div key={role} className="clean-card">
              <h3>{role}</h3>
              <p>{teamDescriptions[role]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section bg-[#102A43] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-200">Contact</p>
            <h2 className="mt-4 text-4xl font-black">联系我们</h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-300">
              如果你关注家庭健康管理、智慧养老、康养机构数字化或银发安全服务，欢迎与好安颐联系。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["预约演示", "机构采购咨询", "产品合作"].map((item) => (
                <a key={item} href="#contact" className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold hover:bg-white/10">{item}</a>
              ))}
            </div>
          </div>
          <form className="rounded-2xl bg-white p-6 text-[#102A43] shadow-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="input" placeholder="姓名" />
              <input className="input" placeholder="单位 / 机构" />
            </div>
            <input className="input mt-4" placeholder="手机号或邮箱" />
            <textarea className="input mt-4 min-h-28 resize-none" placeholder="请描述您的合作需求" />
            <button type="submit" className="mt-4 w-full rounded-full bg-[#102A43] px-6 py-3 text-sm font-bold text-white">提交合作意向</button>
            <p className="mt-3 text-center text-xs text-slate-400">静态表单，不接数据库；按钮仅用于展示。</p>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} 好安颐. 本站为产品介绍页面，不构成医疗诊断建议。</p>
      </footer>
    </main>
  );
}
