# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 What’s the cancellation policy? | S3 Does that apply to all three rooms | S4 No, that’s alright. How much did t

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.49s  <ret> 발화 (turn1 첫 프레임)
     5.72s  agent 발화 시작: <ret> Excellent. I’ve reserved three rooms for you at the Oc
     5.88s  user  발화 끝
     7.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.47s]: (tool result) Reservation confirmed for three rooms at Ocean View Hote
    12.19s  agent 발화 끝
    12.89s  user  발화 시작: What’s the cancellation policy?
    14.48s  <ret> 발화 (turn3 첫 프레임)
    14.63s  agent 발화 시작: <ret> The Ocean View Hotel allows free cancellation up to se
    14.87s  user  발화 끝
    16.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: (tool result) Ocean View Hotel allows free cancellation until seven da
    18.84s  user  발화 시작: Does that apply to all three rooms?
    19.63s  agent 발화 끝
    21.03s  agent 발화 시작: That’s a good question. Yes, the free cancellation applies t
    21.15s  user  발화 끝
    23.76s  user  발화 시작: Yeah.
    24.21s  user  발화 끝
    25.92s  agent 발화 시작: I can also set a reminder for you about the cancellation dea
    25.94s  agent 발화 끝
    29.90s  user  발화 시작: No, that’s alright. How much did that reservation cost in to
    29.90s  agent 발화 끝
    33.60s  <ret> 발화 (turn9 첫 프레임)
    33.99s  agent 발화 시작: <ret> The total cost for your three rooms comes to two thous
    34.21s  user  발화 끝
    35.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.07s]: (tool result) The total cost for the reservation is two thousand one h
    38.06s  agent 발화 끝
