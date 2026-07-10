# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "소준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 오클랜드 애슬레틱스가 노히트를… | S2 …당한 마지막 날짜가 언제였는지 아세요? | S3 어머, 진짜? 완전 대박이다! | S4 아, 네, 그냥 궁금해서요.

     0.00s  user  발화 시작: 혹시 오클랜드 애슬레틱스가 노히트를…
     2.68s  user  발화 끝
     4.02s  user  발화 시작: …당한 마지막 날짜가 언제였는지 아세요?
     6.02s  <ret> 발화 (turn2 첫 프레임)
     6.26s  agent 발화 시작: <ret> 오클랜드 애슬레틱스가 마지막으로 노히트를 당한 건 천팔년 사월 이십일일이었어요. 혹시 야구 좋아하
     6.41s  user  발화 끝
     8.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.37s]: The last time the Oakland A's were no hit was April 21, 2018.
    13.62s  agent 발화 끝
    13.97s  user  발화 시작: 어머, 진짜? 완전 대박이다!
    15.96s  user  발화 끝
    16.11s  user  발화 시작: 아, 네, 그냥 궁금해서요.
    17.90s  agent 발화 시작: 네, 알겠습니다. 혹시 다른 궁금한 점 있으신가요? 아니면 편안한 밤 보내실 수 있도록 잠자리 준비를 도와드
    17.91s  user  발화 끝
    23.31s  user  발화 시작: 맞아요.
    23.94s  user  발화 끝
    24.80s  agent 발화 끝
    24.91s  agent 발화 시작: 혹시 수면 환경을 개선할 수 있는 방법이 궁금하신가요? 편안한 잠자리를 위한 몇 가지 팁을 알려드릴 수 있어
    32.14s  agent 발화 끝
