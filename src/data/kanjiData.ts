export interface KanjiWord {
  kanji: string;
  yomikata: string;
  meaning: string;
}

export const kanjiData: Record<string, Record<string, KanjiWord[]>> = {
  'chapter1': {
  ' 2015': [
    { "kanji": "興奮", "yomikata": "こうふん", "meaning": "흥분" },
    { "kanji": "唱える", "yomikata": "となえる", "meaning": "외치다, 주장하다" },
    { "kanji": "姿勢", "yomikata": "しせい", "meaning": "자세, 태도" },
    { "kanji": "値打ち", "yomikata": "ねうち", "meaning": "가치가 있다, ~할 만하다" },
    { "kanji": "面倒", "yomikata": "めんどう", "meaning": "수고, 고생, 번거로움" },
    { "kanji": "信頼", "yomikata": "しんらい", "meaning": "신뢰, 의지" },
    { "kanji": "添付", "yomikata": "てんぷ", "meaning": "첨부" },
    { "kanji": "慕われる", "yomikata": "したわれる", "meaning": "경모받다, 사랑받다" },
    { "kanji": "破損", "yomikata": "はそん", "meaning": "파손" },
    { "kanji": "承諾", "yomikata": "しょうだく", "meaning": "승낙" },
    { "kanji": "淡い", "yomikata": "あわい", "meaning": "옅다, 빛깔이 진하지 않다" },
    { "kanji": "画一的", "yomikata": "かくいつてき", "meaning": "획일적" }
  ],
  ' 2014': [
    { "kanji": "挑戦", "yomikata": "ちょうせん", "meaning": "도전" },
    { "kanji": "踏む", "yomikata": "ふむ", "meaning": "밟다" },
    { "kanji": "強調", "yomikata": "きょうちょう", "meaning": "강조" },
    { "kanji": "懲りる", "yomikata": "こりる", "meaning": "고생하다, 교훈을 얻다" },
    { "kanji": "躍進", "yomikata": "やくしん", "meaning": "약진, 눈부시게 진출함" },
    { "kanji": "遂行", "yomikata": "すいこう", "meaning": "수행 (계획·책임 등을)" },
    { "kanji": "健やか", "yomikata": "すこやか", "meaning": "튼튼함, 건강함" },
    { "kanji": "中核", "yomikata": "ちゅうかく", "meaning": "중추, 핵심" },
    { "kanji": "凝縮", "yomikata": "ぎょうしゅく", "meaning": "응축, 응결" },
    { "kanji": "否めない", "yomikata": "いなめない", "meaning": "부정할 수 없다" }
  ],
  ' 2013': [
    { "kanji": "把握", "yomikata": "はあく", "meaning": "파악" },
    { "kanji": "借り", "yomikata": "かり", "meaning": "빚, 빌린 것" },
    { "kanji": "趣旨", "yomikata": "しゅし", "meaning": "취지" },
    { "kanji": "日夜", "yomikata": "にちや", "meaning": "밤낮, 언제나, 늘" },
    { "kanji": "真っく", "yomikata": "まっく", "meaning": "관철하다, 꿋꿋이 하다" },
    { "kanji": "富", "yomikata": "とみ", "meaning": "부유, 재산" },
    { "kanji": "愚かな", "yomikata": "おろかな", "meaning": "어리석은" },
    { "kanji": "巧妙な", "yomikata": "こうみょうな", "meaning": "교묘한" },
    { "kanji": "憩い", "yomikata": "いこい", "meaning": "휴식" },
    { "kanji": "需要", "yomikata": "じゅよう", "meaning": "수요" },
    { "kanji": "緩和", "yomikata": "かんわ", "meaning": "완화" },
    { "kanji": "跡地", "yomikata": "あとち", "meaning": "철거부지, 잔해" }
  ],
  ' 2012': [
    { "kanji": "枠", "yomikata": "わく", "meaning": "테두리" },
    { "kanji": "潮流", "yomikata": "ちょうりゅう", "meaning": "조류, 흐름" },
    { "kanji": "名誉", "yomikata": "めいよ", "meaning": "명예" },
    { "kanji": "費やす", "yomikata": "ついやす", "meaning": "소비하다" },
    { "kanji": "由緒", "yomikata": "ゆいしょ", "meaning": "유서" },
    { "kanji": "手際", "yomikata": "てぎわ", "meaning": "솜씨, 수완" },
    { "kanji": "群集", "yomikata": "ぐんしゅう", "meaning": "군중" },
    { "kanji": "覆す", "yomikata": "くつがえす", "meaning": "뒤엎다" },
    { "kanji": "心地よい", "yomikata": "ここちよい", "meaning": "기분이 좋다, 상쾌하다" },
    { "kanji": "改装", "yomikata": "かいそう", "meaning": "개장, 개역" },
    { "kanji": "克明", "yomikata": "こくめい", "meaning": "자세하고 꼼꼼함, 성실함" },
    { "kanji": "踏襲する", "yomikata": "とうしゅうする", "meaning": "답습하다, 전철을 밟다" }
  ],
  ' 2011': [
    { "kanji": "躍る", "yomikata": "おどる", "meaning": "춤추다" },
    { "kanji": "漠然と", "yomikata": "ばくぜんと", "meaning": "막연히" },
    { "kanji": "閲覧", "yomikata": "えつらん", "meaning": "열람" },
    { "kanji": "釈明", "yomikata": "しゃくめい", "meaning": "변명, 해명" },
    { "kanji": "兆し", "yomikata": "きざし", "meaning": "조짐, 징조" },
    { "kanji": "合併", "yomikata": "がっぺい", "meaning": "합병" },
    { "kanji": "利益", "yomikata": "りえき", "meaning": "이익" },
    { "kanji": "逃れる", "yomikata": "のがれる", "meaning": "벗어나다, 면하다" },
    { "kanji": "考慮", "yomikata": "こうりょ", "meaning": "고려" },
    { "kanji": "避る", "yomikata": "さける", "meaning": "가로막다, 차단하다" },
    { "kanji": "根拠", "yomikata": "こんきょ", "meaning": "근거" },
    { "kanji": "肝心", "yomikata": "かんじん", "meaning": "중요함" }
  ],
  ' 2010': [
    { "kanji": "本筋", "yomikata": "ほんすじ", "meaning": "본론" },
    { "kanji": "伴奏", "yomikata": "ばんそう", "meaning": "반주" },
    { "kanji": "推理", "yomikata": "すいり", "meaning": "추리" },
    { "kanji": "極める", "yomikata": "きわめる", "meaning": "더없이 ~하다, 다하다" },
    { "kanji": "練る", "yomikata": "ねる", "meaning": "반죽하다, 계획·구상을 짜다, 다듬다" },
    { "kanji": "繁盛", "yomikata": "はんじょう", "meaning": "번성, 번창" },
    { "kanji": "締める", "yomikata": "しめる", "meaning": "(끈 등으로) 매다, 조이다, 잡다" },
    { "kanji": "契約", "yomikata": "けいやく", "meaning": "계약" },
    { "kanji": "潤う", "yomikata": "うるおう", "meaning": "축축해지다, 혜택을 받다" },
    { "kanji": "手薄な", "yomikata": "てうすな", "meaning": "허술한, 불충분한" },
    { "kanji": "壊す", "yomikata": "こわす", "meaning": "부수다, 고장내다" },
    { "kanji": "華々しい", "yomikata": "はなばなしい", "meaning": "화려하다" }
  ]
}

};
