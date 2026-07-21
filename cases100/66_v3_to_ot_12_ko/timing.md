# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "지서",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "commute",
#       "text": "User works from home."
#     },
#     {
#       "date": "2026-06-04",
#       "category": "emergency",
#       "text": "User's emergency contact is Jisoo."
#     },
#     {
#       "date": "2026-05-24",
#       "category": "schedule",
#       "text": "User has a 9-to-6 weekday schedule."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "show",
#       "text": "User is currently watching a sci-fi series."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "learning",
#       "text": "User is studying Japanese."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 26°C."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-28",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-04-13",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 심파시 포 더 데블 베이스는 누가 쳤어?
     2.50s  <ret> 발화 (turn1 첫 프레임)
     2.74s  agent 발화 시작: <ret> 롤링 스톤즈의 천구백육십팔년 곡 "심파시 포 더 데블"의 베이스는 키스 리처드가 연주했어요.
     2.91s  user  발화 끝
     4.13s  ⚡SPAN 주입 [d'=1.63s / d_lead=6.76s]: Keith Richards played bass on the Rolling Stones' 1968 song "Sympathy 
     5.68s  user  발화 시작: 어어.
     6.50s  user  발화 끝
     9.51s  agent 발화 끝
     9.78s  user  발화 시작: 잠깐만, 김 부장님께 전화 좀 해야 돼.
    12.50s  user  발화 시작: 아, 맞다. 키스 리처드였지.
    12.55s  user  발화 끝
    15.36s  user  발화 끝
    15.43s  agent 발화 시작: 네, 맞아요. 키스 리처드 씨가 연주하셨답니다. 혹시 롤링 스톤즈 다른 곡에 대해서도 궁금하신가요?
    24.37s  agent 발화 끝
