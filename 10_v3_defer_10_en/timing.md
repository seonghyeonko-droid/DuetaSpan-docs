# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.82s  <ret> 발화 (turn1 첫 프레임)
     4.89s  agent 발화 시작: <ret> Okay, locating photos from your France trip— I found s
     5.09s  user  발화 끝
     6.02s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.61s]: (tool result) Seven image files were found: "Paris_EiffelTower.jpg", "
     8.76s  user  발화 시작: Mhm.
     9.21s  user  발화 끝
    11.22s  agent 발화 끝
    11.33s  user  발화 시작: Can you tell me which ones are in color?
    13.51s  agent 발화 시작: Let me check on that.
    13.59s  user  발화 끝
    14.61s  agent 발화 끝
    15.15s  user  발화 시작: Okay, thanks. I was also wondering about setting a reminder.
    18.05s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The color images are: "Paris_EiffelTower.jpg", "Nice_Bea
    18.50s  agent 발화 시작: <ret> Right, about those colors— Five of the photos – Paris,
    18.71s  user  발화 끝
    24.11s  agent 발화 끝
