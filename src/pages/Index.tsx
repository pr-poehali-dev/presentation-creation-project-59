import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const IMGS = {
  cover:    "https://cdn.poehali.dev/projects/6cbce7e5-0b47-49cb-8cf5-bbf96d6fe66e/files/175eb887-3f76-444e-9d02-d3ed669d1f0a.jpg",
  mosaic:   "https://cdn.poehali.dev/projects/6cbce7e5-0b47-49cb-8cf5-bbf96d6fe66e/files/4fd6afa2-b625-4e4a-9aba-1f27cd703964.jpg",
  nature:   "https://cdn.poehali.dev/projects/6cbce7e5-0b47-49cb-8cf5-bbf96d6fe66e/files/b1d1c78d-19eb-4610-bead-504cf9777874.jpg",
  bees:     "https://cdn.poehali.dev/projects/6cbce7e5-0b47-49cb-8cf5-bbf96d6fe66e/files/142092d8-04c1-4c7d-a03c-0213c8875c05.jpg",
  wolves:   "https://cdn.poehali.dev/projects/6cbce7e5-0b47-49cb-8cf5-bbf96d6fe66e/files/1a85c8ee-3b9c-462b-bc3e-89ce554cfbb0.jpg",
  elephant: "https://cdn.poehali.dev/projects/6cbce7e5-0b47-49cb-8cf5-bbf96d6fe66e/files/ecdbe358-79d7-416a-93b5-4e615df1710b.jpg",
  dolphin:  "https://cdn.poehali.dev/projects/6cbce7e5-0b47-49cb-8cf5-bbf96d6fe66e/files/553acfae-226d-41e8-9b92-adebdfd99ba6.jpg",
  ants:     "https://cdn.poehali.dev/projects/6cbce7e5-0b47-49cb-8cf5-bbf96d6fe66e/files/cc621c76-d83e-4c99-8315-acd43de7df9b.jpg",
  bird:     "https://cdn.poehali.dev/projects/6cbce7e5-0b47-49cb-8cf5-bbf96d6fe66e/files/74485b1a-46ae-4f37-8883-f26b58323da7.jpg",
  peacock:  "https://cdn.poehali.dev/projects/6cbce7e5-0b47-49cb-8cf5-bbf96d6fe66e/files/4fac6aae-8820-40e5-aaf2-30cdb15c35c2.jpg",
  chimp:    "https://cdn.poehali.dev/projects/6cbce7e5-0b47-49cb-8cf5-bbf96d6fe66e/files/769b87a1-5449-4570-83c7-90c6dd037a91.jpg",
  whale:    "https://cdn.poehali.dev/projects/6cbce7e5-0b47-49cb-8cf5-bbf96d6fe66e/files/8eeb4fc0-9973-471f-a0c8-ed62bde6f982.jpg",
  research: "https://cdn.poehali.dev/projects/6cbce7e5-0b47-49cb-8cf5-bbf96d6fe66e/files/1efd45a2-16fa-46bd-b090-64dd3cf9ca9b.jpg",
};

const TOTAL = 13;

function Badge({ children }: { children: React.ReactNode }) {
  return <div className="s-badge">{children}</div>;
}
function Tag({ children }: { children: React.ReactNode }) {
  return <span className="s-tag">{children}</span>;
}
function Credit({ text }: { text: string }) {
  return <div className="s-credit">{text}</div>;
}

function PhotoSlide({ image, overlay, children }: {
  image: string; overlay?: string; children: React.ReactNode;
}) {
  return (
    <div className="ps-root" style={{ backgroundImage: `url(${image})` }}>
      <div className="ps-ov" style={{ background: overlay }} />
      <div className="ps-body">{children}</div>
    </div>
  );
}

function LightSlide({ image, children }: { image?: string; children: React.ReactNode }) {
  return (
    <div className="ls-root">
      {image && (
        <div className="ls-img">
          <img src={image} alt="" />
        </div>
      )}
      <div className={`ls-body ${image ? "ls-half" : "ls-full"}`}>{children}</div>
    </div>
  );
}

/* ══════ SLIDES ══════ */

