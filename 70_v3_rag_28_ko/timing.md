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
#       "date": "2026-07-02",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "home",
#       "text": "User's home address is 960 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 퇴역 군인부(Department of Veterans Affairs)가 언제 만들어졌는지 궁금해. 그냥 대략
     7.58s  <ret> 발화 (turn1 첫 프레임)
     7.90s  agent 발화 시작: <ret> 음, 정확한 날짜를 말씀드리려면 잠시 알아봐야겠네요. 퇴역 군인부는 허버트 후버 대통령의 명령에 
     8.02s  user  발화 끝
     8.62s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.76s]: [source: Wikipedia] The United States Department of Veterans Affairs w
    18.54s  agent 발화 끝
    19.75s  user  발화 시작: 천구백삼십년이라고? 좀 더 일찍 만들어진 줄 알았는데. 혹시 그 전에 비슷한 기능을 하던 부서는 없었어?
    27.71s  agent 발화 시작: 그 전에 비슷한 기능을 하던 부서는 있었지만, 지금의 퇴역 군인부와는 규모나 권한이 달랐어요. 이전에는 주로
    27.96s  user  발화 끝
    38.33s  user  발화 시작: 전쟁부 산하에서 담당했다는 건, 전쟁이 끝나고 나서야 관심을 가졌다는 뜻인가?
    38.41s  agent 발화 끝
    44.30s  user  발화 끝
    44.45s  agent 발화 시작: 꼭 그렇지는 않아요. 퇴역 군인들을 위한 지원은 이전부터 있었지만, 규모가 작고 체계적이지 못했어요. 천구백
    55.99s  agent 발화 끝
