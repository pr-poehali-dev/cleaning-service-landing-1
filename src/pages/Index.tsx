import { useState } from "react";
import Icon from "@/components/ui/icon";

const SERVICES = [
  {
    icon: "Zap",
    title: "Гидродинамическая прочистка",
    desc: "Подача воды под давлением до 200 атм. Эффективно устраняет жировые пробки, корни деревьев и минеральные отложения. Не повреждает трубы.",
    badge: "Самый эффективный",
    badgeColor: "bg-red-600",
  },
  {
    icon: "Settings",
    title: "Механическая прочистка",
    desc: "Гибкий трос с насадками вращается внутри трубы, разрушая засор. Подходит для труб диаметром от 32 до 200 мм.",
    badge: "Классический метод",
    badgeColor: "bg-gray-600",
  },
  {
    icon: "Eye",
    title: "Видеодиагностика",
    desc: "Камера на кабеле передаёт изображение в реальном времени. Точно определяем место и причину засора перед началом работ.",
    badge: "Точная диагностика",
    badgeColor: "bg-slate-500",
  },
  {
    icon: "Droplets",
    title: "Химическая прочистка",
    desc: "Профессиональные реагенты для растворения жировых и органических засоров. Применяется при регулярном обслуживании.",
    badge: "Профилактика",
    badgeColor: "bg-red-800",
  },
  {
    icon: "ShieldCheck",
    title: "Прочистка стояков",
    desc: "Специализированное оборудование для прочистки общедомовых стояков в МКД. Работаем с ТСЖ и управляющими компаниями Брянска.",
    badge: "Для МКД",
    badgeColor: "bg-gray-700",
  },
  {
    icon: "Clock",
    title: "Аварийный выезд",
    desc: "Мастер выедет в течение 30 минут по Брянску и 1 часа по области. Работаем круглосуточно, включая праздники.",
    badge: "24/7",
    badgeColor: "bg-red-700",
  },
];

const STATS = [
  { value: "12+", label: "лет на рынке" },
  { value: "6000+", label: "заказов по Брянску и области" },
  { value: "30 мин", label: "время выезда по городу" },
  { value: "100%", label: "гарантия результата" },
];

