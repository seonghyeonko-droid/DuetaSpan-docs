# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Find pictures related to my holida | S2 Oh, fantastic! Can you send the Pa | S3 Actually, yes. What’s the weather  | S4 Okay, great.

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     5.06s  <ret> 발화 (turn1 첫 프레임)
     5.12s  agent 발화 시작: <ret> I found three photos from your France trip last year: 
     5.28s  user  발화 끝
     7.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.69s]: (tool result) Found three files: "Paris_EiffelTower.jpg", "Nice_Beach.
     8.00s  user  발화 시작: Mhm.
     8.49s  user  발화 끝
     9.80s  agent 발화 끝
    10.57s  user  발화 시작: Oh, fantastic! Can you send the Paris one to my sister, her 
    16.99s  <ret> 발화 (turn4 첫 프레임)
    17.31s  agent 발화 시작: <ret> The Paris photo is now on its way to Anna. Is there an
    17.38s  user  발화 끝
    18.03s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.96s]: (tool result) Email sent to anna.reid@email.com with attachment "Paris
    20.39s  user  발화 시작: Yeah.
    21.02s  user  발화 끝
    22.26s  agent 발화 끝
    22.75s  user  발화 시작: Actually, yes. What’s the weather like in Lyon right now?
    26.52s  agent 발화 시작: Let me check on that for you.
    26.59s  user  발화 끝
    27.64s  user  발화 시작: Yeah.
    28.12s  user  발화 시작: Okay, great.
    28.13s  user  발화 끝
    28.14s  agent 발화 끝
    28.35s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The current weather in Lyon is 18 degrees Celsius, partl
    29.28s  agent 발화 시작: <ret> Just a moment while I retrieve that information… It’s 
    29.45s  user  발화 끝
    36.98s  agent 발화 끝
