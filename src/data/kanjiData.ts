export interface KanjiWord {
  kanji: string;
  yomikata: string;
  meaning: string;
}

export const kanjiData: Record<string, Record<string, KanjiWord[]>> = {
  "chapter1": {
    "動詞_あ行": [
      { "kanji": "明かす", "yomikata": "あかす", "meaning": "밝히다, 털어놓다" },
      { "kanji": "商う", "yomikata": "あきなう", "meaning": "장사하다" },
      { "kanji": "値する", "yomikata": "あたいする", "meaning": "가치가 있다" },
      { "kanji": "歩む", "yomikata": "あゆむ", "meaning": "걷다, 나아가다" },
      { "kanji": "言い張る", "yomikata": "いいはる", "meaning": "우겨대다, 주장하다" },
      { "kanji": "労わる", "yomikata": "いたわる", "meaning": "위로하다, 노고를 치하하다" },
      { "kanji": "挑む", "yomikata": "いどむ", "meaning": "도전하다" },
      { "kanji": "否む", "yomikata": "いなむ", "meaning": "부정하다, 거부하다" },
      { "kanji": "威張る", "yomikata": "いばる", "meaning": "뽐내다, 으스대다" },
      { "kanji": "戒める", "yomikata": "いましめる", "meaning": "훈계하다, 경고하다" },
      { "kanji": "浮かれる", "yomikata": "うかれる", "meaning": "들뜨다, 신나다" },
      { "kanji": "打ち切る", "yomikata": "うちきる", "meaning": "중지하다" },
      { "kanji": "打ち込む", "yomikata": "うちこむ", "meaning": "몰두하다, 몰입하다" },
      { "kanji": "訴える", "yomikata": "うったえる", "meaning": "호소하다" },
      { "kanji": "促す", "yomikata": "うながす", "meaning": "촉구하다, 재촉하다" },
      { "kanji": "敬う", "yomikata": "うやまう", "meaning": "공경하다" },
      { "kanji": "恨む", "yomikata": "うらむ", "meaning": "원망하다" },
      { "kanji": "潤う", "yomikata": "うるおう", "meaning": "축축해지다, 윤택해지다" },
      { "kanji": "拝む", "yomikata": "おがむ", "meaning": "절하다, 경배하다" },
      { "kanji": "怠る", "yomikata": "おこたる", "meaning": "게을리하다, 소홀히 하다" },
      { "kanji": "襲う", "yomikata": "おそう", "meaning": "덮치다, 습격하다" },
      { "kanji": "陥る", "yomikata": "おちいる", "meaning": "나쁜 상황에 빠지다" },
      { "kanji": "劣る", "yomikata": "おとる", "meaning": "뒤떨어지다, 뒤지다" },
      { "kanji": "衰える", "yomikata": "おとろえる", "meaning": "쇠약해지다" },
      { "kanji": "帯びる", "yomikata": "おびる", "meaning": "(성질·경향)을 띠다" },
      { "kanji": "思い返す", "yomikata": "おもいかえす", "meaning": "돌아보다" },
      { "kanji": "思い詰める", "yomikata": "おもいつめる", "meaning": "골몰하다" },
      { "kanji": "及ぼす", "yomikata": "およぼす", "meaning": "영향을 미치다" }
    ],
    "動詞_か行": [
      { "kanji": "顧みる", "yomikata": "かえりみる", "meaning": "돌아보다, 회고하다" },
      { "kanji": "省みる", "yomikata": "かえりみる", "meaning": "반성하다" },
      { "kanji": "掲げる", "yomikata": "かかげる", "meaning": "내걸다, 내세우다" },
      { "kanji": "稼ぐ", "yomikata": "かせぐ", "meaning": "돈벌이하다, (시간을) 벌다" },
      { "kanji": "偏る", "yomikata": "かたよる", "meaning": "치우치다, 편중되다" },
      { "kanji": "絡む", "yomikata": "からむ", "meaning": "휘감기다, 관련되다" },
      { "kanji": "築く", "yomikata": "きずく", "meaning": "쌓다, 구축하다" },
      { "kanji": "切り出す", "yomikata": "きりだす", "meaning": "말을 꺼내다" },
      { "kanji": "食い違う", "yomikata": "くいちがう", "meaning": "(의견)이 엇갈리다" },
      { "kanji": "食い止める", "yomikata": "くいとめる", "meaning": "저지하다, 막다" },
      { "kanji": "崩す", "yomikata": "くずす", "meaning": "무너뜨리다, 흩뜨리다" },
      { "kanji": "覆す", "yomikata": "くつがえす", "meaning": "뒤집어엎다" },
      { "kanji": "拘る", "yomikata": "こだわる", "meaning": "집착하다, 세세하게 신경을 쓰다" },
      { "kanji": "拒む", "yomikata": "こばむ", "meaning": "거부하다, 저지하다" },
      { "kanji": "試みる", "yomikata": "こころみる", "meaning": "시도하다" }
    ],
    "動詞_さ行": [
      { "kanji": "遮る", "yomikata": "さえぎる", "meaning": "차단하다" },
      { "kanji": "逆らう", "yomikata": "さからう", "meaning": "거스르다, 거역하다" },
      { "kanji": "差し引く", "yomikata": "さしひく", "meaning": "공제하다, 차감하다" },
      { "kanji": "授ける", "yomikata": "さずける", "meaning": "수여하다, 하사하다" },
      { "kanji": "察する", "yomikata": "さっする", "meaning": "헤아리다" },
      { "kanji": "悟る", "yomikata": "さとる", "meaning": "깨닫다" },
      { "kanji": "妨げる", "yomikata": "さまたげる", "meaning": "방해하다" },
      { "kanji": "障る", "yomikata": "さわる", "meaning": "방해가 되다, 지장이 있다" }
    ],
    "動詞_た行": [
      { "kanji": "携える", "yomikata": "たずさえる", "meaning": "지니다, 거느리다" },
      { "kanji": "漂わせる", "yomikata": "ただよわせる", "meaning": "풍기게 하다" },
      { "kanji": "断つ", "yomikata": "たつ", "meaning": "끊다" },
      { "kanji": "尊ぶ", "yomikata": "とうとぶ／たっとぶ", "meaning": "존경하다" },
      { "kanji": "尊い", "yomikata": "とうとい／たっとい", "meaning": "귀중하다" },
      { "kanji": "高める", "yomikata": "たかめる", "meaning": "높이다" },
      { "kanji": "絶つ", "yomikata": "たつ", "meaning": "끊어 없애다" },
      { "kanji": "立ち寄る", "yomikata": "たちよる", "meaning": "잠시 들르다" },
      { "kanji": "立ち去る", "yomikata": "たちさる", "meaning": "떠나다" },
      { "kanji": "立ち会う", "yomikata": "たちあう", "meaning": "입회하다" },
      { "kanji": "立ち向かう", "yomikata": "たちむかう", "meaning": "맞서다" },
      { "kanji": "立ち向ける", "yomikata": "たちむける", "meaning": "향하게 하다" },
      { "kanji": "頼る", "yomikata": "たよる", "meaning": "의지하다" },
      { "kanji": "足りる", "yomikata": "たりる", "meaning": "충분하다" },
      { "kanji": "試す", "yomikata": "ためす", "meaning": "시험하다" },
      { "kanji": "費やす", "yomikata": "ついやす", "meaning": "다 소비하다" },
      { "kanji": "突き止める", "yomikata": "つきとめる", "meaning": "밝혀내다" },
      { "kanji": "尽くす", "yomikata": "つくす", "meaning": "힘을 다하다" },
      { "kanji": "償う", "yomikata": "つぐなう", "meaning": "보상하다" },
      { "kanji": "告げる", "yomikata": "つげる", "meaning": "알리다" },
      { "kanji": "培う", "yomikata": "つちかう", "meaning": "배양하다" },
      { "kanji": "慎む", "yomikata": "つつしむ", "meaning": "삼가다" },
      { "kanji": "集う", "yomikata": "つどう", "meaning": "모이다" },
      { "kanji": "募る", "yomikata": "つのる", "meaning": "강해지다/모집하다" },
      { "kanji": "積み立てる", "yomikata": "つみたてる", "meaning": "적립하다" },
      { "kanji": "貫く", "yomikata": "つらぬく", "meaning": "관철하다" },
      { "kanji": "遠ざける", "yomikata": "とおざける", "meaning": "멀리하다" },
      { "kanji": "説く", "yomikata": "とく", "meaning": "설명하다, 설득하다" },
      { "kanji": "遂げる", "yomikata": "とげる", "meaning": "이루다, 완수하다" },
      { "kanji": "滞る", "yomikata": "とどこおる", "meaning": "막히다, 밀리다" },
      { "kanji": "唱える", "yomikata": "となえる", "meaning": "외치다, 주장하다" },
      { "kanji": "戸惑う", "yomikata": "とまどう", "meaning": "당황하다" }
    ],
    "動詞_な行": [
      { "kanji": "嘆く", "yomikata": "なげく", "meaning": "한탄하다" },
      { "kanji": "怠ける", "yomikata": "なまける", "meaning": "게으름 피우다" }
    ],
    "動詞_は行": [
      { "kanji": "図る", "yomikata": "はかる", "meaning": "도모하다" },
      { "kanji": "励ます", "yomikata": "はげます", "meaning": "격려하다" },
      { "kanji": "阻む", "yomikata": "はばむ", "meaning": "막다" },
      { "kanji": "省く", "yomikata": "はぶく", "meaning": "생략하다" },
      { "kanji": "率いる", "yomikata": "ひきいる", "meaning": "이끌다" },
      { "kanji": "控える", "yomikata": "ひかえる", "meaning": "삼가다" },
      { "kanji": "響く", "yomikata": "ひびく", "meaning": "울리다" }
    ],
    "動詞_ま行": [
      { "kanji": "紛れる", "yomikata": "まぎれる", "meaning": "뒤섞이다" },
      { "kanji": "交える", "yomikata": "まじえる", "meaning": "섞다" },
      { "kanji": "免れる", "yomikata": "まぬかれる", "meaning": "면하다" },
      { "kanji": "招く", "yomikata": "まねく", "meaning": "초대하다, 불러들이다" },
      { "kanji": "見合わせる", "yomikata": "みあわせる", "meaning": "서로 보다, 보류하다" },
      { "kanji": "見落とす", "yomikata": "みおとす", "meaning": "간과하다" },
      { "kanji": "漏れる", "yomikata": "もれる", "meaning": "새다, 누설되다" }
    ],
    "動詞_や行": [
      { "kanji": "養う", "yomikata": "やしなう", "meaning": "기르다" },
      { "kanji": "和らげる", "yomikata": "やわらげる", "meaning": "완화하다" }
    ],
    "動詞_ら行": [
      { "kanji": "論じる", "yomikata": "ろんじる", "meaning": "논하다" }
    ],
    "動詞_わ行": [
      { "kanji": "詫びる", "yomikata": "わびる", "meaning": "사죄하다" }
    ],
    "名詞_あ行": [
      { "kanji": "相性", "yomikata": "あいしょう", "meaning": "궁합, 맞음새" },
      { "kanji": "悪循環", "yomikata": "あくじゅんかん", "meaning": "악순환" },
      { "kanji": "足跡", "yomikata": "あしあと", "meaning": "발자취" },
      { "kanji": "預かり", "yomikata": "あずかり", "meaning": "보관, 보류" },
      { "kanji": "後回し", "yomikata": "あとまわし", "meaning": "뒷전, 연기" },
      { "kanji": "誂え", "yomikata": "あつらえ", "meaning": "주문제작" }
    ],
    "名詞_か行": [
      { "kanji": "化合物", "yomikata": "かごうぶつ", "meaning": "화합물" },
      { "kanji": "確信", "yomikata": "かくしん", "meaning": "확신" },
      { "kanji": "過失", "yomikata": "かしつ", "meaning": "과실, 실수" },
      { "kanji": "片言", "yomikata": "かたこと", "meaning": "서투른 말씨" },
      { "kanji": "空模様", "yomikata": "そらもよう", "meaning": "하늘 상태, 날씨" }
    ],
    "名詞_さ行": [
      { "kanji": "採算", "yomikata": "さいさん", "meaning": "채산, 수지" },
      { "kanji": "財源", "yomikata": "ざいげん", "meaning": "재원" },
      { "kanji": "作戦", "yomikata": "さくせん", "meaning": "작전" },
      { "kanji": "錯覚", "yomikata": "さっかく", "meaning": "착각" },
      { "kanji": "砂利", "yomikata": "じゃり", "meaning": "자갈" }
    ],
    "名詞_た行": [
      { "kanji": "体裁", "yomikata": "ていさい", "meaning": "체면, 외관" },
      { "kanji": "退治", "yomikata": "たいじ", "meaning": "퇴치" },
      { "kanji": "多様性", "yomikata": "たようせい", "meaning": "다양성" },
      { "kanji": "脱税", "yomikata": "だつぜい", "meaning": "탈세" },
      { "kanji": "短波", "yomikata": "たんぱ", "meaning": "단파" }
    ],
    "名詞_な行": [
      { "kanji": "内訳", "yomikata": "うちわけ", "meaning": "내역" },
      { "kanji": "仲人", "yomikata": "なこうど", "meaning": "중매인" },
      { "kanji": "成り行き", "yomikata": "なりゆき", "meaning": "되어가는 상황, 추세" },
      { "kanji": "難民", "yomikata": "なんみん", "meaning": "난민" }
    ],
    "名詞_は行": [
      { "kanji": "配偶者", "yomikata": "はいぐうしゃ", "meaning": "배우자" },
      { "kanji": "破損", "yomikata": "はそん", "meaning": "파손" },
      { "kanji": "反響", "yomikata": "はんきょう", "meaning": "반향, 반응" },
      { "kanji": "繁盛", "yomikata": "はんじょう", "meaning": "번창" }
    ],
    "名詞_ま行": [
      { "kanji": "枚数", "yomikata": "まいすう", "meaning": "매수" },
      { "kanji": "前置き", "yomikata": "まえおき", "meaning": "머리말, 서두" },
      { "kanji": "真心", "yomikata": "まごころ", "meaning": "진심" },
      { "kanji": "紛失", "yomikata": "ふんしつ", "meaning": "분실" }
    ],
    "名詞_や行": [
      { "kanji": "役職", "yomikata": "やくしょく", "meaning": "직위, 직책" },
      { "kanji": "役立ち", "yomikata": "やくだち", "meaning": "도움됨" },
      { "kanji": "野外", "yomikata": "やがい", "meaning": "야외" }
    ],
    "名詞_ら行": [
      { "kanji": "来場", "yomikata": "らいじょう", "meaning": "내장, 찾아옴" },
      { "kanji": "落ち度", "yomikata": "おちど", "meaning": "실수, 과실" },
      { "kanji": "利潤", "yomikata": "りじゅん", "meaning": "이윤" }
    ],
    "名詞_わ行": [
      { "kanji": "枠組み", "yomikata": "わくぐみ", "meaning": "틀, 체계" },
      { "kanji": "惑星", "yomikata": "わくせい", "meaning": "행성" },
      { "kanji": "我が国", "yomikata": "わがくに", "meaning": "우리나라" }
    ],
    "形容詞_あ行": [
      { "kanji": "淡い", "yomikata": "あわい", "meaning": "옅다, 희미하다" },
      { "kanji": "危うい", "yomikata": "あやうい", "meaning": "위태롭다" },
      { "kanji": "怪しい", "yomikata": "あやしい", "meaning": "수상하다, 이상하다" },
      { "kanji": "荒い", "yomikata": "あらい", "meaning": "거칠다" },
      { "kanji": "厚かましい", "yomikata": "あつかましい", "meaning": "뻔뻔스럽다" }
    ],
    "形容詞_い行": [
      { "kanji": "忙しい", "yomikata": "いそがしい", "meaning": "바쁘다" },
      { "kanji": "愛しい", "yomikata": "いとしい", "meaning": "사랑스럽다" },
      { "kanji": "卑しい", "yomikata": "いやしい", "meaning": "비열하다" },
      { "kanji": "忌まわしい", "yomikata": "いまわしい", "meaning": "꺼림칙하다" }
    ],
    "形容詞_う行": [
      { "kanji": "疑わしい", "yomikata": "うたがわしい", "meaning": "의심스럽다" },
      { "kanji": "薄暗い", "yomikata": "うすぐらい", "meaning": "어둑어둑하다" }
    ],
    "形容詞_お行": [
      { "kanji": "重々しい", "yomikata": "おもおもしい", "meaning": "위엄 있다, 장엄하다" },
      { "kanji": "恐ろしい", "yomikata": "おそろしい", "meaning": "무섭다" },
      { "kanji": "大人しい", "yomikata": "おとなしい", "meaning": "얌전하다, 온순하다" }
    ],
    "形容詞_か行": [
      { "kanji": "可笑しい", "yomikata": "おかしい", "meaning": "이상하다, 우습다" },
      { "kanji": "賢い", "yomikata": "かしこい", "meaning": "영리하다" },
      { "kanji": "堅苦しい", "yomikata": "かたくるしい", "meaning": "딱딱하다, 형식적이다" }
    ],
    "形容詞_さ行": [
      { "kanji": "清い", "yomikata": "きよい", "meaning": "맑다, 깨끗하다" },
      { "kanji": "鋭い", "yomikata": "するどい", "meaning": "날카롭다" },
      { "kanji": "酸っぱい", "yomikata": "すっぱい", "meaning": "시다" }
    ],
    "形容詞_た行": [
      { "kanji": "尊い", "yomikata": "とうとい／たっとい", "meaning": "귀중하다" },
      { "kanji": "乏しい", "yomikata": "とぼしい", "meaning": "부족하다" },
      { "kanji": "頼もしい", "yomikata": "たのもしい", "meaning": "믿음직하다" }
    ],
    "形容詞_な行": [
      { "kanji": "情け深い", "yomikata": "なさけぶかい", "meaning": "동정심이 깊다" },
      { "kanji": "憎い", "yomikata": "にくい", "meaning": "밉다" },
      { "kanji": "憎らしい", "yomikata": "にくらしい", "meaning": "얄밉다" }
    ],
    "形容詞_は行": [
      { "kanji": "華々しい", "yomikata": "はなばなしい", "meaning": "화려하다" },
      { "kanji": "久しい", "yomikata": "ひさしい", "meaning": "오래되다" },
      { "kanji": "等しい", "yomikata": "ひとしい", "meaning": "같다" },
      { "kanji": "平たい", "yomikata": "ひらたい", "meaning": "평평하다" }
    ],
    "形容詞_ま行": [
      { "kanji": "眩しい", "yomikata": "まぶしい", "meaning": "눈부시다" },
      { "kanji": "真ん丸い", "yomikata": "まんまるい", "meaning": "동그랗다" }
    ],
    "形容詞_や行": [
      { "kanji": "ややこしい", "yomikata": "ややこしい", "meaning": "복잡하다" },
      { "kanji": "柔らかい", "yomikata": "やわらかい", "meaning": "부드럽다" }
    ],
    "形容詞_ら行": [
      { "kanji": "力強い", "yomikata": "ちからづよい", "meaning": "힘차다" },
      { "kanji": "緩い", "yomikata": "ゆるい", "meaning": "느슨하다" },
      { "kanji": "冷たい", "yomikata": "つめたい", "meaning": "차갑다" }
    ],
    "形容詞_わ行": [
      { "kanji": "若々しい", "yomikata": "わかわかしい", "meaning": "젊디젊다" }
    ],
    "副詞_あ行": [
      { "kanji": "あらかじめ", "yomikata": "あらかじめ", "meaning": "미리" },
      { "kanji": "あくまで", "yomikata": "あくまで", "meaning": "끝까지, 어디까지나" },
      { "kanji": "あえて", "yomikata": "あえて", "meaning": "굳이, 감히" },
      { "kanji": "あっさり", "yomikata": "あっさり", "meaning": "담백하게, 산뜻하게" }
    ],
    "副詞_い行": [
      { "kanji": "いかにも", "yomikata": "いかにも", "meaning": "정말로, 매우" },
      { "kanji": "いずれ", "yomikata": "いずれ", "meaning": "언젠가, 머지않아" }
    ],
    "副詞_う行": [
      { "kanji": "うっかり", "yomikata": "うっかり", "meaning": "깜빡, 무심코" },
      { "kanji": "うんと", "yomikata": "うんと", "meaning": "훨씬, 듬뿍" }
    ],
    "副詞_お行": [
      { "kanji": "大いに", "yomikata": "おおいに", "meaning": "크게, 매우" },
      { "kanji": "思い切り", "yomikata": "おもいきり", "meaning": "실컷, 마음껏" }
    ],
    "副詞_か行": [
      { "kanji": "かなり", "yomikata": "かなり", "meaning": "상당히" },
      { "kanji": "必ずしも", "yomikata": "かならずしも", "meaning": "반드시 (…인 것은 아니다)" }
    ],
    "副詞_さ行": [
      { "kanji": "さすが", "yomikata": "さすが", "meaning": "과연, 역시" },
      { "kanji": "さっぱり", "yomikata": "さっぱり", "meaning": "상쾌하게, 전혀 (부정과 함께)" }
    ],
    "副詞_た行": [
      { "kanji": "たちまち", "yomikata": "たちまち", "meaning": "곧, 금세" },
      { "kanji": "たまたま", "yomikata": "たまたま", "meaning": "우연히, 때마침" }
    ],
    "副詞_な行": [
      { "kanji": "何しろ", "yomikata": "なにしろ", "meaning": "아무튼, 어쨌든" },
      { "kanji": "何となく", "yomikata": "なんとなく", "meaning": "왠지 모르게" }
    ],
    "副詞_は行": [
      { "kanji": "はるかに", "yomikata": "はるかに", "meaning": "훨씬" },
      { "kanji": "ぴったり", "yomikata": "ぴったり", "meaning": "딱 맞게" }
    ],
    "副詞_ま行": [
      { "kanji": "まさか", "yomikata": "まさか", "meaning": "설마" },
      { "kanji": "ますます", "yomikata": "ますます", "meaning": "점점 더" }
    ],
    "副詞_や行": [
      { "kanji": "やがて", "yomikata": "やがて", "meaning": "머지않아, 곧" },
      { "kanji": "やたらに", "yomikata": "やたらに", "meaning": "함부로, 지나치게" }
    ],
    "副詞_ら行": [
      { "kanji": "割合に", "yomikata": "わりあいに", "meaning": "비교적" },
      { "kanji": "わざと", "yomikata": "わざと", "meaning": "일부러" }
    ],
    "副詞_わ行": [
      { "kanji": "わずかに", "yomikata": "わずかに", "meaning": "불과, 겨우" },
      { "kanji": "わりと", "yomikata": "わりと", "meaning": "비교적" }
    ]
  },
};
