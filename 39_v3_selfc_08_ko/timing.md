# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 모시 맞아요?
     1.71s  agent 발화 시작: 좋은 아침이에요. 연결되었습니다. 뭘 도와드릴까요?
     1.71s  user  발화 끝
     4.56s  user  발화 시작: 음, 여행을 계획 중인데, 12월 21일에 덴버 날씨가 어떨지 궁금해요.
     4.56s  agent 발화 끝
    10.26s  agent 발화 시작: <ret> 네, 확인해 봤는데요. 덴버의 12월 21일 평균 최고 기온은 섭씨 4도, 최저 기온은 영하 8도
    10.26s  <ret> 발화 (turn3 첫 프레임)
    10.26s  user  발화 끝
    11.26s  ⚡SPAN 주입 [d'=1.00s / d_lead=11.40s]: (tool result) The weather in Denver on December twenty-first is foreca
    21.66s  user  발화 시작: 그렇군요… 혹시 그 근처에 괜찮은 식물원이 있나요? 저는 알프스 꽃을 좋아하거든요.
    21.66s  agent 발화 끝
    27.93s  agent 발화 시작: 아, 꽃을 좋아하시는군요! [happy] 정말 멋지네요. 덴버 식물원은 꽤 유명하고, 아름다운 알프스 식물 
    27.93s  user  발화 끝
    37.05s  user  발화 시작: 그 식물원은 들어본 것 같아요. 좀 더 작고, 사람이 덜 붐비는 곳은 없을까요? 조용히 감상하고 싶어서요.
    37.05s  agent 발화 끝
    46.17s  agent 발화 시작: <ret> 알아봤는데, 챗필드 농장이 괜찮을 것 같아요. 덴버 식물원보다는 규모가 작고, 방문객 수도 적은 
    46.17s  <ret> 발화 (turn7 첫 프레임)
    46.17s  user  발화 끝
    47.17s  ⚡SPAN 주입 [d'=1.00s / d_lead=9.69s]: (tool result) The York Street Gardens in Denver is 23 acres and receiv
    55.87s  user  발화 시작: 2만 달러는 여전히 많네요! 챗필드 농장이 시내에서 좀 떨어져 있나요?
    55.87s  agent 발화 끝
    61.57s  agent 발화 시작: 그렇습니다. 챗필드 농장은 덴버에서 남서쪽으로 약 48킬로미터 떨어진 리틀턴에 위치해 있어요.
    61.57s  user  발화 끝
    67.84s  user  발화 시작: 알겠습니다. 그리고, 음, 콜로라도에서 12월에 보통 무슨 꽃이 피나요? 절정기는 아니라는 건 알아요.
    67.84s  agent 발화 끝
    75.25s  agent 발화 시작: 좋은 질문이에요. 12월에 피는 꽃은 제한적이죠. 겨울 양귀비와 눈꽃이 피기 시작하고, 튼튼한 제비꽃도 볼 
    75.25s  user  발화 끝
    84.94s  user  발화 시작: 눈꽃이요? 항상 보고 싶었어요. 고지대에서도 잘 자라나요?
    84.94s  agent 발화 끝
    88.93s  agent 발화 시작: 잘 자라요. 눈꽃은 놀라울 정도로 강인해요. 산악 지역에서 잘 자라는데, 시원하고 습한 환경을 좋아합니다—알
    88.93s  user  발화 끝
   100.33s  user  발화 시작: 알아두면 좋겠네요. 호텔도 찾고 있는데, 보스턴… 아니, 시카고요. 미술관 근처에 있는 곳으로요.
   100.33s  agent 발화 끝
   107.17s  agent 발화 시작: <ret> 네, 시카고 미술관 근처 호텔을 찾아봤는데요. 파머 하우스 호텔이 괜찮을 것 같아요. 평점도 높고
   107.17s  <ret> 발화 (turn15 첫 프레임)
   107.17s  user  발화 끝
   108.17s  ⚡SPAN 주입 [d'=1.00s / d_lead=9.12s]: (tool result) The Art Institute of Chicago is located at 111 South Mic
   116.29s  user  발화 시작: 파머 하우스… 괜찮은 호텔인가요?
   116.29s  agent 발화 끝
   118.57s  agent 발화 시작: 꽤 역사적인 곳이에요. 파머 하우스는 1871년부터 시카고의 랜드마크였으며, 아름다운 건축물과 화려한 인테리
   118.57s  user  발화 끝
   125.98s  user  발화 시작: 와, 정말 오래됐네요! 근처에 식당은 어때요? 현지 음식을 맛볼 수 있는 곳으로요.
   125.98s  agent 발화 끝
   132.82s  agent 발화 시작: <ret> 음, 현지 음식을 맛볼 수 있는 식당도 찾아봤는데요. 프론테라 그릴이 평이 좋아요. 멕시코 음식을
   132.82s  <ret> 발화 (turn19 첫 프레임)
   132.82s  user  발화 끝
   133.82s  ⚡SPAN 주입 [d'=1.00s / d_lead=11.40s]: (tool result) Frontera Grill, serving contemporary Mexican cuisine, is
   144.23s  user  발화 시작: 프론테라 그릴… 괜찮겠네요. 예약을 받나요?
   144.23s  agent 발화 끝
   147.08s  agent 발화 시작: <ret> 네, 프론테라 그릴은 예약을 받습니다. 전화나 온라인으로 예약할 수 있어요. 전화번호는 312-6
   147.08s  <ret> 발화 (turn21 첫 프레임)
   147.08s  user  발화 끝
   148.08s  ⚡SPAN 주입 [d'=1.00s / d_lead=6.84s]: (tool result) Frontera Grill accepts reservations online through their
   153.92s  user  발화 시작: 완벽하네요. 정말 감사합니다, 모시.
   153.92s  agent 발화 끝
   156.20s  agent 발화 시작: 도와드릴 수 있어서 기쁩니다. 즐거운 여행 되세요!
   156.20s  user  발화 끝
   160.19s  user  발화 시작: 음, 네.
   160.19s  agent 발화 끝
   161.33s  user  발화 끝
