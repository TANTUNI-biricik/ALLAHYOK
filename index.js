<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Doğum Günü Davetiyesi — 17–18 Yaş</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
  <style>
    :root{--bg1:#0b1020;--accent:#7c3aed;--accent-2:#06b6d4;--glass:rgba(255,255,255,0.06);--card:rgba(255,255,255,0.04);color-scheme:dark}
    *{box-sizing:border-box}html,body{height:100%}body{margin:0;font-family:Inter,system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;background:radial-gradient(1200px 600px at 10% 10%,rgba(124,58,237,0.12),transparent),radial-gradient(1000px 500px at 90% 90%,rgba(6,182,212,0.06),transparent),var(--bg1);color:#e6eef8;display:flex;align-items:center;justify-content:center;padding:28px}
    .container{width:100%;max-width:980px;border-radius:14px;padding:22px;background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01));box-shadow:0 10px 30px rgba(2,6,23,0.6);position:relative;overflow:hidden;backdrop-filter:blur(6px)}
    header{display:flex;gap:16px;align-items:center;justify-content:space-between}
    .title{display:flex;gap:12px;align-items:center}
    .logo{width:72px;height:72px;border-radius:12px;display:grid;place-items:center;background:linear-gradient(135deg,var(--accent),var(--accent-2));font-weight:800;font-size:20px;color:white}
    h1{margin:0;font-size:22px}p.lead{margin:0;opacity:0.85}
    .grid{display:grid;grid-template-columns:1fr 360px;gap:20px;margin-top:18px}
    .card{padding:16px;border-radius:12px;background:var(--card);box-shadow:inset 0 1px rgba(255,255,255,0.02)}
    .hero{min-height:340px;display:flex;flex-direction:column;gap:12px;justify-content:space-between}
    .big-msg{font-size:30px;font-weight:800;line-height:1.02}
    .sub-msg{opacity:0.95}
    .countdown{display:flex;gap:10px;margin-top:6px}
    .countdown>div{background:var(--glass);padding:14px;border-radius:10px;min-width:74px;text-align:center}
    .countdown .num{font-size:20px;font-weight:700}
    .controls{display:flex;gap:8px;flex-wrap:wrap}
    .btn{cursor:pointer;border:0;padding:10px 12px;border-radius:10px;font-weight:600;background:linear-gradient(90deg,var(--accent),var(--accent-2));color:white}
    .btn.ghost{background:transparent;border:1px solid rgba(255,255,255,0.06)}
    .side-top{display:flex;gap:12px;align-items:center}
    .avatar{width:80px;height:80px;border-radius:12px;background:linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02));display:grid;place-items:center;overflow:hidden}
    .avatar img{width:100%;height:100%;object-fit:cover}
    .meta{opacity:0.85;font-size:14px}
    .gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px}
    .gallery img{width:100%;height:72px;object-fit:cover;border-radius:8px}
    footer{margin-top:14px;display:flex;gap:8px;justify-content:space-between;align-items:center}
    input[type=text],input[type=email],textarea,select{width:100%;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit}
    @media (max-width:880px){.grid{grid-template-columns:1fr}.avatar{width:64px;height:64px}}
    #confetti{position:absolute;inset:0;pointer-events:none}
  </style>
