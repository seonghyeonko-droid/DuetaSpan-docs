# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "정슬",
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
#       "date": "2026-06-26",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "home",
#       "text": "User's home address is 960 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 어, 정부 부처들 읽다가… 참전용사부 있잖아, 그거 언제 시작했어?
     4.45s  <ret> 발화 (turn1 첫 프레임)
     4.85s  agent 발화 시작: <ret> 음, 참전용사부는 천구백삼십 년에 국가 기관이 됐습니다.
     4.90s  user  발화 끝
     6.05s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.72s]: [source: Wikipedia] The United States Department of Veterans Affairs w
     9.47s  user  발화 시작: 일구삼십년? 생각보다 늦네, 그렇지? 제1차 세계 대전 끝나고 훨씬 전에 생길 줄 알았어.
     9.57s  agent 발화 끝
    15.22s  <ret> 발화 (turn3 첫 프레임)
    15.45s  agent 발화 시작: <ret> 그러실 만하네요. 참전용사분들 필요가 시간이 지나면서 변했거든요.
    15.68s  user  발화 끝
    17.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.18s]: [source: US Department of Veterans Affairs] Prior to 1930, support for
    20.39s  agent 발화 시작: 일구삼십년 이전에는 참전용사 지원이 중앙 집중화되지 않아서 여러 기관에 흩어져 있었어요.
    20.63s  agent 발화 끝
    27.61s  agent 발화 끝
    28.32s  user  발화 시작: 그럼, 그때도 아예 없었던 건 아니고… 그냥 엉망이었던 거야? 있긴 있었어?
    33.42s  <ret> 발화 (turn6 첫 프레임)
    33.74s  agent 발화 시작: <ret> 네, 천팔백육십일 년부터 퇴직연금국에서 남북전쟁 참전용사하고 가족들에게 혜택을 드렸습니다.
    33.97s  user  발화 끝
    35.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.07s]: [source: National Archives] The Bureau of Pensions, established in 186
    41.81s  agent 발화 끝