const Slide1 = () => (
  <PhotoSlide image={IMGS.cover} overlay="linear-gradient(120deg,rgba(10,25,15,0.82) 0%,rgba(4,15,28,0.55) 100%)">
    <div className="s1-wrap">
      <div className="s1-meta">
        <span>Лицей «Магистр»</span>
        <span className="s1-dot" />
        <span>г. Орёл</span>
        <span className="s1-dot" />
        <span>2026 г.</span>
      </div>
      <div className="s1-pill">Индивидуальный проект · 10 класс</div>
      <h1 className="s1-title">Виды языковых<br />систем у животных</h1>
      <div className="s1-line" />
      <div className="s1-authors">
        <div className="s1-author">
          <span className="s1-role">Автор проекта</span>
          <span className="s1-name">Авдеева Каролина</span>
        </div>
        <div className="s1-sep" />
        <div className="s1-author">
          <span className="s1-role">Руководитель</span>
          <span className="s1-name">Климова Наталья Юрьевна</span>
        </div>
      </div>
    </div>
  </PhotoSlide>
);

const Slide2 = () => (
  <PhotoSlide image={IMGS.mosaic} overlay="linear-gradient(135deg,rgba(255,255,255,0.91) 0%,rgba(235,245,255,0.94) 100%)">
    <div className="s2-wrap">
      <Badge>Содержание</Badge>
      <h2 className="s-h2 dark">Структура проекта</h2>
      <div className="s2-grid">
        {[
          {n:"01",e:"🎤",t:"Введение"},
          {n:"02",e:"🧠",t:"§1. Теоретические основы коммуникации животных"},
          {n:"03",e:"🔄",t:"§2. Формы и механизмы биологической коммуникации"},
          {n:"04",e:"🐬",t:"§3. Языковое поведение животных"},
          {n:"05",e:"🔬",t:"§4. Современные исследования"},
          {n:"06",e:"🌍",t:"Заключение"},
          {n:"07",e:"📚",t:"Список источников"},
          {n:"08",e:"📎",t:"Приложения"},
        ].map(c=>(
          <div key={c.n} className="s2-item">
            <span className="s2-num">{c.n}</span>
            <span className="s2-em">{c.e}</span>
            <span className="s2-txt">{c.t}</span>
          </div>
        ))}
      </div>
    </div>
  </PhotoSlide>
);

const Slide3 = () => (
  <LightSlide image={IMGS.bees}>
    <Badge>Введение</Badge>
    <h2 className="s-h2 dark">Почему животные<br /><em className="acc">"говорят"?</em></h2>
    <div className="bullets">
      {[
        {ic:"🌿",h:"Коммуникация = выживание",t:"Передача информации — фундамент жизни в группе, без неё невозможны охота, защита, размножение"},
        {ic:"🎯",h:"Цель исследования",t:"Изучить и классифицировать языковые системы у представителей животного мира"},
        {ic:"📋",h:"Задачи",t:"Классификация видов · Анализ механизмов · Конкретные примеры · Современные открытия"},
      ].map((b,i)=>(
        <div key={i} className="bullet">
          <div className="bullet-ic">{b.ic}</div>
          <div><div className="bullet-h">{b.h}</div><div className="bullet-t">{b.t}</div></div>
        </div>
      ))}
    </div>
    <Credit text="© BBC Earth / iNaturalist" />
  </LightSlide>
);

const Slide4 = () => (
  <LightSlide image={IMGS.ants}>
    <Badge>§1. Теоретические основы</Badge>
    <h2 className="s-h2 dark">Что такое коммуникация<br />у животных?</h2>
    <div className="schema">
      <div className="sch-box">🐾<br/>Животное</div>
      <div className="sch-arr"><Icon name="ArrowRight" size={20}/><span>сигнал</span></div>
      <div className="sch-box">📡<br/>Канал</div>
      <div className="sch-arr"><Icon name="ArrowRight" size={20}/><span>приём</span></div>
      <div className="sch-box">🐾<br/>Получатель</div>
    </div>
    <div className="chips">
      {[["🎵","Звуковые"],["🧪","Химические"],["👁️","Визуальные"],["✋","Тактильные"],["⚡","Электромаг."]].map(([e,l])=>(
        <div key={l} className="chip"><span>{e}</span><span>{l}</span></div>
      ))}
    </div>
    <Credit text="Схема на основе данных ethology.ru / Wikimedia Commons" />
  </LightSlide>
);

