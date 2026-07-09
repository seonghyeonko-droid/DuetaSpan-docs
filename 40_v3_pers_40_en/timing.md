# v3_pers_40_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Kim · Location: San Francisco, United States · Nationality: American · Gender: non-binary · Age: 50s · TZ: America/Los_Angeles (PST, UTC-8) · Currency: USD ($)
#   B. 저장 메모리:
#      [2026-08-04] User's home address is 165 Cedar Lane.
#      [2026-07-16] User's favorite cuisine is Thai.
#      [2026-07-13] User prefers a window seat when traveling.
#      [2026-06-19] User is planning a trip to Switzerland in December.
#      [2026-02-21] User is gluten-free.
#      [2026-02-14] User works as a software engineer.
#   B. 과거 대화 요약:
#      [2026-04-24] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han
#      [2026-03-15] Apartment hunting downtown — wanted a pet-friendly building; budget for 2 bedrooms


     0.00s  agent 발화 시작: Kim, so lovely to connect with you. I’m Ara, and I help peop
    10.66s  user  발화 시작: Ara… that’s a pretty name. I’m just… overwhelmed, honestly. 
    10.67s  agent 발화 끝
    17.89s  user  발화 끝
    18.40s  agent 발화 시작: It absolutely can feel that way, and it’s perfectly normal t
    29.20s  agent 발화 끝
    30.49s  user  발화 시작: I— I mean, just groceries, really. It’s like, a hundred doll
    37.40s  user  발화 끝
