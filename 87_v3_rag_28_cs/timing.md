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


     0.00s  user  발화 시작: 야, 정부 부처들 알아보다가 갑자기 궁금해졌어… 보훈처는 정확히 언제 시작됐어?
     5.49s  <ret> 발화 (turn1 첫 프레임)
     5.89s  agent 발화 시작: <ret> 음, 국가를 위해 헌신하신 분들을 생각하면 좋은 질문이에요… 보훈부는 후버 대통령에 의해 천구백삼
     6.02s  user  발화 끝
     7.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.32s]: [source: Britannica] The Department of Veterans Affairs was establishe
    17.08s  user  발화 시작: 1930년이라고? 생각보다 엄청 최근인데, 진짜. 훨씬 오래된 줄 알았어.
    17.21s  agent 발화 끝
    22.21s  agent 발화 시작: 군 복무의 역사를 생각하면 좀 최근처럼 느껴지죠, 안 그래요? 하지만 퇴역 군인들의 필요는 시간이 지나면서 
    22.41s  user  발화 끝
    30.65s  agent 발화 끝
    31.35s  user  발화 시작: 근데 1930년 이전에 퇴역 군인들을 위한 서비스가 없었던 건 아니잖아? 분명 그 전에도 뭔가 있었을 거야.
    38.30s  <ret> 발화 (turn5 첫 프레임)
    38.38s  agent 발화 시작: <ret> 맞아요, 질문하신 게 맞아요… 천구백십칠 년 이전에 전쟁 위험 보험국이 1917년에 설립되어서 퇴
    38.49s  user  발화 끝
    40.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: [source: VA.gov] Prior to 1930, the administration of veterans’ benefi
    49.00s  agent 발화 끝
