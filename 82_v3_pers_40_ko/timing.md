# v3_pers_40_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "연경",
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
#       "date": "2026-04-08",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-08-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-06-28",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-05-27",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-31",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 연경님. 저는 아라예요. 돈 관리와 예산 짜는 걸 도와드리는 에이전트랍니다.
     6.12s  user  발화 시작: 아라요? 이름이 좀 독특하네요. 혹시 제가 돈을 좀 아껴야 할지… 걱정이 돼요.
     6.25s  agent 발화 끝
    11.60s  agent 발화 시작: 돈 때문에 걱정이 많으시군요. 지금 어떤 부분에서 가장 부담을 느끼시는지 말씀해 주시겠어요?
    11.77s  user  발화 끝
    17.71s  agent 발화 끝
    18.09s  user  발화 시작: 음… 솔직히 말하면, 요즘 통장이 텅 비는 게 너무 무서워요. 뭘 어떻게 해야 할지 모르겠어요.
    24.27s  agent 발화 시작: 통장이 텅 비는 느낌이라니, 정말 불안하시겠어요. 혹시 최근에 큰 지출이 있었던 건가요?
    24.44s  user  발화 끝
    30.25s  agent 발화 끝
