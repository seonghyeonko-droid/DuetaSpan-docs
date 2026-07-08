# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Can you give me the coordinates for the Eiffel Tower in Pari
     3.20s  <ret> 발화 (turn1 첫 프레임)
     3.44s  agent 발화 시작: <ret> Certainly, locating landmarks is a familiar task. The 
     3.55s  user  발화 끝
     4.16s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.00s]: (tool result) The Eiffel Tower is located at latitude 48.8584, longitu
    14.94s  user  발화 시작: And what about the Empire State Building in New York?
    15.03s  agent 발화 끝
    17.47s  <ret> 발화 (turn3 첫 프레임)
    17.87s  agent 발화 시작: <ret> Comparing famous structures is always interesting. The
    18.13s  user  발화 끝
    19.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.58s]: (tool result) The Empire State Building is located at latitude 40.7484
    29.46s  agent 발화 끝
    29.71s  user  발화 시작: Could you tell me the distance between them?
    32.11s  agent 발화 시작: That’s a good question—
    32.16s  user  발화 끝
    33.35s  <ret> 발화 (turn6 첫 프레임)
    33.51s  agent 발화 시작: <ret> The distance between the two landmarks is three thousa
    33.72s  agent 발화 끝
    35.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: (tool result) The distance between the Eiffel Tower and the Empire Sta
    38.85s  user  발화 시작: Wow, that's far. Thanks!
    38.93s  agent 발화 끝
    41.29s  user  발화 끝
    41.47s  agent 발화 시작: It certainly
    42.57s  agent 발화 끝
