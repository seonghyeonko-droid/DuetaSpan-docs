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


     0.00s  user  발화 시작: 퇴역 군인부(Department of Veterans Affairs)가 언제 만들어졌는지 궁금해.
     5.27s  <ret> 발화 (turn1 첫 프레임)
     5.59s  agent 발화 시작: <ret> 음, 그건 좀 복잡한 이야기인데… 퇴역 군인부는 허버트 후버 대통령에 의해 일구삼십 년 칠월 이십
     5.70s  user  발화 끝
     7.19s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.06s]: [source: Britannica] The Department of Veterans Affairs was establishe
    15.98s  agent 발화 끝
    17.24s  user  발화 시작: 일구삼십 년이라고? 그건 좀 의외인데, 더 일찍 만들어졌을 줄 알았어.
    22.13s  agent 발화 시작: [curious] 생각보다 일찍 만들어졌죠? 과거에는 여러 기관에서 퇴역 군인들을 지원했어요.
    22.28s  user  발화 끝
    28.10s  user  발화 시작: 그럼 그 전에는 누가 담당했어? 구체적으로 알려줄 수 있어?
    28.24s  agent 발화 끝
    31.88s  <ret> 발화 (turn5 첫 프레임)
    32.19s  agent 발화 시작: <ret> 그 전에는 국립 군인 홈(National Home for Disabled Soldiers)이 그 
    32.26s  user  발화 끝
    32.84s  ⚡SPAN 주입 [d'=0.96s / d_lead=6.10s]: [source: History.com] The National Home for Disabled Soldiers was esta
    44.90s  agent 발화 끝
