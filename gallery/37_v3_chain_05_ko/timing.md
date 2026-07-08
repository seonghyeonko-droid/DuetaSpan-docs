# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 저희 Zuni Cafe 가격대는 어떻게 되나요?
     1.85s  <ret> 발화 (turn1 첫 프레임)
     2.24s  agent 발화 시작: <ret> 네, 그 유명한 식당에 대한 정보를 빠르게 확인해 볼게요… Zuni Cafe의 요리는 보통 삼십 
     2.40s  user  발화 끝
     3.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.56s]: (tool result) Zuni Cafe's price range is $$$ which means dishes cost b
    10.44s  agent 발화 끝
    10.54s  user  발화 시작: 알겠습니다, 좋네요. 지금은 영업하고 있나요?
    13.00s  <ret> 발화 (turn3 첫 프레임)
    13.07s  agent 발화 시작: <ret> 네, 영업시간을 확인해 드릴 수 있습니다… Zuni Cafe는 지금 열려 있고 오늘 저녁 열 시에
    13.26s  user  발화 끝
    15.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.06s]: (tool result) Zuni Cafe is currently open and closes at ten PM tonight
    19.43s  user  발화 시작: 완벽하네요. 저녁 일곱 시 반에 두 명 예약해 주시겠어요?
    19.57s  agent 발화 끝
    22.47s  <ret> 발화 (turn5 첫 프레임)
    22.87s  agent 발화 시작: <ret> 그 시간에 자리가 있는지 확인해 보겠습니다… Zuni Cafe에 두 분 자리가 일곱 시 반에 예약
    22.99s  user  발화 끝
    24.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.61s]: (tool result) Reservation confirmed at Zuni Cafe for two people at sev
    31.17s  agent 발화 끝
    31.47s  user  발화 시작: 잘 됐네요! 주소는 다시 한번 알려주시겠어요?
    34.18s  <ret> 발화 (turn7 첫 프레임)
    34.25s  agent 발화 시작: <ret> 전에 말씀드렸던 것 같은데, 다시 한번 Zuni Cafe의 주소를 말씀드릴게요… Zuni Cafe
    34.42s  user  발화 끝
    35.14s  ⚡SPAN 주입 [d'=0.96s / d_lead=6.72s]: (tool result) Zuni Cafe is located at 1658 Market Street, San Francisc
    44.08s  agent 발화 끝
    44.86s  user  발화 시작: 알겠습니다. 그리고 페리 빌딩에서 얼마나 떨어져 있나요?
    47.63s  <ret> 발화 (turn9 첫 프레임)
    47.87s  agent 발화 시작: <ret> 거리를 계산하고 이동 시간을 알려 드릴 수 있습니다… 페리 빌딩에서 Zuni Cafe까지는 일 점
    47.91s  user  발화 끝
    49.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.97s]: (tool result) The distance from the Ferry Building to Zuni Cafe is one
    57.57s  agent 발화 끝
    58.37s  user  발화 시작: 삼십오 분이나요? 그건—
    59.95s  user  발화 시작: 대중교통이 더 빠를까요?
    60.16s  user  발화 끝
    61.04s  <ret> 발화 (turn12 첫 프레임)
    61.36s  agent 발화 시작: <ret> 네, 좋은 질문이에요. 대중교통이 더 빠를 수 있습니다… 대중교통을 이용하면 Zuni Cafe까지
    61.56s  user  발화 끝
    63.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.55s]: (tool result) Public transit from the Ferry Building to Zuni Cafe take
    69.93s  agent 발화 끝
    69.97s  user  발화 시작: 알겠습니다, 훌륭하네요. 어떤 버스를 타야 하나요?
    72.97s  <ret> 발화 (turn14 첫 프레임)
    73.13s  agent 발화 시작: <ret> 구체적인 대중교통 노선을 찾아 드릴게요… N Judah 노선을 타고 Church Street 방향
    73.20s  user  발화 끝
    74.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.61s]: (tool result) Take the N Judah Muni Metro line inbound to the Church S
    81.89s  agent 발화 끝
    82.36s  user  발화 시작: N Judah… 알겠습니다. Zuni 근처에 다른 재미있는 곳은 없나요?
    86.34s  agent 발화 시작: 사실 그 동네에는 탐험할 곳이 많아요. 아주 활기찬 지역입니다.
    86.39s  user  발화 끝
    90.41s  agent 발화 끝
    91.13s  user  발화 시작: 무엇이요? 특히 식당 같은 곳이 있을까요?
    93.39s  <ret> 발화 (turn18 첫 프레임)
    93.69s  agent 발화 시작: <ret> 네, 근처 식당을 찾아 드릴 수 있습니다… Souvla, Brenda’s, 그리고 Nopa가 모두
    93.85s  user  발화 끝
    95.07s  ⚡SPAN 주입 [d'=1.68s / d_lead=5.25s]: (tool result) Nearby restaurants include Souvla, Brenda’s French Soul 
   101.57s  user  발화 시작: Brenda’s French Soul Food가 맛있겠네요. 가격대는 어떻게 되나요?
   101.58s  agent 발화 끝
   105.01s  <ret> 발화 (turn20 첫 프레임)
   105.15s  agent 발화 시작: <ret> 가격이 어떤지 한번 알아볼게요… Brenda’s의 요리는 보통 이십 달러에서 사십 달러 정도입니다
   105.41s  user  발화 끝
   106.93s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.35s]: (tool result) Brenda’s French Soul Food has a price range of $$ which 
   110.85s  user  발화 시작: 알겠습니다. 지금도 영업하고 있나요?
   110.89s  agent 발화 끝
   112.62s  <ret> 발화 (turn22 첫 프레임)
   113.02s  agent 발화 시작: <ret> Brenda’s의 현재 영업시간을 빠르게 확인해 드릴 수 있습니다… Brenda’s는 지금 열려 
   113.25s  user  발화 끝
   114.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.87s]: (tool result) Brenda’s French Soul Food is currently open and closes a
   120.34s  agent 발화 끝
   120.56s  user  발화 시작: 오후 세 시요? 너무 이르네요. 괜찮아요, 신경 쓰지 마세요.
   124.38s  agent 발화 시작: 그렇군요. 다음에 또 기회가 있겠네요. 브런치로 인기가 많은 곳이기도 합니다.
   124.39s  user  발화 끝
   128.94s  user  발화 시작: 네, 아마도요. 정말 많은 도움을 주셔서 감사합니다!
   129.10s  agent 발화 끝
   132.08s  agent 발화 시작: 천만에요.
   132.12s  user  발화 끝
   133.09s  agent 발화 끝
