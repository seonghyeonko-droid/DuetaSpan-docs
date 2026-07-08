# v3_mcp_02_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Can you take a screenshot of the entire body of the webpage 
     7.39s  agent 발화 시작: <ret> Certainly. The full-page screenshot of Google’s homepa
     7.39s  <ret> 발화 (turn1 첫 프레임)
     7.39s  user  발화 끝
     7.55s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.43s]: File saved as homepage.png.
    12.60s  user  발화 시작: Oh, that’s great. Um, I was just reading about Charlie Parke
    12.60s  agent 발화 끝
    19.56s  agent 발화 시작: He truly was. A revolutionary improviser, pushing boundaries
    19.56s  user  발화 끝
    24.34s  user  발화 시작: Right. Okay, so, I need to book a flight to New Orleans for 
    24.34s  agent 발화 끝
    30.86s  agent 발화 시작: <ret> Consider it done. Your flight from New York to New Orl
    30.86s  <ret> 발화 (turn5 첫 프레임)
    30.86s  user  발화 끝
    31.74s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.30s]: Flight booked: New York to New Orleans, December 21st, $285.
    39.98s  agent 발화 끝
