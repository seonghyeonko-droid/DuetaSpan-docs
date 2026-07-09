# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 That sounds good, but— | S3 Is breakfast included with the roo | S4 Okay, add breakfast for all three 

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.46s  <ret> 발화 (turn1 첫 프레임)
     5.68s  agent 발화 시작: <ret> Excellent. Your reservation for three rooms at Ocean V
     5.84s  user  발화 끝
     7.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: (tool result) Reservation confirmed for three rooms at Ocean View Hote
    10.11s  user  발화 시작: Mm-hmm.
    10.73s  user  발화 끝
    12.12s  agent 발화 끝
    12.14s  user  발화 시작: What's the cancellation policy?
    13.79s  <ret> 발화 (turn4 첫 프레임)
    13.94s  agent 발화 시작: <ret> Ocean View Hotel offers free cancellation up to sevent
    14.07s  user  발화 끝
    15.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.44s]: (tool result) Ocean View Hotel allows free cancellation up to seventy-
    19.30s  user  발화 시작: That sounds good, but—
    19.38s  agent 발화 끝
    20.41s  user  발화 시작: Is breakfast included with the room?
    20.64s  user  발화 끝
    22.76s  agent 발화 시작: Breakfast is not automatically included, but—
    22.86s  user  발화 끝
    25.05s  <ret> 발화 (turn8 첫 프레임)
    25.35s  agent 발화 시작: <ret> Breakfast is available for twenty dollars per person e
    25.49s  agent 발화 끝
    27.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.70s]: (tool result) Ocean View Hotel offers breakfast for an additional twen
    28.90s  user  발화 시작: Okay, add breakfast for all three rooms.
    29.05s  agent 발화 끝
    30.96s  <ret> 발화 (turn10 첫 프레임)
    31.35s  agent 발화 시작: <ret> Certainly. I’ve added breakfast for all nine guests, t
    31.58s  user  발화 끝
    32.08s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.32s]: (tool result) Breakfast has been added to your reservation for nine gu
    36.67s  agent 발화 끝
