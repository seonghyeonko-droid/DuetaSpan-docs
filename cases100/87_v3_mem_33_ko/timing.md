# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "세국",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "mid 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-10",
#       "category": "dish",
#       "text": "User's go-to comfort dish is tonkotsu ramen."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "emergency",
#       "text": "User's emergency contact is Yuna."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "bloodtype",
#       "text": "User's blood type is B+."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "floor",
#       "text": "User lives on the 12th floor."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "dislike",
#       "text": "User can't stand durian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-02-21",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2025-12-03",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 세국님! 저는 아루나예요. 오늘 하루 어떠셨어요?
     4.94s  agent 발화 끝
     5.18s  user  발화 시작: 그냥 그래. 지금 몇 시야?
     6.37s  <ret> 발화 (turn2 첫 프레임)
     6.79s  agent 발화 시작: <ret> 지금 서울 시간으로 이천이십육년 칠월 십일 오후 두시 삼십오분이에요.
     6.84s  user  발화 끝
     7.61s  ⚡SPAN 주입 [d'=1.24s / d_lead=5.27s]: (tool result) It is Friday, July 10, 2026 at 2:35 PM in Asia/Seoul rig
     8.77s  user  발화 시작: 응.
     9.23s  user  발화 끝
    12.06s  agent 발화 끝
    12.83s  user  발화 시작: 아, 그러네. 혹시 내가 제일 좋아하는 음식이 뭐였지?
    15.56s  <ret> 발화 (turn5 첫 프레임)
    16.07s  agent 발화 시작: <ret> 음… 세국님이 가장 좋아하시는 음식은 돈코츠 라멘이셨어요. 힘든 날이면 꼭 찾으시더라고요.
    16.16s  user  발화 끝
    16.81s  ⚡SPAN 주입 [d'=1.24s / d_lead=8.57s]: [2026-05-10] User's go-to comfort dish is tonkotsu ramen.
    24.65s  agent 발화 끝
