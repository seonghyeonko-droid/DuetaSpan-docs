# v3_pers_40_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
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


     0.00s  agent 발화 시작: 김 님, 연결되어서 정말 기뻐요. 저는 아라라고 하고요, 사람들이 재정을 좀 더 자신감 있고 편안하게 관리할
    13.41s  user  발화 시작: 아라… 이름 예쁘네. 솔직히 말하면, 그냥 너무 힘들어. 샌프란시스코 물가가 너무 비싸.
    13.54s  agent 발화 끝
    20.40s  agent 발화 시작: 정말 그럴 수 있고, 비용이 계속 오르는 것 같을 때 압도감을 느끼는 건 당연해요. 지금 가장 시급한 문제는
    20.55s  user  발화 끝
    29.11s  agent 발화 끝
    29.52s  user  발화 시작: 음… 사실 식료품이야. 요즘 한 번 갈 때마다 100달러나 나오고, 예전에는 60달러였거든. 모든 게 점점 
    38.14s  user  발화 끝
