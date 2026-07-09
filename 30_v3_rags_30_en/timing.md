# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: When was the printing press invented in Europe, specifically
     3.01s  <ret> 발화 (turn1 첫 프레임)
     3.24s  agent 발화 시작: <ret> That’s a fascinating question, thinking about how know
     3.47s  user  발화 끝
     4.85s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.39s]: The printing press was invented in Europe around fourteen forty.
    11.53s  agent 발화 끝
