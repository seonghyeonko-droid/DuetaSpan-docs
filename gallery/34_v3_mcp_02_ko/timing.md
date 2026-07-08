# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 날씨 업데이트를 weather dot example dot com에서 확인해 주세요.
     3.65s  <ret> 발화 (turn1 첫 프레임)
     3.80s  agent 발화 시작: <ret> 네, 그 웹사이트를 모니터링해 드릴 수 있습니다. 지금 weather dot example dot
     3.84s  user  발화 끝
     5.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.46s]: (tool result) The website reports a temperature of twenty-two degrees 
    12.01s  agent 발화 끝
    12.03s  user  발화 시작: 아, 좋네요. 사실 내일 크래그 산에 등산할 계획이에요.
    15.86s  user  발화 끝
    16.00s  agent 발화 시작: 크래그 산은 아름다운 등반 코스이지만, 꽤 힘든 곳입니다. 전에 가보신 적이 있으세요?
    21.60s  agent 발화 끝
    22.53s  user  발화 시작: 아니요, 처음 가보는 곳이에요. 내일 정상의 예보는 어떻게 되나요?
    26.25s  <ret> 발화 (turn5 첫 프레임)
    26.65s  agent 발화 시작: <ret> 자세한 예보를 확인해 드릴 수 있습니다. 내일 정상의 예보에는 섭씨 십오도에 비가 올 확률이 사십
    26.87s  user  발화 끝
    28.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.17s]: (tool result) The summit forecast predicts a high of fifteen degrees C
    33.32s  agent 발화 끝
    33.36s  user  발화 시작: 사십 퍼센트요? 음, 비옷을 챙겨야 할까요…
    37.06s  user  발화 끝
    37.07s  agent 발화 시작: 비가 올 확률이 있으니 비옷을 챙기는 것이 아주 현명한 예방책일 거예요.
    41.57s  user  발화 시작: 알겠습니다, 좋은 말씀이네요. 오늘 저녁 여섯 시에 예보를 다시 확인하라고 알려주시겠어요?
    41.66s  agent 발화 끝
    46.95s  <ret> 발화 (turn9 첫 프레임)
    47.02s  agent 발화 시작: <ret> 네, 그렇게 해 드릴게요. 오늘 저녁 여섯 시에 크래그 산의 예보를 확인하라고 알림을 설정했습니다
    47.18s  user  발화 끝
    48.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.26s]: (tool result) A reminder has been set for six PM tonight to check the 
    52.98s  agent 발화 끝
