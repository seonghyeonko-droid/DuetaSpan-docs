# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "정연",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-14",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "work",
#       "text": "User works as a mechanical engineer."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "child",
#       "text": "User has a child named Haruto, age 7."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cappuccino with oat milk."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "show",
#       "text": "User is currently watching a cooking competition show."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "anniversary",
#       "text": "User's anniversary is August 23."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 25°C."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "employer",
#       "text": "User works at a design agency."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "dislike",
#       "text": "User can't stand raw tomatoes."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-05",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     },
#     {
#       "date": "2026-01-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-01-07",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 김민지 씨 연락처 알 수 있을까요?
     2.79s  <ret> 발화 (turn1 첫 프레임)
     3.15s  agent 발화 시작: <ret> 죄송해요, 김민지 씨 연락처는 찾을 수 없었어요. 개인 정보라서 공개되어 있지 않은 것 같아요.
     3.15s  user  발화 끝
     3.24s  ⚡SPAN 주입 [d'=0.46s / d_lead=6.30s]: (no information found)
     9.45s  user  발화 시작: 네네.
     9.45s  agent 발화 끝
     9.90s  user  발화 시작: 아, 그렇군요. 그럼 오늘 서울 날씨는 어때요?
     9.90s  user  발화 끝
    12.91s  <ret> 발화 (turn4 첫 프레임)
    13.05s  agent 발화 시작: <ret> 지금 서울은 이십팔 점 이도이고, 습도는 칠십팔퍼센트, 바람은 시속 사 점 일킬로미터예요. 오늘 
    13.05s  user  발화 끝
    13.79s  ⚡SPAN 주입 [d'=0.89s / d_lead=7.20s]: (tool result) It is Friday, July 10, 2026 at 2:33 PM in Asia/Seoul rig
    20.24s  user  발화 시작: 예.
    20.24s  agent 발화 끝
    20.69s  user  발화 시작: 네, 고맙습니다. 오늘 저녁에 영화 볼까요?
    20.69s  user  발화 끝
    23.39s  agent 발화 시작: 네, 좋은 생각이에요! 혹시 어떤 영화 보고 싶으세요? 아니면 제가 추천해 드릴까요?
    23.39s  user  발화 끝
    28.79s  agent 발화 끝
