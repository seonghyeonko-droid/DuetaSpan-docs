# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "정빈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-29",
#       "category": "partner",
#       "text": "User's partner is named Clara."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "floor",
#       "text": "User lives on the 15th floor."
#     },
#     {
#       "date": "2026-03-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "skill",
#       "text": "User is getting fairly good at vintage synth collecting."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "sibling",
#       "text": "User has a younger sibling named Emma."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "dish",
#       "text": "User's go-to comfort dish is shakshuka."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "wake",
#       "text": "User usually wakes up close to 9am after night shifts."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "phone",
#       "text": "User uses an iPhone SE."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-07",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-03-28",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 음… 버스표 좀 알아봐 줄래? 다섯 명, 댈러스에서 휴스턴 가는 거… 팔월 십오일…
     4.43s  agent 발화 시작: 네.
     4.79s  agent 발화 끝
     5.77s  <ret> 발화 (turn2 첫 프레임)
     6.25s  agent 발화 시작: <ret> 죄송해요, 팔월 십오일 댈러스에서 휴스턴 가는 버스편은 지금 찾을 수 없네요. 다른 날짜를 알아볼
     6.44s  user  발화 끝
     7.04s  ⚡SPAN 주입 [d'=1.27s / d_lead=6.62s]: (no information found)
    12.86s  agent 발화 끝
    13.04s  user  발화 시작: 아, 팔월 이십일로 해 봐.
    14.58s  <ret> 발화 (turn4 첫 프레임)
    14.96s  agent 발화 시작: <ret> 팔월 이십일 댈러스에서 휴스턴 가는 버스는 오후 두시 삼십분에 출발하는 그레이하운드 버스, 일인당
    15.11s  user  발화 끝
    15.88s  ⚡SPAN 주입 [d'=1.30s / d_lead=9.55s]: (tool result) 14:30, Greyhound, $125.00, 6h 15m
    24.51s  agent 발화 끝
