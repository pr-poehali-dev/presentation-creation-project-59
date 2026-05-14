import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const IMG_COVER = "https://cdn.poehali.dev/projects/6cbce7e5-0b47-49cb-8cf5-bbf96d6fe66e/files/175eb887-3f76-444e-9d02-d3ed669d1f0a.jpg";
const IMG_MOSAIC = "https://cdn.poehali.dev/projects/6cbce7e5-0b47-49cb-8cf5-bbf96d6fe66e/files/4fd6afa2-b625-4e4a-9aba-1f27cd703964.jpg";
const IMG_NATURE = "https://cdn.poehali.dev/projects/6cbce7e5-0b47-49cb-8cf5-bbf96d6fe66e/files/b1d1c78d-19eb-4610-bead-504cf9777874.jpg";

const TOTAL = 13;

function SlideWrapper({ children, bg, bgImage }: { children: React.ReactNode; bg?: string; bgImage?: string }) {
  return (
    <div
      className="slide-wrapper"
      style={{
        background: bg || "var(--slide-bg)",
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {bgImage && <div className="slide-overlay" />}
      <div className="slide-content">{children}</div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-badge">
      <span>{children}</span>
    </div>
  );
}

function InfoCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="info-card">
      <div className="info-card-icon">{icon}</div>
      <div>
        <div className="info-card-title">{title}</div>
        {text && <div className="info-card-text">{text}</div>}
      </div>
    </div>
  );
}

function CommCard({ emoji, label }: { emoji: string; label: string }) {
  return (
    <div className="comm-card">
      <span className="comm-emoji">{emoji}</span>
      <span className="comm-label">{label}</span>
    </div>
  );
}

const Slide1 = () => (
  <SlideWrapper bgImage={IMG_COVER}>
    <div className="slide1-inner">
      <div className="slide1-top">
        <div className="slide1-lyceum">Лицей «Магистр» · г. Орёл · 2026</div>
        <div className="slide1-type">Индивидуальный проект</div>
      </div>
      <div className="slide1-center">
        <div className="slide1-klass">10 класс</div>
        <h1 className="slide1-title">Виды языковых систем<br />у животных</h1>
        <div className="slide1-divider" />
        <div className="slide1-authors">
          <div className="slide1-author-row">
            <span className="slide1-author-role">Автор проекта:</span>
            <span className="slide1-author-name">Авдеева Каролина</span>
          </div>
          <div className="slide1-author-row">
            <span className="slide1-author-role">Руководитель:</span>
            <span className="slide1-author-name">Климова Наталья Юрьевна</span>
          </div>
        </div>
      </div>
      <div className="slide1-bottom">
        <div className="slide1-year">2026</div>
      </div>
    </div>
  </SlideWrapper>
);

