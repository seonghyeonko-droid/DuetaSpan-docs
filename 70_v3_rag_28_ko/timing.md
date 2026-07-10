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


     0.00s  user  발화 시작: 어, 재향군인부 말인데, 언제 만들어졌는지 궁금해. 그냥 갑자기 생각나서.
     4.59s  <ret> 발화 (turn1 첫 프레임)
     4.86s  user  발화 끝
     4.90s  agent 발화 시작: <ret> 재향군인부는 여러 참전 용사 지원 프로그램을 통합하여 하나의 기관으로 출범했는데, 그 설립 시기는
     6.03s  ⚡SPAN 주입 [d'=1.44s / d_lead=9.68s]: [source: Britannica] The Department of Veterans Affairs was establishe
    14.58s  agent 발화 끝
    15.76s  user  발화 시작: 천구백삼십년이라고? 음, 그 전에 참전 용사들을 어떻게 관리했는데요?
    20.61s  agent 발화 시작: 그 이전에도 참전 용사들을 위한 지원은 있었지만, 여러 기관에 분산되어 있었죠. 체계적인 관리가 어려웠던 건
    20.66s  user  발화 끝
    29.32s  agent 발화 끝
