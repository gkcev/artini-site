/* Kasım 2026 sergileri: hem sergiler/kasim-2026.html hem ana sayfadaki carousel buradan okur.
   gorsel: sergiler/ klasörüne göre yol; boşsa renk paletinden bir afiş çizilir. gorselKunye görselin altında görünür.
   kaynak: sayfanın sonundaki "Kaynaklar" listesine eklenir (aynı URL bir kez yazılır). */
window.SERGILER = {
  ay: "Kasım 2026",
  guncelleme: "23 Ekim 2026",
  giris: "İstanbul'dan İzmir'e, bu ay açık olan ve görmeye değer bulduğumuz sergiler. Kapanış tarihine göre sıraladık; önce bitenler en üstte.",
  liste: [
    {
      baslik: "Rû Bi Rû", kim: "Fatoş İrwen",
      mekan: "Zilberman İstanbul", yer: "Beyoğlu, İstanbul",
      tarih: "15 Eylül – 21 Kasım 2026", bilet: "",
      aciklama: "Kürtçede “yüz yüze” anlamına gelen başlığıyla, bastırılmış ve kuşaktan kuşağa sözlü aktarılan tarihlere bakan bir kişisel sergi. Galerinin ortasından geçen kuru bir dere yatağı, kesilmiş saçlar ve ışıkla delinmiş bir kent silueti mekânı bir anma alanına dönüştürüyor.",
      gorsel: "gorseller/ru-bi-ru.jpg", cerceve: "black", gorselKunye: "Görsel: Zilberman",
      renk: ["#5B3A29", "#C98E5A", "#2B1B13"],
      kaynak: [{ ad: "Zilberman, “Rû Bi Rû: Fatoş İrwen”", url: "https://www.zilbermangallery.com/exhibitions/212-ru-bi-ru-fatos-irwen/" }]
    },
    {
      baslik: "Tüm Renklerin Aryası", kim: "Semiha Berksoy · Kürasyon: Öykü Özsoy Sağnak, Deniz Pehlivaner",
      mekan: "İstanbul Modern", yer: "Karaköy, İstanbul",
      tarih: "22 Ocak – 22 Kasım 2026", bilet: "Ücretli",
      aciklama: "Opera sanatçısı ve ressam Semiha Berksoy'un 200'ü aşkın eseriyle kapsamlı bir retrospektif. Erken desenler, opera temalı resimler ve otoportreler sahne ve sinema belgeleriyle yan yana. Berlin'deki Hamburger Bahnhof'tan sonra İstanbul'da; kaçırmamak için son haftalar.",
      gorsel: "gorseller/semiha-berksoy.jpg", cerceve: "light", gorselKunye: "Görsel: İstanbul Modern",
      renk: ["#8C1C2B", "#E3B23C", "#3B0D14"],
      kaynak: [{ ad: "İstanbul Modern, “Semiha Berksoy: Tüm Renklerin Aryası”", url: "https://www.istanbulmodern.org/sergi/semiha-berksoy-tum-renklerin-aryasi" }]
    },
    {
      baslik: "Yüzyılın İzleri: Koç Topluluğu ve Sanat", kim: "Kürasyon: Didem Yazıcı",
      mekan: "Yapı Kredi Kültür Sanat", yer: "Beyoğlu, İstanbul",
      tarih: "8 Nisan – 29 Kasım 2026", bilet: "Ücretsiz",
      aciklama: "Koç Topluluğu'nun 100. yılı için hazırlanan sergi, 1920'lerden bugüne sanat, mimarlık, tasarım, reklam afişleri ve yayıncılığı bir zaman çizelgesi boyunca anlatıyor. Belgeler, fotoğraflar ve eserlerle Cumhuriyet'in kültür hayatına geniş bir bakış.",
      gorsel: "gorseller/yuzyilin-izleri.jpg", cerceve: "wood", gorselKunye: "Görsel: Yapı Kredi Kültür Sanat",
      renk: ["#1A47A6", "#9DB6DE", "#12367F"],
      kaynak: [
        { ad: "Yapı Kredi Kültür Sanat, “Yüzyılın İzleri”", url: "https://sanat.ykykultur.com.tr/sergiler/yuzyilin-izleri-koc-toplulugu-ve-sanat" },
        { ad: "Oggusto, Koç Topluluğu sanat sergisi", url: "https://www.oggusto.com/genel/koc-toplulugu-sanat-sergisi" }
      ]
    },
    {
      baslik: "İçses ve İçyapı", kim: "Yoko Ono",
      mekan: "Sakıp Sabancı Müzesi", yer: "Emirgan, İstanbul",
      tarih: "25 Haziran – 27 Aralık 2026", bilet: "Ücretli",
      aciklama: "Yoko Ono'nun Türkiye'deki en kapsamlı sergisi: 1950'lerin sonundan bugüne talimat işleri, performans, film, yerleştirme ve katılımcı projelerden 67 eser. Bazı işler müzenin bahçesine taşıyor; izleyicinin katılımıyla tamamlanan eserler sergiyi her gün biraz değiştiriyor.",
      gorsel: "gorseller/yoko-ono.jpg", cerceve: "black", gorselKunye: "Görsel: Sakıp Sabancı Müzesi",
      renk: ["#1E1D1B", "#B9BCBE", "#3A3A3A"],
      kaynak: [{ ad: "Sakıp Sabancı Müzesi, “Yoko Ono: İçses ve İçyapı”", url: "https://sakipsabancimuzesi.org/sergiler-ve-etkinlikler/sergi/78" }]
    },
    {
      baslik: "Yaratım ve Yıkım", kim: "Frank Bowling · Francis Bacon ve Victor Willing müdahalesiyle · Küratör: Alistair Hicks",
      mekan: "Pera Müzesi", yer: "Tepebaşı, İstanbul",
      tarih: "29 Eylül 2026 – 31 Ocak 2027", bilet: "Ücretli (tam 450 TL, indirimli 250 TL)",
      aciklama: "Frank Bowling'in altmış yılı aşan üretiminden, ünlü “Map” serisini de içeren resimler. Bacon ve Willing'in eserleriyle kurulan diyalog, savaş sonrası İngiliz resmindeki cesur denemelere yeniden bakıyor.",
      gorsel: "gorseller/frank-bowling.jpg", cerceve: "gold", gorselKunye: "Görsel: Pera Müzesi",
      renk: ["#2D5B8C", "#E3B98A", "#1B3C8C"],
      kaynak: [{ ad: "Pera Müzesi, “Frank Bowling: Yaratım ve Yıkım”", url: "https://www.peramuzesi.org.tr/sergi/frank-bowling-yaratim-ve-yikim/1323" }]
    },
    {
      baslik: "Lumina: Renk ve Işık Sanatı", kim: "Centre Pompidou koleksiyonundan · Küratörler: Anna Hiddleston, Noémie Fillon",
      mekan: "Lucien Arkas Sanat Merkezi", yer: "İzmir",
      tarih: "26 Eylül 2026 – 14 Şubat 2027", bilet: "Ücretli",
      aciklama: "Arkas Sanat ile Centre Pompidou arasındaki beş yıllık ortaklığın ilk sergisi. Kandinsky, Léger, Goncharova, Russolo, Bridget Riley, Vasarely ve Gerhard Richter'in de aralarında olduğu 83 eserle, Fovizm'den Op Art'a renk ve ışığın 20. yüzyıldaki serüveni yedi bölümde.",
      gorsel: "gorseller/russolo-otomobil.jpg", cerceve: "gold",
      gorselAlt: "Kırmızı ve mavi tonlarda, hızla ilerleyen bir otomobili açılı çizgilerle anlatan fütürist resim",
      gorselKunye: "Luigi Russolo, Bir Otomobilin Dinamizmi, 1912–13 · Centre Pompidou koleksiyonu · Kamu malı, Wikimedia Commons",
      renk: ["#C46E45", "#E3B23C", "#4F7A8C"],
      kaynak: [
        { ad: "Arkas Sanat, “Lumina: Renk ve Işık Sanatı”", url: "https://arkassanat.com/portfolio/lumina-renk-ve-isik-sanati/" },
        { ad: "Euronews Türkçe, “Centre Pompidou'nun 83 eseri İzmir'de”", url: "https://tr.euronews.com/2026/09/27/centre-pompidounun-83-eseri-izmirde-lumina-sergisi-acildi" }
      ]
    },
    {
      baslik: "İşi Olmayan Giremez", kim: "belit sağ, Dilşad Aladağ, Merve Bedir, Metehan Özcan, Sultan Gökdemir ve diğerleri",
      mekan: "Salt Galata", yer: "Karaköy, İstanbul",
      tarih: "17 Ekim 2026 – 14 Şubat 2027", bilet: "Ücretsiz",
      aciklama: "Üretimi; işçi bedeni, iş yeri, kent dokusu ve küresel dolaşım üzerinden ele alan bir grup sergisi. Kent dışına taşınan fabrikalar, özelleştirmeler ve işçi örgütlenmesi gibi konulara sanatın gözünden bakıyor.",
      gorsel: "gorseller/isi-olmayan-giremez.jpg", cerceve: "light", gorselKunye: "Görsel: Salt",
      renk: ["#4A4845", "#C9C5BC", "#1E1D1B"],
      kaynak: [{ ad: "Salt, “İşi Olmayan Giremez”", url: "https://saltonline.org/tr/sergi-isi-olmayan-giremez-3107" }]
    },
    {
      baslik: "Denizaşırı: Özer Kabaş ve Zamanları", kim: "Özer Kabaş · Program: Tuğçe Kaplan, Vasıf Kortun",
      mekan: "Salt Beyoğlu", yer: "İstiklal Caddesi, İstanbul",
      tarih: "16 Eylül 2026 – 14 Mart 2027", bilet: "Ücretsiz",
      aciklama: "Ressam, eğitmen ve tasarımcı Özer Kabaş'ın 1960'lardan 1990'lara uzanan üretimine geniş bir bakış. Resim ve baskıların yanında Urart için tasarladığı takılar, kısa filmi “İstanbul Hatırası” ve arşiv belgeleri bir arada.",
      gorsel: "gorseller/denizasiri.jpg", cerceve: "wood", gorselKunye: "Görsel: Salt",
      renk: ["#1F5C6B", "#7FA9C8", "#0F2E36"],
      kaynak: [{ ad: "Salt, “Denizaşırı: Özer Kabaş ve Zamanları”", url: "https://saltonline.org/tr/sergi-denizasiri-ozer-kabas-ve-zamanlari-3085" }]
    },
    {
      baslik: "Cumhuriyet'in Kamera Arkası", kim: "Selahattin Giz, Namık Görgüç ve diğerleri · Küratörler: İdil Çetin, Ahmet Ersoy",
      mekan: "Pera Müzesi", yer: "Tepebaşı, İstanbul",
      tarih: "29 Eylül 2026 – 28 Mart 2027", bilet: "Ücretli",
      aciklama: "Basın fotoğrafları arşivinden seçilmiş hatalı, hasarlı ya da hiç yayımlanmamış kareler. Erken Cumhuriyet İstanbul'unun gündelik hayatını ve kenarda kalan yüzlerini, gazete sayfalarına giremeyen fotoğraflar üzerinden gösteren bir fotoğraf sergisi.",
      gorsel: "gorseller/cumhuriyetin-kamera-arkasi.jpg", cerceve: "black", gorselKunye: "Görsel: Pera Müzesi",
      renk: ["#55585C", "#D9D3C7", "#1C1C1E"],
      kaynak: [{ ad: "Pera Müzesi, “Cumhuriyet'in Kamera Arkası”", url: "https://www.peramuzesi.org.tr/sergi/cumhuriyetin-kamera-arkasi/1325" }]
    },
    {
      baslik: "Sonra yok. Sonrası şimdi.", kim: "Nam June Paik, Gerhard Richter & Sigmar Polke, Alicja Kwade, Halil Altındere ve diğerleri · Küratör: Delfin Öğütoğulları",
      mekan: "Arter", yer: "Dolapdere, İstanbul",
      tarih: "8 Ekim 2026 – 28 Mart 2027", bilet: "Ücretli",
      aciklama: "Arter Koleksiyonu'ndan eserlerle kıyameti uzak bir gelecek olayı olarak değil, şu an süregiden bir durum olarak düşünen bir grup sergisi. İklim, radyasyon ve plastik gibi “yavaş felaketleri” ve onları görmezden gelişimizi sorguluyor.",
      gorsel: "gorseller/sonra-yok.jpg", cerceve: "light", gorselKunye: "Görsel: Arter",
      renk: ["#6E8B4E", "#E9E4DA", "#2E3B22"],
      kaynak: [
        { ad: "Arter, “Sonra yok. Sonrası şimdi.”", url: "https://www.arter.org.tr/sergi/sonra-yok-sonrasi-simdi/19531" },
        { ad: "Evrensel, Arter'in yeni sergisi ziyarete açıldı", url: "https://www.evrensel.net/haber/6003957/arterin-yeni-sergisi-sonra-yok-sonrasi-simdi-ziyarete-acildi" }
      ]
    },
    {
      baslik: "Aynı Mavinin Altında", kim: "Abidin Dino, Fahrelnissa Zeid, Füsun Onur, Nil Yalter, Olafur Eliasson ve 100'den fazla sanatçı",
      mekan: "İstanbul Modern", yer: "Karaköy, İstanbul",
      tarih: "8 Eylül 2026'dan itibaren (2026–2027)", bilet: "Ücretli",
      aciklama: "Müzenin onuncu koleksiyon sergisi. Bir bölüm Türkiye'de 1940'lardan 2000'lere modern ve çağdaş sanatın izini sürüyor; diğeri 2000 sonrası eserleri kimlik, göç, bellek ve doğa temaları etrafında buluşturuyor.",
      gorsel: "gorseller/ayni-mavinin-altinda.jpg", cerceve: "wood", gorselKunye: "Görsel: İstanbul Modern",
      renk: ["#1B3C8C", "#3E6CC0", "#0E2459"],
      kaynak: [{ ad: "İstanbul Modern, “Aynı Mavinin Altında”", url: "https://www.istanbulmodern.org/sergi/ayni-mavinin-altinda" }]
    },
    {
      baslik: "Zaman Mekân Geometri", kim: "Olivo Barbieri · Küratör: Fırat Arapoğlu",
      mekan: "Borusan Contemporary", yer: "Rumelihisarı, İstanbul",
      tarih: "19 Eylül 2026 – 15 Ağustos 2027", bilet: "Ücretli (tam 350 TL, indirimli 100 TL) · yalnızca cumartesi ve pazar",
      aciklama: "İtalyan fotoğrafçı Olivo Barbieri'nin beş serisi. Efes, Afrodisias ve Hierapolis'in havadan görüntüleriyle açılan sergide İstanbul, Los Angeles ve Londra maket gibi küçülüyor. Perili Köşk'ün manzarasıyla birlikte görülmeye değer.",
      gorsel: "gorseller/olivo-barbieri.jpg", cerceve: "gold", gorselKunye: "Görsel: Borusan Contemporary",
      renk: ["#A9873F", "#E1C580", "#5E4A1F"],
      kaynak: [{ ad: "Borusan Contemporary, “Olivo Barbieri: Zaman Mekân Geometri”", url: "https://www.borusancontemporary.com/tr/olivo-barbieri-zaman-mekan-geometri_2544" }]
    }
  ]
};
