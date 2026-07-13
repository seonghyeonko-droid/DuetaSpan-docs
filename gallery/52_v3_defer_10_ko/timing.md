# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "진빈",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-09",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-05-26",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-05-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 로스앤젤레스에서 샌프란시스코까지 버스 타면 얼마나 걸려, 삼월 | S2 음, 그럼 제일 싼 버스는 몇 시에 출발해? | S3 아, 그건 좀 비싸네. 그럼 혹시 지금 서울에서 부산 가는 버 | S4 아… 그럼 그냥 로스앤젤레스-샌프란시스코 버스 예약해 줘, 제

     0.00s  user  발화 시작: 로스앤젤레스에서 샌프란시스코까지 버스 타면 얼마나 걸려, 삼월 이십이일?
     3.82s  <ret> 발화 (turn1 첫 프레임)
     3.83s  agent 발화 시작: <ret> 로스앤젤레스에서 샌프란시스코까지 버스로는 대략 여덟시간 반 정도 걸리고, 가격은 육십오달러에서 백
     3.83s  user  발화 끝
     5.32s  ⚡SPAN 주입 [d'=1.50s / d_lead=5.75s]: (tool result) The bus ride from Los Angeles to San Francisco on March 
     9.58s  user  발화 시작: 응.
     9.58s  agent 발화 끝
    10.06s  user  발화 시작: 음, 그럼 제일 싼 버스는 몇 시에 출발해?
    10.06s  user  발화 끝
    13.89s  agent 발화 시작: 제일 저렴한 버스는 오전 여섯시에 출발하고, 가격은 육십오달러입니다. 다른 시간대도 알아볼까요?
    13.89s  user  발화 끝
    19.16s  user  발화 시작: 오.
    19.16s  agent 발화 끝
    19.64s  agent 발화 시작: [happy] 삼월 이십이일 오후 두시에 출발하는 버스도 칠십달러로 괜찮은 가격이에요.
    19.64s  user  발화 끝
    24.43s  user  발화 시작: 와.
    24.43s  agent 발화 끝
    24.91s  user  발화 시작: 아, 그건 좀 비싸네. 그럼 혹시 지금 서울에서 부산 가는 버스 시간 좀 알려줄 수 있어?
    24.91s  user  발화 끝
    32.03s  <ret> 발화 (turn9 첫 프레임)
    32.58s  agent 발화 시작: <ret> 서울에서 부산 가는 버스 시간 정보를 찾고 있어요. 죄송하지만, 지금 서울에서 부산 가는 버스 시
    32.58s  user  발화 끝
    32.98s  ⚡SPAN 주입 [d'=0.95s / d_lead=3.83s]: (no information found)
    41.68s  user  발화 시작: 아… 그럼 그냥 로스앤젤레스-샌프란시스코 버스 예약해 줘, 제일 싼 걸로.
    41.68s  agent 발화 끝
    46.19s  <ret> 발화 (turn11 첫 프레임)
    46.47s  agent 발화 시작: <ret> 로스앤젤레스에서 샌프란시스코 가는 삼월 이십이일 오전 여섯시 버스, 육십오달러로 예약 완료되었습니
    46.47s  user  발화 끝
    46.98s  ⚡SPAN 주입 [d'=0.80s / d_lead=9.10s]: (tool result) Booking confirmed: Los Angeles to San Francisco, March 2
    55.57s  agent 발화 끝
