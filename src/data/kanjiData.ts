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
  ]
}

};
