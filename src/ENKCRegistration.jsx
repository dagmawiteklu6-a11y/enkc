import { useState } from "react";

const LANGUAGES = {
  en: "English",
  am: "አማርኛ",
  or: "Afaan Oromoo",
  ti: "ትግርኛ",
  so: "Somali",
  gu: "Guragigna",
  si: "Sidama",
};

const T = {
  en: {
    nav: ["Home", "Register", "Prizes", "About", "Contact"],
    hero_title: "Ethiopian National\nKnowledge Competition",
    hero_sub: "Compete · Learn · Succeed",
    hero_tag: "Ethiopia's Premier Educational Competition — Open to All Regions",
    announce: "🎯 Competition Date Announcement Coming Soon",
    cta: "Register Now",
    why_title: "Why Join ENKC?",
    reasons: [
      ["🏆", "Compete with the brightest minds across Ethiopia"],
      ["💰", "Win prizes worth up to 500,000 Birr"],
      ["🧠", "Sharpen critical thinking & knowledge"],
      ["🌍", "Supported in 7 Ethiopian languages"],
    ],
    prizes_title: "Prize Pool",
    prize_labels: ["1st Place", "2nd Place", "3rd Place"],
    prize_amounts: ["500,000", "300,000", "150,000"],
    birr: "Birr",
    about_title: "About ENKC",
    about_text:
      "The Ethiopian National Knowledge Competition is the first of its kind — designed to identify and nurture exceptional minds across all regions of Ethiopia. We believe every student deserves a stage to shine.",
    contact_title: "Contact Us",
    form_title: "Register for ENKC",
    first: "First Name",
    last: "Last Name",
    email: "Email Address",
    phone: "Phone Number",
    region: "Region / State",
    age: "Age",
    category: "Category",
    payment: "Payment Method",
    cats: ["High School", "University", "Professional"],
    pays: ["Bank Transfer", "Mobile Money"],
    submit: "Submit Registration",
    success: "Registration successful! Confirmation sent to your email.",
    participants: "Registered Participants",
    total: "Total Registered",
    regions: ["Addis Ababa", "Oromia", "Amhara", "Tigray", "SNNPR", "Afar", "Somali", "Harari", "Dire Dawa", "Gambella", "Benishangul-Gumuz", "Sidama", "South West"],
  },
  am: {
    nav: ["ዋና ገጽ", "ይመዝገቡ", "ሙዋቅ", "ስለኛ", "ያግኙን"],
    hero_title: "የኢትዮጵያ ብሔራዊ\nእውቀት ውድድር",
    hero_sub: "ተወዳደሩ · ይወቁ · ስኬታማ ሁኑ",
    hero_tag: "በኢትዮጵያ ምርጥ የትምህርት ውድድር — ለሁሉም ክልሎች ክፍት",
    announce: "🎯 የውድድር ቀን ማስታወቂያ በቅርቡ ይጠብቁ",
    cta: "አሁን ይመዝገቡ",
    why_title: "ENKC ለምን ይቀላቀሉ?",
    reasons: [
      ["🏆", "በኢትዮጵያ ምርጥ አእምሮዎች ጋር ይወዳደሩ"],
      ["💰", "እስከ 500,000 ብር ሙዋቅ ያሸንፉ"],
      ["🧠", "አስተሳሰብን እና እውቀትን ማዳበር"],
      ["🌍", "7 የኢትዮጵያ ቋንቋዎች ድጋፍ"],
    ],
    prizes_title: "ሙዋቅ",
    prize_labels: ["1ኛ ቦታ", "2ኛ ቦታ", "3ኛ ቦታ"],
    prize_amounts: ["500,000", "300,000", "150,000"],
    birr: "ብር",
    about_title: "ENKC ስለ",
    about_text: "የኢትዮጵያ ብሔራዊ እውቀት ውድድር የመጀመሪያው ዓይነቱ ሲሆን፣ በኢትዮጵያ ሁሉም ክልሎች ያሉ ምርጥ አእምሮዎችን ለማፍለቅ እና ለማዳበር የተነደፈ ነው።",
    contact_title: "ያግኙን",
    form_title: "ለ ENKC ይመዝገቡ",
    first: "ስም", last: "የአባት ስም", email: "ኢሜል", phone: "ስልክ",
    region: "ክልል", age: "ዕድሜ", category: "ምድብ", payment: "የክፍያ ዘዴ",
    cats: ["ሁለተኛ ደረጃ", "ዩኒቨርሲቲ", "ሙያዊ"],
    pays: ["ባንክ ዝውውር", "ሞባይል ሙዋቅ"],
    submit: "ምዝገባን ያስገቡ",
    success: "ምዝገባ ተሳክቷል! ማረጋገጫ ወደ ኢሜልዎ ተልኳል።",
    participants: "የተመዘገቡ ተሳታፊዎች", total: "ጠቅላላ የተመዘገቡ",
    regions: ["አዲስ አበባ","ኦሮሚያ","አማራ","ትግራይ","ደቡብ ብሔሮች","አፋር","ሶማሌ","ሐረሪ","ድሬ ዳዋ","ጋምቤላ","ቤኒሻንጉል-ጉሙዝ","ሲዳማ","ደቡብ ምዕራብ"],
  },
  or: {
    nav: ["Jalqaba", "Galmaa", "Badhaasa", "Waa'ee", "Quunnamaa"],
    hero_title: "Dorgommii Beekumsa\nBiyyoolessaa Itoophiyaa",
    hero_sub: "Wal dorgomi · Baradhu · Milkaa'i",
    hero_tag: "Dorgommii Barnoota Olaanaa Itoophiyaa — Naannoo Hundaaf Banaadha",
    announce: "🎯 Guyyaan Dorgommii Dhiyoodha — Eegi!",
    cta: "Ammaa Galmaa'i",
    why_title: "Maaliif ENKC Keessa Galuu?",
    reasons: [
      ["🏆","Cichituu Itoophiyaa Waliin Wal Dorgomi"],
      ["💰","Badhaasa Birrii 500,000 Ol Argadhu"],
      ["🧠","Yaadaa fi Beekumsa Guddiisi"],
      ["🌍","Afaan 7 Itoophiyaa Deeggarsa"],
    ],
    prizes_title: "Badhaasa",
    prize_labels: ["1ffaa", "2ffaa", "3ffaa"],
    prize_amounts: ["500,000", "300,000", "150,000"],
    birr: "Birrii",
    about_title: "Waa'ee ENKC",
    about_text: "Dorgommiin Beekumsa Biyyoolessaa Itoophiyaa kan jalqabaa waan ta'eef, naannoo Itoophiyaa hundaa irraa sammuu addaa arguu fi guddisuuf qophaa'e.",
    contact_title: "Nu Quunnamaa",
    form_title: "ENKC Galmaa'i",
    first: "Maqaa Duraa", last: "Maqaa Abbaa", email: "Imeelii", phone: "Bilbila",
    region: "Naannoo", age: "Umurii", category: "Gosa", payment: "Kaffaltii",
    cats: ["Barnoota Lammaffaa", "Yuuniversitii", "Hojjetaa"],
    pays: ["Baankii", "Mobaayilii"],
    submit: "Galmaa'i",
    success: "Galmaa'insi milkaa'eera!",
    participants: "Hirmaattoota Galmaa'an", total: "Waliigalatti",
    regions: ["Finfinnee","Oromiyaa","Amaaraa","Tigiraay","SNNPR","Affaar","Somaalee","Harargeey","Dirree Dhawaa","Gambellaa","Beenishaangul","Sidaamaa","Kibba Lixaa"],
  },
  ti: {
    nav: ["ዋና ገጽ", "ምዝገባ", "ሽልማት", "ብዛዕባና", "ርኸቡና"],
    hero_title: "ኢትዮጵያዊ ሃገራዊ\nፍልጠት ውድድር",
    hero_sub: "ተወዳደሩ · ሃምሩ · ስኬት ኩኑ",
    hero_tag: "ቀዳምቲ ትምህርታዊ ውድድር ኢትዮጵያ",
    announce: "🎯 ዕለት ምጅምማር ውድድር ቀሪቡ ኣሎ",
    cta: "ሕጂ ምዝገባ",
    why_title: "ንምንታይ ENKC ይቀላቀሉ?",
    reasons: [
      ["🏆", "ምስ ምርጽ ኣእምሮታት ኢትዮጵያ ተወዳደሩ"],
      ["💰", "ሽልማት ክሳብ 500,000 ብር ዓወቱ"],
      ["🧠", "ፍልጠትን ሓሳብን ዘማዕብሉ"],
      ["🌍", "7 ቋንቋታት ደገፍ"],
    ],
    prizes_title: "ሽልማታት",
    prize_labels: ["1ይ ቦታ", "2ይ ቦታ", "3ይ ቦታ"],
    prize_amounts: ["500,000", "300,000", "150,000"],
    birr: "ብር",
    about_title: "ብዛዕባ ENKC",
    about_text: "ኢትዮጵያዊ ሃገራዊ ፍልጠት ውድድር ናይ መጀምርታ ዓይነቱ ኮይኑ፣ ካብ ኩሎም ክልላት ኢትዮጵያ ምርጽ ኣእምሮታት ንምምርማርን ንምዕባይን ዝተሸነፈ እዩ።",
    contact_title: "ርኸቡና",
    form_title: "ን ENKC ምዝገባ",
    first: "ቀዳማይ ስም", last: "ናይ ኣቦ ስም", email: "ኢሜይል", phone: "ስልኪ",
    region: "ክልል", age: "ዕድሚ", category: "ምድብ", payment: "ኣገባብ ክፍሊት",
    cats: ["ካልኣይ ደርጃ", "ዩኒቨርሲቲ", "ሞያዊ"],
    pays: ["ባንክ", "ሞባይል ገንዘብ"],
    submit: "ምዝገባ ኣቕርቡ",
    success: "ምዝገባ ሰሊጡ!",
    participants: "ዝተመዝገቡ ተሳተፍቲ", total: "ጠቅላላ ዝተመዝገቡ",
    regions: ["ኣዲስ ኣበባ","ኦሮሚያ","ኣምሓራ","ትግራይ","ደቡብ","ኣፋር","ሶማሌ","ሃረሪ","ድሬ ዳዋ","ጋምቤላ","ቤኒሻንጉል","ሲዳማ","ደቡብ ምዕራብ"],
  },
  so: {
    nav: ["Hore", "Diiwaan", "Abaalmarino", "Ku Saabsan", "Xiriir"],
    hero_title: "Tartanka Aqoonta\nQaraniga Itoobiya",
    hero_sub: "Is tartam · Baro · Guul gaar",
    hero_tag: "Tartanka Waxbarashada ee Ugu Sarreeya Itoobiya",
    announce: "🎯 Taariikhda Tartanka Dhawaan Waa La Shaacin Doonaa",
    cta: "Hadda Diiwaan Geli",
    why_title: "Maxay ENKC Ku Biiri?",
    reasons: [
      ["🏆", "Ku tartam maskaxaha ugu xeeldheer Itoobiya"],
      ["💰", "Abaalmarino ilaa 500,000 Birr"],
      ["🧠", "Aqoonta iyo fekerka horumarso"],
      ["🌍", "7 luqadood taageero"],
    ],
    prizes_title: "Abaalmarino",
    prize_labels: ["Meesha 1aad", "Meesha 2aad", "Meesha 3aad"],
    prize_amounts: ["500,000", "300,000", "150,000"],
    birr: "Birr",
    about_title: "Ku Saabsan ENKC",
    about_text: "Tartanka Aqoonta Qaraniga Itoobiya waa kan ugu horreeyay noociisa — loogu talogalay in laga helo loona kobciyo maskaxaha xeeldheer ee dhammaan gobolada Itoobiya.",
    contact_title: "Nala Xiriir",
    form_title: "ENKC Diiwaan Gali",
    first: "Magaca Hore", last: "Magaca Aabbaha", email: "Iimeelka", phone: "Telefoonka",
    region: "Gobolka", age: "Da'da", category: "Nooca", payment: "Lacag Bixinta",
    cats: ["Dugsiga Sare", "Jaamacadda", "Xirfadlaha"],
    pays: ["Bangiga", "Mobile Money"],
    submit: "Dir Diiwaangelinta",
    success: "Diiwaangelinta waxay guulaysatay!",
    participants: "Ka Qaybgalayaasha", total: "Guud ahaan",
    regions: ["Addis Ababa","Oromia","Amhara","Tigray","SNNPR","Afar","Somali","Harari","Dire Dawa","Gambella","Benishangul","Sidama","South West"],
  },
  gu: {
    nav: ["Home", "Register", "Prizes", "About", "Contact"],
    hero_title: "Ethiopian National\nKnowledge Competition",
    hero_sub: "Compete · Learn · Succeed",
    hero_tag: "Premier Educational Competition Across Ethiopia",
    announce: "🎯 Competition Date Coming Soon",
    cta: "Register Now",
    why_title: "Why Join ENKC?",
    reasons: [
      ["🏆", "Compete with top minds in Ethiopia"],
      ["💰", "Win prizes up to 500,000 Birr"],
      ["🧠", "Grow knowledge and critical thinking"],
      ["🌍", "7 Language Support"],
    ],
    prizes_title: "Prizes",
    prize_labels: ["1st Prize", "2nd Prize", "3rd Prize"],
    prize_amounts: ["500,000", "300,000", "150,000"],
    birr: "Birr",
    about_title: "About ENKC",
    about_text: "The Ethiopian National Knowledge Competition identifies and nurtures exceptional minds across Ethiopia.",
    contact_title: "Contact Us",
    form_title: "Register for ENKC",
    first: "First Name", last: "Last Name", email: "Email", phone: "Phone",
    region: "Region", age: "Age", category: "Category", payment: "Payment",
    cats: ["High School", "University", "Professional"],
    pays: ["Bank Transfer", "Mobile Money"],
    submit: "Submit",
    success: "Registration successful!",
    participants: "Registered Participants", total: "Total Registered",
    regions: ["Addis Ababa","Oromia","Amhara","Tigray","SNNPR","Afar","Somali","Harari","Dire Dawa","Gambella","Benishangul","Sidama","South West"],
  },
};