const AREAS = [
  "Брянск", "Клинцы", "Новозыбков", "Унеча", "Почеп",
  "Жуковка", "Сельцо", "Дятьково", "Стародуб", "Карачев",
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", problem: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSubmitted(false);
    setForm({ name: "", phone: "", problem: "" });
  };

  return (
    <div className="font-ibm bg-white text-gray-900 min-h-screen">

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 animate-fade-in">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Icon name="X" size={22} />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center text-center py-6">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" size={34} className="text-green-500" />
                </div>
                <h3 className="font-montserrat font-black text-xl text-gray-900 mb-2">Заявка принята!</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Мастер свяжется с вами в ближайшее время для уточнения деталей
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 bg-red-600 hover:bg-red-700 text-white font-montserrat font-bold px-8 py-3 rounded-xl transition-all"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center">
                    <Icon name="ClipboardList" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-black text-xl text-gray-900 leading-tight">Оставить заявку</h3>
                    <p className="text-gray-400 text-xs">Перезвоним в течение 15 минут</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-montserrat font-bold uppercase tracking-wide">Ваше имя</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Иван Петров"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-red-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-montserrat font-bold uppercase tracking-wide">Телефон</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-red-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-montserrat font-bold uppercase tracking-wide">Описание проблемы</label>
                    <textarea
                      value={form.problem}
                      onChange={(e) => setForm({ ...form, problem: e.target.value })}
                      placeholder="Засор в ванной, не уходит вода..."
                      rows={3}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-red-400 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-montserrat font-black py-4 rounded-xl text-base transition-all hover:scale-[1.02] shadow-lg shadow-red-100 mt-1"
                  >
                    Отправить заявку
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* TOP BAR */}
      <div className="bg-red-600 text-white text-xs py-2 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <span>Работаем по Брянску и Брянской области — 24 часа в сутки, 7 дней в неделю</span>
          <a href="tel:+79532841388" className="font-montserrat font-bold tracking-wide hover:underline">
            8 (953) 284-13-88
          </a>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-red-600 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center">
              <Icon name="Droplets" size={20} className="text-white" />
            </div>
            <div>
              <div className="font-montserrat font-black text-gray-900 text-base leading-tight">МастерПрочист</div>
              <div className="text-red-600 text-xs font-medium">Брянск и область</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#services" className="hover:text-red-600 transition-colors font-medium">Услуги</a>
            <a href="#areas" className="hover:text-red-600 transition-colors font-medium">Районы</a>
          </div>

          <a
            href="tel:+79532841388"
            className="hidden md:flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors text-white font-montserrat font-bold text-sm px-4 py-2.5 rounded-lg"
          >
            <Icon name="Phone" size={15} />
            8 (953) 284-13-88
          </a>

          <button className="md:hidden text-gray-500" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#services" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Услуги</a>
            <a href="#areas" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Районы</a>
            <a href="tel:+79532841388" className="text-red-600 font-bold">8 (953) 284-13-88</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-50 hidden lg:block" />
        <div className="absolute top-0 right-0 w-8 h-full bg-red-600 hidden lg:block" style={{ right: "calc(50% - 4px)" }} />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5 text-red-600 text-sm font-montserrat font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Выезд по Брянску за 30 минут
            </div>

            <h1 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-6 text-gray-900">
              Прочистка<br />
              <span className="text-red-600">канализации</span><br />
              в Брянске
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              Профессиональное оборудование, опытные мастера. Работаем по всей Брянской области — от Брянска до Клинцов и Новозыбкова.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-montserrat font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-105 shadow-lg shadow-red-200"
              >
                <Icon name="ClipboardList" size={18} />
                Оставить заявку
              </button>
              <a
                href="tel:+79532841388"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-red-300 text-gray-800 hover:text-red-600 font-montserrat font-bold px-8 py-4 rounded-xl text-base transition-all"
              >
                <Icon name="Phone" size={18} />
                Позвонить
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <Icon name="Check" size={15} className="text-red-500" />
                Бесплатная диагностика
              </div>
              <div className="flex items-center gap-1.5">
                <Icon name="Check" size={15} className="text-red-500" />
                Гарантия 1 год
              </div>
              <div className="flex items-center gap-1.5">
                <Icon name="Check" size={15} className="text-red-500" />
                Официальный договор
              </div>
            </div>
          </div>

          {/* Right side pictogram */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-red-50 border-4 border-white shadow-2xl flex items-center justify-center">
              <img
                src="https://cdn.poehali.dev/projects/0d269deb-f452-4d52-ad7f-8fb7020e2e13/files/d6221cc6-4b01-4fea-96d2-f5f2673e1b7c.jpg"
                alt="Прочистка труб"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-red-600 text-white rounded-2xl px-5 py-4 shadow-xl">
              <div className="font-montserrat font-black text-2xl">6000+</div>
              <div className="text-red-100 text-xs font-medium mt-0.5">выполненных заказов</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-red-600">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-montserrat font-black text-3xl text-white mb-1">{s.value}</div>
              <div className="text-red-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="text-red-600 font-montserrat font-bold text-sm uppercase tracking-widest mb-3">Наши услуги</p>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-gray-900">
              Методы прочистки
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl text-base">
              Подбираем оптимальный метод после бесплатной диагностики — приедем в любую точку Брянска и области
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-red-200 hover:shadow-lg hover:shadow-red-50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 group-hover:bg-red-100 transition-colors flex items-center justify-center">
                    <Icon name={s.icon} size={22} className="text-red-600" />
                  </div>
                  <span className={`text-xs text-white font-montserrat font-bold px-2.5 py-1 rounded-full ${s.badgeColor}`}>
                    {s.badge}
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-base text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-montserrat font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-100"
            >
              <Icon name="ClipboardList" size={18} />
              Оставить заявку
            </button>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section id="areas" className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-red-600 font-montserrat font-bold text-sm uppercase tracking-widest mb-3">География работ</p>
              <h2 className="font-montserrat font-black text-3xl md:text-4xl text-gray-900 mb-4">
                Работаем по всей<br />Брянской области
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Выезжаем в любой населённый пункт региона. По Брянску — в течение 30 минут. По области — стоимость выезда рассчитывается индивидуально.
              </p>
              <a href="tel:+79532841388" className="inline-flex items-center gap-2 text-red-600 font-montserrat font-bold hover:underline">
                <Icon name="Phone" size={16} />
                Уточнить стоимость выезда
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {AREAS.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 bg-red-50 text-red-700 border border-red-100 rounded-full px-4 py-2 text-sm font-montserrat font-semibold"
                >
                  <Icon name="MapPin" size={13} />
                  {area}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-500 rounded-full px-4 py-2 text-sm font-medium">
                и другие районы...
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center">
                <Icon name="Droplets" size={20} className="text-white" />
              </div>
              <div>
                <div className="font-montserrat font-black text-white">МастерПрочист</div>
                <div className="text-gray-400 text-xs">Брянск и Брянская область</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400">
              <span>Работаем 24/7</span>
              <span>Выезд 30 минут по городу</span>
              <a href="tel:+79532841388" className="text-red-400 hover:text-red-300 font-bold">8 (953) 284-13-88</a>
            </div>
            <p className="text-gray-600 text-sm">© 2026 МастерПрочист</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
