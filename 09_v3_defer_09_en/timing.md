# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 What’s the cancellation policy? | S3 Does that apply to all three rooms | S4 Great. And could you send me a cop

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.69s  <ret> 발화 (turn1 첫 프레임)
     5.92s  agent 발화 시작: <ret> Certainly. I’ve reserved three rooms at the Ocean View
     6.07s  user  발화 끝
     7.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.30s]: (tool result) Reservation confirmed for three rooms at Ocean View Hote
    10.28s  user  발화 시작: Mm-hmm.
    10.77s  user  발화 끝
    12.22s  agent 발화 끝
    12.30s  user  발화 시작: What’s the cancellation policy?
    14.19s  <ret> 발화 (turn4 첫 프레임)
    14.34s  agent 발화 시작: <ret> You can cancel up to forty-eight hours before arrival—
    14.51s  user  발화 끝
    16.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.24s]: (tool result) Cancellations are permitted up to forty-eight hours prio
    16.84s  user  발화 시작: Does that apply to all three rooms?
    17.59s  agent 발화 끝
    19.17s  agent 발화 시작: Yes, that applies to all three rooms in your reservation. It
    19.19s  user  발화 끝
    24.73s  user  발화 시작: Great. And could you send me a copy of the confirmation to m
    24.78s  agent 발화 끝
    28.33s  <ret> 발화 (turn8 첫 프레임)
    28.72s  agent 발화 시작: <ret> Absolutely. I’ve just sent the confirmation details to
    28.81s  user  발화 끝
    30.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.42s]: (tool result) Confirmation email sent to user@example.com with reserva
    35.14s  agent 발화 끝
