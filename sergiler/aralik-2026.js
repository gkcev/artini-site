/* Aralık 2026 sergileri: hem sergiler/aralik-2026.html hem ana sayfadaki carousel buradan okur.
   gorsel: sergiler/ klasörüne göre yol; boşsa renk paletinden bir afiş çizilir. gorselKunye görselin altında görünür.
   kaynak: sayfanın sonundaki "Kaynaklar" listesine eklenir (aynı URL bir kez yazılır).
   devam: true olanlar Kasım rehberinden devreden sergiler. */
window.SERGILER = {
  ay: "Aralık 2026",
  guncelleme: "24 Kasım 2026",
  giris: "Yılın son ayında açık olan ve görmeye değer bulduğumuz sergiler. Kapanış tarihine göre sıraladık; önce bitenler en üstte. Kasım'dan devam edenleri de listede bıraktık.",
  liste: [
    {
      baslik: "Kırılmış Yakınlıklar", kim: "Jin Meyerson",
      mekan: "Dirimart Dolapdere", yer: "Dolapdere, İstanbul",
      tarih: "19 Kasım – 13 Aralık 2026", bilet: "",
      aciklama: "Sanatçının Dirimart'taki ilk kişisel sergisi. LiDAR taramalarından oluşan kişisel arşivini dijital ve analog yöntemlerle işleyerek bellek ve yerinden edilme üzerine figürle soyut arasında gezinen resimlere dönüştürüyor; karanlık bir odada bir video da eşlik ediyor.",
      gorsel: "gorseller/jin-meyerson.jpg", cerceve: "black", gorselKunye: "Görsel: Dirimart",
      renk: ["#2F5A3A", "#C7D9A8", "#14261A"],
      kaynak: [{ ad: "Dirimart, “Jin Meyerson: Kırılmış Yakınlıklar”", url: "https://www.dirimart.com/exhibitions/270-jin-meyerson-krlms-yaknlklar/overview/" }]
    },
    {
      baslik: "Inside Out", kim: "Şinasi Bozatlı",
      mekan: "CerModern", yer: "Sıhhiye, Ankara",
      tarih: "10 Kasım – 20 Aralık 2026", bilet: "",
      aciklama: "Ankaralı sanatçının 46 yıllık üretimine geriye dönük bakan kapsamlı bir müze sergisi. Yeni resim ve heykeller eski işlerle bir arada; Hitit kültüründen, Akdeniz renklerinden ve müzikten beslenen seriler öne çıkıyor.",
      gorsel: "gorseller/sinasi-bozatli.jpg", cerceve: "light", gorselKunye: "Görsel: CerModern",
      renk: ["#E07A2E", "#F2E6D0", "#3A2A1A"],
      kaynak: [{ ad: "CerModern, “Şinasi Bozatlı: Inside Out”", url: "https://www.cermodern.org/sinasi-bozatli-inside-out" }]
    },
    {
      baslik: "Gönül Bağı", kim: "Nil Yalter, Hüseyin Bahri Alptekin, Semiha Berksoy, Nejad Devrim, Hera Büyüktaşçıyan, Elif Uras, İpek Duben ve diğerleri (18 sanatçı)",
      mekan: "Galeri Nev Ankara", yer: "Ankara",
      tarih: "1 – 26 Aralık 2026", bilet: "",
      aciklama: "Farklı kuşaklardan 18 sanatçıyı bir araya getiren bir karma sergi. Nil Yalter'den Hera Büyüktaşçıyan'a, Türkiye çağdaş sanatının tanıdık isimlerini Ankara'da tek salonda görmek için iyi bir fırsat.",
      gorsel: "gorseller/gonul-bagi.jpg", cerceve: "wood", gorselKunye: "Görsel: Galeri Nev",
      renk: ["#7A3B23", "#D9A878", "#2E1A10"],
      kaynak: [{ ad: "Galeri Nev, “Gönül Bağı”", url: "https://galerinev.art/tr/gonul-bagi" }]
    },
    {
      baslik: "The Sea Peoples", kim: "Guido Casaretto · Küratör: Domenico de Chirico",
      mekan: "SANATORIUM", yer: "Karaköy, İstanbul",
      tarih: "5 Kasım – 26 Aralık 2026", bilet: "",
      aciklama: "Nesnelerin ve süsleme geleneklerinin kopyalanıp yer değiştirdikçe nasıl yeni anlamlar kazandığına bakan bir kişisel sergi. Sanatçı vitrinleri ve içindeki objeleri toza dönüştürüp aynı kalıba yeniden döküyor; 1950–60'larda Avustralya'ya göçen Levantenlerin hediyelik eşyaları da çıkış noktalarından biri.",
      gorsel: "gorseller/the-sea-peoples.jpg", cerceve: "black", gorselKunye: "Görsel: SANATORIUM",
      renk: ["#6B4A2B", "#C9A26B", "#2A1C10"],
      kaynak: [{ ad: "SANATORIUM, “The Sea Peoples”", url: "https://www.sanatorium.com.tr/exhibitions/122-the-sea-peoples/overview/" }]
    },
    {
      baslik: "Monokrom", kim: "İsmail Şimşek",
      mekan: "SANATORIUM", yer: "Karaköy, İstanbul",
      tarih: "12 Kasım – 26 Aralık 2026", bilet: "",
      aciklama: "Monokrom geleneğinden yola çıkan bir kişisel sergi: çok renkli yüzeyler ip, kordon ve kumaşla bölünüp yeniden bağlanıyor. Resimle heykel arasındaki sınır bulanıklaşıyor.",
      gorsel: "gorseller/monokrom.jpg", cerceve: "light", gorselKunye: "Görsel: SANATORIUM",
      renk: ["#1B3C8C", "#B23A3A", "#111111"],
      kaynak: [{ ad: "SANATORIUM, “Monokrom”", url: "https://www.sanatorium.com.tr/exhibitions/123-monokrom/overview/" }]
    },
    {baslik: "İçses ve İçyapı", kim: "Yoko Ono",
      mekan: "Sakıp Sabancı Müzesi", yer: "Emirgan, İstanbul",
      tarih: "25 Haziran – 27 Aralık 2026", bilet: "Ücretli",
      aciklama: "Yoko Ono'nun Türkiye'deki en kapsamlı sergisi: 1950'lerin sonundan bugüne talimat işleri, performans, film, yerleştirme ve katılımcı projelerden 67 eser. Bazı işler müzenin bahçesine taşıyor; izleyicinin katılımıyla tamamlanan eserler sergiyi her gün biraz değiştiriyor.",
      gorsel: "gorseller/yoko-ono.jpg", cerceve: "black", gorselKunye: "Görsel: Sakıp Sabancı Müzesi",
      renk: ["#1E1D1B", "#B9BCBE", "#3A3A3A"],
      devam: true, kaynak: [{ ad: "Sakıp Sabancı Müzesi, “Yoko Ono: İçses ve İçyapı”", url: "https://sakipsabancimuzesi.org/sergiler-ve-etkinlikler/sergi/78" }]
    },
    {
      baslik: "Neş'e Erdok", kim: "Neş'e Erdok · son dönem çalışmaları",
      mekan: "MSGSÜ İstanbul Resim ve Heykel Müzesi", yer: "Tophane, İstanbul",
      tarih: "23 Ekim – 31 Aralık 2026", bilet: "",
      aciklama: "Elli yılı aşkın üretimiyle Türkiye figüratif resminin güçlü seslerinden Erdok'un son dönem işleri. Sanatçının bu müzedeki ilk kişisel sergisi; hem öğrencisi hem hocası olduğu Akademi'ye bir dönüş.",
      gorsel: "gorseller/nese-erdok.jpg", cerceve: "wood", gorselKunye: "Görsel: İstanbul Resim ve Heykel Müzesi",
      renk: ["#C24A3A", "#9FC3D9", "#2A3A4A"],
      kaynak: [
        { ad: "İstanbul Resim ve Heykel Müzesi, “Neş'e Erdok”", url: "https://irhm.msgsu.edu.tr/exhibition/nese-erdok/" },
        { ad: "24 Saat, Neş'e Erdok Akademi'ye dönüyor", url: "https://www.24saatgazetesi.com/nese-erdok-istanbul-resim-ve-heykel-muzesinde-ilk-kisisel-sergisiyle-akademiye-donuyor" }
      ]
    },
    {
      baslik: "Kaldığımız Yerden", kim: "Ahmet Güneştekin · Küratör: Dr. Zeynep Öztürk",
      mekan: "DG Art Galeri & Project", yer: "Polat Piyalepaşa Çarşı, İstanbul",
      tarih: "27 Kasım 2026 – 17 Ocak 2027", bilet: "",
      aciklama: "Sanatçının 60. yaşına özel, yeni işlerden oluşan bir sergi; bir retrospektif değil. “Yüzleşme” serisi, kapılar, yağlı boyalar ve seramikler ilk kez gösteriliyor; Venedik'te ilk kez görülen bronz heykeller bu kez binlerce yıllık monolit taşlarla bir arada.",
      gorsel: "gorseller/kaldigimiz-yerden.jpg", cerceve: "black", gorselKunye: "Görsel: DG Art Galeri & Project (basın bülteni)",
      renk: ["#1E1D1B", "#B08A5A", "#3A3A3A"],
      kaynak: [
        { ad: "Euronews Türkçe, Ahmet Güneştekin'den 60. yaşına özel sergi", url: "https://tr.euronews.com/2026/11/22/ahmet-gunestekinden-60-yasina-ozel-sergi-kaldigimiz-yerden" },
        { ad: "BirGün, Ahmet Güneştekin'in 40 yıllık yolculuğu", url: "https://www.birgun.net/haber/ahmet-gunestekin-in-40-yillik-yolculugu-kaldigimiz-yerden-747466" }
      ]
    },
    {baslik: "Yaratım ve Yıkım", kim: "Frank Bowling · Francis Bacon ve Victor Willing müdahalesiyle · Küratör: Alistair Hicks",
      mekan: "Pera Müzesi", yer: "Tepebaşı, İstanbul",
      tarih: "29 Eylül 2026 – 31 Ocak 2027", bilet: "Ücretli (tam 450 TL, indirimli 250 TL)",
      aciklama: "Frank Bowling'in altmış yılı aşan üretiminden, ünlü “Map” serisini de içeren resimler. Bacon ve Willing'in eserleriyle kurulan diyalog, savaş sonrası İngiliz resmindeki cesur denemelere yeniden bakıyor.",
      gorsel: "gorseller/frank-bowling.jpg", cerceve: "gold", gorselKunye: "Görsel: Pera Müzesi",
      renk: ["#2D5B8C", "#E3B98A", "#1B3C8C"],
      devam: true, kaynak: [{ ad: "Pera Müzesi, “Frank Bowling: Yaratım ve Yıkım”", url: "https://www.peramuzesi.org.tr/sergi/frank-bowling-yaratim-ve-yikim/1323" }]
    },
    {baslik: "Lumina: Renk ve Işık Sanatı", kim: "Centre Pompidou koleksiyonundan · Küratörler: Anna Hiddleston, Noémie Fillon",
      mekan: "Lucien Arkas Sanat Merkezi", yer: "İzmir",
      tarih: "26 Eylül 2026 – 14 Şubat 2027", bilet: "Ücretli",
      aciklama: "Arkas Sanat ile Centre Pompidou arasındaki beş yıllık ortaklığın ilk sergisi. Kandinsky, Léger, Goncharova, Russolo, Bridget Riley, Vasarely ve Gerhard Richter'in de aralarında olduğu 83 eserle, Fovizm'den Op Art'a renk ve ışığın 20. yüzyıldaki serüveni yedi bölümde.",
      gorsel: "gorseller/russolo-otomobil.jpg", cerceve: "gold",
      gorselAlt: "Kırmızı ve mavi tonlarda, hızla ilerleyen bir otomobili açılı çizgilerle anlatan fütürist resim",
      gorselKunye: "Luigi Russolo, Bir Otomobilin Dinamizmi, 1912–13 · Centre Pompidou koleksiyonu · Kamu malı, Wikimedia Commons",
      renk: ["#C46E45", "#E3B23C", "#4F7A8C"],
      devam: true, kaynak: [
        { ad: "Arkas Sanat, “Lumina: Renk ve Işık Sanatı”", url: "https://arkassanat.com/portfolio/lumina-renk-ve-isik-sanati/" },
        { ad: "Euronews Türkçe, “Centre Pompidou'nun 83 eseri İzmir'de”", url: "https://tr.euronews.com/2026/09/27/centre-pompidounun-83-eseri-izmirde-lumina-sergisi-acildi" }
      ]
    },
    {baslik: "İşi Olmayan Giremez", kim: "belit sağ, Dilşad Aladağ, Merve Bedir, Metehan Özcan, Sultan Gökdemir ve diğerleri",
      mekan: "Salt Galata", yer: "Karaköy, İstanbul",
      tarih: "17 Ekim 2026 – 14 Şubat 2027", bilet: "Ücretsiz",
      aciklama: "Üretimi; işçi bedeni, iş yeri, kent dokusu ve küresel dolaşım üzerinden ele alan bir grup sergisi. Kent dışına taşınan fabrikalar, özelleştirmeler ve işçi örgütlenmesi gibi konulara sanatın gözünden bakıyor.",
      gorsel: "gorseller/isi-olmayan-giremez.jpg", cerceve: "light", gorselKunye: "Görsel: Salt",
      renk: ["#4A4845", "#C9C5BC", "#1E1D1B"],
      devam: true, kaynak: [{ ad: "Salt, “İşi Olmayan Giremez”", url: "https://saltonline.org/tr/sergi-isi-olmayan-giremez-3107" }]
    },
    {baslik: "Denizaşırı: Özer Kabaş ve Zamanları", kim: "Özer Kabaş · Program: Tuğçe Kaplan, Vasıf Kortun",
      mekan: "Salt Beyoğlu", yer: "İstiklal Caddesi, İstanbul",
      tarih: "16 Eylül 2026 – 14 Mart 2027", bilet: "Ücretsiz",
      aciklama: "Ressam, eğitmen ve tasarımcı Özer Kabaş'ın 1960'lardan 1990'lara uzanan üretimine geniş bir bakış. Resim ve baskıların yanında Urart için tasarladığı takılar, kısa filmi “İstanbul Hatırası” ve arşiv belgeleri bir arada.",
      gorsel: "gorseller/denizasiri.jpg", cerceve: "wood", gorselKunye: "Görsel: Salt",
      renk: ["#1F5C6B", "#7FA9C8", "#0F2E36"],
      devam: true, kaynak: [{ ad: "Salt, “Denizaşırı: Özer Kabaş ve Zamanları”", url: "https://saltonline.org/tr/sergi-denizasiri-ozer-kabas-ve-zamanlari-3085" }]
    },
    {baslik: "Cumhuriyet'in Kamera Arkası", kim: "Selahattin Giz, Namık Görgüç ve diğerleri · Küratörler: İdil Çetin, Ahmet Ersoy",
      mekan: "Pera Müzesi", yer: "Tepebaşı, İstanbul",
      tarih: "29 Eylül 2026 – 28 Mart 2027", bilet: "Ücretli",
      aciklama: "Basın fotoğrafları arşivinden seçilmiş hatalı, hasarlı ya da hiç yayımlanmamış kareler. Erken Cumhuriyet İstanbul'unun gündelik hayatını ve kenarda kalan yüzlerini, gazete sayfalarına giremeyen fotoğraflar üzerinden gösteren bir fotoğraf sergisi.",
      gorsel: "gorseller/cumhuriyetin-kamera-arkasi.jpg", cerceve: "black", gorselKunye: "Görsel: Pera Müzesi",
      renk: ["#55585C", "#D9D3C7", "#1C1C1E"],
      devam: true, kaynak: [{ ad: "Pera Müzesi, “Cumhuriyet'in Kamera Arkası”", url: "https://www.peramuzesi.org.tr/sergi/cumhuriyetin-kamera-arkasi/1325" }]
    },
    {baslik: "Sonra yok. Sonrası şimdi.", kim: "Nam June Paik, Gerhard Richter & Sigmar Polke, Alicja Kwade, Halil Altındere ve diğerleri · Küratör: Delfin Öğütoğulları",
      mekan: "Arter", yer: "Dolapdere, İstanbul",
      tarih: "8 Ekim 2026 – 28 Mart 2027", bilet: "Ücretli",
      aciklama: "Arter Koleksiyonu'ndan eserlerle kıyameti uzak bir gelecek olayı olarak değil, şu an süregiden bir durum olarak düşünen bir grup sergisi. İklim, radyasyon ve plastik gibi “yavaş felaketleri” ve onları görmezden gelişimizi sorguluyor.",
      gorsel: "gorseller/sonra-yok.jpg", cerceve: "light", gorselKunye: "Görsel: Arter",
      renk: ["#6E8B4E", "#E9E4DA", "#2E3B22"],
      devam: true, kaynak: [
        { ad: "Arter, “Sonra yok. Sonrası şimdi.”", url: "https://www.arter.org.tr/sergi/sonra-yok-sonrasi-simdi/19531" },
        { ad: "Evrensel, Arter'in yeni sergisi ziyarete açıldı", url: "https://www.evrensel.net/haber/6003957/arterin-yeni-sergisi-sonra-yok-sonrasi-simdi-ziyarete-acildi" }
      ]
    },
    {
      baslik: "Kendine Ait Bir Ada", kim: "Manuel Çıtak (1962–2023) · Küratör: Demet Yıldız Dinçer",
      mekan: "İstanbul Modern, Fotoğraf Galerisi", yer: "Karaköy, İstanbul",
      tarih: "5 Kasım 2026 – 23 Mayıs 2027", bilet: "Ücretli",
      aciklama: "Fotoğrafçının 1980'lerden 2023'e uzanan üretimini ilk kez bütünüyle bir araya getiren sergi. Siyah-beyaz kıyı fotoğrafları, kent manzaraları, panoramalar ve Anadolu'dan kareler, gündelik hayata bakan esprili ve yalın dilini gösteriyor.",
      gorsel: "gorseller/manuel-citak.jpg", cerceve: "black", gorselKunye: "Görsel: İstanbul Modern",
      renk: ["#55585C", "#D9D3C7", "#1C1C1E"],
      kaynak: [{ ad: "İstanbul Modern, “Manuel Çıtak: Kendine Ait Bir Ada”", url: "https://www.istanbulmodern.org/sergi/manuel-citak-kendine-ait-bir-ada" }]
    },
    {
      baslik: "Akıp Giden Şehir", kim: "Cansu Çakar, Aslı Çavuşoğlu, Volkan Aslan, Sibel Horada, Karin Kneffel, Hoca Ali Rıza, Aliye Berger ve diğerleri · Küratörler: Nilay Dursun, Ümit Mesci",
      mekan: "İstanbul Modern", yer: "Karaköy, İstanbul",
      tarih: "19 Kasım 2026 – 27 Haziran 2027", bilet: "Ücretli",
      aciklama: "Suyu merkeze alarak İstanbul'un Boğaz'ı, Haliç'i ve tatlı su havzalarıyla nasıl görülüp resmedildiğini izleyen bir koleksiyon seçkisi. 18. yüzyıl gravürlerinden bugünün işlerine; kentte yaşayan ve kente uğrayan sanatçılar yan yana.",
      gorsel: "gorseller/akip-giden-sehir.jpg", cerceve: "gold", gorselKunye: "Cansu Çakar, Altın Post, 2025 · Görsel: İstanbul Modern",
      renk: ["#5A4A8C", "#D9B8D0", "#2A1E3A"],
      kaynak: [{ ad: "İstanbul Modern, “Akıp Giden Şehir”", url: "https://www.istanbulmodern.org/sergi/akip-giden-sehir" }]
    },
    {baslik: "Aynı Mavinin Altında", kim: "Abidin Dino, Fahrelnissa Zeid, Füsun Onur, Nil Yalter, Olafur Eliasson ve 100'den fazla sanatçı",
      mekan: "İstanbul Modern", yer: "Karaköy, İstanbul",
      tarih: "8 Eylül 2026'dan itibaren (2026–2027)", bilet: "Ücretli",
      aciklama: "Müzenin onuncu koleksiyon sergisi. Bir bölüm Türkiye'de 1940'lardan 2000'lere modern ve çağdaş sanatın izini sürüyor; diğeri 2000 sonrası eserleri kimlik, göç, bellek ve doğa temaları etrafında buluşturuyor.",
      gorsel: "gorseller/ayni-mavinin-altinda.jpg", cerceve: "wood", gorselKunye: "Görsel: İstanbul Modern",
      renk: ["#1B3C8C", "#3E6CC0", "#0E2459"],
      devam: true, kaynak: [{ ad: "İstanbul Modern, “Aynı Mavinin Altında”", url: "https://www.istanbulmodern.org/sergi/ayni-mavinin-altinda" }]
    },
    {
      baslik: "Perili | Haunted", kim: "Daniel Canogar, DRIFT, Memo Akten, Quayola, Rafael Lozano-Hemmer, teamLab, Zimoun ve diğerleri · Küratör: Dr. Kumru Eren",
      mekan: "Borusan Contemporary", yer: "Rumelihisarı, İstanbul",
      tarih: "19 Eylül 2026 – 15 Ağustos 2027", bilet: "Ücretli (tam 350 TL, indirimli 100 TL) · yalnızca cumartesi ve pazar",
      aciklama: "Ses, ışık, hareket ve veriyle çalışan medya sanatı işleri üzerinden yapay zekâ çağında “insan nedir” sorusunu soran bir koleksiyon sergisi. Olivo Barbieri sergisiyle aynı binada; tek ziyarette ikisi birden.",
      gorsel: "gorseller/perili-haunted.jpg", cerceve: "black", gorselKunye: "Memo Akten · Görsel: Borusan Contemporary",
      renk: ["#1A1A1A", "#C9C2B8", "#3A3A3A"],
      kaynak: [{ ad: "Borusan Contemporary, “Perili | Haunted”", url: "https://www.borusancontemporary.com/tr/perili-haunted_2543" }]
    },
    {baslik: "Zaman Mekân Geometri", kim: "Olivo Barbieri · Küratör: Fırat Arapoğlu",
      mekan: "Borusan Contemporary", yer: "Rumelihisarı, İstanbul",
      tarih: "19 Eylül 2026 – 15 Ağustos 2027", bilet: "Ücretli (tam 350 TL, indirimli 100 TL) · yalnızca cumartesi ve pazar",
      aciklama: "İtalyan fotoğrafçı Olivo Barbieri'nin beş serisi. Efes, Afrodisias ve Hierapolis'in havadan görüntüleriyle açılan sergide İstanbul, Los Angeles ve Londra maket gibi küçülüyor. Perili Köşk'ün manzarasıyla birlikte görülmeye değer.",
      gorsel: "gorseller/olivo-barbieri.jpg", cerceve: "gold", gorselKunye: "Görsel: Borusan Contemporary",
      renk: ["#A9873F", "#E1C580", "#5E4A1F"],
      devam: true, kaynak: [{ ad: "Borusan Contemporary, “Olivo Barbieri: Zaman Mekân Geometri”", url: "https://www.borusancontemporary.com/tr/olivo-barbieri-zaman-mekan-geometri_2544" }]
    }
  ]
};
