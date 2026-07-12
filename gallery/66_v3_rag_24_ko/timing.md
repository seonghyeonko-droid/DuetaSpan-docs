# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "혜찬",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-06-09",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-06-04",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2025-11-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-08-04",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-24",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-06",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 요즘 좀 힘든데, 커리어 때문에 고민이 많아요. 뭘 해야 할지 모르겠어요.
     4.79s  agent 발화 시작: 힘든 시간을 보내고 계시는군요. 커리어 고민은 누구에게나 찾아올 수 있어요. 어떤 점이 가장 어렵게 느껴지세
     4.79s  user  발화 끝
    11.32s  user  발화 시작: 뭘 잘하는지도 모르겠고, 뭘 하면 좋을지도 모르겠어요. 그냥 막막해요.
    11.32s  agent 발화 끝
    14.83s  <ret> 발화 (turn3 첫 프레임)
    15.23s  agent 발화 시작: <ret> 막막한 마음, 충분히 이해가 갑니다. 스스로를 잘 아는 건 시간이 걸리는 일이죠. 혹시 전에 어떤
    15.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.14s]: The tradition of standing for the national anthem in the United States
    15.23s  user  발화 끝
    24.38s  agent 발화 시작: 국가를 위한 경례를 서서 하는 전통은—
    24.38s  agent 발화 끝
    26.99s  user  발화 시작: …혹시 제가 좋아하는 일을 찾는 데 도움이 될 만한 테스트 같은 게 있을까요?
    26.99s  agent 발화 끝
    32.65s  agent 발화 시작: 아, 네, 물론입니다. 좋아하는 일을 찾는 데 도움이 되는 다양한 심리 테스트들이 있어요.
    32.65s  user  발화 끝
    38.30s  user  발화 시작: 응.
    38.30s  agent 발화 끝
    38.74s  agent 발화 시작: 그런 테스트를 통해 자신의 강점과 흥미를 파악하는 데 도움이 될 수 있습니다. 혹시 어떤 분야에 관심이 있으
    38.74s  user  발화 끝
    46.14s  agent 발화 시작: 좀 더 구체적으로 말씀해 주시면 더 적절한 테스트를 추천해 드릴 수 있어요.
    46.14s  agent 발화 끝
    51.36s  agent 발화 끝
