# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "우서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "home",
#       "text": "User's home address is 609 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 듀플레시 성이 어디에서 유래되었는지 궁금해요. 혹시 아시나요?
     2.83s  <ret> 발화 (turn1 첫 프레임)
     3.14s  agent 발화 시작: <ret> 듀플레시 성은 프랑스어에서 유래했는데, 'plessis'라는 고대 프랑스어 단어에서 비롯되었고, 
     3.37s  user  발화 끝
     4.35s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.58s]: [source: Britannica] The surname Du Plessis is of French origin, deriv
     5.02s  user  발화 시작: 맞아요.
     5.72s  agent 발화 끝
     6.00s  user  발화 시작: 아, 그렇군요. 그럼 아프리카와도 관련이 있을까요?
     6.44s  <ret> 발화 (turn4 첫 프레임)
     6.49s  user  발화 끝
     6.52s  agent 발화 시작: <ret> 듀플레시 성은 십칠세기와 십팔세기에 남아프리카 공화국에 정착한 프랑스 위그노 가문에서 흔히 볼 수
     6.94s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.05s]: [source: South African History Online] Many families with the surname 
     9.57s  agent 발화 끝
    11.83s  user  발화 끝
