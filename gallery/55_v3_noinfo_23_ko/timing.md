# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 지난해 12월 24일 도쿄 날씨가 어땠어?
     2.68s  <ret> 발화 (turn1 첫 프레임)
     2.83s  agent 발화 시작: <ret> 날씨 확인해 보는 건 아주 간단해요… 지난 12월 24일 도쿄는 맑은 하늘이었고, 최고 기온은 1
     3.04s  user  발화 끝
     4.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.26s]: (tool result) The weather in Tokyo on December twenty-fourth last year
    11.22s  agent 발화 끝
    11.31s  user  발화 시작: 꽤 추웠겠네. 우에노 공원 근처에 괜찮은 카페 좀 찾아 줘.
    15.57s  user  발화 끝
    15.59s  <ret> 발화 (turn3 첫 프레임)
    15.67s  agent 발화 시작: <ret> 우에노 공원 근처 카페를 검색하고 있어요… 카페 론 론은 우에노 공원에서 0.2킬로미터 떨어져 있
    17.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.74s]: (tool result) Cafe Ron Ron is located point-two kilometers from Ueno P
    25.82s  agent 발화 끝
    25.94s  user  발화 시작: 완벽하네. 예약 가능한지 알아봐 줘.
    27.63s  <ret> 발화 (turn5 첫 프레임)
    27.95s  agent 발화 시작: <ret> 예약 가능 여부를 확인해 볼게요… 아쉽게도 카페 론 론은 현재 예약을 받지 않아요.
    28.20s  user  발화 끝
    29.15s  ⚡SPAN 주입 [d'=1.52s / d_lead=1.99s]: (tool result) Cafe Ron Ron does not accept reservations.
    33.13s  agent 발화 끝
    33.40s  user  발화 시작: 아. 음. 그럼 예약 가능한 다른 평점 좋은 카페는 없어?
    37.21s  <ret> 발화 (turn7 첫 프레임)
    37.29s  agent 발화 시작: <ret> 조금 더 넓게 검색해 볼게요… 커피 밸리는 우에노 공원에서 0.3킬로미터 떨어져 있고, 평점은 4
    37.52s  user  발화 끝
    39.13s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.51s]: (tool result) Coffee Valley, point-three kilometers away, has a four-p
    46.36s  user  발화 시작: 4.5점… 아주 좋네. 내일 오후에 두 명 자리를 예약해 봐.
    46.66s  agent 발화 끝
    50.67s  <ret> 발화 (turn9 첫 프레임)
    51.03s  user  발화 끝
    51.07s  agent 발화 시작: <ret> 알겠습니다. 예약을 진행해 드릴게요… 커피 밸리에서 내일 오후 2시에 두 명으로 예약이 확정됐습니
    52.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.34s]: (tool result) Reservation confirmed at Coffee Valley for two people to
    60.89s  user  발화 시작: 좋아! 정말 고마워. 지금 우에노 공원에 피어 있는 흥미로운 식물이 있어?
    60.99s  agent 발화 끝
    65.67s  agent 발화 시작: 우에노 공원은 식물 관찰하기에 아주 좋은 곳이에요—
    65.89s  user  발화 끝
    68.08s  user  발화 시작: 알프스 초롱꽃 같은 게 피어 있어?
    68.91s  agent 발화 끝
    70.10s  agent 발화 시작: 사실 우에노 공원은 고도가 충분하지 않아서 진짜 알프스 초롱꽃이 자라지는 않아요. 하지만 비슷하게 생긴 종이
    70.33s  user  발화 끝
    79.33s  agent 발화 끝
    79.36s  user  발화 시작: 아, 그렇지. 그럴 수도 있겠네.
    81.20s  user  발화 끝
    81.28s  agent 발화 시작: 음, 그렇네요.
    82.30s  user  발화 시작: 응.
    82.65s  user  발화 끝
    82.84s  <ret> 발화 (turn17 첫 프레임)
    83.08s  agent 발화 시작: <ret> 알프스 식물에 관심이 있으시다는 점을 고려해서… 알프스 초롱꽃은 유럽 알프스에 자생하며 7월부터 
    83.26s  agent 발화 끝
    84.12s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.30s]: (tool result) Edelweiss is native to the European Alps, blooming from 
    91.89s  agent 발화 끝
    92.21s  user  발화 시작: 알프스 초롱꽃은 예쁘지. 키우기 어려워?
    94.85s  agent 발화 시작: 알프스 초롱꽃은 자연 서식지 밖에서는 키우기가 꽤 어려울 수 있어요.
    94.93s  user  발화 끝
    99.43s  agent 발화 끝
    99.59s  user  발화 시작: 일본 야생화는 어때?
   100.80s  <ret> 발화 (turn21 첫 프레임)
   100.96s  agent 발화 시작: <ret> 일본 야생화는 좀 더 쉽게 접근할 수 있는 선택지예요… 미쓰마타는 늦은 봄에 피고, 반그늘에서 잘
   101.20s  user  발화 끝
   102.16s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.41s]: (tool result) Mitsumata blooms in late spring, prefers partial shade, 
   111.20s  agent 발화 끝
   112.12s  user  발화 시작: 반그늘, 알아둬야겠다. 정말 많은 도움 고마워!
   115.41s  agent 발화 시작: 도와드릴 수 있어서 기뻐요. 식물의 매혹적인 세계에 대해 이야기하는 것을 언제나 즐거워합니다.
   115.45s  user  발화 끝
   120.73s  agent 발화 끝
