# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 What’s the cancellation policy? | S3 Is parking included with the reser | S4 I think we’ll take the self-parkin

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.36s  <ret> 발화 (turn1 첫 프레임)
     5.51s  agent 발화 시작: <ret> Certainly. I’ve reserved three rooms at the Ocean View
     5.62s  user  발화 끝
     6.80s  ⚡SPAN 주입 [d'=1.44s / d_lead=6.85s]: (tool result) Reservation confirmed for three rooms at Ocean View Hote
    12.12s  user  발화 시작: What’s the cancellation policy?
    12.36s  agent 발화 끝
    14.13s  <ret> 발화 (turn3 첫 프레임)
    14.45s  agent 발화 시작: <ret> Let me check on that for you— You may cancel up to for
    14.57s  user  발화 끝
    15.09s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.17s]: (tool result) Cancellations are permitted up to forty-eight hours prio
    17.87s  user  발화 시작: Yeah.
    18.50s  user  발화 끝
    20.67s  agent 발화 끝
    21.94s  user  발화 시작: Is parking included with the reservation?
    24.27s  <ret> 발화 (turn6 첫 프레임)
    24.66s  agent 발화 시작: <ret> That’s a great question. Parking is available at the h
    24.81s  user  발화 끝
    26.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.91s]: (tool result) Valet parking is available for twenty dollars per night,
    29.43s  agent 발화 시작: Valet parking is twenty dollars nightly, and self-parking is
    29.56s  agent 발화 끝
    34.62s  agent 발화 끝
    34.82s  user  발화 시작: I think we’ll take the self-parking.
    37.11s  agent 발화 시작: Wonderful. I've added self-parking to your reservation at fi
    37.27s  user  발화 끝
    45.03s  agent 발화 끝
