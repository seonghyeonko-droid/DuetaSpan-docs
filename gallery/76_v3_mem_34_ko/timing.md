# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "수진",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-03",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-08-04",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-06-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-07",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-21",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 비오 씨. 요즘 이사 갈 집을 찾고 있는데, 혹시 | S2 네, 맞아요. 혹시 강남역 근처에 괜찮은 곳이 있을까요? | S3 이백오십만 원이면 괜찮은데, 혹시 그 집 주변에 공원 같은 게 | S4 …혹시 반려동물과 함께 산책할 수 있는 공원이 가까운 곳에 있

     0.00s  agent 발화 시작: 안녕하세요, 수진님. 저는 비오예요. 친구 관계나 사회생활에 대해 편하게 이야기 나눌 수 있도록 도와드릴게요
     6.05s  user  발화 시작: 안녕하세요, 비오 씨. 요즘 이사 갈 집을 찾고 있는데, 혹시 반려동물과 함께 살 수 있는 곳을 추천해 주실
     6.05s  agent 발화 끝
    14.62s  <ret> 발화 (turn2 첫 프레임)
    14.70s  agent 발화 시작: <ret> 두개의 방이 있는 집을 원하셨죠.
    14.70s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.16s]: [2026-01-10] Past chat — Apartment hunting downtown: wanted a pet-frie
    14.70s  user  발화 끝
    16.86s  user  발화 시작: 네, 맞아요. 혹시 강남역 근처에 괜찮은 곳이 있을까요?
    16.86s  agent 발화 끝
    20.08s  <ret> 발화 (turn4 첫 프레임)
    20.32s  agent 발화 시작: <ret> 강남역 근처에 반려동물과 함께 살 수 있는 두개의 방이 있는 집이 있습니다. 월세는 이백오십만 원
    20.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.38s]: (tool result) {"area": "Gangnam Station", "pet friendly", "bedrooms": 
    20.32s  user  발화 끝
    30.70s  user  발화 시작: 이백오십만 원이면 괜찮은데, 혹시 그 집 주변에 공원 같은 게 있을까요? —
    30.70s  agent 발화 끝
    35.89s  user  발화 시작: …혹시 반려동물과 함께 산책할 수 있는 공원이 가까운 곳에 있으면 좋을 것 같아요.
    35.89s  user  발화 끝
    41.43s  <ret> 발화 (turn7 첫 프레임)
    41.51s  agent 발화 시작: <ret> 서울숲이 그 집에서 사 점 이킬로미터 거리에 있습니다. 평점은 사 점 사점이에요.
    41.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.19s]: (tool result) {"place id": "ChIJjYk0g-w9EJORB N6R6E4LhQ", "name": "Seo
    41.51s  user  발화 끝
    46.70s  user  발화 시작: 그렇군요.
    46.70s  agent 발화 끝
    47.13s  agent 발화 시작: 서울숲은 반려동물과 함께 산책하기 좋은 곳으로 알려져 있어요. 넓고 깨끗해서 많은 분들이 찾으시는 곳이죠.
    47.13s  user  발화 끝
    53.18s  agent 발화 끝
