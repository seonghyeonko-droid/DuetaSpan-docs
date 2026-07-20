# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "성민",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-24",
#       "category": "savings",
#       "text": "User is saving for an emergency fund of six months' expenses."
#     },
#     {
#       "date": "2026-05-05",
#       "category": "coffee",
#       "text": "User's usual coffee order is an iced americano."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "anniversary",
#       "text": "User's anniversary is May 14."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "plant",
#       "text": "User is growing a fiddle-leaf fig at home."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "work",
#       "text": "User works as a yoga instructor."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-15",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     },
#     {
#       "date": "2026-02-01",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 코드 생성 세션 시작해서 테스트 디렉토리에 저장해 줘. 내일 오후 세 시에 해 줘.
     4.87s  <ret> 발화 (turn1 첫 프레임)
     5.21s  agent 발화 시작: <ret> [happy] 코드 생성 세션이 내일 오후 세 시에 예약되었어요, 확인 번호는 비 칠 엑스 구 제
     5.41s  user  발화 끝
     5.72s  ⚡SPAN 주입 [d'=0.84s / d_lead=6.58s]: (tool result) {"status": "scheduled", "time": "2026-07-11 15:00:00", "
     9.00s  user  발화 시작: 네네.
     9.63s  user  발화 끝
    11.80s  agent 발화 끝
    12.10s  user  발화 시작: 아, 내일 말고 오늘 오후 세 시로 다시 해 줘.
    15.71s  user  발화 끝
    15.86s  <ret> 발화 (turn4 첫 프레임)
    15.98s  agent 발화 시작: <ret> [happy] 오늘 오후 세 시로 변경했고, 확인 번호는 큐 팔 와이 사 더블유 일입니다. 세션 
    16.68s  ⚡SPAN 주입 [d'=0.83s / d_lead=7.36s]: (tool result) {"status": "scheduled", "time": "2026-07-10 15:00:00", "
    23.35s  agent 발화 끝
