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


     0.00s  user  발화 시작: 퇴역 군인 부처가 언제 만들어졌는지 궁금해. 그냥 대충이라도 괜찮아.
     8.27s  <ret> 발화 (turn1 첫 프레임)
     8.34s  agent 발화 시작: <ret> 정확한 날짜를 확인해 볼게요.
     8.38s  user  발화 끝
    10.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: [source: Britannica] The Department of Veterans Affairs was establishe
    16.42s  agent 발화 시작: 퇴역 군인 부처는 여러 퇴역 군인 지원 프로그램을 통합하면서 천구백삼십년 팔월 구일에 설립되었습니다.
    16.54s  agent 발화 끝
    22.79s  user  발화 시작: 음, 그게 언제였더라… 천구백삼십년이라고? 좀 더 자세히 알아볼 수 있을까?
    22.90s  agent 발화 끝
    29.56s  agent 발화 시작: 좀 더 자세한 정보를 찾아볼 수 있습니다. 그 부처가 설립되기 전에는 어떤 지원이 있었는지도 알아볼까요?
    29.79s  user  발화 끝
    36.09s  agent 발화 끝