const Slide5 = () => (
  <div className="s5-root">
    <div className="s5-top">
      <Badge>§2. Формы и механизмы</Badge>
      <h2 className="s-h2 dark">Как животные <em className="acc">"разговаривают"?</em></h2>
    </div>
    <div className="s5-grid">
      {[
        {img:IMGS.bees,     e:"🐝",n:"Пчёлы",          d:"Виляющий танец — передача координат нектара",       tag:"Визуальная"},
        {img:IMGS.wolves,   e:"🐺",n:"Волки",           d:"Позы тела — демонстрация иерархии в стае",           tag:"Визуальная"},
        {img:IMGS.elephant, e:"🐘",n:"Слоны",           d:"Инфразвук — общение на десятки километров",          tag:"Акустическая"},
        {img:IMGS.bird,     e:"🐦",n:"Соловей",         d:"Видовые песни, диалекты и имитация звуков",          tag:"Акустическая"},
        {img:IMGS.ants,     e:"🐜",n:"Муравьи",         d:"Феромонные тропы — точные карты маршрутов",          tag:"Химическая"},
        {img:IMGS.dolphin,  e:"🐬",n:"Дельфины",        d:"Уникальные свисты — аналог имён особей",             tag:"Акустическая"},
      ].map(a=>(
        <div key={a.n} className="s5-card" style={{backgroundImage:`url(${a.img})`}}>
          <div className="s5-ov"/>
          <div className="s5-cb">
            <div className="s5-em">{a.e}</div>
            <div className="s5-name">{a.n}</div>
            <div className="s5-desc">{a.d}</div>
            <Tag>{a.tag}</Tag>
          </div>
        </div>
      ))}
    </div>
    <div className="s5-credit">Фото: National Geographic, PLOS ONE, iNaturalist</div>
  </div>
);

const Slide6 = () => (
  <LightSlide image={IMGS.ants}>
    <Badge>Химическая коммуникация</Badge>
    <h2 className="s-h2 dark">Общение<br />через запах</h2>
    {[
      {i:"🧪",h:"Феромоны = химические «сообщения»",t:"Молекулы, несущие точную информацию другим особям своего вида через окружающую среду"},
      {i:"🗂️",h:"Аттрактанты, репелленты, маркеры",t:"Три основных типа феромонов по функции: привлечение, отпугивание, маркировка территории"},
      {i:"🌊",h:"Работает в темноте и под водой",t:"Химическая коммуникация не зависит от видимости — идеальна для ночных и водных животных"},
    ].map((f,i)=>(
      <div key={i} className="fact">
        <div className="fact-ic">{f.i}</div>
        <div><div className="fact-h">{f.h}</div><div className="fact-t">{f.t}</div></div>
      </div>
    ))}
    <Credit text="© Alex Wild / AntWeb.org" />
  </LightSlide>
);

const Slide7 = () => (
  <LightSlide image={IMGS.bird}>
    <Badge>Акустическая коммуникация</Badge>
    <h2 className="s-h2 dark">Язык<br />звуков</h2>
    {[
      {i:"🐦",h:"Сиринкс у птиц",t:"Уникальный голосовой орган — производит сложные многослойные мелодии и имитирует другие звуки"},
      {i:"🦇",h:"Эхолокация летучих мышей",t:"Ультразвук 20–200 кГц позволяет ориентироваться в полной темноте и обнаруживать добычу"},
      {i:"🐘",h:"Инфразвук слонов",t:"Сигналы ниже 20 Гц распространяются через землю на расстояние до 10 километров"},
    ].map((f,i)=>(
      <div key={i} className="fact">
        <div className="fact-ic">{f.i}</div>
        <div><div className="fact-h">{f.h}</div><div className="fact-t">{f.t}</div></div>
      </div>
    ))}
    <Credit text="© NOAA / Wikimedia Commons" />
  </LightSlide>
);

const Slide8 = () => (
  <div className="s8-root">
    <div className="s8-left">
      <Badge>Визуальная и тактильная</Badge>
      <h2 className="s-h2 dark">Жесты, цвет<br />и <em className="acc">прикосновения</em></h2>
      {[
        {i:"🦚",h:"Позы = статус",t:"Павлин раскрывает хвост · Волки демонстрируют иерархию через положение тела и жесты"},
        {i:"🦎",h:"Цвет = настроение",t:"Хамелеон меняет окраску · Рыбы-попугаи сигнализируют цветом чешуи"},
        {i:"🐘",h:"Прикосновения = связь",t:"Слоны касаются хоботами · Муравьи обмениваются сигналами через антенны"},
      ].map((f,i)=>(
        <div key={i} className="fact">
          <div className="fact-ic">{f.i}</div>
          <div><div className="fact-h">{f.h}</div><div className="fact-t">{f.t}</div></div>
        </div>
      ))}
      <Credit text="© Frans Lanting / BBC Earth" />
    </div>
    <div className="s8-photos">
      <img src={IMGS.peacock}  alt="Павлин" className="s8-tall"/>
      <div className="s8-col">
        <img src={IMGS.wolves}   alt="Волки"/>
        <img src={IMGS.elephant} alt="Слоны"/>
      </div>
    </div>
  </div>
);

