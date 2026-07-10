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


     0.00s  user  발화 시작: 뒤플레시라는 성이 어디에서 유래되었는지 궁금해요.
     2.96s  <ret> 발화 (turn1 첫 프레임)
     3.27s  agent 발화 시작: <ret> 뒤플레시 성은 프랑스에서 유래되었어요.
     3.56s  user  발화 끝
     4.00s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.59s]: The surname Du Plessis is of French origin, and it means "from Plessis
     5.60s  agent 발화 시작: 뒤플레시 성은 프랑스에서 비롯되었고, '플레시에서 온'이라는 뜻이라고 해요.
     5.85s  agent 발화 끝
     9.47s  user  발화 시작: 맞아요.
    10.20s  user  발화 끝
    10.80s  user  발화 시작: 아, 그렇군요. 그럼 아프리카너스어와 관련이 있을까요?
    10.92s  agent 발화 끝
    15.86s  <ret> 발화 (turn5 첫 프레임)
    15.94s  user  발화 끝
    15.94s  agent 발화 시작: <ret> 아프리카너스어와 관련이 있는지 여쭤보셨네요. 아프리카너스어는 남아프리카에서 발전한 서게르만어인데,
    17.30s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.80s]: Afrikaans is a West Germanic language developed in South Africa, deriv
    25.44s  agent 발화 끝
