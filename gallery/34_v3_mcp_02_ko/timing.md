# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: weather.example.com에서 날씨 업데이트 좀 봐 주세요.
     3.83s  <ret> 발화 (turn1 첫 프레임)
     3.91s  agent 발화 시작: <ret> 네, 지금 런던은 섭씨 15도이고 부분적으로 흐립니다.
     4.02s  user  발화 끝
     5.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.93s]: (tool result) The website reports current conditions in London are 15 
     7.84s  agent 발화 끝
     7.86s  user  발화 시작: 아, 그게… 사실 알게 돼서 좋네요. 해가 쨍쨍했으면 좋았겠지만—
    12.19s  agent 발화 시작: 혹시 산책 계획 때문에 그러시는 건가요?
    12.21s  user  발화 끝
    14.54s  agent 발화 끝
    15.51s  user  발화 시작: 네, 딱 맞아요! 나중에 날씨가 맑아질까요?
    18.40s  <ret> 발화 (turn5 첫 프레임)
    18.80s  agent 발화 시작: <ret> 런던의 시간별 예보를 확인해 볼게요. 런던에서는 오후 세 시에 햇볕이 날 것으로 예상되며, 최고 
    19.02s  user  발화 끝
    20.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.10s]: (tool result) The forecast shows sunshine arriving in London at 3 PM, 
    27.52s  agent 발화 끝
    27.56s  user  발화 시작: 정말 다행이네요! 딱 좋네요. 그때 나가 봐야겠어요. 모시, 고마워요.
    33.02s  user  발화 끝
