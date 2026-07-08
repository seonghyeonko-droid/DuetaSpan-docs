# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.54s  <ret> 발화 (turn1 첫 프레임)
     4.62s  agent 발화 시작: <ret> Let’s see what I can locate for you… I found three pic
     4.63s  user  발화 끝
     5.98s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.62s]: (tool result) Three files were found: "Paris_Eiffel_Tower.jpg", "Prove
    14.13s  user  발화 시작: Oh, excellent! Can you open the one of the Eiffel Tower?
    14.13s  agent 발화 끝
    17.50s  <ret> 발화 (turn3 첫 프레임)
    17.79s  user  발화 끝
    17.81s  agent 발화 시작: <ret> Certainly, I can do that for you… The Eiffel Tower pic
    18.46s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.25s]: (tool result) File "Paris_Eiffel_Tower.jpg" is now displayed.
    23.60s  agent 발화 끝
