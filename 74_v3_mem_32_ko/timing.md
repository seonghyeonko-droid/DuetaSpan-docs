# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "다우",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-07",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-08-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-11-18",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 다우님. 저는 여러분의 일상과 생산성을 돕는 에이전트, 페우스입니다.
     3.27s  user  발화 시작: 예.
     3.99s  user  발화 끝
     6.11s  agent 발화 끝
     6.40s  user  발화 시작: 음… 전에 강아지 이름이 뭐였죠? 갑자기 기억이 안 나네요.
     9.85s  <ret> 발화 (turn3 첫 프레임)
     9.91s  agent 발화 시작: <ret> 강아지 이름은 모치였어요. 귀여운 코기시죠.
     9.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.02s]: [2026-03-07] User has a Corgi named Mochi.
    10.05s  user  발화 끝
    12.38s  user  발화 시작: 음.
    12.92s  user  발화 끝
    13.77s  agent 발화 시작: 모치와 함께 즐거운 시간 보내시길 바랍니다. 혹시 오늘 특별한 계획 있으신가요?
    13.92s  agent 발화 끝
    19.69s  agent 발화 끝
