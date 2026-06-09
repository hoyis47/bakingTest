// bakeData.js 파일 내용
const bakeryListData = [
  {
    "name": "식빵",
    "mixing": "최종단계후기",
    "firstFermentation": { "time": { "min": 15, "max": 30 } },
    "intermediateProof": { "time": { "min": 10, "max": 10 } },
    "secondFermentation": { "time": { "min": 30, "max": 35 } },
    "bake": {
      "topHeat": 170,
      "bottomHeat": 190,
      "time": { "min": 30, "max": 35 }
    },
    "memo": "비상스트레이트법, 성형 : 타원형으로 밀기 -> 3겹접기 -> 말기 -> 봉하기"
  },
  {
    "name": "그리시니",
    "mixing": "발전단계",
    "firstFermentation": { "time": { "min": 30, "max": 30 } },
    "intermediateProof": { "time": { "min": 10, "max": 15 } },
    "secondFermentation": { "time": { "min": 20, "max": 20 } },
    "bake": {
      "topHeat": 200,
      "bottomHeat": 160,
      "time": { "min": 18, "max": 20 }
    },
    "memo": "성형:눌러펴기 -> 말기 -> 35~40cm 길이로 늘리기"
  }
];