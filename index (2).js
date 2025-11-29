<!doctype html>


// Güncelleme döngüsü
setInterval(updateCountdown, 1000);


// RSVP - lokal depolama örneği
document.getElementById('rsvpSend').addEventListener('click', ()=>{
const name = document.getElementById('rsvpName').value.trim();
const email = document.getElementById('rsvpEmail').value.trim();
const msg = document.getElementById('rsvpMsg').value.trim();
if(!name || !email){ alert('Lütfen adınızı ve e-postanızı girin.'); return; }
const list = JSON.parse(localStorage.getItem('rsvps')||'[]');
list.push({name,email,msg,when:new Date().toISOString()});
localStorage.setItem('rsvps', JSON.stringify(list));
alert('Teşekkürler! Cevabın kaydedildi (tarayıcıda).');
document.getElementById('rsvpName').value=''; document.getElementById('rsvpEmail').value=''; document.getElementById('rsvpMsg').value='';
});
document.getElementById('rsvpClear').addEventListener('click', ()=>{ localStorage.removeItem('rsvps'); alert('RSVP verileri temizlendi.'); });


// Tema toggle (hafif/dark) - sadece basit örnek
document.getElementById('themeToggle').addEventListener('click', ()=>{
document.documentElement.style.setProperty('--bg1', getComputedStyle(document.documentElement).getPropertyValue('--bg1').trim()==='#ffffff' ? '#111827' : '#ffffff');
// Bu demo basit; gerçek projede tüm renkleri toggle etmek gerekir.
alert('Tema değişikliği demo: İsteğe göre renklendirme yapabilirsiniz.');
});


// Müzik kontrol
const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
musicToggle.addEventListener('click', ()=>{
if(music.paused){ music.play().catch(()=>{}); musicToggle.textContent='Müzik Kapat'; }
else{ music.pause(); musicToggle.textContent='Müzik Aç'; }
});


// Paylaş (navigator.share varsa kullan)
document.getElementById('shareBtn').addEventListener('click', async ()=>{
const shareData = {title: 'Doğum Günü Davetiyesi', text: 'Davetlisiniz! 🎉', url: location.href};
if(navigator.share){ try{ await navigator.share(shareData); }catch(e){ alert('Paylaşım iptal edildi.'); } }
else{ navigator.clipboard.writeText(location.href).then(()=>alert('Bağlantı kopyalandı!')); }
});


// Yazdır - davetiyeyi yazdırmak için print
document.getElementById('invitePrint').addEventListener('click', ()=>{ window.print(); });


// Düzenle butonu (inline edit için hızlı demo)
document.getElementById('editBtn').addEventListener('click', ()=>{
const newName = prompt('İsim girin:', document.getElementById('name').textContent);
if(newName){ document.getElementById('name').textContent = newName; document.getElementById('greeting').textContent = newName + ' — Mutlu Yıllar!'; }
const place = prompt('Mekan adı:', document.getElementById('place').textContent);
if(place) document.getElementById('place').textContent = place;
});


// Basit confetti animasyonu (küçük, performans dostu)
(function(){
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
let W = canvas.width = innerWidth; let H = canvas.height = innerHeight;
const pieces = [];
function random(min,max){return Math.random()*(max-min)+min}
function createPiece(){
return {x:random(0,W), y:random(-H,-10), w:random(6,12), h:random(6,12), vx:random(-1,1), vy:random(1,4), rot:random(0,Math.PI*2), vr:random(-0.1,0.1), color:`hsl(${Math.floor(random(0,360))} 80% 60%)`}
}
for(let i=0;i<90;i++) pieces.push(createPiece());
function resize(){W = canvas.width = innerWidth; H = canvas.height = innerHeight}
addEventListener('resize', resize);
function step(){
ctx.clearRect(0,0,W,H);
for(let p of pieces){
p.x += p.vx; p.y += p.vy; p.rot += p.vr;
if(p.y>H+20){ Object.assign(p, createPiece()); p.y = -10; }
ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot);
ctx.fillStyle = p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);
ctx.restore();
}
requestAnimationFrame(step);
}
step();
})();


// Başlangıç örnekleri
document.getElementById('name').textContent = 'Ali';
document.getElementById('greeting').textContent = 'Ali — Mutlu 17. Yıl!';
document.getElementById('ageText').textContent = '17';


</script>
</body>
</html>