const GOLD = "#C9A84C";
const GOLD_LIGHT = "#E8C97A";

export default function ENKCRegistration() {
  const [lang, setLang] = useState("en");
  const [registrations, setRegistrations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", region: "", age: "", category: "0", payment: "0" });

  const t = T[lang] || T.en;

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistrations((r) => [{ ...form, id: Date.now() }, ...r]);
    setForm({ firstName: "", lastName: "", email: "", phone: "", region: "", age: "", category: "0", payment: "0" });
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setShowModal(false); }, 2500);
  };

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.06)",
    border: `1px solid rgba(201,168,76,0.25)`,
    borderRadius: 8,
    padding: "12px 16px",
    color: "#fff",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "'Cormorant Garamond', Georgia, serif",
  };

  const selectStyle = { ...inputStyle, color: "rgba(255,255,255,0.75)", cursor: "pointer" };

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0A", color: "#fff", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Cinzel:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0A0A0A; }
        ::selection { background: rgba(201,168,76,0.3); }
        .enkc-nav-link { background: none; border: none; cursor: pointer; font-family: 'Cinzel', serif; font-size: 13px; letter-spacing: 0.12em; color: rgba(255,255,255,0.55); transition: color 0.2s; padding: 6px 0; }
        .enkc-nav-link:hover, .enkc-nav-link.active { color: ${GOLD}; }
        .enkc-input:focus { border-color: ${GOLD} !important; box-shadow: 0 0 0 2px rgba(201,168,76,0.15); }
        .enkc-input option { background: #1a1a1a; color: #fff; }
        .enkc-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(201,168,76,0.15); border-radius: 12px; transition: border-color 0.3s, background 0.3s; }
        .enkc-card:hover { border-color: rgba(201,168,76,0.4); background: rgba(255,255,255,0.055); }
        .enkc-btn { background: linear-gradient(135deg, ${GOLD}, #9A6F2A); color: #0A0A0A; border: none; border-radius: 8px; font-family: 'Cinzel', serif; font-weight: 600; font-size: 13px; letter-spacing: 0.1em; cursor: pointer; transition: opacity 0.2s, transform 0.15s; }
        .enkc-btn:hover { opacity: 0.9; transform: translateY(-1px); }
        .enkc-btn:active { transform: translateY(0); }
        .enkc-prize { transition: transform 0.3s; }
        .enkc-prize:hover { transform: translateY(-6px); }
        .divider-line { width: 60px; height: 1px; background: linear-gradient(90deg, transparent, ${GOLD}, transparent); margin: 0 auto 2rem; }
        .lang-select { background: rgba(255,255,255,0.06); border: 1px solid rgba(201,168,76,0.3); border-radius: 8px; color: #fff; padding: 7px 12px; font-size: 13px; cursor: pointer; font-family: 'Cinzel', serif; outline: none; }
        .lang-select option { background: #1a1a1a; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp 0.7s ease both; }
        .fade-up-2 { animation: fadeUp 0.7s ease 0.15s both; }
        .fade-up-3 { animation: fadeUp 0.7s ease 0.3s both; }
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.85); z-index: 999; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .modal-box { background: #111; border: 1px solid rgba(201,168,76,0.3); border-radius: 16px; padding: 40px; max-width: 560px; width: 100%; max-height: 90vh; overflow-y: auto; }
        .modal-box::-webkit-scrollbar { width: 4px; }
        .modal-box::-webkit-scrollbar-track { background: transparent; }
        .modal-box::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.3); border-radius: 4px; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, width: "100%", background: "rgba(10,10,10,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(201,168,76,0.12)", zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo Mark */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", border: `2px solid ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(201,168,76,0.08)" }}>
              <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 12, color: GOLD, letterSpacing: 1 }}>ENKC</span>
            </div>
            <div style={{ display: "none" }} className="enkc-logo-text">
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: 12, color: GOLD, letterSpacing: 2 }}>ENKC</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: 1 }}>Knowledge Matters</div>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 32 }}>
            {t.nav.map((label, i) => {
              const ids = ["home", "register", "prizes", "about", "contact"];
              return (
                <button key={i} className={`enkc-nav-link ${activeSection === ids[i] ? "active" : ""}`} onClick={() => scrollTo(ids[i])}>
                  {label}
                </button>
              );
            })}
          </div>

          {/* Language */}
          <select className="lang-select" value={lang} onChange={(e) => setLang(e.target.value)}>
            {Object.entries(LANGUAGES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Background decoration */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.06)", boxShadow: "0 0 80px rgba(201,168,76,0.04)" }} />
          <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%,-50%)", width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.08)" }} />
          <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%,-50%)", width: 200, height: 200, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.12)" }} />
        </div>

        {/* Announce pill */}
        <div className="fade-up" style={{ display: "inline-block", background: "rgba(201,168,76,0.1)", border: `1px solid rgba(201,168,76,0.3)`, borderRadius: 100, padding: "8px 20px", marginBottom: 32, fontSize: 13, color: GOLD_LIGHT, letterSpacing: "0.05em", fontFamily: "'Cinzel', serif" }}>
          {t.announce}
        </div>

        {/* Logo circle */}
        <div className="fade-up-2" style={{ width: 140, height: 140, borderRadius: "50%", border: `2px solid ${GOLD}`, background: "rgba(201,168,76,0.06)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: 40, boxShadow: `0 0 40px rgba(201,168,76,0.12)` }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 28, color: GOLD, letterSpacing: 3 }}>ENKC</div>
          <div style={{ width: 40, height: 1, background: GOLD, margin: "6px 0" }} />
          <div style={{ fontSize: 9, color: "rgba(201,168,76,0.7)", letterSpacing: 2, textTransform: "uppercase" }}>Est. 2024</div>
        </div>

        <h1 className="fade-up-2" style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: "clamp(28px, 5vw, 56px)", lineHeight: 1.15, marginBottom: 20, color: "#fff", whiteSpace: "pre-line", letterSpacing: "0.02em" }}>
          {t.hero_title}
        </h1>

        <p className="fade-up-2" style={{ fontSize: "clamp(16px, 2vw, 22px)", color: GOLD, fontWeight: 400, marginBottom: 12, letterSpacing: "0.08em" }}>
          {t.hero_sub}
        </p>
        <p className="fade-up-3" style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", maxWidth: 520, marginBottom: 48, lineHeight: 1.7 }}>
          {t.hero_tag}
        </p>

        <button id="register" className="enkc-btn fade-up-3" style={{ padding: "16px 48px", fontSize: 14 }} onClick={() => setShowModal(true)}>
          {t.cta} →
        </button>

        {registrations.length > 0 && (
          <div style={{ marginTop: 32, padding: "12px 32px", background: "rgba(201,168,76,0.08)", border: `1px solid rgba(201,168,76,0.2)`, borderRadius: 100, fontSize: 13, color: GOLD_LIGHT }}>
            {t.total}: {registrations.length}
          </div>
        )}
      </section>

      {/* WHY JOIN */}
      <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", textAlign: "center", fontSize: "clamp(20px,3vw,32px)", marginBottom: 12, letterSpacing: "0.05em" }}>{t.why_title}</h2>
          <div className="divider-line" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {t.reasons.map(([icon, text], i) => (
              <div key={i} className="enkc-card" style={{ padding: "28px 24px" }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{icon}</div>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.75)", fontWeight: 400 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIZES */}
      <section id="prizes" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", textAlign: "center", fontSize: "clamp(20px,3vw,32px)", marginBottom: 12, letterSpacing: "0.05em" }}>{t.prizes_title}</h2>
          <div className="divider-line" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 760, margin: "0 auto" }}>
            {[
              { icon: "🥇", color: GOLD, glow: "rgba(201,168,76,0.25)", border: GOLD },
              { icon: "🥈", color: "#B0B8C1", glow: "rgba(176,184,193,0.2)", border: "#B0B8C1" },
              { icon: "🥉", color: "#CD7F32", glow: "rgba(205,127,50,0.2)", border: "#CD7F32" },
            ].map(({ icon, color, glow, border }, i) => (
              <div key={i} className="enkc-prize" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${border}40`, borderRadius: 16, padding: "32px 20px", textAlign: "center", boxShadow: `0 0 30px ${glow}`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
                <div style={{ fontSize: 40, marginBottom: 16 }}>{icon}</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: 13, color: color, letterSpacing: "0.1em", marginBottom: 12 }}>{t.prize_labels[i]}</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, color: "#fff", marginBottom: 4 }}>{t.prize_amounts[i]}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em" }}>{t.birr}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px 24px", background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(201,168,76,0.08)", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(20px,3vw,32px)", marginBottom: 12, letterSpacing: "0.05em" }}>{t.about_title}</h2>
          <div className="divider-line" />
          <p style={{ fontSize: 18, lineHeight: 1.85, color: "rgba(255,255,255,0.65)", fontWeight: 300 }}>{t.about_text}</p>
          <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
            {[["7", "Languages"], ["14", "Regions"], ["3", "Categories"]].map(([num, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: 36, fontWeight: 700, color: GOLD }}>{num}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", textAlign: "center", fontSize: "clamp(20px,3vw,32px)", marginBottom: 12, letterSpacing: "0.05em" }}>{t.contact_title}</h2>
          <div className="divider-line" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {[
              { icon: "✉", label: "Email", value: "info@enkc.et" },
              { icon: "📞", label: "Phone", value: "+251 11 123 4567" },
              { icon: "📍", label: "Location", value: "Addis Ababa, Ethiopia" },
            ].map(({ icon, label, value }) => (
              <div key={label} className="enkc-card" style={{ padding: "28px", textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 12, color: GOLD }}>{icon}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{label}</div>
                <div style={{ fontSize: 15, color: "#fff" }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTICIPANTS */}
      {registrations.length > 0 && (
        <section style={{ padding: "60px 24px", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Cinzel', serif", textAlign: "center", fontSize: 22, marginBottom: 12, letterSpacing: "0.05em" }}>{t.participants}</h2>
            <div className="divider-line" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
              {registrations.map((r) => (
                <div key={r.id} className="enkc-card" style={{ padding: "18px 20px" }}>
                  <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>{r.firstName} {r.lastName}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>{r.email}</div>
                  <div style={{ fontSize: 12, color: GOLD }}>{r.region} · {t.cats[parseInt(r.category)]}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32, textAlign: "center", padding: "16px 32px", background: "rgba(201,168,76,0.07)", border: `1px solid rgba(201,168,76,0.2)`, borderRadius: 12, display: "inline-block", width: "100%" }}>
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: 20, color: GOLD }}>{t.total}: {registrations.length}</span>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(201,168,76,0.08)", padding: "32px 24px", textAlign: "center" }}>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: 12, color: GOLD, letterSpacing: 3, marginBottom: 8 }}>ENKC</div>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>
          © 2024 Ethiopian National Knowledge Competition · Supporting 7 Ethiopian Languages
        </p>
      </footer>

      {/* REGISTRATION MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 22, color: "#fff", letterSpacing: "0.05em" }}>{t.form_title}</h2>
              <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: 22, cursor: "pointer", lineHeight: 1 }}>×</button>
            </div>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <p style={{ fontSize: 16, color: GOLD_LIGHT, fontFamily: "'Cinzel', serif" }}>{t.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <input className="enkc-input" style={inputStyle} name="firstName" placeholder={t.first} value={form.firstName} onChange={handleChange} required />
                  <input className="enkc-input" style={inputStyle} name="lastName" placeholder={t.last} value={form.lastName} onChange={handleChange} required />
                </div>
                <input className="enkc-input" style={inputStyle} type="email" name="email" placeholder={t.email} value={form.email} onChange={handleChange} required />
                <input className="enkc-input" style={inputStyle} type="tel" name="phone" placeholder={t.phone} value={form.phone} onChange={handleChange} required />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <select className="enkc-input" style={selectStyle} name="region" value={form.region} onChange={handleChange} required>
                    <option value="">{t.region}</option>
                    {t.regions.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                  <input className="enkc-input" style={inputStyle} type="number" name="age" placeholder={t.age} value={form.age} onChange={handleChange} min={10} max={80} required />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <select className="enkc-input" style={selectStyle} name="category" value={form.category} onChange={handleChange}>
                    {t.cats.map((c, i) => <option key={i} value={i}>{c}</option>)}
                  </select>
                  <select className="enkc-input" style={selectStyle} name="payment" value={form.payment} onChange={handleChange}>
                    {t.pays.map((p, i) => <option key={i} value={i}>{p}</option>)}
                  </select>
                </div>
                <button className="enkc-btn" type="submit" style={{ padding: "14px", fontSize: 14, marginTop: 8 }}>{t.submit}</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