const Slide9 = () => (
  <LightSlide image={IMGS.chimp}>
    <Badge>§3. Языковое поведение</Badge>
    <h2 className="s-h2 dark">Есть ли «язык»<br />у животных?</h2>
    {[
      {i:"🐬",h:"Дельфины — «именные» свисты",t:"Каждый дельфин имеет уникальный свист-имя, которым его называют сородичи — открытие 2013 г."},
      {i:"🦜",h:"Попугай Алекс",t:"Понимал 150 слов, умел считать до 6, различал цвета и формы — 30 лет исследований Пепперберг"},
      {i:"🐒",h:"Обезьяны и жесты",t:"Жестовые системы шимпанзе контекстуально-зависимы: один жест — разный смысл в разных ситуациях"},
    ].map((f,i)=>(
      <div key={i} className="fact">
        <div className="fact-ic">{f.i}</div>
        <div><div className="fact-h">{f.h}</div><div className="fact-t">{f.t}</div></div>
      </div>
    ))}
    <div className="s9-note">
      <Icon name="Info" size={15}/>
      <span>Нет грамматики, но есть смысл · Диалекты у китов и птиц</span>
    </div>
    <Credit text="© Irene Pepperberg / National Geographic" />
  </LightSlide>
);

const Slide10 = () => (
  <div className="s10-root">
    <div className="s10-bg" style={{backgroundImage:`url(${IMGS.research})`}}>
      <div className="s10-ov"/>
    </div>
    <div className="s10-body">
      <Badge>§4. Современные исследования</Badge>
      <h2 className="s-h2 light">Что открыли учёные?</h2>
      <div className="s10-cards">
        {[
          {n:"01",img:IMGS.dolphin, e:"🤖",h:"ИИ расшифровывает «речь»",    t:"Нейросети анализируют свисты дельфинов, выявляя смысловые паттерны и словари"},
          {n:"02",img:IMGS.bees,    e:"🐝",h:"Танец пчёл — точная карта",    t:"Пчёлы кодируют расстояние, направление и качество нектара в ритме танца"},
          {n:"03",img:IMGS.elephant,e:"🐘",h:"Слоны узнают голоса за 10 км", t:"Идентифицируют голоса родственников через инфразвуковые почвенные вибрации"},
        ].map(c=>(
          <div key={c.n} className="s10-card">
            <img src={c.img} alt={c.h} className="s10-ci"/>
            <div className="s10-cb">
              <div className="s10-cn">{c.n}</div>
              <div className="s10-ce">{c.e}</div>
              <div className="s10-ch">{c.h}</div>
              <div className="s10-ct">{c.t}</div>
            </div>
          </div>
        ))}
      </div>
      <Credit text="© PLOS Computational Biology / BBC" />
    </div>
  </div>
);

const Slide11 = () => (
  <PhotoSlide image={IMGS.nature} overlay="linear-gradient(135deg,rgba(8,25,12,0.78) 0%,rgba(4,18,35,0.62) 100%)">
    <div className="s11-wrap">
      <Badge>Заключение</Badge>
      <h2 className="s-h2 light">Мир, в котором животные <em className="acc-light">«говорят»</em></h2>
      <div className="s11-cards">
        {[
          {e:"🌱",h:"Коммуникация = основа выживания",t:"Без передачи информации невозможна социальная жизнь, охота и защита от хищников"},
          {e:"🔬",h:"Системы сложные, но иные",t:"Не имеют грамматики как у человека, однако несут реальный информационный смысл"},
          {e:"🧬",h:"Ключ к эволюции языка",t:"Изучение коммуникации животных помогает понять, как возник человеческий язык"},
        ].map((c,i)=>(
          <div key={i} className="s11-card">
            <div className="s11-em">{c.e}</div>
            <div className="s11-h">{c.h}</div>
            <div className="s11-t">{c.t}</div>
          </div>
        ))}
      </div>
      <Credit text="© Paul Nicklen / National Geographic" />
    </div>
  </PhotoSlide>
);

