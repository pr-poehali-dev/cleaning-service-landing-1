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

const SCHEDULE: Record<string, { slots: string[]; available: boolean[] }> = {
  "Пн": { slots: ["09:00","11:00","13:00","15:00","17:00"], available: [false, true, true, false, true] },
  "Вт": { slots: ["09:00","11:00","13:00","15:00","17:00"], available: [true, true, false, true, true] },
  "Ср": { slots: ["09:00","11:00","13:00","15:00","17:00"], available: [false, false, true, true, false] },
  "Чт": { slots: ["09:00","11:00","13:00","15:00","17:00"], available: [true, false, true, false, true] },
  "Пт": { slots: ["09:00","11:00","13:00","15:00","17:00"], available: [true, true, true, false, false] },
  "Сб": { slots: ["10:00","12:00","14:00","16:00"], available: [false, true, true, false] },
  "Вс": { slots: ["10:00","12:00","14:00"], available: [true, false, true] },
};

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
  const [selectedDay, setSelectedDay] = useState("Пн");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const currentSchedule = SCHEDULE[selectedDay];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) return;
    setSubmitted(true);
  };

  return (
    <div className="font-ibm bg-white text-gray-900 min-h-screen">

      {/* TOP BAR */}
      <div className="bg-red-600 text-white text-xs py-2 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <span>Работаем по Брянску и Брянской области — 24 часа в сутки, 7 дней в неделю</span>
          <a href="tel:+74832000000" className="font-montserrat font-bold tracking-wide hover:underline">
            +7 (4832) 00-00-00
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
            <a href="#schedule" className="hover:text-red-600 transition-colors font-medium">Запись</a>
          </div>

          <a
            href="tel:+74832000000"
            className="hidden md:flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors text-white font-montserrat font-bold text-sm px-4 py-2.5 rounded-lg"
          >
            <Icon name="Phone" size={15} />
            +7 (4832) 00-00-00
          </a>

          <button className="md:hidden text-gray-500" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#services" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Услуги</a>
            <a href="#areas" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Районы</a>
            <a href="#schedule" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Запись</a>
            <a href="tel:+74832000000" className="text-red-600 font-bold">+7 (4832) 00-00-00</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        {/* Red accent block */}
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
              <a
                href="#schedule"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-montserrat font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-105 shadow-lg shadow-red-200"
              >
                <Icon name="Calendar" size={18} />
                Записаться онлайн
              </a>
              <a
                href="tel:+74832000000"
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

          {/* Right side image */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://cdn.poehali.dev/projects/0d269deb-f452-4d52-ad7f-8fb7020e2e13/files/5c9d4aa2-04b3-4f88-aa81-1b382ed495c9.jpg"
                alt="Мастер за работой"
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
              <a href="tel:+74832000000" className="inline-flex items-center gap-2 text-red-600 font-montserrat font-bold hover:underline">
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

      {/* SCHEDULE + BOOKING */}
      <section id="schedule" className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="text-red-600 font-montserrat font-bold text-sm uppercase tracking-widest mb-3">Онлайн-запись</p>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-gray-900">
              Выберите удобное время
            </h2>
            <p className="text-gray-500 mt-3 text-base">Мастер приедет строго в выбранное время</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Calendar */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8">
              <p className="text-gray-400 text-xs mb-4 font-montserrat font-bold uppercase tracking-wide">День недели</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {Object.keys(SCHEDULE).map((day) => (
                  <button
                    key={day}
                    onClick={() => { setSelectedDay(day); setSelectedSlot(null); }}
                    className={`px-4 py-2 rounded-xl font-montserrat font-bold text-sm transition-all ${
                      selectedDay === day
                        ? "bg-red-600 text-white shadow-md shadow-red-100"
                        : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <p className="text-gray-400 text-xs mb-4 font-montserrat font-bold uppercase tracking-wide">Время</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {currentSchedule.slots.map((slot, i) => {
                  const avail = currentSchedule.available[i];
                  return (
                    <button
                      key={slot}
                      disabled={!avail}
                      onClick={() => avail && setSelectedSlot(slot)}
                      className={`py-3 rounded-xl font-montserrat font-bold text-sm transition-all relative ${
                        !avail
                          ? "bg-gray-50 text-gray-300 cursor-not-allowed line-through"
                          : selectedSlot === slot
                          ? "bg-red-600 text-white shadow-md shadow-red-100"
                          : "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600"
                      }`}
                    >
                      {slot}
                      {avail && (
                        <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-green-500" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-5 mt-6 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Свободно
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                  Выбрано
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gray-200" />
                  Занято
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                    <Icon name="CheckCircle" size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-montserrat font-black text-xl text-gray-900 mb-2">Запись принята!</h3>
                  <p className="text-gray-500 text-sm">Мастер позвонит за 1 час до приезда для подтверждения</p>
                  <div className="mt-4 bg-red-50 border border-red-100 rounded-xl px-5 py-3 text-red-600 text-sm font-montserrat font-bold">
                    {selectedDay} в {selectedSlot}
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="font-montserrat font-black text-xl text-gray-900 mb-1">Ваши данные</h3>
                  {selectedSlot ? (
                    <p className="text-gray-500 text-sm mb-6">
                      Запись на <span className="text-red-600 font-bold">{selectedDay}</span> в <span className="text-red-600 font-bold">{selectedSlot}</span>
                    </p>
                  ) : (
                    <p className="text-gray-400 text-sm mb-6">Сначала выберите время слева</p>
                  )}

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
                      <label className="block text-xs text-gray-400 mb-1.5 font-montserrat font-bold uppercase tracking-wide">Адрес</label>
                      <input
                        value={form.comment}
                        onChange={(e) => setForm({ ...form, comment: e.target.value })}
                        placeholder="Брянск, ул. Ленина, д. 5"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-red-400 transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!selectedSlot}
                      className={`w-full py-4 rounded-xl font-montserrat font-black text-base transition-all mt-2 ${
                        selectedSlot
                          ? "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-100 hover:scale-[1.02]"
                          : "bg-gray-100 text-gray-300 cursor-not-allowed"
                      }`}
                    >
                      Записаться
                    </button>
                  </form>
                </>
              )}
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
              <a href="tel:+74832000000" className="text-red-400 hover:text-red-300 font-bold">+7 (4832) 00-00-00</a>
            </div>
            <p className="text-gray-600 text-sm">© 2026 МастерПрочист</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
