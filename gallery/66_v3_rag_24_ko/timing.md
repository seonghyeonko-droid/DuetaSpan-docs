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


     0.00s  user  발화 시작: 뒤플레시 이름이 어디에서 왔는지 궁금해요.
     2.42s  <ret> 발화 (turn1 첫 프레임)
     2.73s  agent 발화 시작: <ret> 뒤플레시라는 성씨는 프랑스 기원이에요.
     2.91s  user  발화 끝
     3.46s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.78s]: The surname Du Plessis is of French origin, and it means "from the est
     5.50s  agent 발화 끝
     7.08s  user  발화 시작: 아, 프랑스에서 왔군요. 그럼 그 성씨를 가진 사람이 제일 많은 나라는 어디예요?
    12.45s  <ret> 발화 (turn3 첫 프레임)
    12.84s  agent 발화 시작: <ret> 뒤플레시라는 이름이 가장 많은 곳은 남아프리카 공화국입니다. 남아프리카 공화국에 뒤플레시라는 도시
    12.91s  user  발화 끝
    14.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: (tool result) South Africa, (25.7402° S, 28.2173° E) is a city; Du Ple
    17.96s  user  발화 시작: 맞아요.
    18.64s  user  발화 끝
    19.69s  agent 발화 끝
    20.25s  user  발화 시작: 남아프리카 공화국이군요. 지금 그곳의 날씨는 어떤가요?
    24.21s  <ret> 발화 (turn6 첫 프레임)
    24.34s  agent 발화 시작: <ret> 남아프리카 공화국은 현재 섭씨 이십육도이고, 습도는 육십오퍼센트, 바람은 시속 팔킬로미터입니다.
    24.55s  user  발화 끝
    26.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.71s]: (tool result) 26.0°C, humidity 65%, wind 8.0 km/h
    31.05s  agent 발화 끝
