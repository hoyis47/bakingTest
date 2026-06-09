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
  },
  {
    "name": "베이글",
    "mixing": "발전단계",
    "firstFermentation": { "time": { "min": 45, "max": 45 } },
    "intermediateProof": { "time": { "min": 10, "max": 15 } },
    "secondFermentation": { "time": { "min": 20, "max": 20 } },
    "bake": {
      "topHeat": 210,
      "bottomHeat": 190,
      "time": { "min": 18, "max": 20 }
    },
    "memo": "성형:눌러펴기 -> 말기 -> 27~30cm 길이로 늘리기 -> 링모양 만들어 꼬집기 <br>80도 끓는물에 5초씩 양면데치기"
  },
  {
    "name": "호밀빵",
    "mixing": "발전단계",
    "firstFermentation": { "time": { "min": 40, "max": 40 } },
    "intermediateProof": { "time": { "min": 10, "max": 10 } },
    "secondFermentation": { "time": { "min": 27, "max": 30 } },
    "bake": {
      "topHeat": 220,
      "bottomHeat": 200,
      "time": { "min": 28, "max": 30 }
    },
    "memo": "성형:눌러펴기 -> 럭비공 모양으로 말기 -> 봉하기 -> 22~23센티로 살짝 밀기"
  }
];