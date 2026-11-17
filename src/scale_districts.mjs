import { createGulfPage } from "./gulf_helpers.mjs";

export const GULF_DISTRICTS = [
  // الرياض (24)
  { id: "riyadh-narjis", name: "حي النرجس", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-yasmin", name: "حي الياسمين", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-malqa", name: "حي الملقا", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-sahafa", name: "حي الصحافة", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-hitteen", name: "حي حطين", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-arid", name: "حي العارض", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-yarmouk", name: "حي اليرموك", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-rimal", name: "حي الرمال", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-mounsiya", name: "حي المونسية", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-sulaimaniya", name: "حي السليمانية", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-olaya", name: "حي العليا", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-malaz", name: "حي الملز", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-rawdah", name: "حي الروضة", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-naseem", name: "حي النسيم", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-shifa", name: "حي الشفا", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-suwaidi", name: "حي السويدي", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-laban", name: "حي ظهرة لبن", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-tuwaiq", name: "حي طويق", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-qairawan", name: "حي القيروان", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-taawun", name: "حي التعاون", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-nakheel", name: "حي النخيل", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-wadi-laban", name: "حي وادي لبن", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-janadriyah", name: "حي الجنادرية", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "riyadh-dar-al-baida", name: "حي الدار البيضاء", city: "الرياض", country: "saudi-arabia", countryAr: "السعودية" },

  // جدة (18)
  { id: "jeddah-obhur-north", name: "حي أبحر الشمالية", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jeddah-obhur-south", name: "حي أبحر الجنوبية", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jeddah-hamdaniyah", name: "حي الحمدانية", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jeddah-rawdah", name: "حي الروضة", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jeddah-salamah", name: "حي السلامة", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jeddah-zahra", name: "حي الزهراء", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jeddah-shati", name: "حي الشاطئ", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jeddah-safa", name: "حي الصفا", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jeddah-marwah", name: "حي المروة", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jeddah-naseem", name: "حي النسيم", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jeddah-samir", name: "حي السامر", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jeddah-ajawid", name: "حي الأجاويد", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jeddah-mohammadia", name: "حي المحمدية", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jeddah-khalidiyah", name: "حي الخالدية", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jeddah-naeem", name: "حي النعيم", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jeddah-basateen", name: "حي البساتين", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jeddah-bawadi", name: "حي البوادي", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jeddah-rehab", name: "حي الرحاب", city: "جدة", country: "saudi-arabia", countryAr: "السعودية" },

  // الدمام والخبر والظهران (16)
  { id: "dammam-faisaliyah", name: "حي الفيصلية", city: "الدمام", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "dammam-shati", name: "حي الشاطئ الشرقي", city: "الدمام", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "dammam-mazruiyah", name: "حي المزروعية", city: "الدمام", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "dammam-uhud", name: "حي أحد", city: "الدمام", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "dammam-aziziyah", name: "حي العزيزية", city: "الدمام", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "khobar-hizam", name: "حي الحزام الذهبي", city: "الخبر", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "khobar-rakah", name: "حي الراكة الجنوبية", city: "الخبر", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "khobar-aqrabiyah", name: "حي العقربية", city: "الخبر", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "khobar-jisr", name: "حي الجسر", city: "الخبر", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "khobar-thuqbah", name: "حي الثقبة", city: "الخبر", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "dhahran-doha", name: "حي الدوحة الجنوبية", city: "الظهران", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "dhahran-dana", name: "حي الدانة", city: "الظهران", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "ahsa-khalidiyah", name: "حي الخالدية الأحساء", city: "الأحساء", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "ahsa-hofuf", name: "حي الهفوف القديمة", city: "الأحساء", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jubail-jalmudah", name: "حي جلمودة", city: "الجبيل", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "jubail-fanateer", name: "حي الفناتير", city: "الجبيل", country: "saudi-arabia", countryAr: "السعودية" },

  // مكة والمدينة والطائف (12)
  { id: "mecca-awali", name: "حي العوالي", city: "مكة المكرمة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "mecca-shawqiyah", name: "حي الشوقية", city: "مكة المكرمة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "mecca-sharaie", name: "حي الشرائع", city: "مكة المكرمة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "mecca-aziziyah", name: "حي العزيزية مكة", city: "مكة المكرمة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "medina-hijrah", name: "حي الهجرة", city: "المدينة المنورة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "medina-baqdo", name: "حي باقدو", city: "المدينة المنورة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "medina-sultana", name: "حي سلطانة", city: "المدينة المنورة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "medina-aziziya", name: "حي العزيزية المدينة", city: "المدينة المنورة", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "taif-shehar", name: "حي شهار", city: "الطائف", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "taif-haweeyah", name: "حي الحوية", city: "الطائف", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "tabuk-morouj", name: "حي المروج", city: "تبوك", country: "saudi-arabia", countryAr: "السعودية" },
  { id: "abha-manhal", name: "حي المنهل", city: "أبها", country: "saudi-arabia", countryAr: "السعودية" },

  // دبي (20)
  { id: "dubai-marina-dist", name: "منطقة دبي مارينا", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-downtown-dist", name: "داون تاون دبي", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-jbr-dist", name: "جميرا بيتش ريزيدنس JBR", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-business-bay-dist", name: "الخليج التجاري Business Bay", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-palm-dist", name: "نخلة جميرا Palm Jumeirah", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-jlt-dist", name: "أبراج بحيرات جميرا JLT", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-hills-dist", name: "دبي هيلز استيت", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-ranches-dist", name: "المرابع العربية Arabian Ranches", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-barsha-dist", name: "منطقة البرشاء", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-jvc-dist", name: "قرية جميرا الدائرية JVC", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-mirdif-dist", name: "منطقة مردف", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-silicon-dist", name: "واحة دبي للسيليكون", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-sports-city-dist", name: "مدينة دبي الرياضية", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-deira-dist", name: "منطقة ديرة دبي", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-bur-dist", name: "منطقة بر دبي", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-creek-dist", name: "خور دبي كريك هاربر", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-motor-dist", name: "موتور سيتي دبي", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-international-city", name: "المدينة العالمية دبي", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-al-warqa", name: "منطقة الورقاء", city: "دبي", country: "uae", countryAr: "الإمارات" },
  { id: "dubai-al-quoz", name: "منطقة القوز السكنية", city: "دبي", country: "uae", countryAr: "الإمارات" },

  // أبوظبي (14)
  { id: "abudhabi-reem-dist", name: "جزيرة الريم", city: "أبوظبي", country: "uae", countryAr: "الإمارات" },
  { id: "abudhabi-yas-dist", name: "جزيرة ياس", city: "أبوظبي", country: "uae", countryAr: "الإمارات" },
  { id: "abudhabi-raha-dist", name: "شاطئ الراحة", city: "أبوظبي", country: "uae", countryAr: "الإمارات" },
  { id: "abudhabi-saadiyat-dist", name: "جزيرة السعديات", city: "أبوظبي", country: "uae", countryAr: "الإمارات" },
  { id: "abudhabi-khalidiya-dist", name: "منطقة الخالدية أبوظبي", city: "أبوظبي", country: "uae", countryAr: "الإمارات" },
  { id: "abudhabi-muroor-dist", name: "منطقة المرور", city: "أبوظبي", country: "uae", countryAr: "الإمارات" },
  { id: "abudhabi-bateen-dist", name: "منطقة البطين", city: "أبوظبي", country: "uae", countryAr: "الإمارات" },
  { id: "abudhabi-mushrif-dist", name: "منطقة المشرف", city: "أبوظبي", country: "uae", countryAr: "الإمارات" },
  { id: "abudhabi-khalifa-city", name: "مدينة خليفة أ", city: "أبوظبي", country: "uae", countryAr: "الإمارات" },
  { id: "abudhabi-mbz-city", name: "مدينة محمد بن زايد", city: "أبوظبي", country: "uae", countryAr: "الإمارات" },
  { id: "abudhabi-shamkha-dist", name: "منطقة الشامخة", city: "أبوظبي", country: "uae", countryAr: "الإمارات" },
  { id: "abudhabi-corniche-dist", name: "منطقة الكورنيش أبوظبي", city: "أبوظبي", country: "uae", countryAr: "الإمارات" },
  { id: "abudhabi-al-falah", name: "منطقة الفلاح السكنية", city: "أبوظبي", country: "uae", countryAr: "الإمارات" },
  { id: "abudhabi-shahama", name: "منطقة الشهامة والرحبة", city: "أبوظبي", country: "uae", countryAr: "الإمارات" },

  // الشارقة وعجمان ورأس الخيمة (12)
  { id: "sharjah-majaz-dist", name: "منطقة المجاز الشارقة", city: "الشارقة", country: "uae", countryAr: "الإمارات" },
  { id: "sharjah-khan-dist", name: "منطقة الخان", city: "الشارقة", country: "uae", countryAr: "الإمارات" },
  { id: "sharjah-qasimia-dist", name: "منطقة القاسمية", city: "الشارقة", country: "uae", countryAr: "الإمارات" },
  { id: "sharjah-muwailih-dist", name: "منطقة مويلح والجامعة", city: "الشارقة", country: "uae", countryAr: "الإمارات" },
  { id: "sharjah-taawun-dist", name: "منطقة التعاون الشارقة", city: "الشارقة", country: "uae", countryAr: "الإمارات" },
  { id: "ajman-jurf-dist", name: "منطقة الجرف عجمان", city: "عجمان", country: "uae", countryAr: "الإمارات" },
  { id: "ajman-rawda-dist", name: "منطقة الروضة عجمان", city: "عجمان", country: "uae", countryAr: "الإمارات" },
  { id: "ajman-nuaimia-dist", name: "منطقة النعيمية", city: "عجمان", country: "uae", countryAr: "الإمارات" },
  { id: "ajman-rashidiya-dist", name: "منطقة الراشدية عجمان", city: "عجمان", country: "uae", countryAr: "الإمارات" },
  { id: "rak-dheit-dist", name: "منطقة الظيت رأس الخيمة", city: "رأس الخيمة", country: "uae", countryAr: "الإمارات" },
  { id: "rak-hamra-dist", name: "قرية الحمراء Al Hamra", city: "رأس الخيمة", country: "uae", countryAr: "الإمارات" },
  { id: "alain-heili-dist", name: "منطقة الهيلي العين", city: "العين", country: "uae", countryAr: "الإمارات" },

  // الكويت (16)
  { id: "kuwait-sharq-dist", name: "منطقة شرق العاصمة", city: "مدينة الكويت", country: "kuwait", countryAr: "الكويت" },
  { id: "kuwait-qibla-dist", name: "منطقة قبلة", city: "مدينة الكويت", country: "kuwait", countryAr: "الكويت" },
  { id: "kuwait-dasman-dist", name: "منطقة دسمان وبنيد القار", city: "مدينة الكويت", country: "kuwait", countryAr: "الكويت" },
  { id: "kuwait-hawally-dist", name: "منطقة حولي السكنية", city: "حولي", country: "kuwait", countryAr: "الكويت" },
  { id: "kuwait-salmiya-dist", name: "منطقة السالمية التجارية", city: "السالمية", country: "kuwait", countryAr: "الكويت" },
  { id: "kuwait-bayan-dist", name: "منطقة بيان", city: "حولي", country: "kuwait", countryAr: "الكويت" },
  { id: "kuwait-jabriya-dist", name: "منطقة الجابرية", city: "حولي", country: "kuwait", countryAr: "الكويت" },
  { id: "kuwait-rumaithiya-dist", name: "منطقة الرميثية", city: "حولي", country: "kuwait", countryAr: "الكويت" },
  { id: "kuwait-mishref-dist", name: "منطقة مشرف", city: "حولي", country: "kuwait", countryAr: "الكويت" },
  { id: "kuwait-farwaniya-dist", name: "منطقة الفروانية المركزية", city: "الفروانية", country: "kuwait", countryAr: "الكويت" },
  { id: "kuwait-khaitan-dist", name: "منطقة خيطان", city: "الفروانية", country: "kuwait", countryAr: "الكويت" },
  { id: "kuwait-andalus-dist", name: "منطقة الأندلس", city: "الفروانية", country: "kuwait", countryAr: "الكويت" },
  { id: "kuwait-sabah-salem", name: "منطقة صباح السالم", city: "مبارك الكبير", country: "kuwait", countryAr: "الكويت" },
  { id: "kuwait-qurain-dist", name: "منطقة القرين والقصور", city: "مبارك الكبير", country: "kuwait", countryAr: "الكويت" },
  { id: "kuwait-egaila-dist", name: "منطقة العقيلة والفنطاس", city: "الأحمدي", country: "kuwait", countryAr: "الكويت" },
  { id: "kuwait-mangaf-dist", name: "منطقة المنقف والمهبولة", city: "الأحمدي", country: "kuwait", countryAr: "الكويت" },

  // قطر (10)
  { id: "qatar-pearl-dist", name: "جزيرة اللؤلؤة The Pearl", city: "الدوحة", country: "qatar", countryAr: "قطر" },
  { id: "qatar-westbay-dist", name: "منطقة الخليج الغربي West Bay", city: "الدوحة", country: "qatar", countryAr: "قطر" },
  { id: "qatar-sadd-dist", name: "منطقة السد الدوحة", city: "الدوحة", country: "qatar", countryAr: "قطر" },
  { id: "qatar-binmahmoud-dist", name: "منطقة بن محمود", city: "الدوحة", country: "qatar", countryAr: "قطر" },
  { id: "qatar-hilal-dist", name: "منطقة الهلال والمطار", city: "الدوحة", country: "qatar", countryAr: "قطر" },
  { id: "qatar-dafna-dist", name: "منطقة الدفنة", city: "الدوحة", country: "qatar", countryAr: "قطر" },
  { id: "qatar-lusail-marina", name: "مارينا مدينة لوسيل", city: "لوسيل", country: "qatar", countryAr: "قطر" },
  { id: "qatar-waab-dist", name: "منطقة الوعب وأسباير", city: "الريان", country: "qatar", countryAr: "قطر" },
  { id: "qatar-abuhamour-dist", name: "منطقة أبو هامور والمعمورة", city: "الريان", country: "qatar", countryAr: "قطر" },
  { id: "qatar-wakrah-beach", name: "شاطئ وميناء الوكرة", city: "الوكرة", country: "qatar", countryAr: "قطر" },

  // البحرين (8)
  { id: "bahrain-juffair-dist", name: "منطقة الجفير", city: "المنامة", country: "bahrain", countryAr: "البحرين" },
  { id: "bahrain-seef-dist", name: "منطقة السيف التجارية", city: "المنامة", country: "bahrain", countryAr: "البحرين" },
  { id: "bahrain-amwaj-dist", name: "جزر أمواج السكنية", city: "المحرق", country: "bahrain", countryAr: "البحرين" },
  { id: "bahrain-saar-dist", name: "منطقة سار والجنبية", city: "الشمالية", country: "bahrain", countryAr: "البحرين" },
  { id: "bahrain-riffa-views", name: "الرفاع فيوز والبحير", city: "الرفاع", country: "bahrain", countryAr: "البحرين" },
  { id: "bahrain-adliya-dist", name: "منطقة العدلية والقضيبية", city: "المنامة", country: "bahrain", countryAr: "البحرين" },
  { id: "bahrain-sanad-dist", name: "منطقة سند وتوبلي", city: "الوسطى", country: "bahrain", countryAr: "البحرين" },
  { id: "bahrain-budaia-dist", name: "منطقة البديع والجسرة", city: "الشمالية", country: "bahrain", countryAr: "البحرين" },

  // عُمان (8)
  { id: "oman-qurum-dist", name: "منطقة القرم ومطرح", city: "مسقط", country: "oman", countryAr: "عُمان" },
  { id: "oman-azaiba-dist", name: "منطقة العذيبة الساحلية", city: "مسقط", country: "oman", countryAr: "عُمان" },
  { id: "oman-ghubra-dist", name: "منطقة الغبرة وبوشر", city: "مسقط", country: "oman", countryAr: "عُمان" },
  { id: "oman-khuwair-dist", name: "منطقة الخوير التجارية", city: "مسقط", country: "oman", countryAr: "عُمان" },
  { id: "oman-mouj-dist", name: "مشروع الموج مسقط Al Mouj", city: "مسقط", country: "oman", countryAr: "عُمان" },
  { id: "oman-maabela-dist", name: "منطقة المعبيلة الجنوبية", city: "السيب", country: "oman", countryAr: "عُمان" },
  { id: "oman-khoudh-dist", name: "منطقة الخوض والجامعة", city: "السيب", country: "oman", countryAr: "عُمان" },
  { id: "oman-salalah-west", name: "صلالة الغربية وسهل إتين", city: "صلالة", country: "oman", countryAr: "عُمان" },
];

export function generateScaleDistrictsPages() {
  const pages = [];

  for (const d of GULF_DISTRICTS) {
    // 1. Best Server
    pages.push(
      createGulfPage({
        slug: `iptv-dist-${d.id}-best`,
        title: `أفضل سيرفر IPTV في ${d.name} (${d.city}): بث 4K بدون تقطيع`,
        h1: `أفضل سيرفر واشتراك IPTV في ${d.name} بمدينة ${d.city}`,
        desc: `سكان ${d.name} في ${d.city}: استمتع بأقوى سيرفر IPTV بدقة 4K حقيقية بدون تقطيع لمتابعة كافة المباريات والأفلام، مع تفعيل فوري وتجربة مجانية 24 ساعة.`,
        lead: `احصل على بث تلفزيوني فائق الثبات مع أقوى سيرفر IPTV مخصص لسكان ${d.name} في ${d.city} (${d.countryAr})، متوافق مع شبكات الفايبر والراوترات المنزلية بدون بطء.`,
        cat: "gulf-city",
        parent: "iptv-countries",
        crumb: `${d.name}`,
        kw2: `iptv ${d.id}`,
        pricingCountry: d.country,
        waMsg: `السلام عليكم، أنا مقيم في ${d.name} (${d.city}) وأرغب في الاشتراك بسيرفر IPTV بجودة 4K مع التفعيل الفوري`,
        sections: [
          {
            h: `جودة واستقرار البث في ${d.name}`,
            body: `تتميز منطقة ${d.name} بتغطية شبكات ألياف بصرية وسرعات اتصال متطورة. نوفر لك سيرفر IPTV يدعم دقة Ultra HD 4K ومعدل 60 إطاراً في الثانية لضمان متعة مشاهدة رياضية وسينمائية استثنائية لكافة أفراد العائلة.`,
          },
        ],
        faqs: [
          [`هل يمكنني تجربة السيرفر في ${d.name} قبل الاشتراك؟`, `نعم بكل تأكيد، تواصل معنا عبر واتساب لطلب كود تجربة مجانية فورية لمدة 24 ساعة لاختبار القنوات على جهازك قبل الدفع.`],
        ],
      })
    );

    // 2. Subscribe
    pages.push(
      createGulfPage({
        slug: `iptv-dist-${d.id}-subscribe`,
        title: `اشتراك وتفعيل IPTV في ${d.name} (${d.city}): باقات من 15$`,
        h1: `خطوات وأسعار اشتراك IPTV في ${d.name} بـ ${d.city}`,
        desc: `اشترك الآن في سيرفر IPTV من ${d.name} بـ ${d.city}: باقات مرنة تبدأ من 15$ وحتى 45$ للسنة، تفعيل فوري خلال دقائق، ودعم فني على مدار الساعة عبر واتساب.`,
        lead: `دليل تفعيل اشتراك IPTV المعتمد في ${d.name} بمدينة ${d.city} مع تفعيل فوري لبيانات Xtream Codes ورابط M3U وضمان كامل لثبات البث أثناء أوقات الذروة.`,
        cat: "gulf-city",
        parent: "iptv-countries",
        crumb: `اشتراك ${d.name}`,
        kw2: `subscribe iptv ${d.id}`,
        pricingCountry: d.country,
        waMsg: `السلام عليكم، أرغب في تفعيل اشتراك IPTV من ${d.name} (${d.city}) واختيار الباقة المناسبة`,
        sections: [
          {
            h: `باقات الاشتراك المعتمدة في ${d.name}`,
            body: `اختر ما يناسبك: باقة شهر (15$)، 3 أشهر (20$)، 6 أشهر (30$)، أو باقة السنة الكاملة VIP بـ 45$ فقط (توفير 75%) مع دعم فني متميز عبر واتساب.`,
          },
        ],
        faqs: [
          [`كم يستغرق التفعيل بعد الدفع في ${d.name}؟`, `يتم التفعيل فوراً عبر واتساب في أقل من 5 دقائق مع إرسال شرح مبسط لضبط القنوات على شاشتك.`],
        ],
      })
    );

    // 3. Free Trial
    pages.push(
      createGulfPage({
        slug: `iptv-dist-${d.id}-trial`,
        title: `تجربة IPTV مجانية 24 ساعة في ${d.name} (${d.city}) عبر واتساب`,
        h1: `طلب تجربة مجانية لسيرفر IPTV في ${d.name} لمدة 24 ساعة`,
        desc: `احصل على تجربة IPTV مجانية 24 ساعة في ${d.name} بـ ${d.city}: اختبر جميع قنوات beIN Sports و SSC بجودة 4K على جهازك قبل الشراء وبدون التزام.`,
        lead: `نوفر لسكان ${d.name} في ${d.city} تجربة مجانية كاملة وغير مقيدة لمدة 24 ساعة لسيرفر IPTV لاختبار جودة الصورة وثبات السيرفر قبل دفع أي مبلغ.`,
        cat: "gulf-city",
        parent: "iptv-countries",
        crumb: `تجربة ${d.name}`,
        kw2: `free trial ${d.id}`,
        pricingCountry: d.country,
        waMsg: `السلام عليكم، أنا في ${d.name} (${d.city}) وأرغب في طلب تجربة مجانية لسيرفر IPTV لمدة 24 ساعة`,
        sections: [
          {
            h: `ماذا تشمل التجربة المجانية في ${d.name}؟`,
            body: `تشمل التجربة الوصول لأكثر من 18,000 قناة حية بدقة 4K و FHD ومكتبة الأفلام والمسلسلات الحديثة لتتأكد من كفاءة السيرفر على شبكة الإنترنت الخاصة بك.`,
          },
        ],
        faqs: [
          [`هل التجربة المجانية تتطلب بطاقة بنكية؟`, `لا، التجربة مجانية 100% ولا تتطلب أي بيانات بنكية أو التزام مسبق.`],
        ],
      })
    );

    // 4. Fiber / Internet Performance
    pages.push(
      createGulfPage({
        slug: `iptv-dist-${d.id}-fiber`,
        title: `تشغيل IPTV على فايبر وراوتر ${d.name} (${d.city}) بدون تقطيع`,
        h1: `إعدادات تشغيل IPTV على إنترنت وراوتر ${d.name} بـ ${d.city}`,
        desc: `أفضل إعدادات تشغيل سيرفر IPTV على شبكات الفايبر والراوترات في ${d.name} بـ ${d.city}: سرعة اتصال فائقة، تقليل زمن الاستجابة، وثبات تام في البث.`,
        lead: `دليل تحسين سرعة الإنترنت وإعدادات الراوتر المنزلي لتشغيل قنوات IPTV بجودة 4K بدون أي تقطيع أو بطء لسكان ${d.name} بمدينة ${d.city}.`,
        cat: "gulf-city",
        parent: "iptv-countries",
        crumb: `فايبر ${d.name}`,
        kw2: `fiber iptv ${d.id}`,
        pricingCountry: d.country,
        waMsg: `السلام عليكم، أحتاج مساعدة في ضبط إعدادات الراوتر لتشغيل IPTV في ${d.name} (${d.city})`,
        sections: [
          {
            h: `نصائح للحصول على أقصى ثبات في ${d.name}`,
            body: `استخدم تردد 5GHz للواي فاي أو كابل إيثرنت مباشر للشاشة، واضبط الـ DNS على 1.1.1.1 لتسريع استجابة القنوات ومنع أي تذبذب أثناء أوقات الذروة.`,
          },
        ],
        faqs: [
          [`ما السرعة المطلوبة لتشغيل قنوات 4K في ${d.name}؟`, `سرعة 25 ميغابت مستقرة كافية تماماً لتشغيل البث فائق الوضوح بدون أي تقطيع.`],
        ],
      })
    );
  }

  return pages;
}

