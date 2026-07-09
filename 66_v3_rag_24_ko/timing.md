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


     0.00s  user  발화 시작: 뒤플레시 가문 이름이 어디에서 유래되었는지 궁금해요.
     3.88s  <ret> 발화 (turn1 첫 프레임)
     4.19s  agent 발화 시작: <ret> 뒤플레시라는 성은 프랑스에서 유래되었는데, 특히 프랑스 중북부 지역에서 흔히 볼 수 있답니다.
     4.35s  user  발화 끝
     5.24s  ⚡SPAN 주입 [d'=1.36s / d_lead=6.72s]: [source: Wikipedia] Du Plessis is a French surname, originating as a t
    10.72s  agent 발화 시작: 뒤플레시 성은 '플레시'라는 지명에서 비롯된 지명성으로, 프랑스에서 유래되었어요.
    10.91s  agent 발화 끝
    15.23s  user  발화 시작: 아.
    16.00s  user  발화 끝
    16.70s  user  발화 시작: 아, 그렇군요. 그럼 그 지명은 무슨 뜻인가요?
    16.97s  agent 발화 끝
    20.04s  <ret> 발화 (turn5 첫 프레임)
    20.11s  agent 발화 시작: <ret> '플레시'는 옛 프랑스어로 '울타리' 또는 '농장'을 의미하는 단어에서 비롯되었어요.
    20.30s  user  발화 끝
    22.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.45s]: [source: etymological dictionary] The name Plessis comes from the Old 
    26.56s  agent 발화 끝
    26.99s  user  발화 시작: 흥미롭네요. 아프리카너스어와도 관련이 있나요?
    30.34s  <ret> 발화 (turn7 첫 프레임)
    30.50s  agent 발화 시작: <ret> 네, 뒤플레시 가문은 아프리카너스어권에서도 흔한 성씨인데, 프랑스 위그노들이 남아프리카로 이주하면
    30.64s  user  발화 끝
    32.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: [source: South African History Online] Many families with the surname 
    39.03s  agent 발화 끝
