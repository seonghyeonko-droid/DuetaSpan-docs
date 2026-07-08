# v3_rag_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I'm trying to settle a debate with a friend. Which docum
     8.68s  agent 발화 시작: That’s a common point of confusion, actually. Both are relat
     8.68s  user  발화 끝
    17.35s  user  발화 시작: Yeah, but *which* one? He insists Almost Sunrise was earlier
    17.35s  agent 발화 끝
    21.48s  agent 발화 시작: <ret> Let’s have a look… 51 Birch Street premiered before Al
    21.48s  <ret> 발화 (turn3 첫 프레임)
    21.48s  user  발화 끝
    22.48s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.65s]: 51 Birch Street was released on November 19, 2021, and Almost Sunrise 
    29.33s  user  발화 시작: Two months? Hmm… I thought I remembered it being closer. Are
    29.33s  agent 발화 끝
    35.53s  agent 발화 시작: Absolutely. It’s a detail I checked myself when researching 
    35.53s  user  발화 끝
    43.38s  user  발화 시작: Okay, okay. Fine. 51 Birch Street it is. What’s it even *abo
    43.38s  agent 발화 끝
    48.75s  agent 발화 시작: It’s a profoundly moving portrait of a family grappling with
    48.75s  user  발화 끝
    57.43s  user  발화 시작: Sounds…heavy. Is it still available to stream anywhere?
    57.43s  agent 발화 끝
    60.74s  agent 발화 시작: <ret> I can certainly check that for you. It is currently av
    60.74s  <ret> 발화 (turn9 첫 프레임)
    60.74s  user  발화 끝
    61.74s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.89s]: (tool result) Available on: Apple TV, Amazon Prime Video. Rental price
    73.13s  user  발화 시작: Fourteen ninety-nine? That’s a bit steep for a rental. I’ll 
    73.13s  agent 발화 끝
    79.74s  agent 발화 시작: A wise choice, perhaps. Sometimes a rental is enough to appr
    79.74s  user  발화 끝
    88.00s  agent 발화 끝
