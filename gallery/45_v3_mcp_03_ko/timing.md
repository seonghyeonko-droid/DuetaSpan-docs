# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "라정",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in August."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
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
#       "date": "2026-05-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-13",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 우리 아이 미술학원 등록하려고 하는데, 괜찮은 곳 있을까요? | S2 네, 그렇죠. | S3 아트플러스가 괜찮아 보이네요. 전화번호 좀 알려주세요. | S4 아니요, 일단 전화번호만 알면 될 것 같아요. 감사합니다.

     0.00s  user  발화 시작: 우리 아이 미술학원 등록하려고 하는데, 괜찮은 곳 있을까요?
     3.55s  agent 발화 시작: 네.
     3.55s  user  발화 끝
     4.00s  agent 발화 시작: 아이의 미술 교육을 고민하시는군요. 아이가 즐겁게 그림을 그릴 수 있도록 도와드리는 게 중요하죠.
     4.00s  agent 발화 끝
     9.78s  user  발화 시작: 네, 그렇죠.
     9.78s  agent 발화 끝
    10.40s  <ret> 발화 (turn4 첫 프레임)
    10.66s  agent 발화 시작: <ret> 해운대구에는 미술학원이 여러 곳 있어요. 아트플러스라는 곳이 평점이 사 점 육점에 리뷰도 스물세개
    10.66s  user  발화 끝
    11.50s  ⚡SPAN 주입 [d'=1.10s / d_lead=10.66s]: (tool result) There are several art academies in Haeundae-gu, Busan, i
    21.33s  user  발화 시작: 맞아.
    21.33s  agent 발화 끝
    21.77s  agent 발화 시작: 다른 학원도 찾아볼까요? 아니면 아트플러스에 대해 더 자세한 정보를 드릴까요?
    21.77s  user  발화 끝
    26.22s  user  발화 시작: 그래.
    26.22s  agent 발화 끝
    26.66s  user  발화 시작: 아트플러스가 괜찮아 보이네요. 전화번호 좀 알려주세요.
    26.66s  user  발화 끝
    28.98s  <ret> 발화 (turn9 첫 프레임)
    29.28s  ⚡SPAN 주입 [d'=0.30s / d_lead=5.78s]: (tool result) The phone number for Art Plus in Busan is 051-746-0204.
    29.33s  agent 발화 시작: <ret> 아트플러스의 전화번호는 공 오 일 칠 사 육 공 이 공 사 입니다.
    29.33s  user  발화 끝
    35.11s  agent 발화 시작: 혹시 지금 바로 전화해 보시겠어요? 예약도 도와드릴 수 있습니다.
    35.11s  agent 발화 끝
    39.10s  user  발화 시작: 아니요, 일단 전화번호만 알면 될 것 같아요. 감사합니다.
    39.10s  agent 발화 끝
    42.66s  agent 발화 시작: 네, 알겠습니다. 아이가 즐거운 미술 시간을 보내길 바라요.
    42.66s  user  발화 끝
    46.21s  agent 발화 끝
