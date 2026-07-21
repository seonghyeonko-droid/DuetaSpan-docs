# v3_mem_33_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "Hugo",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-10",
#       "category": "emergency",
#       "text": "User's emergency contact is Noah."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "bloodtype",
#       "text": "User's blood type is B+."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "plant",
#       "text": "User is growing basil on the windowsill at home."
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


     0.00s  agent 발화 시작: Hi Hugo, I'm Aruna. It's lovely to meet you!
     3.33s  agent 발화 끝
     3.44s  user  발화 시작: Hey Aruna, good to meet you too. What time is it right now?
     4.52s  agent 발화 시작: Yeah.
     5.10s  agent 발화 끝
     5.63s  <ret> 발화 (turn3 첫 프레임)
     6.40s  ⚡SPAN 주입 [d'=0.77s / d_lead=8.15s]: (tool result) It is Friday, July 10, 2026 at 2:38 PM in Asia/Seoul rig
     6.43s  user  발화 끝
     6.46s  agent 발화 시작: <ret> It is Friday, July 10, 2026 at two thirty-eight PM in 
    11.63s  user  발화 시작: Mm-hmm.
    12.07s  user  발화 끝
    14.61s  agent 발화 끝
    15.86s  user  발화 시작: Yeah, pretty good. Hey, quick question – what’s my emergency
    19.38s  agent 발화 시작: Yeah.
    19.97s  agent 발화 끝
    20.76s  <ret> 발화 (turn7 첫 프레임)
    21.28s  user  발화 끝
    21.29s  agent 발화 시작: <ret> Your emergency contact is Noah. I'm glad you're being 
    21.39s  ⚡SPAN 주입 [d'=0.63s / d_lead=5.60s]: User's emergency contact is Noah.
    26.89s  agent 발화 끝
