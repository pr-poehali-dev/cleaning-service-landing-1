import { useState } from "react";
import Icon from "@/components/ui/icon";

const SERVICES = [
  {
    icon: "Zap",
    title: "Гидродинамическая прочистка",
    desc: "Подача воды под давлением до 200 атм. Эффективно устраняет жировые пробки, корни деревьев и минеральные отложения. Не повреждает трубы.",
    badge: "Самый эффективный",
    badgeColor: "bg-orange-500",
  },
  {
    icon: "Settings",
    title: "Механическая прочистка",
    desc: "Гибкий трос с насадками вращается внутри трубы, разрушая засор. Подходит для труб диаметром от 32 до 200 мм.",
    badge: "Классический метод",
    badgeColor: "bg-blue-600",
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
    badgeColor: "bg-teal-600",
  },
  {
    icon: "ShieldCheck",
    title: "Прочистка стояков",
    desc: "Специализированное оборудование для прочистки общедомовых стояков в многоквартирных домах. Работаем с ТСЖ и управляющими компаниями.",
    badge: "Для МКД",
    badgeColor: "bg-indigo-600",
  },
  {
    icon: "Clock",
    title: "Аварийный выезд",
    desc: "Бригада мастеров готова выехать в течение 30 минут. Работаем круглосуточно, включая праздники и выходные дни.",
    badge: "24/7",
    badgeColor: "bg-red-600",
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
  { value: "8500", label: "выполненных заказов" },
  { value: "30 мин", label: "время выезда" },
  { value: "100%", label: "гарантия результата" },
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
    <div className="font-ibm bg-[#0b1120] text-white min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b1120]/95 backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
              <Icon name="Droplets" size={18} className="text-white" />
            </div>
            <span className="font-montserrat font-extrabold text-white text-lg tracking-tight">МастерПрочист</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#services" className="hover:text-white transition-colors">Услуги</a>
            <a href="#schedule" className="hover:text-white transition-colors">Запись</a>
            <a href="#about" className="hover:text-white transition-colors">О нас</a>
          </div>
          <a
            href="tel:+78001234567"
            className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-400 transition-colors text-white font-montserrat font-semibold text-sm px-4 py-2 rounded-lg"
          >
            <Icon name="Phone" size={15} />
            8 800 123-45-67
          </a>
          <button className="md:hidden text-slate-400" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0e1628] border-t border-white/5 px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#services" className="text-slate-300" onClick={() => setMenuOpen(false)}>Услуги</a>
            <a href="#schedule" className="text-slate-300" onClick={() => setMenuOpen(false)}>Запись</a>
            <a href="#about" className="text-slate-300" onClick={() => setMenuOpen(false)}>О нас</a>
            <a href="tel:+78001234567" className="text-orange-400 font-semibold">8 800 123-45-67</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/0d269deb-f452-4d52-ad7f-8fb7020e2e13/files/5c9d4aa2-04b3-4f88-aa81-1b382ed495c9.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-[#0b1120]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent" />

        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute h-px bg-white w-full" style={{ top: `${12 + i * 12}%` }} />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 rounded-full px-4 py-1.5 text-orange-400 text-sm font-montserrat font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              Выезд мастера за 30 минут
            </div>

            <h1 className="font-montserrat font-black text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Прочистка<br />
              <span className="text-orange-500">канализации</span><br />
              в Москве
            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Профессиональное оборудование, опытные мастера, гарантия результата. Работаем с жилыми и коммерческими объектами.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#schedule"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-montserrat font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-105 shadow-lg shadow-orange-500/20"
              >
                <Icon name="Calendar" size={18} />
                Записаться онлайн
              </a>
              <a
                href="tel:+78001234567"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-montserrat font-semibold px-8 py-4 rounded-xl text-base transition-all"
              >
                <Icon name="Phone" size={18} />
                8 800 123-45-67
              </a>
            </div>

            <p className="mt-4 text-slate-500 text-sm">Бесплатная диагностика при заказе прочистки</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="about" className="bg-[#0e1628] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-montserrat font-black text-3xl md:text-4xl text-orange-500 mb-1">{s.value}</div>
              <div className="text-slate-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-14">
          <p className="text-orange-500 font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Наши услуги</p>
          <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-white">
            Методы прочистки
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl text-lg">
            Подбираем оптимальный метод после бесплатной диагностики трубопровода
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group bg-[#0e1628] border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 hover:bg-[#111c35] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 group-hover:bg-orange-500/10 transition-colors flex items-center justify-center">
                  <Icon name={s.icon} size={22} className="text-orange-400" />
                </div>
                <span className={`text-xs text-white font-montserrat font-semibold px-2.5 py-1 rounded-full ${s.badgeColor}`}>
                  {s.badge}
                </span>
              </div>
              <h3 className="font-montserrat font-bold text-lg text-white mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEDULE + BOOKING */}
      <section id="schedule" className="bg-[#0e1628] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="mb-14">
            <p className="text-orange-500 font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Онлайн-запись</p>
            <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-white">
              Выберите удобное время
            </h2>
            <p className="text-slate-400 mt-4 text-lg">Мастер приедет строго в выбранное время</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendar */}
            <div>
              <p className="text-slate-400 text-sm mb-4 font-montserrat font-medium uppercase tracking-wide">День недели</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {Object.keys(SCHEDULE).map((day) => (
                  <button
                    key={day}
                    onClick={() => { setSelectedDay(day); setSelectedSlot(null); }}
                    className={`px-4 py-2 rounded-xl font-montserrat font-semibold text-sm transition-all ${
                      selectedDay === day
                        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                        : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <p className="text-slate-400 text-sm mb-4 font-montserrat font-medium uppercase tracking-wide">Время</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {currentSchedule.slots.map((slot, i) => {
                  const avail = currentSchedule.available[i];
                  return (
                    <button
                      key={slot}
                      disabled={!avail}
                      onClick={() => avail && setSelectedSlot(slot)}
                      className={`py-3 rounded-xl font-montserrat font-semibold text-sm transition-all relative ${
                        !avail
                          ? "bg-white/3 text-slate-600 cursor-not-allowed line-through"
                          : selectedSlot === slot
                          ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                          : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {slot}
                      {avail && (
                        <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-green-400" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-5 mt-6 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  Свободно
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  Выбрано
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-600" />
                  Занято
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#0b1120] border border-white/5 rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mb-4">
                    <Icon name="CheckCircle" size={32} className="text-green-400" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-white mb-2">Запись принята!</h3>
                  <p className="text-slate-400 text-sm">Мастер позвонит за 1 час до приезда для подтверждения</p>
                  <div className="mt-4 bg-orange-500/10 border border-orange-500/20 rounded-xl px-4 py-3 text-orange-400 text-sm">
                    {selectedDay} в {selectedSlot}
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="font-montserrat font-bold text-xl text-white mb-1">Ваши данные</h3>
                  {selectedSlot ? (
                    <p className="text-slate-400 text-sm mb-6">
                      Запись на <span className="text-orange-400 font-semibold">{selectedDay}</span> в <span className="text-orange-400 font-semibold">{selectedSlot}</span>
                    </p>
                  ) : (
                    <p className="text-slate-500 text-sm mb-6">Сначала выберите время слева</p>
                  )}

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5 font-montserrat uppercase tracking-wide">Ваше имя</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Иван Петров"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5 font-montserrat uppercase tracking-wide">Телефон</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+7 (___) ___-__-__"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5 font-montserrat uppercase tracking-wide">Описание проблемы</label>
                      <textarea
                        value={form.comment}
                        onChange={(e) => setForm({ ...form, comment: e.target.value })}
                        placeholder="Засор в ванной, не уходит вода..."
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!selectedSlot}
                      className={`w-full py-4 rounded-xl font-montserrat font-bold text-base transition-all mt-2 ${
                        selectedSlot
                          ? "bg-orange-500 hover:bg-orange-400 text-white shadow-lg shadow-orange-500/20 hover:scale-[1.02]"
                          : "bg-white/5 text-slate-600 cursor-not-allowed"
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
      <footer className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
              <Icon name="Droplets" size={18} className="text-white" />
            </div>
            <span className="font-montserrat font-bold text-white">МастерПрочист</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-slate-500">
            <span>Москва и МО</span>
            <span>Работаем 24/7</span>
            <a href="tel:+78001234567" className="text-orange-400 hover:text-orange-300 font-semibold">8 800 123-45-67</a>
          </div>
          <p className="text-slate-600 text-sm">© 2026 МастерПрочист</p>
        </div>
      </footer>
    </div>
  );
}