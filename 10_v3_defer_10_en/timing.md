# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     5.01s  <ret> 발화 (turn1 첫 프레임)
     5.09s  user  발화 끝
     5.09s  agent 발화 시작: <ret> Okay, locating photos from your France trip sounds lov
     7.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.07s]: (tool result) Three files were found: "Paris_EiffelTower.jpg", "Proven
    11.02s  user  발화 시작: Mhm.
    11.65s  user  발화 끝
    14.50s  user  발화 시작: Can you send "Paris_EiffelTower.jpg" to my sister, Sarah?
    14.60s  agent 발화 끝
    18.84s  <ret> 발화 (turn4 첫 프레임)
    18.98s  agent 발화 시작: <ret> Certainly, sending a picture to Sarah is easy. The Eif
    19.17s  user  발화 끝
    19.80s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.42s]: (tool result) The file "Paris_EiffelTower.jpg" was successfully sent t
    27.10s  agent 발화 끝
