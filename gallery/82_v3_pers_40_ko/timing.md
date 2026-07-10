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


     0.00s  agent 발화 시작: 연경님, 안녕하세요. 저는 아라예요. 돈 관리와 예산 계획을 도와드리는 상담사입니다. 편안하게 말씀해 주세요
     7.96s  user  발화 시작: 아라… 이름이 특이하네요. 혹시 진짜 사람이에요?
     8.02s  agent 발화 끝
    11.85s  agent 발화 시작: [curious] 저는 사람처럼 느껴지도록 설계된 에이전트예요. 연경님께 도움이 될 수 있다면 그걸로 충분해
    11.98s  user  발화 끝
    21.27s  agent 발화 끝
    21.69s  user  발화 시작: 음… 사실 요즘 돈 관리가 너무 힘들어요. 어디서부터 시작해야 할지 모르겠어요.
    27.30s  agent 발화 시작: 돈 관리가 어렵다고 느끼시는군요. 연경님, 혹시 현재 수입과 지출을 대략적으로라도 파악하고 계신가요?
    27.43s  user  발화 끝
    34.72s  agent 발화 끝
