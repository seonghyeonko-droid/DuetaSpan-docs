# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "태호",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-11-15",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 태호님. 저는 여러분의 커리어 고민을 돕는 에이전트, Frio입니다.
     5.13s  agent 발화 끝
     5.53s  user  발화 시작: 아, 네. 전에 제가 빈티지 신디사이저 수집한다고 말씀드렸었죠?
     9.61s  <ret> 발화 (turn2 첫 프레임)
     9.68s  agent 발화 시작: <ret> 네, 이천이십육년 사월 삼일에 빈티지 신디사이저를 수집하신다고 말씀해주셨어요.
     9.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.84s]: [2026-04-03] User is into vintage synth collecting.
     9.78s  user  발화 끝
    12.06s  user  발화 시작: 와.
    12.70s  user  발화 끝
    15.52s  agent 발화 끝
    16.34s  user  발화 시작: 혹시 그때 제가 어떤 모델을 찾고 있었는지 기억하시나요?
    20.17s  user  발화 끝
    20.31s  agent 발화 시작: 죄송하지만, 그 부분에 대한 기록은 남아있지 않아요.
    24.01s  agent 발화 끝