const Slide2 = () => (
  <SlideWrapper bgImage={IMG_MOSAIC}>
    <div className="slide2-inner">
      <SectionBadge>Содержание</SectionBadge>
      <h2 className="slide-h2">Структура проекта</h2>
      <div className="contents-grid">
        {[
          { emoji: "🎤", text: "Введение" },
          { emoji: "🧠", text: "§1. Теоретические основы коммуникации животных" },
          { emoji: "🔄", text: "§2. Формы и механизмы биологической коммуникации" },
          { emoji: "🐬", text: "§3. Языковое поведение животных" },
          { emoji: "🔬", text: "§4. Современные исследования" },
          { emoji: "🌍", text: "Заключение" },
          { emoji: "📚", text: "Список источников" },
          { emoji: "📎", text: "Приложения" },
        ].map((item, i) => (
          <div key={i} className="contents-item">
            <span className="contents-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="contents-emoji">{item.emoji}</span>
            <span className="contents-text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const Slide3 = () => (
  <SlideWrapper bg="linear-gradient(135deg, #0a1628 0%, #0d2340 40%, #0a3320 100%)">
    <div className="slide-two-col">
      <div className="slide-col-text">
        <SectionBadge>Введение</SectionBadge>
        <h2 className="slide-h2">Почему животные<br /><em>"говорят"?</em></h2>
        <div className="bullet-list">
          <div className="bullet-item">
            <div className="bullet-dot" />
            <div>
              <strong>Коммуникация = выживание</strong>
              <p>Передача информации — основа жизни в группе</p>
            </div>
          </div>
          <div className="bullet-item">
            <div className="bullet-dot" />
            <div>
              <strong>Цель исследования</strong>
              <p>Изучить языковые системы у разных видов животных</p>
            </div>
          </div>
          <div className="bullet-item">
            <div className="bullet-dot" />
            <div>
              <strong>Задачи</strong>
              <p>Классификация · Анализ · Примеры · Открытия</p>
            </div>
          </div>
        </div>
        <div className="photo-credit">© BBC Earth / iNaturalist</div>
      </div>
      <div className="slide-col-img">
        <img src={IMG_COVER} alt="Коммуникация животных" className="slide-img-rounded" />
        <div className="img-caption">Пчёлы исполняют «танец» для передачи информации о нектаре</div>
      </div>
    </div>
  </SlideWrapper>
);

const Slide4 = () => (
  <SlideWrapper bg="linear-gradient(135deg, #08152a 0%, #0a2535 50%, #061820 100%)">
    <div className="slide-col-text" style={{ maxWidth: "100%" }}>
      <SectionBadge>§1. Теоретические основы</SectionBadge>
      <h2 className="slide-h2">Что такое коммуникация<br />у животных?</h2>
      <div className="schema-row">
        <div className="schema-box">🐾<br />Животное</div>
        <div className="schema-arrow">
          <Icon name="ArrowRight" size={28} />
          <span>Сигнал</span>
        </div>
        <div className="schema-box">📡<br />Канал</div>
        <div className="schema-arrow">
          <Icon name="ArrowRight" size={28} />
          <span>Получение</span>
        </div>
        <div className="schema-box">🐾<br />Получатель</div>
      </div>
      <div className="comm-grid">
        <CommCard emoji="🎵" label="Звуковые сигналы" />
        <CommCard emoji="🧪" label="Химические (феромоны)" />
        <CommCard emoji="👁️" label="Визуальные (жесты, окраска)" />
        <CommCard emoji="✋" label="Тактильные (прикосновения)" />
        <CommCard emoji="⚡" label="Электромагнитные" />
      </div>
      <div className="photo-credit">Схема на основе данных ethology.ru / Wikimedia Commons</div>
    </div>
  </SlideWrapper>
);

const Slide5 = () => (
  <SlideWrapper bg="linear-gradient(135deg, #07131f 0%, #0b2230 50%, #061a12 100%)">
    <div className="slide-col-text" style={{ maxWidth: "100%" }}>
      <SectionBadge>§2. Формы и механизмы</SectionBadge>
      <h2 className="slide-h2">Как животные<br /><em>"разговаривают"?</em></h2>
      <div className="animals-grid">
        {[
          { emoji: "🐝", name: "Пчёлы", desc: "Танец — передача координат нектара", tag: "Визуальная" },
          { emoji: "🐺", name: "Волк", desc: "Позы тела — демонстрация иерархии", tag: "Визуальная" },
          { emoji: "🐘", name: "Слон", desc: "Инфразвук — связь на десятки км", tag: "Акустическая" },
          { emoji: "🐟", name: "Электрический угорь", desc: "Электрические поля для навигации", tag: "Электромаг." },
          { emoji: "🐦", name: "Соловей", desc: "Видовые песни и диалекты", tag: "Акустическая" },
          { emoji: "🐜", name: "Муравьи", desc: "Феромонные тропы — карты маршрутов", tag: "Химическая" },
        ].map((a, i) => (
          <div key={i} className="animal-card">
            <div className="animal-emoji">{a.emoji}</div>
            <div className="animal-name">{a.name}</div>
            <div className="animal-desc">{a.desc}</div>
            <Tag>{a.tag}</Tag>
          </div>
        ))}
      </div>
      <div className="photo-credit">Фото: National Geographic, PLOS ONE, iNaturalist</div>
    </div>
  </SlideWrapper>
);

const Slide6 = () => (
  <SlideWrapper bg="linear-gradient(135deg, #071220 0%, #0a1f10 60%, #07120a 100%)">
    <div className="slide-two-col">
      <div className="slide-col-text">
        <SectionBadge>Химическая коммуникация</SectionBadge>
        <h2 className="slide-h2">Общение<br />через запах</h2>
        <div className="fact-block">
          <div className="fact-icon">🧪</div>
          <div>
            <div className="fact-title">Феромоны = химические «сообщения»</div>
            <div className="fact-text">Молекулы, несущие точную информацию другим особям своего вида</div>
          </div>
        </div>
        <div className="fact-block">
          <div className="fact-icon">🗺️</div>
          <div>
            <div className="fact-title">Аттрактанты, репелленты, маркеры</div>
            <div className="fact-text">Три основных типа феромонов по функции</div>
          </div>
        </div>
        <div className="fact-block">
          <div className="fact-icon">🌊</div>
          <div>
            <div className="fact-title">Работает в темноте и под водой</div>
            <div className="fact-text">Не зависит от видимости и освещения</div>
          </div>
        </div>
        <div className="photo-credit">© Alex Wild / AntWeb.org</div>
      </div>
      <div className="slide-col-img">
        <div className="emoji-showcase">
          <div className="emoji-big">🐜</div>
          <div className="emoji-label">Муравьи оставляют феромонный след</div>
          <div className="emoji-big" style={{ marginTop: "1.5rem" }}>🦫</div>
          <div className="emoji-label">Бобёр метит территорию</div>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

const Slide7 = () => (
  <SlideWrapper bg="linear-gradient(135deg, #071828 0%, #092030 60%, #061015 100%)">
    <div className="slide-two-col">
      <div className="slide-col-text">
        <SectionBadge>Акустическая коммуникация</SectionBadge>
        <h2 className="slide-h2">Язык<br />звуков</h2>
        <div className="fact-block">
          <div className="fact-icon">🐦</div>
          <div>
            <div className="fact-title">Сиринкс у птиц</div>
            <div className="fact-text">Уникальный голосовой орган — производит сложные мелодии</div>
          </div>
        </div>
        <div className="fact-block">
          <div className="fact-icon">🦇</div>
          <div>
            <div className="fact-title">Эхолокация у летучих мышей</div>
            <div className="fact-text">Ультразвук частотой 20–200 кГц для навигации</div>
          </div>
        </div>
        <div className="fact-block">
          <div className="fact-icon">🐘</div>
          <div>
            <div className="fact-title">Инфразвук у слонов</div>
            <div className="fact-text">Связь на расстоянии до 10 км через почву</div>
          </div>
        </div>
        <div className="photo-credit">© NOAA / Wikimedia Commons</div>
      </div>
      <div className="slide-col-img">
        <div className="sound-vis">
          <div className="sound-wave-container">
            {[1,2,3,4,5,6,7,8,9,10].map(i => (
              <div key={i} className="sound-bar" style={{ animationDelay: `${i * 0.1}s`, height: `${Math.sin(i) * 30 + 50}px` }} />
            ))}
          </div>
          <div className="sound-label">🐬 Эхолокация дельфина</div>
          <div className="sound-wave-container" style={{ marginTop: "1.5rem" }}>
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} className="sound-bar sound-bar-low" style={{ animationDelay: `${i * 0.15}s`, height: `${Math.cos(i) * 20 + 35}px` }} />
            ))}
          </div>
          <div className="sound-label">🐘 Инфразвук слона</div>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

const Slide8 = () => (
  <SlideWrapper bg="linear-gradient(135deg, #0a1520 0%, #14240a 50%, #0a1820 100%)">
    <div className="slide-col-text" style={{ maxWidth: "100%" }}>
      <SectionBadge>Визуальная и тактильная</SectionBadge>
      <h2 className="slide-h2">Жесты, цвет<br /><em>и прикосновения</em></h2>
      <div className="visual-grid">
        <div className="visual-card">
          <div className="visual-emoji">🦚</div>
          <div className="visual-title">Позы = статус</div>
          <div className="visual-text">Павлин демонстрирует хвост · Волки показывают иерархию</div>
        </div>
        <div className="visual-card">
          <div className="visual-emoji">🦎</div>
          <div className="visual-title">Цвет = настроение</div>
          <div className="visual-text">Хамелеон меняет окраску · Рыбы сигнализируют состояние</div>
        </div>
        <div className="visual-card">
          <div className="visual-emoji">🐘</div>
          <div className="visual-title">Прикосновения = связь</div>
          <div className="visual-text">Слоны касаются хоботами · Муравьи антеннами обмениваются</div>
        </div>
      </div>
      <div className="photo-credit">© Frans Lanting / BBC Earth</div>
    </div>
  </SlideWrapper>
);

const Slide9 = () => (
  <SlideWrapper bg="linear-gradient(135deg, #071825 0%, #0a1f30 60%, #051015 100%)">
    <div className="slide-two-col">
      <div className="slide-col-text">
        <SectionBadge>§3. Языковое поведение</SectionBadge>
        <h2 className="slide-h2">Есть ли «язык»<br />у животных?</h2>
        <div className="lang-items">
          <InfoCard icon="🐬" title="Дельфины" text="Уникальные «именные» свисты — каждый дельфин имеет своё имя" />
          <InfoCard icon="🦜" title="Попугай Алекс" text="Понимал 150 слов, умел считать до 6 и называть цвета" />
          <InfoCard icon="🐒" title="Обезьяны" text="Жестовые системы с контекстом — разное значение в разных ситуациях" />
        </div>
        <div className="lang-note">
          <Icon name="Info" size={16} />
          <span>Нет грамматики, но есть смысл · Диалекты у китов и птиц</span>
        </div>
        <div className="photo-credit">© Irene Pepperberg / National Geographic</div>
      </div>
      <div className="slide-col-img">
        <div className="emoji-showcase">
          <div className="emoji-big">🐬</div>
          <div className="emoji-label">Свисты дельфинов — уникальные «имена»</div>
          <div style={{ height: "1.5rem" }} />
          <div className="emoji-big">🦜</div>
          <div className="emoji-label">Попугай Алекс понимал слова и числа</div>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

const Slide10 = () => (
  <SlideWrapper bg="linear-gradient(135deg, #06101a 0%, #091c2e 50%, #040d15 100%)">
    <div className="slide-col-text" style={{ maxWidth: "100%" }}>
      <SectionBadge>§4. Современные исследования</SectionBadge>
      <h2 className="slide-h2">Что открыли учёные?</h2>
      <div className="research-grid">
        <div className="research-card">
          <div className="research-num">01</div>
          <div className="research-emoji">🤖</div>
          <div className="research-title">ИИ расшифровывает «речь»</div>
          <div className="research-text">Нейросети анализируют свисты и клики дельфинов, выявляя смысловые паттерны</div>
        </div>
        <div className="research-card">
          <div className="research-num">02</div>
          <div className="research-emoji">🐝</div>
          <div className="research-title">Танец пчёл — оценка качества</div>
          <div className="research-text">Пчёлы кодируют расстояние, направление и качество нектара в движениях танца</div>
        </div>
        <div className="research-card">
          <div className="research-num">03</div>
          <div className="research-emoji">🐘</div>
          <div className="research-title">Слоны узнают голоса</div>
          <div className="research-text">Слоны идентифицируют голоса родственников на расстоянии до 10 километров</div>
        </div>
      </div>
      <div className="photo-credit">© PLOS Computational Biology / BBC</div>
    </div>
  </SlideWrapper>
);

const Slide11 = () => (
  <SlideWrapper bgImage={IMG_NATURE}>
    <div className="slide11-inner">
      <SectionBadge>Заключение</SectionBadge>
      <h2 className="slide-h2 slide-h2-light">Мир, в котором животные <em>«говорят»</em></h2>
      <div className="conclusion-cards">
        <div className="concl-card">
          <div className="concl-icon">🌱</div>
          <div className="concl-title">Коммуникация = основа выживания</div>
          <div className="concl-text">Без передачи информации невозможна социальная жизнь, охота, защита</div>
        </div>
        <div className="concl-card">
          <div className="concl-icon">🔬</div>
          <div className="concl-title">Системы сложные, но иные</div>
          <div className="concl-text">Не имеют грамматики как у человека, но несут реальный смысл</div>
        </div>
        <div className="concl-card">
          <div className="concl-icon">🧬</div>
          <div className="concl-title">Ключ к эволюции языка</div>
          <div className="concl-text">Исследования помогают понять, как возник человеческий язык</div>
        </div>
      </div>
      <div className="photo-credit">© Paul Nicklen / National Geographic</div>
    </div>
  </SlideWrapper>
);

const Slide12 = () => (
  <SlideWrapper bg="linear-gradient(135deg, #06101a 0%, #0a1825 100%)">
    <div className="slide-col-text" style={{ maxWidth: "760px", margin: "0 auto" }}>
      <SectionBadge>Источники</SectionBadge>
      <h2 className="slide-h2">Использованные источники</h2>
      <div className="sources-list">
        {[
          { num: "1", text: "Кримина, В. А. «Биологическая коммуникация»", tag: "Книга" },
          { num: "2", text: "Никитин, М. В. «Этология животных»", tag: "Книга" },
          { num: "3", text: "National Geographic — статьи о дельфинах, пчёлах, слонах", tag: "Интернет" },
          { num: "4", text: "BBC Earth — документальные материалы", tag: "Видео" },
          { num: "5", text: "PLOS ONE, iNaturalist — открытые научные данные", tag: "Наука" },
          { num: "6", text: "Wikimedia Commons — свободные изображения", tag: "Медиа" },
        ].map((s) => (
          <div key={s.num} className="source-item">
            <span className="source-num">{s.num}</span>
            <span className="source-text">{s.text}</span>
            <span className="source-tag">{s.tag}</span>
          </div>
        ))}
      </div>
      <div className="photo-credit" style={{ marginTop: "1.5rem" }}>Все изображения — с указанием источников</div>
    </div>
  </SlideWrapper>
);

const Slide13 = () => (
  <SlideWrapper bg="linear-gradient(135deg, #081218 0%, #0a1e10 100%)">
    <div className="slide-col-text" style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
      <SectionBadge>Приложения</SectionBadge>
      <h2 className="slide-h2">Дополнительные материалы</h2>
      <div className="appendix-grid">
        {[
          { emoji: "🎬", title: "Видео", desc: "Танец пчёл (waggle dance)" },
          { emoji: "🎵", title: "Аудио", desc: "Свист дельфина-афалины" },
          { emoji: "📊", title: "Диаграмма", desc: "Типы феромонов по функции" },
          { emoji: "🖼️", title: "Фотогалерея", desc: "Коммуникация в дикой природе" },
        ].map((a, i) => (
          <div key={i} className="appendix-card">
            <div className="appendix-emoji">{a.emoji}</div>
            <div className="appendix-title">{a.title}</div>
            <div className="appendix-desc">{a.desc}</div>
          </div>
        ))}
      </div>
      <div className="appendix-credit">Материалы подготовлены автором проекта — Авдеевой Каролиной</div>
    </div>
  </SlideWrapper>
);

const SLIDE_COMPONENTS = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7,
  Slide8, Slide9, Slide10, Slide11, Slide12, Slide13,
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number, dir: "next" | "prev") => {
    if (animating) return;
    setAnimating(true);
    setAnimDir(dir);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 380);
  }, [animating]);

  const goNext = useCallback(() => {
    if (current < TOTAL - 1) goTo(current + 1, "next");
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    if (current > 0) goTo(current - 1, "prev");
  }, [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const SlideComp = SLIDE_COMPONENTS[current];

  return (
    <div className="presentation-root">
      <div
        key={current}
        className={`slide-anim ${animDir === "next" ? "slide-anim-next" : "slide-anim-prev"}`}
      >
        <SlideComp />
      </div>

      <button
        className="nav-btn nav-btn-prev"
        onClick={goPrev}
        disabled={current === 0}
        aria-label="Предыдущий слайд"
      >
        <Icon name="ChevronLeft" size={30} />
      </button>

      <button
        className="nav-btn nav-btn-next"
        onClick={goNext}
        disabled={current === TOTAL - 1}
        aria-label="Следующий слайд"
      >
        <Icon name="ChevronRight" size={30} />
      </button>

      <div className="slide-dots">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? "dot-active" : ""}`}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            aria-label={`Слайд ${i + 1}`}
          />
        ))}
      </div>

      <div className="slide-counter">
        {current + 1} / {TOTAL}
      </div>
    </div>
  );
}
