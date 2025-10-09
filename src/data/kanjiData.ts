export interface KanjiWord {
  kanji: string;
  yomikata: string;
  meaning: string;
}

export const kanjiData: Record<string, Record<string, KanjiWord[]>> = {
  "chapter1": {
    " 2024": [
      { "kanji": "腐敗", "yomikata": "ふはい", "meaning": "부패" },
      { "kanji": "粗い", "yomikata": "あらい", "meaning": "거칠다, 조잡하다" },
      { "kanji": "粘膜", "yomikata": "ねんまく", "meaning": "점막" },
      { "kanji": "寿命", "yomikata": "じゅみょう", "meaning": "수명" },
      { "kanji": "戒める", "yomikata": "いましめる", "meaning": "경고하다, 징계하다" },
      { "kanji": "誓約書", "yomikata": "せいやくしょ", "meaning": "서약서" },
      { "kanji": "絶叫", "yomikata": "ぜっきょう", "meaning": "절규" },
      { "kanji": "背後", "yomikata": "はいご", "meaning": "등 뒤, 배후" },
      { "kanji": "抱負", "yomikata": "ほうふ", "meaning": "포부" },
      { "kanji": "侮る", "yomikata": "あなどる", "meaning": "깔보다, 업신여기다" },
      { "kanji": "筋道（を立てる）", "yomikata": "すじみち（をたてる）", "meaning": "조리(있게 하다)" },
      { "kanji": "奔放な（性格）", "yomikata": "ほんぽうな（せいかく）", "meaning": "분방한(성격)" }
    ],
    " 2023": [
      { "kanji": "騒然とする", "yomikata": "そうぜんとする", "meaning": "시끄럽다" },
      { "kanji": "諭す", "yomikata": "さとす", "meaning": "잘 타이르다" },
      { "kanji": "秩序", "yomikata": "ちつじょ", "meaning": "질서" },
      { "kanji": "潜伏", "yomikata": "せんぷく", "meaning": "잠복" },
      { "kanji": "朗らかな", "yomikata": "ほがらかな", "meaning": "명랑한" },
      { "kanji": "振興", "yomikata": "しんこう", "meaning": "진흥" },
      { "kanji": "軌跡", "yomikata": "きせき", "meaning": "궤적" },
      { "kanji": "偏り", "yomikata": "かたより", "meaning": "편견, 치우침" },
      { "kanji": "矛盾", "yomikata": "むじゅん", "meaning": "모순" },
      { "kanji": "誇張", "yomikata": "こちょう", "meaning": "과장" },
      { "kanji": "賄う", "yomikata": "まかなう", "meaning": "식사를 제공하다, 꾸려 나가다" },
      { "kanji": "軽率な", "yomikata": "けいそつな", "meaning": "경솔한" }
    ],
    " 2022": [
      { "kanji": "勇敢に", "yomikata": "ゆうかんに", "meaning": "용감하게" },
      { "kanji": "忠告", "yomikata": "ちゅうこく", "meaning": "충고" },
      { "kanji": "慕う", "yomikata": "したう", "meaning": "경모하다, 깊이 존경하다" },
      { "kanji": "施錠", "yomikata": "せじょう", "meaning": "자물쇠를 채움" },
      { "kanji": "沈下", "yomikata": "ちんか", "meaning": "침하, 물속에 가라앉음" },
      { "kanji": "阻まれる", "yomikata": "はばまれる", "meaning": "가로막다" },
      { "kanji": "監督", "yomikata": "かんとく", "meaning": "감독" },
      { "kanji": "派生", "yomikata": "はせい", "meaning": "파생" },
      { "kanji": "透ける", "yomikata": "すける", "meaning": "비쳐 보이다, 들여다 보이다" },
      { "kanji": "恩恵", "yomikata": "おんけい", "meaning": "은혜" },
      { "kanji": "臨む", "yomikata": "のぞむ", "meaning": "임하다" },
      { "kanji": "如実に", "yomikata": "にょじつに", "meaning": "여실히, 있는 그대로" }
    ],
    " 2021": [
      { "kanji": "錯覚", "yomikata": "さっかく", "meaning": "착각" },
      { "kanji": "尊い", "yomikata": "とうとい", "meaning": "소중하다, 귀중하다" },
      { "kanji": "枯渇", "yomikata": "こかつ", "meaning": "고갈" },
      { "kanji": "慰める", "yomikata": "なぐさめる", "meaning": "달래다, 위로하다" },
      { "kanji": "克明に", "yomikata": "こくめいに", "meaning": "극명하게" },
      { "kanji": "緊迫した", "yomikata": "きんぱくした", "meaning": "긴박한" },
      { "kanji": "遺憾", "yomikata": "いかん", "meaning": "유감" },
      { "kanji": "閉鎖", "yomikata": "へいさ", "meaning": "폐쇄" },
      { "kanji": "心遣い", "yomikata": "こころづかい", "meaning": "마음을 씀, 걱정함, 배려" },
      { "kanji": "憤る", "yomikata": "いきどおる", "meaning": "분개하다, 성내다" },
      { "kanji": "貧富", "yomikata": "ひんぷ", "meaning": "빈부" },
      { "kanji": "治癒", "yomikata": "ちゆ", "meaning": "치유" }
    ],
    " 2020": [
      { "kanji": "干渉", "yomikata": "かんしょう", "meaning": "간섭" },
      { "kanji": "粘る", "yomikata": "ねばる", "meaning": "끈덕지게 버티다" },
      { "kanji": "巧妙", "yomikata": "こうみょう", "meaning": "교묘함" },
      { "kanji": "促す", "yomikata": "うながす", "meaning": "재촉하다, 촉구하다" },
      { "kanji": "措置", "yomikata": "そち", "meaning": "조치" },
      { "kanji": "振興", "yomikata": "しんこう", "meaning": "진흥" }
    ],
    " 2019": [
      { "kanji": "猛烈", "yomikata": "もうれつ", "meaning": "맹렬함" },
      { "kanji": "克服", "yomikata": "こくふく", "meaning": "극복" },
      { "kanji": "崩れやすい", "yomikata": "くずれやすい", "meaning": "무너지기 쉽다" },
      { "kanji": "繁殖", "yomikata": "はんしょく", "meaning": "번식" },
      { "kanji": "履歴", "yomikata": "りれき", "meaning": "이력" },
      { "kanji": "映える", "yomikata": "はえる", "meaning": "빛나다, 비치다" },
      { "kanji": "披露", "yomikata": "ひろう", "meaning": "피로, 공표함" },
      { "kanji": "砕ける", "yomikata": "くだける", "meaning": "부서지다, 깨지다" },
      { "kanji": "執着", "yomikata": "しゅうちゃく", "meaning": "집착" },
      { "kanji": "債務", "yomikata": "さいむ", "meaning": "채무" },
      { "kanji": "貢献", "yomikata": "こうけん", "meaning": "공헌" },
      { "kanji": "潔い", "yomikata": "いさぎよい", "meaning": "떳떳하다, (미련없이) 깨끗하다" }
    ],
    " 2018": [
      { "kanji": "回顧", "yomikata": "かいこ", "meaning": "회고, 회상" },
      { "kanji": "偽り", "yomikata": "いつわり", "meaning": "거짓" },
      { "kanji": "嫌悪感", "yomikata": "けんおかん", "meaning": "혐오감" },
      { "kanji": "自粛", "yomikata": "じしゅく", "meaning": "자숙, 자제" },
      { "kanji": "戒める", "yomikata": "いましめる", "meaning": "훈계하다, 제지하다, 징계하다" },
      { "kanji": "丘陵", "yomikata": "きゅうりょう", "meaning": "구릉, 언덕" },
      { "kanji": "豪快", "yomikata": "ごうかい", "meaning": "호쾌함" },
      { "kanji": "忍耐", "yomikata": "にんたい", "meaning": "인내" },
      { "kanji": "募る", "yomikata": "つのる", "meaning": "모집하다, 모으다, 점점 심해지다" },
      { "kanji": "膨大", "yomikata": "ぼうだい", "meaning": "방대함" },
      { "kanji": "滞る", "yomikata": "とどこおる", "meaning": "정체되다, 막히다, 밀리다" },
      { "kanji": "驚嘆", "yomikata": "きょうたん", "meaning": "경탄" }
    ]
  }

};
