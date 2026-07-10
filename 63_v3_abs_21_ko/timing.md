# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "시람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-02",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-12-01",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 음, 음… 음운론이 발달하면서 언어에서 음소적으로 어떤 것들이 변하는지 아세요?
     4.90s  <ret> 발화 (turn1 첫 프레임)
     5.14s  agent 발화 시작: <ret> 그 부분에 대해서는 아직 알려진 바가 없는 것 같아요. 정확한 정보를 찾을 수가 없네요.
     5.14s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.88s]: (no information found)
     5.42s  user  발화 끝
     7.79s  user  발화 시작: 네네.
     8.42s  user  발화 끝
     9.02s  agent 발화 끝
     9.41s  user  발화 시작: 아, 그렇군요. 혹시 다른 언어학 분야에 대해서는 좀 아시나요?
    13.66s  user  발화 끝
    14.04s  agent 발화 시작: 네, 물론이에요. 언어학에는 정말 다양한 분야가 있잖아요. 어떤 게 궁금하신가요?
    18.71s  agent 발화 끝
