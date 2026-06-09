// bakeData.js 파일 내용
const bakeryListData = [
  {
    "name": "식빵",
    "mixing": "최종단계후기",
    "firstFermentation": { "time": { "min": 15, "max": 35, "classTime": 30 } },
    "intermediateProof": { "time": { "min": 10, "max": 10 } },
    "secondFermentation": { "time": { "min": 30, "max": 35, "classTime": 30 } },
	"secondFermentationHeight": "팬높이",
    "bake": {
      "topHeat": 170,
      "bottomHeat": 190,
      "time": { "min": 30, "max": 35, "classTime": 30 }
    },
	"proofImage": "images/proof_식빵.jpg",
    "memo": "- 비상스트레이트법<br>- 반죽온도: 30도<br>- 170g 분할 (삼봉형)<br>- 성형 : 타원형으로 밀기 -> 3겹접기 -> 말기 -> 봉하기"
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
    "memo": "성형:눌러펴기 -> 말기 -> 35~40cm 길이로 늘리기<br>반죽온도: 27도"
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
    "secondFermentation": { "time": { "min": 30, "max": 30 } },
    "bake": {
      "topHeat": 185,
      "bottomHeat": 160,
      "time": { "min": 30, "max": 30 }
    },
    "memo": "성형:눌러펴기 -> 럭비공 모양으로 말기 -> 봉하기 -> 22~23센티로 살짝 밀기<br>칼집 1센티정도 낸 후 분무하기<br>반죽온도: 25도"
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
    "memo": "성형:눌러펴기 -> 럭비공 모양으로 말기 -> 봉하기 -> 22~23센티로 살짝 밀기 <br>2차 발효 후 겉면을 말려 1센티깊이로 칼집내기"
  },
  {
    "name": "통밀빵",
    "mixing": "발전단계",
    "firstFermentation": { "time": { "min": 40, "max": 40 } },
    "intermediateProof": { "time": { "min": 10, "max": 10 } },
    "secondFermentation": { "time": { "min": 27, "max": 30 } },
    "bake": {
      "topHeat": 220,
      "bottomHeat": 200,
      "time": { "min": 28, "max": 30 }
    },
    "memo": "성형:눌러펴기 -> 럭비공 모양으로 말기 -> 봉하기 -> 22~23센티로 살짝 밀기 <br>2차 발효 후 겉면을 말려 1센티깊이로 칼집내기"
  },
  {
    "name": "버터톱식빵",
    "mixing": "최종단계",
    "firstFermentation": { "time": { "min": 40, "max": 40 } },
    "intermediateProof": { "time": { "min": 10, "max": 10 } },
    "secondFermentation": { "time": { "min": 27, "max": 30 } },
    "bake": {
      "topHeat": 220,
      "bottomHeat": 200,
      "time": { "min": 28, "max": 30 }
    },
    "memo": "성형:눌러펴기 -> 럭비공 모양으로 말기 -> 봉하기 -> 22~23센티로 살짝 밀기 <br>2차 발효 후 겉면을 말려 1센티깊이로 칼집내기"
  },
  {
    "name": "우유식빵",
    "mixing": "발전단계",
    "firstFermentation": { "time": { "min": 40, "max": 40 } },
    "intermediateProof": { "time": { "min": 10, "max": 10 } },
    "secondFermentation": { "time": { "min": 27, "max": 30 } },
    "bake": {
      "topHeat": 220,
      "bottomHeat": 200,
      "time": { "min": 28, "max": 30 }
    },
    "memo": "성형:눌러펴기 -> 럭비공 모양으로 말기 -> 봉하기 -> 22~23센티로 살짝 밀기 <br>2차 발효 후 겉면을 말려 1센티깊이로 칼집내기"
  }
];