# v3_mcp_01_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: When does the next flight from Los Angeles to New York leave
     3.24s  <ret> 발화 (turn1 첫 프레임)
     3.32s  ⚡SPAN 주입 [d'=0.08s / d_lead=1.72s]: (tool result) The next flight departs Los Angeles at 8:00 AM and arriv
     3.70s  user  발화 끝
     3.84s  agent 발화 시작: <ret> Let me check that for you. The next flight from Los An
    11.30s  agent 발화 끝
    11.47s  user  발화 시작: That’s really early. Are there any direct flights leaving af
    14.70s  <ret> 발화 (turn3 첫 프레임)
    15.30s  agent 발화 시작: <ret> Hmm, let’s see what’s available later in the day.
    15.50s  user  발화 끝
    15.70s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.96s]: (tool result) A direct flight leaves Los Angeles at 2:15 PM and arrive
    17.74s  agent 발화 시작: There’s a direct flight leaving at two fifteen PM, arriving 
    18.26s  agent 발화 끝
    24.17s  agent 발화 끝
    24.75s  user  발화 시작: Okay, that one sounds better. Can you book me a seat on that
    28.81s  <ret> 발화 (turn6 첫 프레임)
    29.40s  agent 발화 시작: <ret> Certainly, I can take care of that. Your seat is booke
    29.47s  user  발화 끝
    29.81s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.71s]: (tool result) Your seat is confirmed; booking reference is ZX789Q.
    35.42s  user  발화 시작: Perfect. Thanks so much.
    35.60s  agent 발화 끝
    37.49s  user  발화 끝
