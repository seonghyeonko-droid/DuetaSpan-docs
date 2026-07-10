# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "정슬",
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


     0.00s  user  발화 시작: 재향군인부(Department of Veterans Affairs)가 언제 만들어졌는지 아세요?
     5.08s  <ret> 발화 (turn1 첫 프레임)
     5.39s  agent 발화 시작: <ret> 재향군인부 창설 시기는… 천구백삼십년입니다… 삼월 십구일입니다.
     5.56s  user  발화 끝
     6.28s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.86s]: The Department of Veterans Affairs was established on March 19, 1930.
    10.25s  agent 발화 끝
    10.26s  user  발화 시작: 천구백삼십년이라고요? 그게 말이 돼요? 좀 더 일찍 만들어졌을 것 같은데요.
    14.52s  <ret> 발화 (turn3 첫 프레임)
    14.83s  agent 발화 시작: <ret> 재향군인부의 전신은 천구백십팔년에 설립된 퇴역 군인국인데, 지금의 부서로 개편된 건… 천구백삼십년
    14.98s  user  발화 끝
    15.48s  ⚡SPAN 주입 [d'=0.96s / d_lead=9.73s]: 재향군인부 창설 시기는 천구백삼십년 삼월 십구일입니다.
    24.50s  user  발화 시작: 아, 전신이 있었군요. 그럼 그 전신은 또 언제 만들어졌죠?
    24.56s  agent 발화 끝
    28.56s  <ret> 발화 (turn5 첫 프레임)
    28.79s  agent 발화 시작: <ret> 퇴역 군인국은 제1차 세계 대전 참전 용사들을 위한 의료 및 보상 문제를 다루기 위해… 천구백십팔
    28.95s  user  발화 끝
    30.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.15s]: 천구백십팔년에 설립된 퇴역 군인국은 재향군인부의 전신입니다.
    38.94s  agent 발화 끝
