# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: 보아 · Location: Busan, South Korea · Nationality: Korean · Gender: female · Age: late 30s · TZ: Asia/Seoul (KST, UTC+9) · Currency: KRW (₩)
#   B. 저장 메모리:
#      [2026-07-13] User has a tabby cat named Luna.
#      [2026-06-22] User's home address is 530 Elm Street.
#      [2026-05-15] User's favorite cuisine is Korean BBQ.
#      [2026-04-11] User is vegetarian.
#      [2026-03-03] User is allergic to pollen.
#      [2026-02-06] User is into marathon training.
#   B. 과거 대화 요약:
#      [2026-07-17] Apartment hunting downtown — wanted a pet-friendly building; budget for 2 bedrooms
#      [2026-05-13] Researching a used car — comparing hybrid models; wants under 30k miles

# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 What’s the cancellation policy? | S3 Is parking included with the reser | S4 Okay, that’s good to know. Can you

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     6.02s  <ret> 발화 (turn1 첫 프레임)
     6.21s  user  발화 끝
     6.25s  agent 발화 시작: <ret> Certainly, let me confirm those details for you… I’ve 
     8.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.36s]: (tool result) Your reservation is confirmed for three rooms at Ocean V
    11.48s  user  발화 시작: Mm-hmm.
    11.97s  user  발화 끝
    13.80s  agent 발화 끝
    13.90s  user  발화 시작: What’s the cancellation policy?
    15.94s  agent 발화 시작: The hotel allows free cancellation up to twenty-four hours b
    16.06s  user  발화 끝
    20.80s  agent 발화 끝
    21.10s  user  발화 시작: Is parking included with the reservation?
    23.68s  <ret> 발화 (turn6 첫 프레임)
    23.88s  user  발화 끝
    23.98s  agent 발화 시작: <ret> That’s a good question— Parking is available for twent
    24.80s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.28s]: (tool result) Parking is available at Ocean View Hotel for twenty-five
    28.78s  agent 발화 끝
    29.03s  user  발화 시작: Okay, that’s good to know. Can you send me a confirmation em
    32.84s  <ret> 발화 (turn8 첫 프레임)
    33.08s  agent 발화 시작: <ret> Absolutely, I can take care of that right away… I’ve j
    33.15s  user  발화 끝
    34.36s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.73s]: (tool result) A confirmation email has been sent to user@example.com w
    38.54s  agent 발화 끝
