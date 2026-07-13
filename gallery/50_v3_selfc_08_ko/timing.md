# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "현온",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-05-17",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 샌프란시스코 에이 엠 씨 Metreon 십육에서 상영하는 다큐 | S2 네시 십오분 상영 티켓 두 장 예매해 주세요. | S3 라멘집은 어떤 분위기예요? | S4 그럼 라멘집까지 가는 가장 빠른 길은 어떻게 되나요?

     0.00s  user  발화 시작: 샌프란시스코 에이 엠 씨 Metreon 십육에서 상영하는 다큐멘터리가 있나요?
     3.60s  <ret> 발화 (turn1 첫 프레임)
     3.91s  agent 발화 시작: <ret> 샌프란시스코 에이 엠 씨 Metreon 십육에서는 “Deep Field”, “The Territo
     3.91s  user  발화 끝
     4.91s  ⚡SPAN 주입 [d'=1.31s / d_lead=8.25s]: (tool result) There are three documentaries playing at AMC Metreon 16 
    12.16s  user  발화 시작: 오.
    12.16s  agent 발화 끝
    12.59s  user  발화 시작: “Fire of Love”는 몇 시에 상영하나요?
    12.59s  user  발화 끝
    14.70s  <ret> 발화 (turn4 첫 프레임)
    15.16s  ⚡SPAN 주입 [d'=0.46s / d_lead=6.95s]: (tool result) “Fire of Love” is showing at AMC Metreon 16 in San Franc
    15.20s  agent 발화 시작: <ret> “Fire of Love”는 오늘 에이 엠 씨 Metreon 십육에서 오후 한시 삼십분, 네시 십
    15.20s  user  발화 끝
    22.15s  user  발화 시작: 음.
    22.15s  agent 발화 끝
    22.58s  user  발화 시작: 네시 십오분 상영 티켓 두 장 예매해 주세요.
    22.58s  user  발화 끝
    25.80s  <ret> 발화 (turn7 첫 프레임)
    26.06s  agent 발화 시작: <ret> 네, “Fire of Love” 에이 엠 씨 Metreon 십육 오늘 오후 네시 십오분 두 자리 
    26.06s  user  발화 끝
    26.97s  ⚡SPAN 주입 [d'=1.17s / d_lead=11.29s]: (tool result) Confirmation: Your tickets for “Fire of Love” at AMC Met
    37.35s  user  발화 시작: 음.
    37.35s  agent 발화 끝
    37.78s  user  발화 시작: 혹시 근처에 맛있는 저녁 식사할 곳도 추천해 줄 수 있나요?
    37.78s  user  발화 끝
    41.91s  <ret> 발화 (turn10 첫 프레임)
    42.12s  agent 발화 시작: <ret> 에이 엠 씨 Metreon 십육 근처에는 “Ozora Sushi”, “Super Duper Bur
    42.12s  user  발화 끝
    42.79s  ⚡SPAN 주입 [d'=0.88s / d_lead=6.95s]: (tool result) Several restaurants are near AMC Metreon 16 in San Franc
    49.07s  user  발화 시작: 우와.
    49.07s  agent 발화 끝
    49.51s  user  발화 시작: 라멘집은 어떤 분위기예요?
    49.51s  user  발화 끝
    50.63s  <ret> 발화 (turn13 첫 프레임)
    50.75s  ⚡SPAN 주입 [d'=1.01s / d_lead=6.95s]: Marufuku Ramen is a popular ramen restaurant known for its Hakata-styl
    50.81s  agent 발화 시작: <ret> Marufuku Ramen은 하카타 스타일 돈코츠 라멘으로 유명하고, 활기찬 분위기의 인기 라멘집
    50.81s  user  발화 끝
    57.76s  user  발화 시작: … 혹시 그 라멘집에서 혼자 먹어도 괜찮을까요?
    57.76s  agent 발화 끝
    60.77s  <ret> 발화 (turn15 첫 프레임)
    60.80s  agent 발화 시작: <ret> Marufuku Ramen은 혼자 식사하기 좋은 바 좌석도 마련되어 있고, 혼자 오시는 분들도 흔
    60.80s  user  발화 끝
    60.87s  ⚡SPAN 주입 [d'=1.13s / d_lead=6.08s]: Marufuku Ramen has counter seating available, making it suitable for s
    66.88s  user  발화 시작: 응.
    66.88s  agent 발화 끝
    67.31s  user  발화 시작: 그럼 라멘집까지 가는 가장 빠른 길은 어떻게 되나요?
    67.31s  user  발화 끝
    70.79s  agent 발화 시작: 네.
    70.79s  user  발화 끝
    70.81s  <ret> 발화 (turn19 첫 프레임)
    71.22s  agent 발화 시작: <ret> 에이 엠 씨 Metreon 십육에서 Marufuku Ramen까지는 도보로 영 점 사마일, 약 팔
    71.22s  agent 발화 끝
    71.54s  ⚡SPAN 주입 [d'=0.73s / d_lead=9.55s]: (tool result) Walking directions from AMC Metreon 16 to Marufuku Ramen
    80.77s  agent 발화 시작: 맛있는 라멘 드시고 즐거운 시간 보내세요!
    80.77s  agent 발화 끝
    83.38s  agent 발화 끝
