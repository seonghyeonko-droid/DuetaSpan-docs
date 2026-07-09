# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: When was the printing press invented in Europe, specifically
     3.28s  <ret> 발화 (turn1 첫 프레임)
     3.52s  agent 발화 시작: <ret> That’s a fundamental question for understanding inform
     3.79s  user  발화 끝
     5.12s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.80s]: The printing press was invented in Europe around fourteen forty.
    11.59s  agent 발화 끝
