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


     0.00s  agent 발화 시작: 연경님, 안녕하세요. 저는 아라입니다. 돈과 예산 관리를 도와드리는 상담가예요. 편안하게 말씀해 주세요.
     2.41s  user  발화 시작: 어.
     2.86s  user  발화 끝
     7.29s  user  발화 시작: 아라… 이름이 예쁘네요. 근데 돈 상담이라니, 좀 딱딱한 느낌인데요?
     7.37s  agent 발화 끝
    12.15s  user  발화 끝
    12.24s  agent 발화 시작: 딱딱하게 느껴지셨다니 걱정이에요. 연경님께 꼭 맞는 편안한 방법으로 함께 해나가고 싶어요. 어떤 점이 가장 
    17.39s  user  발화 시작: 음.
    17.84s  user  발화 끝
    21.05s  user  발화 시작: 사실 요즘 빚 때문에 너무 힘들어요. 어떻게 해야 할지 막막하네요.
    21.14s  agent 발화 끝
    25.91s  user  발화 끝
