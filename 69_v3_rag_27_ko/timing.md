# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Kim",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "home",
#       "text": "User's home address is 411 Maple Drive."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 룩스 아우룬케 작곡가가 언제 태어났는지 궁금해요.
     3.66s  user  발화 끝
     3.79s  <ret> 발화 (turn1 첫 프레임)
     3.87s  agent 발화 시작: <ret> 룩스 아우룬케에 대해 알아보고 있어요.
     4.91s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.58s]: [source: AllMusic] Lux Aurunque was born in 1970.
     5.16s  user  발화 시작: 예.
     5.84s  user  발화 끝
     6.46s  agent 발화 끝
     6.84s  user  발화 시작: 아, 그렇군요. 그럼 그분은 지금 몇 살이신가요?
     9.74s  user  발화 시작: 혹시 그분이 어떤 장르의 음악을 주로 하시나요?
     9.78s  agent 발화 시작: 음—
     9.94s  user  발화 끝
    10.41s  agent 발화 끝
    12.17s  <ret> 발화 (turn6 첫 프레임)
    12.33s  agent 발화 시작: <ret> 아, 네. 룩스 아우룬케는 주로 앰비언트 음악을 하시는 분이에요.
    12.37s  user  발화 끝
    13.45s  ⚡SPAN 주입 [d'=1.28s / d_lead=4.86s]: [source: Rate Your Music] Lux Aurunque primarily composes ambient and 
    17.19s  agent 발화 끝
