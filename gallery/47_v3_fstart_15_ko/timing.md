# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도가 뭐지?
     2.32s  <ret> 발화 (turn1 첫 프레임)
     2.63s  agent 발화 시작: <ret> 음, 제가 늘 방문하고 싶었던 곳이네요… 위도는 서쪽 삼십삼 점 팔오육팔도이고, 경도는 동쪽 백오
     2.91s  user  발화 끝
     4.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.45s]: (tool result) The Sydney Opera House is located at -33.8568 degrees la
    11.53s  agent 발화 끝
    11.88s  user  발화 시작: 에펠탑은?
    12.36s  <ret> 발화 (turn3 첫 프레임)
    12.67s  agent 발화 시작: <ret> 오, 비교하기 좋은 고전적인 선택이네요… 에펠탑은 북쪽 사십팔 점 팔오팔사도, 동쪽 두 점 이구사
    12.69s  user  발화 끝
    13.88s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.26s]: (tool result) The Eiffel Tower is located at 48.8584 degrees latitude 
    16.09s  user  발화 시작: 응.
    16.30s  user  발화 끝
    22.06s  user  발화 시작: 흠, 흥미롭네. 에펠탑 근처에 재즈 클럽 있어?
    22.40s  agent 발화 끝
    26.00s  <ret> 발화 (turn6 첫 프레임)
    26.23s  agent 발화 시작: <ret> 파리와 재즈… 정말 아름다운 조합이죠. 르 카보 드 라 위셰트는 에펠탑에서 0.6마일 정도 떨어진
    26.27s  user  발화 끝
    27.36s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.58s]: (tool result) Le Caveau de la Huchette is a jazz club located 0.6 mile
    29.36s  user  발화 시작: 그니까.
    29.91s  user  발화 끝
    34.49s  agent 발화 끝
    35.04s  user  발화 시작: 괜찮아 보이는데.
    36.47s  user  발화 끝
    36.70s  agent 발화 시작: 정말 유명한 곳이에요. 사실 수십 년 동안 있었어요. 파리의 진정한 명소입니다.
    39.50s  user  발화 시작: 응.
    39.95s  user  발화 끝
    42.38s  agent 발화 끝
    44.73s  user  발화 시작: 거기서 보통 무슨 음악을 틀어?
    46.67s  <ret> 발화 (turn12 첫 프레임)
    46.80s  user  발화 끝
    46.82s  agent 발화 시작: <ret> 보통 전통적인 쪽으로 기울어져요… 전통 재즈, 스윙, 비밥을 전문으로 합니다. 정말 멋진 레퍼토리
    47.63s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.52s]: (tool result) Le Caveau de la Huchette typically features traditional 
    52.54s  user  발화 시작: 응.
    53.04s  user  발화 끝
    55.15s  user  발화 시작: 웹사이트 있어?
    55.21s  agent 발화 끝
    55.77s  <ret> 발화 (turn15 첫 프레임)
    56.08s  agent 발화 시작: <ret> 요즘 대부분의 곳들이 다 있어서 다행이죠… 웹사이트는 caveaudelahuchette.fr입니다
    56.33s  user  발화 끝
    57.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.88s]: (tool result) Le Caveau de la Huchette’s website is https://www.caveau
    61.26s  agent 발화 끝
    62.47s  user  발화 시작: 저… 그러니까, 좀 더 자세히 말해 줄 수 있어?
    65.61s  agent 발화 시작: 물론이죠. C-a-v-e-a-u, d-e, l-a, h-u-c-h-e-t-t-e, 점 f-r입니다.
    65.69s  user  발화 끝
    67.89s  user  발화 시작: 응.
    68.19s  user  발화 끝
    72.46s  agent 발화 끝
    72.61s  user  발화 시작: 전화번호는 뭐야?
    74.17s  user  발화 끝
    74.31s  <ret> 발화 (turn20 첫 프레임)
    74.39s  agent 발화 시작: <ret> 혹시 모르니 알아두면 좋겠죠… 플러스 삼십삼 일 사오오오 육십일 사십이입니다.
    76.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.34s]: (tool result) Le Caveau de la Huchette’s phone number is +33 1 45 55 6
    77.87s  user  발화 시작: 응.
    78.08s  user  발화 끝
    81.00s  user  발화 시작: 고마워.
    81.07s  agent 발화 끝
    81.75s  agent 발화 시작: 천만에요. 손끝에서 바로 파리 분위기를 느껴보세요.
    81.77s  user  발화 끝
    83.22s  user  발화 시작: 응.
    83.44s  user  발화 끝
    85.60s  agent 발화 끝
    85.64s  user  발화 시작: 내일 아침에 거기 스케줄 확인해 달라고 알림 설정해 줄 수 있어?
    88.67s  <ret> 발화 (turn26 첫 프레임)
    89.06s  agent 발화 시작: <ret> 네, 그렇게 해 드릴게요.
    89.17s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.47s]: (tool result) Reminder set for 9:00 AM tomorrow to check Le Caveau de 
    89.19s  user  발화 끝
    90.33s  agent 발화 시작: 내일 아침 아홉 시에 스케줄을 확인하는 알림을 설정했습니다.
    90.53s  agent 발화 끝
    93.94s  agent 발화 끝
    93.94s  user  발화 시작: 완벽해!
    94.76s  user  발화 끝
    94.88s  agent 발화 시작: 정말 좋네요. 딩고 라인하르트의 음악이 아침을 활기차게 해 줄지도 모르겠어요.
   100.57s  agent 발화 끝
