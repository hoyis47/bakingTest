const bakeryListData = [
  {
    "name": "식빵",
    "mixing": "최종단계후기",
    "firstFermentation": { "time": { "min": 15, "max": 35, "classTime": 30 } },
    "intermediateProof": { "time": { "min": 10, "max": 10 } },
    "secondFermentation": { "time": { "min": 30, "max": 35, "classTime": 30 } },
    "secondFermentationHeight": ["팬높이"],
    "bake": {
      "topHeat": 170,
      "bottomHeat": 190,
      "time": { "min": 30, "max": 35 }
    },
    "proofImage": "images/proof_식빵.jpg",
	"videos": [
        { name: "삼봉형 식빵 성형", url: "https://youtu.be/5GtmM2kif0M" }
    ],
    "memo": "- 비상스트레이트법<br>"
          + "- 반죽온도 : 30도<br>"
          + "- 170g 분할 (삼봉형)<br>"
          + "- 타원형으로 밀기 -> 3겹 접기 -> 말기 -> 봉하기"
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
    "proofImage": "images/proof_그리시니.jpg",
	"videos": [
        { name: "그리시니 성형", url: "https://youtu.be/nU11FRip-ZM" },
		{ name: "그리시니 분할, 둥글리기", url: "https://youtu.be/qRccwVGTYu4" }
    ],
    "memo": "- 반죽온도 : 27도<br>"
          + "- 30g 분할, 전량사용하여 42개 만들기<br>"
          + "- 눌러펴기 -> 말기 -> 35~40cm 길이로 늘리기<br>"
		  + "- 1팬 10~11개 팬닝 혹은 1팬 최대 15개 팬닝(팬 크기에 따라 다름)"
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
    "proofImage": "images/proof_베이글.jpg",
	"videos": [
        { name: "베이글 성형", url: "https://youtu.be/1nX-1sAwfWc" },
		{ name: "베이글 데치기", url: "https://youtu.be/vjT-xAHT6B0" }
    ],
    "memo": "- 반죽온도 : 27도<br>" 
          + "- 80g 분할 16개(시험기준)<br>"
          + "- 눌러펴기 -> 3겹 접기 -> 말기 -> 봉하기 -> 27~30cm 길이로 늘리기 -> 링모양 만들어 꼬집기<br>"
		  + "- 1팬 8개 팬닝 * 2<br>"
          + "- 2차 발효 후 80도 끓는물에 5초씩 양면데치기"
          
  },
  {
    "name": "단과자 트위스트",
    "mixing": "최종단계",
    "firstFermentation": { "time": { "min": 45, "max": 45 } },
    "intermediateProof": { "time": { "min": 15, "max": 15 } },
    "secondFermentation": { "time": { "min": 30, "max": 35, "classTime": 30 } },
    "bake": {
      "topHeat": 190,
      "bottomHeat": 140,
      "time": { "min": 15, "max": 17 }
    },
    "proofImage": "images/proof_단과자트위스트.jpg",
	"videos": [
        { name: "단과자 8자형", url: "https://youtu.be/8QD8urp32h4" },
		{ name: "단과자 달팽이형", url: "https://youtu.be/2sYt_h1mmTU" }
    ],
    "memo": "- 반죽온도 : 27도<br>" 
          + "- 50g 분할 (시험 24개)<br>"
          + "- 달팽이형 12개 (30cm 늘리기), 8자 12개 (25cm 늘리기 -> 꼬기)"
          
  }, 
  {
    "name": "호밀빵",
    "mixing": "발전단계",
    "firstFermentation": { "time": { "min": 40, "max": 40 } },
    "intermediateProof": { "time": { "min": 10, "max": 10 } },
    "secondFermentation": { "time": { "min": 30, "max": 30 } },
	"extraProcess": "반죽 표면을 말린 후 칼집을 낸다. <br>옆면까지 물을 분무한다",
    "bake": {
      "topHeat": 185,
      "bottomHeat": 160,
      "time": { "min": 30, "max": 30 }
    },
    "proofImage": "images/proof_호밀빵.jpg",
	"videos": [
        { name: "호밀빵 성형", url: "https://youtu.be/Mn24C2wQzik" },
		{ name: "호밀빵 칼집내기", url: "https://youtu.be/8Qt1U0iF-sk" }
    ],
    "memo": "- 반죽온도 : 25도<br>" 
          + "- 330g 분할 6개(전량)<br>"
          + "- 밀기 -> 말기 -> 봉하기 -> 23cm 정도 럭비공 모양으로 성형<br>"
          + "- 2차 발효 후 표면 말리고 칼집내기 -> 옆면까지 물 뿌리기"
  },
  {
    "name": "통밀빵",
    "mixing": "발전단계",
    "firstFermentation": { "time": { "min": 50, "max": 50 } },
    "intermediateProof": { "time": { "min": 10, "max": 10 } },
    "secondFermentation": { "time": { "min": 40, "max": 45, "classTime": 40 } },	
    "bake": {
      "topHeat": 200,
      "bottomHeat": 150,
      "time": { "min": 20, "max": 22 }
    },
    "proofImage": "images/proof_통밀빵.jpg",
	"videos": [
        { name: "통밀빵 성형", url: "https://youtu.be/9kPoBKXgqo0" }
    ],
    "memo": "- 반죽온도 : 25도<br>" 
          + "- 200g 분할 9개(시험 8개)<br>"
          + "- 밀기 -> 3겹접기 -> 말기 -> 늘리기 -> 밀대(봉)형 22~23cm로 성형<br>"
          + "- 오트밀 묻히기 (밑면은 안묻힌다)"
  },
  {
    "name": "버터톱식빵",
    "mixing": "최종단계",
    "firstFermentation": { "time": { "min": 45, "max": 45 } },
    "intermediateProof": { "time": { "min": 10, "max": 10 } },
    "secondFermentation": { "time": { "min": 30, "max": 35, "classTime": 30 } },
    "secondFermentationHeight": ["팬높이 아래 1cm"], 
	"extraProcess": "반죽 표면을 말린 후 칼집을 내고 버터를 짠다.",
    "bake": {
      "topHeat": 170,
      "bottomHeat": 180,
      "time": { "min": 30, "max": 35 }
    },
    "proofImage": "images/proof_버터톱식빵.jpg",
	"videos": [
        { name: "버터톱식빵 성형", url: "https://youtu.be/RdP4ZcKJly4" },
		{ name: "버터톱식빵 칼집내기", url: "https://youtu.be/l_iQC5fa5xg" }
    ],
    "memo": "- 반죽온도 : 27도<br>" 
          + "- 460g 분할 5개(전량사용)<br>"
          + "- 밀기 -> 말기 -> 봉하기<br>"
          + "- 2차 발효 후 표면 말리고 칼집내기 -> 짤주머니로 버터 짜기"
  },
  {
    "name": "우유식빵",
    "mixing": "최종단계",
    "firstFermentation": { "time": { "min": 45, "max": 45 } },
    "intermediateProof": { "time": { "min": 10, "max": 10 } },
    "secondFermentation": { "time": { "min": 30, "max": 35, "classTime": 30 } },
    "secondFermentationHeight": ["팬높이", "팬높이 아래 0.5cm"], 
    "bake": {
      "topHeat": 170,
      "bottomHeat": 180,
      "time": { "min": 30, "max": 35 }
    },
    //"proofImage": "images/proof_우유식빵.jpg",
	"videos": [
        { name: "우유식빵 성형", url: "https://youtu.be/5GtmM2kif0M" }
    ],
    "memo": "- 반죽온도 : 27도<br>" 
          + "- 180g 분할 12개(전량사용)<br>"
          + "- 밀기 -> 3단접기 -> 말기 -> 봉하기"
  },
  {
    "name": "스위트롤",
    "mixing": "최종단계",
    "firstFermentation": { "time": { "min": 50, "max": 50 } },
    //"intermediateProof": { "time": { "min": 10, "max": 10 } },
    "secondFermentation": { "time": { "min": 30, "max": 30 } },
    "bake": {
      "topHeat": 190,
      "bottomHeat": 140,
      "time": { "min": 15, "max": 17 }
    },
    "proofImage": "images/proof_스위트롤.jpg",
	"videos": [
        { name: "스위트롤 성형", url: "https://youtu.be/OqqF9DtUW2A" }
    ],
    "memo": "- 반죽온도 : 27도<br>" 
          + "- 분할, 둥글리기 중간과정 없음<br>"
		  + "- 반죽을 2등분하여 야자잎 12개, 트리플리프 9개를 만든다<br>"
          + "- 밀어펴기 : 야자잎형(가로55cm), 트리플리프(가로58cm) -> 계피설탕 충전하여 말기 -> 자르기 (각 잎이 2cm)<br>"
		  + "- 잎이 잘 벌어지도록 최소한만 남기고 자른다"
  },
  {
    "name": "쌀식빵",
    "mixing": "최종단계",
    "firstFermentation": { "time": { "min": 50, "max": 50 } },
    "intermediateProof": { "time": { "min": 10, "max": 10 } },
    "secondFermentation": { "time": { "min": 40, "max": 45, "classTime": 40 } },
    "secondFermentationHeight": ["팬높이 아래 1cm"],
    "bake": {
      "topHeat": 170,
      "bottomHeat": 190,
      "time": { "min": 30, "max": 30 }
    },
    "proofImage": "images/proof_쌀식빵.png",
	"videos": [
        { name: "쌀식빵 성형", url: "https://youtu.be/5GtmM2kif0M" }
    ],
    "memo": "- 반죽온도 : 27도<br>"
          + "- 198g 분할 (삼봉형)<br>"
          + "- 타원형으로 밀기 -> 3겹 접기 -> 말기 -> 봉하기"
  },
  {
    "name": "빵도넛",
    "mixing": "발전단계",
    "firstFermentation": { "time": { "min": 40, "max": 40 } },
    "intermediateProof": { "time": { "min": 15, "max": 15 } },
    "secondFermentation": { "time": { "min": 20, "max": 25 } },
    "bake": {
      "topHeat": 185,
      "bottomHeat": 190
      //"time": { "min": 30, "max": 30 }
    },
    //"proofImage": "images/proof_쌀식빵.png",
	/*
	"videos": [
        { name: "쌀식빵 성형", url: "https://youtu.be/5GtmM2kif0M" }
    ],
	*/
    "memo": "- 반죽온도 : 27도<br>"
          + "- 46g 분할 (44개 제출)<br>"
          + "- 8자형 22개(30cm->25cm로 줄여 여유있게), 트위스트형(꽈배기형) 22개(30cm)<br>"
		  + "- 한팬에 11개씩 총 4팬 사용<br>"
		  + "- 튀길 때 한번만 뒤집기<br>"
		  + "- 튀긴 후 설탕 안 묻히고 제출"
  },
  {
    "name": "모카빵",
    "mixing": "최종단계",
    "firstFermentation": { "time": { "min": 45, "max": 45 } },
    "intermediateProof": { "time": { "min": 10, "max": 10 } },
    "secondFermentation": { "time": { "min": 30, "max": 30 } },
    "bake": {
      "topHeat": 180,
      "bottomHeat": 160,
      "time": { "min": 25, "max": 30 }
    },
    "proofImage": "images/proof_모카빵.jpg",
	/*
	"videos": [
        { name: "쌀식빵 성형", url: "https://youtu.be/5GtmM2kif0M" }
    ],
	*/
    "memo": "- 반죽온도 : 27도<br>"
          + "- 250g 분할 6개 제출<br>"
		  + "- 비스킷 100g 사용 <br>"
          + "- 타원형으로 밀기 -> 뒤집어 삼각형 만들기 -> 17cm타원형 으로 말기 -> 봉하기<br>"
		  + "- 비스킷 성형 : 밀대를 동서남북방향으로 돌리며 타원형으로 만들기"
  },
  {
    "name": "크림빵",
    "mixing": "최종단계",
    "firstFermentation": { "time": { "min": 45, "max": 45 } },
    "intermediateProof": { "time": { "min": 10, "max": 10 } },
    "secondFermentation": { "time": { "min": 30, "max": 35 } },
    "bake": {
      "topHeat": 190,
      "bottomHeat": 140,
      "time": { "min": 15, "max": 17 }
    },
    "proofImage": "images/proof_크림빵.jpg",
	/*
	"videos": [
        { name: "쌀식빵 성형", url: "https://youtu.be/5GtmM2kif0M" }
    ],
	*/
    "memo": "- 반죽온도 : 27도<br>"
          + "- 45g(46g) 분할 24개 제출<br>"
		  + "- 충전 12개, 비충전 12개 <br>"
          + "- 비충전 : 타원형으로 밀기 -> 테두리에 식용유 바르기 -> 반으로 접기<br>"
		  + "- 충전 : 타원형으로 밀기 -> 절반 아래에 커스터드(30g) 크림 넣기 -> 반으로 접기 -> 칼집내기"
  }
];