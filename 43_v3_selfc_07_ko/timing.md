# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어디 로그인 페이지로 가줘.
     1.28s  <ret> 발화 (turn1 첫 프레임)
     1.44s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.51s]: (tool result) Navigating to https://www.example.com/login.
     1.83s  agent 발화 시작: <ret> 그래, 지금 로그인 페이지로 바로 보내줄게.
     1.94s  user  발화 끝
     4.88s  agent 발화 끝
     5.26s  user  발화 시작: 어, 시카고로 저렴한 집 찾아봐 줘— 아니, 보스턴 말고 시카고로 해 줘?
     9.80s  <ret> 발화 (turn3 첫 프레임)
    10.39s  agent 발화 시작: <ret> 알았어. 시카고에 저렴한 집 23개 찾았어.
    10.44s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.22s]: (tool result) Found 23 properties matching “affordable housing” in Chi
    10.54s  user  발화 끝
    14.04s  agent 발화 끝
    14.88s  user  발화 시작: 음, 평균 크기가 얼마야?
    16.36s  <ret> 발화 (turn5 첫 프레임)
    16.92s  agent 발화 시작: <ret> 잠깐만. 그 집들 평균 크기는 785평방피트 정도 돼.
    17.14s  user  발화 끝
    17.36s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.40s]: (tool result) Average square footage is 785 square feet.
    21.40s  user  발화 시작: 생각보다 작네. 새로 지은 데 있어?
    21.45s  agent 발화 끝
    23.32s  <ret> 발화 (turn7 첫 프레임)
    23.91s  agent 발화 시작: <ret> 확인해 볼게. 새로 지은 건물 3채가 있어.
    24.03s  user  발화 끝
    24.32s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.31s]: (tool result) Three properties are new constructions.
    27.07s  user  발화 시작: 좋아. 제일 싼 집 자세히 보여줘.
    27.14s  agent 발화 끝
    29.17s  <ret> 발화 (turn9 첫 프레임)
    29.25s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.67s]: (tool result) Prop7: 1 bed, 1 bath, 550 sq ft, $1200/month, built 2024
    29.77s  agent 발화 시작: <ret> 응, Prop7은 방 하나, 화장실 하나고, 550평방피트인데 월세가 1200달러야.
    29.89s  user  발화 끝
    35.62s  user  발화 시작: 그거… 괜찮을지도. 가상 투어 볼 수 있어?
    35.84s  agent 발화 끝
    38.02s  <ret> 발화 (turn11 첫 프레임)
    38.60s  agent 발화 시작: <ret> 봐야지. 가상 투어는 example.com/tour/prop7에서 볼 수 있어.
    38.81s  user  발화 끝
    39.02s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.48s]: (tool result) Virtual tour available at https://example.com/tour/prop7
    43.65s  user  발화 시작: [laugh] 좋아, 한번 들어가 봐야겠다. 고마워.
    43.79s  agent 발화 끝
    46.74s  agent 발화 시작: 천만에. 건축가라서 그런지, 좋은 집 찾는 거 좋아해.
    46.88s  user  발화 끝
    50.58s  agent 발화 끝
