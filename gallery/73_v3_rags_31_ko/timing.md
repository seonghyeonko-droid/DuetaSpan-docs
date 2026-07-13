# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "가린",
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
#       "date": "2026-04-19",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 조직이 갈등을 효과적으로 관리하도록 돕는 변화는 무엇인가요?
     3.03s  <ret> 발화 (turn1 첫 프레임)
     3.52s  agent 발화 시작: <ret> 조직은 변화를 통해 갈등을 효과적으로 관리함으로써 이점을 얻을 수 있습니다.
     3.52s  user  발화 끝
     3.67s  ⚡SPAN 주입 [d'=0.64s / d_lead=5.02s]: Effectively managing conflict is one way organizations can benefit fro
     8.54s  agent 발화 끝
