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


     0.00s  user  발화 시작: 뒤플레시 이름이 어디에서 유래됐는지 궁금해요.
     3.08s  <ret> 발화 (turn1 첫 프레임)
     3.40s  agent 발화 시작: <ret> 뒤플레시라는 성은 아프리카너스어에서 유래되었다고 하는데요… 프랑스어로 '두 배'를 의미합니다.
     3.60s  user  발화 끝
     4.84s  ⚡SPAN 주입 [d'=1.76s / d_lead=7.46s]: 듀플레시는 프랑스어로 '두 배'를 의미하며, 이 이름은 이 제품이 일반적인 플래시보다 두 배 더 밝기 때문에 붙여졌습니다.
     8.97s  user  발화 시작: 맞아요.
     9.65s  user  발화 끝
    10.86s  agent 발화 끝
    11.57s  user  발화 시작: 아프리카너스어가 뭔데요?
    12.94s  <ret> 발화 (turn4 첫 프레임)
    13.33s  agent 발화 시작: <ret> 아프리카너스어는 남아프리카 공화국에서 발전한 언어인데… 네덜란드어의 한 방언에서 비롯되었고, 남아
    13.54s  user  발화 끝
    14.62s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.69s]: 아프리카너스는 남아프리카 공화국에서 발생한 게르만어입니다.
    24.64s  user  발화 시작: 아, 그렇군요. 그럼 뒤플레시 성은 네덜란드와 관련이 있는 건가요?
    25.15s  agent 발화 끝
    29.91s  user  발화 끝
    29.94s  agent 발화 시작: 네, 뒤플레시 성은 프랑스 기원의 성으로, 네덜란드 이민자들을 통해 남아프리카로 건너간 것으로 알려져 있습니
    36.71s  agent 발화 끝