const Slide12 = () => (
  <LightSlide>
    <Badge>Источники</Badge>
    <h2 className="s-h2 dark">Использованные источники</h2>
    <div className="s12-list">
      {[
        {n:"1",t:"Кримина, В. А. «Биологическая коммуникация»",tag:"Книга"},
        {n:"2",t:"Никитин, М. В. «Этология животных»",tag:"Книга"},
        {n:"3",t:"National Geographic — статьи о дельфинах, пчёлах, слонах",tag:"Интернет"},
        {n:"4",t:"BBC Earth — документальные материалы о коммуникации животных",tag:"Видео"},
        {n:"5",t:"PLOS ONE, iNaturalist — открытые научные данные",tag:"Наука"},
        {n:"6",t:"Wikimedia Commons — свободные иллюстрации и схемы",tag:"Медиа"},
      ].map(s=>(
        <div key={s.n} className="s12-item">
          <span className="s12-n">{s.n}</span>
          <span className="s12-t">{s.t}</span>
          <span className="s12-tag">{s.tag}</span>
        </div>
      ))}
    </div>
    <div className="s-credit" style={{marginTop:"1.25rem"}}>Все изображения — с указанием источников</div>
  </LightSlide>
);

const Slide13 = () => (
  <LightSlide image={IMGS.whale}>
    <Badge>Приложения</Badge>
    <h2 className="s-h2 dark">Дополнительные материалы</h2>
    <div className="s13-grid">
      {[
        {e:"🎬",h:"Видео",t:"Танец пчёл (waggle dance)"},
        {e:"🎵",h:"Аудио",t:"Свист дельфина-афалины"},
        {e:"📊",h:"Диаграмма",t:"Типы феромонов по функции"},
        {e:"🖼️",h:"Галерея",t:"Коммуникация в дикой природе"},
      ].map((a,i)=>(
        <div key={i} className="s13-card">
          <div className="s13-em">{a.e}</div>
          <div className="s13-h">{a.h}</div>
          <div className="s13-t">{a.t}</div>
        </div>
      ))}
    </div>
    <div className="s-credit" style={{marginTop:"1.5rem"}}>Материалы подготовлены автором проекта — Авдеевой Каролиной</div>
  </LightSlide>
);

const SLIDES = [Slide1,Slide2,Slide3,Slide4,Slide5,Slide6,Slide7,Slide8,Slide9,Slide10,Slide11,Slide12,Slide13];

export default function Index() {
  const [cur,  setCur]  = useState(0);
  const [dir,  setDir]  = useState<"n"|"p">("n");
  const [busy, setBusy] = useState(false);

  const go = useCallback((idx: number, d: "n"|"p") => {
    if (busy) return;
    setBusy(true); setDir(d);
    setTimeout(() => { setCur(idx); setBusy(false); }, 360);
  }, [busy]);

  const next = useCallback(() => { if (cur < TOTAL-1) go(cur+1,"n"); }, [cur,go]);
  const prev = useCallback(() => { if (cur > 0) go(cur-1,"p"); }, [cur,go]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key==="ArrowRight"||e.key===" ") { e.preventDefault(); next(); }
      if (e.key==="ArrowLeft") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown",h);
    return () => window.removeEventListener("keydown",h);
  },[next,prev]);

  const Comp = SLIDES[cur];
  return (
    <div className="pres-root">
      <div key={cur} className={dir==="n" ? "sl-in-r" : "sl-in-l"}>
        <Comp />
      </div>
      <button className="nav-prev" onClick={prev} disabled={cur===0}><Icon name="ChevronLeft" size={28}/></button>
      <button className="nav-next" onClick={next} disabled={cur===TOTAL-1}><Icon name="ChevronRight" size={28}/></button>
      <div className="dots">
        {Array.from({length:TOTAL}).map((_,i)=>(
          <button key={i} className={`dot${i===cur?" dot-on":""}`} onClick={()=>go(i,i>cur?"n":"p")}/>
        ))}
      </div>
      <div className="counter">{cur+1} / {TOTAL}</div>
    </div>
  );
}
