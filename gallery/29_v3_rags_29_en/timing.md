# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Who did Eric kill on Days of Our Lives?
     1.78s  <ret> 발화 (turn1 첫 프레임)
     2.37s  agent 발화 시작: <ret> That’s a rather dark question, but I can certainly loo
     2.58s  user  발화 끝
     5.22s  ⚡SPAN 주입 [d'=3.44s / d_lead=5.24s]: Eric Brady accidentally shot and killed his best friend, Daniel Jonas,
    13.22s  agent 발화 끝
