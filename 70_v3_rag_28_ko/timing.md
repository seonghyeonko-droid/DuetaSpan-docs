# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
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


     0.00s  user  발화 시작: 퇴역 군인 부처가 언제 만들어졌는지 궁금해.
     2.30s  <ret> 발화 (turn1 첫 프레임)
     2.62s  agent 발화 시작: <ret> 음, 관련 정보를 찾아봤는데… 퇴역 군인 부처는 허버트 후버 대통령에 의해 천구백삼십년 칠월 이십
     2.77s  user  발화 끝
     3.74s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.51s]: [source: Britannica] The Department of Veterans Affairs was establishe
    12.03s  agent 발화 끝
    13.28s  user  발화 시작: 천구백삼십년이라고? 그건 좀 의외인데. 이전에는 없었던 거야?
    17.98s  agent 발화 시작: 이전에도 퇴역 군인들을 위한 지원은 있었지만, 지금처럼 하나의 부처로 공식화된 건 그때부터예요.
    18.24s  user  발화 끝
    24.55s  user  발화 시작: 그럼 그전에는 누가 담당했어?
    24.65s  agent 발화 끝
    26.24s  <ret> 발화 (turn5 첫 프레임)
    26.55s  agent 발화 시작: <ret> 그건 또 다른 질문이네요. 천구백삼십년 이전에는 전쟁 위험 보험국에서 퇴역 군인 관련 업무를 담당
    26.58s  user  발화 끝
    26.74s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.23s]: [source: National Archives] Prior to 1930, the administration of veter
    36.57s  agent 발화 끝
