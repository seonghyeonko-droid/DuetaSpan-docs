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
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-28",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 뒤플레시 이름이 어디에서 유래됐는지 궁금해요.
     3.21s  <ret> 발화 (turn1 첫 프레임)
     3.52s  agent 발화 시작: <ret> 뒤플레시라는 성은 프랑스에서 유래된 것으로 알려져 있어요.
     3.69s  user  발화 끝
     4.33s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.56s]: The surname Du Plessis originates from France, meaning "of Plessis", r
     6.97s  agent 발화 시작: 뒤플레시 성은 '플레시'라는 지명을 나타내는 프랑스어 표현에서 비롯되었다고 해요.
     7.07s  agent 발화 끝
    10.76s  user  발화 시작: 맞아요.
    11.49s  user  발화 끝
    12.04s  user  발화 시작: 아, 그렇군요. 그럼 플레시는 어떤 의미인가요?
    12.20s  agent 발화 끝
    15.08s  <ret> 발화 (turn5 첫 프레임)
    15.15s  agent 발화 시작: <ret> 플레시는 프랑스에서 흔한 지명으로, 영주나 요새화된 집을 의미하는 경우가 많다고 합니다.
    15.32s  user  발화 끝
    17.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.97s]: Plessis is a common place name in France, often referring to a manor o
    21.13s  agent 발화 끝
