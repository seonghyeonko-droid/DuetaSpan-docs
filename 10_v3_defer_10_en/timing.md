# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Open Google on a small mobile screen using the webkit browse
     3.59s  agent 발화 시작: <ret> Certainly. Google is now open on a small mobile screen
     3.59s  <ret> 발화 (turn1 첫 프레임)
     3.59s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.33s]: (page_opened: True, url: https://www.google.com, viewport: width=375, 
     3.59s  user  발화 끝
     8.81s  user  발화 시작: Uh, can you search for "Ella Fitzgerald discography"?
     8.81s  agent 발화 끝
    11.42s  agent 발화 시작: <ret> Of course. I found results for Ella Fitzgerald’s disco
    11.42s  <ret> 발화 (turn3 첫 프레임)
    11.42s  user  발화 끝
    11.66s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.65s]: (search_results: [“Ella Fitzgerald – Official Website”, “Discography -
    16.32s  user  발화 시작: Book a table for two at a jazz club in New York, tomorrow ni
    16.32s  agent 발화 끝
    20.89s  agent 발화 시작: That’s a bit broad, I’ll need a specific club, or neighborho
    20.89s  user  발화 끝
    26.76s  user  발화 시작: Okay, um, how about the Village Vanguard?
    26.76s  agent 발화 끝
    28.40s  ⚡지연 SPAN 주입(선제발표 직전): (reservation_confirmed: True, restaurant: “Village Vanguard”, date: “2
    29.05s  agent 발화 시작: <ret> Right, the Village Vanguard. A table for two at the Vi
    29.05s  user  발화 끝
    35.90s  agent 발화 끝
