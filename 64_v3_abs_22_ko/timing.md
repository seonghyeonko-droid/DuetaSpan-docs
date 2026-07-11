# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "혜경",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-06",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-09-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-10",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-06-29",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-10",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-11-20",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 칼리닌그라드에 사는 러시아 사람들이 독일인들을 어떻게 대하는지 | S2 잠깐만요, 러시아와 독일의 관계에 대한 일반적인 역사적 배경을 | S3 … 그건 지금 말고… | S4 …칼리닌그라드 지역 자체의 역사부터 간단하게 설명해 주시겠어요

     0.00s  user  발화 시작: 칼리닌그라드에 사는 러시아 사람들이 독일인들을 어떻게 대하는지에 대한 예시가 있을까요?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.11s  agent 발화 시작: <ret> 아, 그 부분에 대한 정보는 현재로서는 찾을 수 없네요. 기록이 남아있지 않아서 알려드리기 어려운
     0.11s  ⚡SPAN 주입 [d'=0.18s / d_lead=0.18s]: (no information found)
     0.11s  user  발화 끝
     0.28s  user  발화 시작: 음…
     0.28s  agent 발화 끝
     0.29s  agent 발화 시작: 혹시 다른 지역이나 다른 민족 간의 관계에 대해 궁금하신 점이 있으신가요? 다른 이야기를 찾아볼 수도 있습니
     0.29s  user  발화 끝
     0.43s  <ret> 발화 (turn9 첫 프레임)
     0.46s  user  발화 시작: 네.
     0.46s  agent 발화 끝
     0.47s  user  발화 시작: 잠깐만요, 러시아와 독일의 관계에 대한 일반적인 역사적 배경을 좀 알려주실 수 있나요?.
     0.47s  user  발화 끝
     0.60s  agent 발화 시작: 러시아와 독일의 관계는—
     0.60s  user  발화 끝
     0.63s  user  발화 시작: … 그건 지금 말고…
     0.63s  agent 발화 끝
     0.67s  user  발화 시작: …칼리닌그라드 지역 자체의 역사부터 간단하게 설명해 주시겠어요?
     0.67s  user  발화 끝
     0.75s  agent 발화 시작: <ret> 칼리닌그라드, 옛 케니히스베르크는 천이백오십오년에 독일 기사단에 의해 세워졌고, 역사적으로 독일어
     0.75s  ⚡SPAN 주입 [d'=0.25s / d_lead=0.25s]: The city of Königsberg, now Kaliningrad, was founded in 1255 by the Te
     0.75s  user  발화 끝
     1.00s  agent 발화 끝
