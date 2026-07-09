# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 weather.example.com에서 날씨 업데이트 좀 봐  | S2 아, 생각보다 춥네요. [sigh] 사실, 햇볕이 쨍쨍했으면  | S3 아마도요. 음, 내일 뉴욕에서 런던으로 가는 직항편이 있는지  | S4 흠, 유나이티드항공편이 괜찮은 것 같아요. 그걸 예약해 주세요

     0.00s  user  발화 시작: weather.example.com에서 날씨 업데이트 좀 봐 주세요.
     3.49s  <ret> 발화 (turn1 첫 프레임)
     3.64s  agent 발화 시작: <ret> 네, 현재 런던의 기온은 12도이고 흐린 하늘이에요.
     3.70s  user  발화 끝
     5.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.78s]: (tool result) The website reports current conditions in London are 12 
     7.42s  agent 발화 끝
     7.54s  user  발화 시작: 아, 생각보다 춥네요. [sigh] 사실, 햇볕이 쨍쨍했으면 좋았을 텐데요.
    12.35s  user  발화 끝
    12.39s  agent 발화 시작: 런던 날씨는 변덕스러울 수 있어요. 혹시 런던에 여행을 가실 계획이 있으세요?
    17.12s  agent 발화 끝
    18.01s  user  발화 시작: 아마도요. 음, 내일 뉴욕에서 런던으로 가는 직항편이 있는지 확인해 주시겠어요?
    23.20s  <ret> 발화 (turn5 첫 프레임)
    23.60s  agent 발화 시작: <ret> 네, 직항편을 알아봐 드릴 수 있어요. 내일은 750달러부터 820달러까지 세 개의 직항편이 있어
    23.80s  user  발화 끝
    25.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.68s]: (tool result) There are three direct flights tomorrow: United at 9:00 
    26.60s  user  발화 시작: 네네.
    27.37s  user  발화 끝
    30.28s  user  발화 시작: 흠, 유나이티드항공편이 괜찮은 것 같아요. 그걸 예약해 주세요.
    30.36s  agent 발화 끝
    34.52s  <ret> 발화 (turn8 첫 프레임)
    34.91s  agent 발화 시작: <ret> 네, 예약을 도와드릴게요. 오전 9시에 출발하는 유나이티드항공편이 예약되었고, 예약 참조번호는 알
    35.09s  user  발화 끝
    35.80s  ⚡SPAN 주입 [d'=1.28s / d_lead=7.70s]: (tool result) Your United flight to London tomorrow at 9:00 AM is conf
    43.39s  agent 발화 끝
