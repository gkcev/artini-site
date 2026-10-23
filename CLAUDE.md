# artini.io

artini, sanatçıları ve eserlerini tanıtan bir Instagram hesabı (@artini.io). Bu repo, hesabın vitrin sitesi. Satış yapılmıyor; site Instagram'ı tamamlar, sanatçıları kalıcı bir yerde gösterir ve sanatçı başvurusu alır.

## Yapı
- Ana sayfa: `index.html` (HTML + CSS + JS bir arada). Build adımı yok.
- `basvuru.html`: sanatçı başvuru formu (Netlify Forms, form adı `sanatci-basvurusu`, görsel yükleme toplam 8 MB). Gönderim sonrası `tesekkurler.html` açılır. Başvurular Netlify panelinde Forms altında görünür.
- Netlify, `main` dalına her push'ta siteyi otomatik yayınlar. Alan adı: artini.io (DNS Hostinger'da).
- Yazılar: `yazilar/*.html`, ortak stil `yazilar/yazi.css`, yazı görselleri `yazilar/gorseller/`. Ana sayfadaki Yazılar kartları bu sayfalara bağlanır; yeni yazıda kartı da ekle. Dış kaynaklı görsellerde yalnızca kamu malı ya da serbest lisanslı görsel kullan ve kaynağı yazının sonunda belirt.
- Görseller eklenecekse `eserler/` klasörüne konur, `index.html` içinden göreli yolla çağrılır (ör. `eserler/ada-demir.jpg`).

## İçerik nasıl düzenlenir
`index.html` içindeki `BURADAN DÜZENLE` bloğu:
- `IG_HANDLE`: Instagram kullanıcı adı.
- `HAFTANIN_ESERI`: üstteki öne çıkan eser.
- `SANATCILAR`: her sanatçı bir satır. Alanlar: `ad`, `eser`, `yil`, `tur` (Suluboya, Yağlı boya, Fotoğraf, Karakalem, Dijital; şu an sitede filtre yok), `teknik`, `olcu`, `ig`, `gorsel`, `gonderi` (Instagram gönderi linki), `cerceve` (wood | black | gold | light).
- `gorsel` boşsa yer tutucu soyut bir resim çizilir. `ornek:true` olanlar yer tutucudur; gerçek veriyle değiştirince bu alanı kaldır.

## Tasarım
Gün ışığı alan galeri duvarı: açık sıcak zemin, çerçeveli eserler ve paspartu, müze etiketi tarzı künyeler, tek vurgu rengi kraliyet mavisi (#1A47A6), font Newsreader. Tek tema (açık). Bu dili koru.

## Dil
Tüm site metinleri Türkçe; ton samimi, sıcak ve özenli.
