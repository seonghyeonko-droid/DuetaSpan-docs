# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "혜온",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-23",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-03-17",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-05-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-17",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 상하이 좌표 삼십일 점 이 삼… | S2 …백이십일 점 사 칠 주변 교통 상황 좀 알려줄 수 있어? | S3 이십오분이라고? 지금 퇴근 시간인데, 더 걸릴 것 같은데… | S4 음… 혹시 다른 길로 가면 더 빠를까?

     0.00s  user  발화 시작: 상하이 좌표 삼십일 점 이 삼…
     2.58s  user  발화 끝
     3.75s  user  발화 시작: …백이십일 점 사 칠 주변 교통 상황 좀 알려줄 수 있어?
     7.35s  <ret> 발화 (turn2 첫 프레임)
     7.58s  agent 발화 시작: <ret> 지금 상하이 그쪽은 교통이 약간 혼잡해요. 예상 이동 시간은 이십오분 정도 될 것 같아요.
     7.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.48s]: (tool result) Moderate traffic congestion. Estimated travel time is 25
     7.72s  user  발화 끝
    11.59s  user  발화 시작: 와.
    12.23s  user  발화 끝
    14.06s  agent 발화 끝
    14.43s  user  발화 시작: 이십오분이라고? 지금 퇴근 시간인데, 더 걸릴 것 같은데…
    18.18s  <ret> 발화 (turn5 첫 프레임)
    18.46s  user  발화 끝
    18.57s  agent 발화 시작: <ret> 네, 맞아요. 현재 계산된 경로대로면 이십오분 정도 걸릴 것 같아요. 교통 상황이 조금씩 변할 수
    18.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.57s]: (tool result) Route calculated. Distance: 0 km. Travel time: 25 minute
    27.14s  agent 발화 끝
    27.90s  user  발화 시작: 음… 혹시 다른 길로 가면 더 빠를까?
    30.64s  agent 발화 시작: 지금 다른 길을 찾아서 비교해 보는 건 어떨까요? 더 빠른 경로가 있다면 알려드릴게요.
    30.89s  user  발화 끝
    36.47s  agent 발화 끝
