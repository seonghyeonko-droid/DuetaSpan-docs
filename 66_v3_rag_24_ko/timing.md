# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "우서",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-06-21",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-04-08",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "home",
#       "text": "User's home address is 609 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-05-21",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 뒤플레시라는 성이 어디에서 유래되었는지 궁금해요.
     3.34s  <ret> 발화 (turn1 첫 프레임)
     3.65s  agent 발화 시작: <ret> 뒤플레시 성에 대해 알아보고 싶으시군요. 아프리카너스어에서 유래되었다고 해요.
     3.78s  user  발화 끝
     4.70s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.79s]: The surname Du Plessis is of Afrikaans origin, derived from the French
     9.23s  agent 발화 시작: 뒤플레시 성은요, 프랑스어 "뒤플레시"에서 유래되었고, 아프리카너스어에서 사용되기 시작했어요.
     9.43s  agent 발화 끝
    14.29s  user  발화 시작: 아.
    15.02s  user  발화 끝
    15.91s  user  발화 시작: 아, 프랑스어에서 왔군요. 그럼 뒤플레시 가문은 프랑스에서 시작된 건가요?
    16.14s  agent 발화 끝
    21.48s  <ret> 발화 (turn5 첫 프레임)
    21.50s  agent 발화 시작: <ret> 뒤플레시 가문이 프랑스에서 시작되었는지 궁금하시군요.
    21.75s  user  발화 끝
    22.92s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.75s]: The Plessis family originated in France, holding land in Plessis-Grimo
    25.18s  agent 발화 시작: 뒤플레시 가문은요, 노르망디의 플레시-그리물에 11세기에 토지를 소유한 프랑스에서 시작되었어요.
    25.25s  agent 발화 끝
    32.07s  agent 발화 끝
    32.19s  user  발화 시작: 11세기부터라니, 정말 오래되었네요. 혹시 유명한 뒤플레시 가문 사람이 있었나요?
    38.83s  <ret> 발화 (turn8 첫 프레임)
    39.22s  agent 발화 시작: <ret> 뒤플레시 가문 중에서 유명한 사람이 있었는지 궁금하시군요.
    39.42s  user  발화 끝
    40.03s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.03s]: Jacques du Plessis, a Huguenot soldier, emigrated to South Africa in 1
    43.11s  agent 발화 시작: 뒤플레시 가문에서, 위그노 용병인 자크 뒤플레시가 1688년에 남아프리카로 이민 와서
    43.25s  agent 발화 끝
    50.89s  agent 발화 끝
