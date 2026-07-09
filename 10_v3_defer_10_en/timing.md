# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Find pictures related to my holida | S2 No, that’s okay. Can you book a ta | S3 Oh, actually… what time does the m | S4 Okay, great.

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.13s  <ret> 발화 (turn1 첫 프레임)
     4.17s  agent 발화 시작: <ret> I located seven photos from your France trip last year
     4.35s  user  발화 끝
     6.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.89s]: (tool result) Found seven files: "Paris_Eiffel_Tower.jpg", "Nice_Beach
     7.78s  user  발화 시작: Mhm.
     8.27s  user  발화 끝
    10.06s  agent 발화 끝
    10.71s  user  발화 시작: No, that’s okay. Can you book a table for two at a nice Ital
    15.98s  <ret> 발화 (turn4 첫 프레임)
    16.14s  agent 발화 시작: <ret> I’ve booked a table for two at Bella Notte tomorrow at
    16.32s  user  발화 끝
    17.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.67s]: (tool result) Reservation confirmed at Bella Notte, downtown, tomorrow
    18.31s  user  발화 시작: Really?
    18.95s  user  발화 끝
    22.81s  agent 발화 끝
    23.29s  user  발화 시작: Oh, actually… what time does the museum close on Tuesdays?
    27.27s  agent 발화 시작: Give me a moment to check the museum’s hours for you.
    27.36s  user  발화 끝
    28.73s  user  발화 시작: Mhm.
    29.03s  user  발화 끝
    29.74s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The museum is open on Tuesdays from 10 AM to 6 PM.
    29.82s  user  발화 시작: Okay, great.
    29.86s  agent 발화 끝
    30.50s  agent 발화 시작: <ret> I have that information now.
    30.55s  user  발화 끝
    32.21s  agent 발화 끝
