export interface KanjiWord {
  kanji: string;
  yomikata: string;
  meaning: string;
}

export const kanjiData: Record<string, Record<string, KanjiWord[]>> = {
  "chapter1": {
    "2024": [
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
    "2023": [
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
    ]
  }

};