</head>
<body>
  <div class="container" role="main">
    <canvas id="confetti"></canvas>
    <header>
      <div class="title">
        <div class="logo">🎉</div>
        <div>
          <h1>Doğum Günü Partisi</h1>
          <p class="lead">17–18 yaş arası gençlere özel davetiye — metni hemen düzenle</p>
        </div>
      </div>
      <div class="controls">
        <button class="btn" id="shareBtn">Davet Paylaş</button>
        <button class="btn ghost" id="musicToggle">Müzik Aç</button>
      </div>
    </header>

    <section class="grid">
      <div class="card hero">
        <div>
          <div class="big-msg" id="greeting">İsim — Mutlu Yıllar!</div>
          <div class="sub-msg" id="subtitle">Bu özel günde seni de aramızda görmekten mutluluk duyarız 🎂</div>

          <div style="margin-top:12px;display:flex;gap:8px;align-items:center">
            <label style="font-size:13px;opacity:0.85;margin-right:6px">Yaş seç:</label>
            <select id="ageSelect">
              <option value="17">17</option>
              <option value="18">18</option>
            </select>
            <button class="btn ghost" id="applyPreset">Hazır Mesaj Uygula</button>
          </div>

          <div style="margin-top:12px">
            <label style="font-size:13px;opacity:0.85">Özel mesaj (davet metni)</label>
            <textarea id="customMsg" rows="4" placeholder="Buraya davet metnini yazabilirsin — örn: 'Sürpriz parti, oyunlar, ikramlar...'" style="margin-top:8px"></textarea>
            <div style="display:flex;gap:8px;margin-top:8px">
              <button class="btn" id="applyBtn">Uygula</button>
              <button class="btn ghost" id="resetBtn">Sıfırla</button>
            </div>
          </div>

          <div class="countdown" aria-live="polite" style="margin-top:12px" id="cd">
            <div><div class="num" id="days">--</div><div class="meta">gün</div></div>
            <div><div class="num" id="hours">--</div><div class="meta">saat</div></div>
            <div><div class="num" id="minutes">--</div><div class="meta">dakika</div></div>
            <div><div class="num" id="seconds">--</div><div class="meta">saniye</div></div>
          </div>
        </div>

        <div style="display:flex;gap:10px;align-items:center;justify-content:space-between">
          <div style="display:flex;gap:8px">
            <button class="btn" id="invitePrint">Davetiye Yazdır</button>
            <button class="btn ghost" id="openGallery">Fotoğraf</button>
          </div>
          <div style="opacity:0.9;font-size:14px">Yer: <strong id="place">[Mekan]</strong></div>
        </div>
      </div>

      <aside class="card">
        <div class="side-top">
          <div class="avatar" id="avatar"><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&s=placeholder" alt="Kişi fotoğrafı"></div>
          <div class="info">
            <div style="font-weight:700" id="name">İsim Soyisim</div>
            <div class="meta">Yaş: <span id="ageText">17</span></div>
            <div class="meta">Tarih: <span id="dateText">—</span></div>
          </div>
        </div>

        <div style="margin-top:12px">
          <div style="font-weight:700;margin-bottom:6px">Galeri</div>
          <div class="gallery" id="gallery">
            <img src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=1000&auto=format&fit=crop&s=placeholder" alt="foto1">
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop&s=placeholder" alt="foto2">
            <img src="https://images.unsplash.com/photo-1478144592103-25e218a04891?q=80&w=1000&auto=format&fit=crop&s=placeholder" alt="foto3">
          </div>
        </div>

        <div style="margin-top:14px">
          <div style="font-weight:700;margin-bottom:8px">RSVP</div>
          <input type="text" id="rsvpName" placeholder="Adın">
          <input type="email" id="rsvpEmail" placeholder="E-posta" style="margin-top:8px">
          <textarea id="rsvpMsg" placeholder="Kısa not (gelecek misin?)" style="margin-top:8px" rows="3"></textarea>
          <div style="display:flex;gap:8px;margin-top:10px">
            <button class="btn" id="rsvpSend">Gönder</button>
            <button class="btn ghost" id="rsvpClear">Temizle</button>
          </div>
          <small style="display:block;margin-top:8px;opacity:0.75">Not: Bu örnek statiktir; gerçek etkinlikte sunucu bağlantısı gerekir.</small>
        </div>
      </aside>
    </section>

    <footer>
      <div style="opacity:0.85">Hazır şablon • Kolayca düzenlenebilir</div>
      <div style="display:flex;gap:8px">
        <button class="btn ghost" id="themeToggle">Tema</button>
        <button class="btn ghost" id="editBtn">Hızlı Düzenle</button>
      </div>
    </footer>
  </div>

  <audio id="bgMusic" loop src="https://cdn.pixabay.com/download/audio/2021/09/26/audio_3cc8b8b8d6.mp3?filename=happy-upbeat-111988.mp3"></audio>

  <script>
    // Basit etkileşimler: hazır mesajlar, uygulama, tarih sayacı
    const greeting = document.getElementById('greeting');
    const subtitle = document.getElementById('subtitle');
    const nameEl = document.getElementById('name');
    const ageText = document.getElementById('ageText');
    const placeEl = document.getElementById('place');

    const ageSelect = document.getElementById('ageSelect');
    const customMsg = document.getElementById('customMsg');
    const applyBtn = document.getElementById('applyBtn');
    const applyPreset = document.getElementById('applyPreset');
    const resetBtn = document.getElementById('resetBtn');

    // Hazır mesajlar (17 & 18 için kısa seçenekler)
    const presets = {
      '17': '17 yaş kutlaması! Oyunlar, pasta ve sürprizler seni bekliyor. Gelirsen çok seviniriz!',
      '18': '18. yaşına hoş geldin! Özel gece, müzik ve anılar — bizimle kutla!',
    };

    applyPreset.addEventListener('click', ()=>{
      const age = ageSelect.value;
      customMsg.value = presets[age];
    });

    applyBtn.addEventListener('click', ()=>{
      const name = nameEl.textContent || 'İsim';
      const age = ageSelect.value;
      const msg = customMsg.value.trim() || presets[age];
      greeting.textContent = `${name} — Mutlu ${age}. Yıl!`;
      subtitle.textContent = msg;
      ageText.textContent = age;
      // küçük kutlama animasyonu
      triggerConfetti();
    });

    resetBtn.addEventListener('click', ()=>{
      customMsg.value = '';
      greeting.textContent = 'İsim — Mutlu Yıllar!';
      subtitle.textContent = 'Bu özel günde seni de aramızda görmekten mutluluk duyarız 🎂';
      ageText.textContent = ageSelect.value;
    });

    // Hızlı düzenle - isim/yer girme
    document.getElementById('editBtn').addEventListener('click', ()=>{
      const newName = prompt('İsim girin:', nam
